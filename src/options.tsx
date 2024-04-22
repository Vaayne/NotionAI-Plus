import { sendToBackground } from "@plasmohq/messaging"
import {
	Button,
	Heading,
	Link,
	RadioGroup,
	Select,
	Separator,
	Switch,
	Text,
	TextField,
	Theme,
} from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { useAtom } from "jotai"
import { Github, Twitter } from "lucide-react"
import type { NotionSpace } from "~lib/api/notion-space"
import {
	DEFAULT_CHATGPT_MODEL,
	DEFAULT_GOOGLE_AI_MODEL,
	DEFAULT_OPENAI_API_MODEL,
	DEFAULT_OPENAI_API_URL,
	InitAtomComponent,
	chatGPTModelAtom,
	engineAtom,
	googleAIHostAtom,
	googleAIKeyAtom,
	googleAIModelAtom,
	isEnableContextMenuAtom,
	notionSpaceIdAtom,
	notionSpacesAtom,
	openAIAPIHostAtom,
	openAIAPIKeyAtom,
	openAIAPIModelAtom,
	storage,
} from "~lib/atoms"
import { ConstEnum, EngineEnum, EngineMappings } from "~lib/enums"
import "~style.css"

const GITHUB_URL = "https://github.com/Vaayne/NotionAI-Plus"
const TWITTER_URL = "https://twitter.com/LiuVaayne"
const CHATGPT_URL = "https://chat.openai.com"
const NOTION_URL = "https://www.notion.so"
const GOOGLE_BARD_URL = "https://bard.google.com"
const CLAUDE_AI_URL = "https://claude.ai/chats"
const GOOGLE_AI_URL = "https://ai.google.dev"

const settingNameToIdComponent = (engineId: EngineEnum) => {
	return (
		<Text size="4" weight="bold" align="left" as="div">
			<RadioGroup.Item value={engineId} /> {EngineMappings[engineId]}
		</Text>
	)
}

const engineDescriptionComponent = (engineId: EngineEnum, url: string) => {
	return (
		<Text as="p" size="2" mt="-4" ml="4">
			You must remain logged in to your {EngineMappings[engineId]} account
			on the{" "}
			<Link weight="medium" underline="always" target="_blank" href={url}>
				{url}.
			</Link>
		</Text>
	)
}

