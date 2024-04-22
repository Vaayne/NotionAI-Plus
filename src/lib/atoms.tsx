import { atom, useSetAtom } from "jotai"
import { ConstEnum, EngineEnum, ProcessTypeEnum } from "./enums"

import { Storage } from "@plasmohq/storage"
import { useEffect } from "react"

export const storage = new Storage({
	area: "local",
})

export const DEFAULT_OPENAI_API_URL = "https://api.openai.com/v1"
export const DEFAULT_OPENAI_API_MODEL = "gpt-3.5-turbo"
export const DEFAULT_CHATGPT_MODEL = "text-davinci-002-render-sha"

export const DEFAULT_GOOGLE_AI_HOST = "https://generativelanguage.googleapis.com"
export const DEFAULT_GOOGLE_AI_MODEL = "gemini-pro"

export const engineAtom = atom<string>(EngineEnum.OpenAIAPI)
export const notionSpaceIdAtom = atom<string>("")
export const notionSpacesAtom = atom<string>("")
export const openAIAPIKeyAtom = atom<string>("")
export const openAIAPIHostAtom = atom<string>(DEFAULT_OPENAI_API_URL)
export const openAIAPIModelAtom = atom<string>(DEFAULT_OPENAI_API_MODEL)
export const chatGPTModelAtom = atom<string>(DEFAULT_CHATGPT_MODEL)
export const googleAIModelAtom = atom<string>(DEFAULT_GOOGLE_AI_MODEL)
export const googleAIHostAtom = atom<string>(DEFAULT_GOOGLE_AI_HOST)
export const googleAIKeyAtom = atom<string>("")
export const isEnableContextMenuAtom = atom(true)

export const processTypeAtom = atom(ProcessTypeEnum.Text)
export const selectedPromptAtom = atom("")
export const selectedElementAtom = atom<Selection | null>(null)
export const contextAtom = atom("")
export const promptAtom = atom("")
export const responseMessageAtom = atom("")
export const isLoadingAtom = atom(false)
export const isFullModeAtom = atom(false)
export const isShowToastAtom = atom(false)
export const notificationAtom = atom("")
export const isShowElementAtom = atom(false)
export const isShowContextAtom = atom(false)
export const isPinElementAtom = atom(false)
export const isShowIconAtom = atom(false)
export const queryTextAtom = atom("")

export const iconPositionAtom = atom<{ x: number; y: number } | null>(null)
export const elePositionAtom = atom<{ x: number | string; y: number | string }>(
	{ x: "50%", y: "50%" }
)
// iconPositionDirectionAtom is used to determine the direction of the icon
// https://tailwindcss.com/docs/position
export const iconPositionDirectionAtom = atom("")

// Helper function
const fetchAndSetData = async (
	key: string,
	setAtom: (value: string) => void
) => {
	const data = await storage.get(key)
	if (data) {
		setAtom(data)
	}
}

export const InitAtomComponent = () => {
	const setEngine = useSetAtom(engineAtom)
	const setNotionSpaceId = useSetAtom(notionSpaceIdAtom)
	const setNotionSpaces = useSetAtom(notionSpacesAtom)
	const setOpenAIAPIKey = useSetAtom(openAIAPIKeyAtom)
	const setOpenAIAPIHost = useSetAtom(openAIAPIHostAtom)
	const setOpenAIAPIModel = useSetAtom(openAIAPIModelAtom)
	const setChatGPTModel = useSetAtom(chatGPTModelAtom)
	const setIsEnableContextMenu = useSetAtom(isEnableContextMenuAtom)
	const setGoogleAIModel = useSetAtom(googleAIModelAtom)
	const setGoogleAIKey = useSetAtom(googleAIKeyAtom)
	const setGoogleAIHost = useSetAtom(googleAIHostAtom)

	useEffect(() => {
		const fetchAndSetAllData = async () => {
			await fetchAndSetData(ConstEnum.DEFAULT_ENGINE, setEngine)
			await fetchAndSetData(ConstEnum.OPENAI_API_KEY, setOpenAIAPIKey)
			await fetchAndSetData(ConstEnum.OPENAI_API_HOST, setOpenAIAPIHost)
			await fetchAndSetData(ConstEnum.OPENAI_API_MODEL, setOpenAIAPIModel)
			await fetchAndSetData(ConstEnum.NOTION_SPACE_ID, setNotionSpaceId)
			await fetchAndSetData(ConstEnum.NOTION_SPACES, setNotionSpaces)
			await fetchAndSetData(ConstEnum.CHATGPT_MODEL, setChatGPTModel)
			await fetchAndSetData(ConstEnum.GOOGLE_AI_MODEL, setGoogleAIModel)
			await fetchAndSetData(ConstEnum.GOOGLE_AI_KEY, setGoogleAIKey)
			await fetchAndSetData(ConstEnum.GOOGLE_AI_HOST, setGoogleAIHost)
			const isEnableContext = await storage.get(
				ConstEnum.IS_ENABLE_CONTEXT_MENU
			)
			if (!(isEnableContext == null)) {
				setIsEnableContextMenu(isEnableContext)
			}
		}
		fetchAndSetAllData()
	}, [])
	return <></>
}
