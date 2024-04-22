import { BaseChatModel } from "@langchain/core/language_models/chat_models"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { ChatGroq } from "@langchain/groq"
import { ChatOpenAI } from "@langchain/openai"
import { BardChat } from "~lib/api/bard"
import { BingChat } from "~lib/api/bing"
import { ChatGPTWebChat } from "~lib/api/chatgpt-web"
import { NotionCompletion } from "~lib/api/notion-completion"
import { EngineEnum } from "~lib/enums"
import {
	buildChatGPTPrompt,
	buildChatGPTinstruction,
	type RequestBody,
} from "~lib/utils/prompt"
import { ClaudeChat } from "./api/claude"

async function chatStream(
	model: BaseChatModel,
	prompt: string,
	port: chrome.runtime.Port
) {
	const parser = new StringOutputParser()
	let content: string = ""
	const stream = await model
		.pipe(parser)
		.stream(prompt)
	for await (const chunk of stream) {
		if (chunk !== "" && chunk != undefined && chunk != null) {
			content += chunk
			port.postMessage(content)
		}
	}
	port.postMessage("[DONE]")
}

export default async function handleStream(
	body: RequestBody,
	port: chrome.runtime.Port
) {
	const instruction: string = buildChatGPTinstruction(body)
	const prompt: string = buildChatGPTPrompt(body)

	const finalPrompt: string = `${instruction}\n\n${prompt}`
	var model: BaseChatModel

	switch (body.engine) {
		case EngineEnum.ChatGPT:
			await ChatGPTWebChat(
				`${instruction}\n\n${prompt}`,
				body.apiModel,
				port
			)
			break
		case EngineEnum.Bing:
			await BingChat(`${instruction}\n\n${prompt}`, port)
			break
		case EngineEnum.Claude:
			await ClaudeChat(`${instruction}\n\n${prompt}`, port)
			break
		case EngineEnum.OpenAIAPI:
			model = new ChatOpenAI({
				model: body.apiModel,
				apiKey: body.apiKey,
				configuration: {
					baseURL: body.apiUrl,
				}
			})
			await chatStream(model, finalPrompt, port)
			break
		case EngineEnum.GoogleAI:
			model = new ChatGoogleGenerativeAI({
				model: body.apiModel,
				apiKey: body.apiKey,
			})
			await chatStream(model, finalPrompt, port)
			break
		case EngineEnum.GoogleBard:
			await BardChat(`${instruction}\n\n${prompt}`, port)
			break
		case EngineEnum.NotionAI:
			await NotionCompletion(
				port,
				body.builtinPrompt,
				body.context,
				body.notionSpaceId,
				body.customPromot,
				body.language,
				body.tone
			)
			break
		case EngineEnum.Groq:
			model = new ChatGroq({
				model: body.apiModel,
				apiKey: body.apiKey,
			})
			await chatStream(model, finalPrompt, port)
			break
		default:
			port.postMessage("Invalid Engine")
			port.postMessage("[DONE]")
	}
}