function Options() {
	const [notionSpaceId, setNotionSpaceId] = useAtom(notionSpaceIdAtom)
	const [notionSpaces, setNotionSpaces] = useAtom(notionSpacesAtom)
	const [openAIAPIKey, setOpenAIAPIKey] = useAtom(openAIAPIKeyAtom)
	const [openAIAPIHost, setOpenAIAPIHost] = useAtom(openAIAPIHostAtom)
	const [openAIAPIModel, setOpenAIAPIModel] = useAtom(openAIAPIModelAtom)
	const [chatGPTModel, setChatGPTModel] = useAtom(chatGPTModelAtom)
	const [engine, setEngine] = useAtom(engineAtom)
	const [isEnableContextMenu, setIsEnableContextMenu] = useAtom(
		isEnableContextMenuAtom
	)
	const [googleAiHost, setGoogleAIHost] = useAtom(googleAIHostAtom)
	const [googleAIKey, setGoogleAIKey] = useAtom(googleAIKeyAtom)
	const [googleAIModel, setGoogleAIModel] = useAtom(googleAIModelAtom)

	storage.watch({
		[ConstEnum.DEFAULT_ENGINE]: c => setEngine(c.newValue),
		[ConstEnum.NOTION_SPACE_ID]: c => setNotionSpaceId(c.newValue),
		[ConstEnum.NOTION_SPACES]: c => setNotionSpaces(c.newValue),
		[ConstEnum.OPENAI_API_HOST]: c => setOpenAIAPIHost(c.newValue),
		[ConstEnum.OPENAI_API_KEY]: c => setOpenAIAPIKey(c.newValue),
		[ConstEnum.OPENAI_API_MODEL]: c => setOpenAIAPIModel(c.newValue),
		[ConstEnum.CHATGPT_MODEL]: c => setChatGPTModel(c.newValue),
		[ConstEnum.GOOGLE_AI_KEY]: c => setGoogleAIKey(c.newValue),
		[ConstEnum.GOOGLE_AI_MODEL]: c => setGoogleAIModel(c.newValue),
		[ConstEnum.IS_ENABLE_CONTEXT_MENU]: c =>
			setIsEnableContextMenu(c.newValue),
	})

	const saveToStorage = async (key: string, val: any) => {
		await storage.set(key, val)
	}

	const handleGetNotionSpaces = async () => {
		const response = await sendToBackground({
			name: "get-notion-spaces",
			body: {},
		})
		alert(response)
	}

	const notionAISettings = () => {
		return (
			<div className="flex flex-row items-center justify-between gap-4 mx-2">
				<Text as="span">NotionAI Workspace:</Text>

				<Select.Root
					value={notionSpaceId}
					onValueChange={e =>
						saveToStorage(ConstEnum.NOTION_SPACE_ID, e)
					}
				>
					<Select.Trigger className="max-w-lg grow" />
					<Select.Content>
						{notionSpaces &&
							JSON.parse(notionSpaces).map((space: any) => {
								space = space as NotionSpace
								return (
									<Select.Item
										value={space.id}
										key={space.id}
									>
										{space.name}
									</Select.Item>
								)
							})}
					</Select.Content>
				</Select.Root>
				<Button onClick={async () => handleGetNotionSpaces()}>
					Get Spaces
				</Button>
			</div>
		)
	}

	const chatGPTSettings = () => {
		return (
			<div className="flex flex-row items-center justify-between gap-4 mx-2">
				<Text as="span">ChatGPT Model:</Text>
				<Select.Root
					value={chatGPTModel}
					onValueChange={e =>
						saveToStorage(ConstEnum.CHATGPT_MODEL, e)
					}
				>
					<Select.Trigger className="max-w-lg grow" />
					<Select.Content>
						<Select.Item value={DEFAULT_CHATGPT_MODEL}>
							GPT-3.5
						</Select.Item>
						<Select.Item value="gpt-4">GPT-4</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
		)
	}

	const googleAISettings = () => {
		return (
			<div className="flex flex-col justify-between gap-3">
				<div className="flex flex-row justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API Host:
					</Text>
					<TextField.Root className="max-w-lg grow">
						<TextField.Input
							radius="large"
							placeholder="Please enter the API host"
							value={googleAiHost}
							onChange={e => {
								saveToStorage(
									ConstEnum.GOOGLE_AI_HOST,
									e.target.value
								)
							}}
						/>
					</TextField.Root>
				</div>
				<div className="flex flex-row justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API Key:
					</Text>
					<TextField.Root className="max-w-lg grow">
						<TextField.Input
							radius="large"
							placeholder="Please enter the API key"
							value={googleAIKey}
							onChange={e => {
								saveToStorage(
									ConstEnum.GOOGLE_AI_KEY,
									e.target.value
								)
							}}
						/>
					</TextField.Root>
				</div>
				<div className="flex flex-row items-center justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API Model:
					</Text>
					<Select.Root
						value={googleAIModel}
						onValueChange={e => {
							saveToStorage(ConstEnum.GOOGLE_AI_MODEL, e)
						}}
					>
						<Select.Trigger className="max-w-lg grow" />
						<Select.Content>
							<Select.Item value={DEFAULT_GOOGLE_AI_MODEL}>
								Gemini Pro
							</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		)
	}

	const openaiAPISettings = () => {
		return (
			<div className="flex flex-col justify-between gap-3">
				<div className="flex flex-row justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API URL:
					</Text>
					<TextField.Root className="max-w-lg grow">
						<TextField.Input
							radius="large"
							placeholder={`OpenAI API Base URL, default: ${DEFAULT_OPENAI_API_URL}`}
							value={openAIAPIHost}
							onChange={e =>
								saveToStorage(
									ConstEnum.OPENAI_API_HOST,
									e.target.value
								)
							}
						/>
					</TextField.Root>
				</div>
				<div className="flex flex-row justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API Key:
					</Text>
					<TextField.Root className="max-w-lg grow">
						<TextField.Input
							radius="large"
							placeholder="Please enter the API key"
							value={openAIAPIKey}
							onChange={e => {
								saveToStorage(
									ConstEnum.OPENAI_API_KEY,
									e.target.value
								)
							}}
						/>
					</TextField.Root>
				</div>
				<div className="flex flex-row items-center justify-between gap-4 mx-2">
					<Text as="span" weight="medium">
						API Model:
					</Text>
					<Select.Root
						value={openAIAPIModel}
						onValueChange={e => {
							saveToStorage(ConstEnum.OPENAI_API_MODEL, e)
						}}
					>
						<Select.Trigger className="max-w-lg grow" />
						<Select.Content>
							<Select.Group>
								<Select.Label>GPT-3.5</Select.Label>
								<Select.Item value={DEFAULT_OPENAI_API_MODEL}>
									GPT-3.5-Turbo
								</Select.Item>
								<Select.Item value="gpt-3.5-turbo-16k">
									GPT-3.5-16K
								</Select.Item>
							</Select.Group>
							<Select.Separator />
							<Select.Group>
								<Select.Label>GPT-4</Select.Label>
								<Select.Item value="gpt-4">GPT-4</Select.Item>
								<Select.Item value="gpt-4-32k">
									GPT-4-32K
								</Select.Item>
								<Select.Item value="gpt-4-turbo">
									GPT-4-Turbo
								</Select.Item>
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		)
	}

	const contextMenuSettings = () => {
		return (
			<div className="flex flex-row items-center justify-between gap-4 p-4 m-2 bg-gray-100 rounded-lg">
				<div className="flex flex-col items-start justify-between gap-2">
					<Heading as="h3" size="4">
						Enable Context Menu
					</Heading>
					<Text as="span" size="2">
						Display the menu when you select any text
					</Text>
				</div>
				<Switch
					checked={isEnableContextMenu}
					defaultChecked={true}
					onCheckedChange={e => {
						saveToStorage(ConstEnum.IS_ENABLE_CONTEXT_MENU, e)
					}}
				/>
			</div>
		)
	}

	const selectEngineComponent = () => {
		return (
			<div className="flex-grow p-2 m-4 bg-gray-100 rounded-lg ">
				<RadioGroup.Root
					value={engine}
					onValueChange={e => {
						saveToStorage(ConstEnum.DEFAULT_ENGINE, e)
					}}
				>
					<div className="flex flex-col gap-6">
						{settingNameToIdComponent(EngineEnum.OpenAIAPI)}
						{engine == EngineEnum.OpenAIAPI && openaiAPISettings()}

						{settingNameToIdComponent(EngineEnum.ChatGPT)}
						{engineDescriptionComponent(
							EngineEnum.ChatGPT,
							CHATGPT_URL
						)}
						{engine == EngineEnum.ChatGPT && chatGPTSettings()}

						{settingNameToIdComponent(EngineEnum.NotionAI)}
						{engineDescriptionComponent(
							EngineEnum.NotionAI,
							NOTION_URL
						)}
						{engine == EngineEnum.NotionAI && notionAISettings()}

						{settingNameToIdComponent(EngineEnum.GoogleBard)}
						{engineDescriptionComponent(
							EngineEnum.GoogleBard,
							GOOGLE_BARD_URL
						)}

						{settingNameToIdComponent(EngineEnum.Claude)}
						{engineDescriptionComponent(
							EngineEnum.Claude,
							CLAUDE_AI_URL
						)}

						{settingNameToIdComponent(EngineEnum.GoogleAI)}
						{engineDescriptionComponent(
							EngineEnum.GoogleAI,
							GOOGLE_AI_URL
						)}
						{engine == EngineEnum.GoogleAI && googleAISettings()}
					</div>
				</RadioGroup.Root>
			</div>
		)
	}

	const contactUsComponet = () => {
		return (
			<div className="flex flex-col justify-start flex-grow gap-4 p-2 m-4 bg-gray-100 rounded-lg">
				<div className="flex gap-1">
					<Github color="blue" />
					<Text weight="bold">
						Github:
						<Link
							href={GITHUB_URL}
							target="_blank"
							weight="regular"
							mx="2"
						>
							{GITHUB_URL}
						</Link>
					</Text>
				</div>

				<div className="flex gap-1">
					<Twitter color="blue" />
					<Text weight="bold">
						Twitter:
						<Link
							href={TWITTER_URL}
							target="_blank"
							weight="regular"
							mx="2"
						>
							{TWITTER_URL}
						</Link>
					</Text>
				</div>
			</div>
		)
	}

	return (
		<Theme>
			<InitAtomComponent />
			<div className="container flex flex-col justify-center flex-grow max-w-2xl p-4 m-4 mx-auto align-top bg-gray-200 rounded-lg">
				<Heading as="h1" size="8" m="3">
					Settings
				</Heading>
				<Separator my="3" size="4" />
				<Heading as="h2" m="3" size="6">
					General
				</Heading>
				{contextMenuSettings()}
				<Separator my="3" size="4" />
				<Heading as="h2" m="3" size="6">
					Engine Settings
				</Heading>
				{selectEngineComponent()}
				<Separator my="3" size="4" />
				<Heading as="h2" m="3" size="6">
					Contact Us
				</Heading>
				{contactUsComponet()}
			</div>
		</Theme>
	)
}

export default Options
