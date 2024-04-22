export interface PromptType {
	label: string
	value: string
	category: string
}

export enum ConstEnum {
	DEFAULT_ENGINE = "default-engine",
	NOTION_SPACE_ID = "notion-space-id",
	NOTION_SPACES = "notion-spaces",
	OPENAI_API_KEY = "openai-api-key",
	OPENAI_API_HOST = "openai-api-host",
	OPENAI_API_MODEL = "openai-api-model",
	CHATGPT_MODEL = "chatgpt-model",
	IS_ENABLE_CONTEXT_MENU = "is-enable-context-menu",
	GOOGLE_AI_HOST = "google-ai-host",
	GOOGLE_AI_KEY = "google-ai-key",
	GOOGLE_AI_MODEL = "google-ai-model",
	GROQ_API_KEY = "groq-api-key",
	GROQ_API_MODEL = "groq-api-model",
}

export enum EngineEnum {
	NotionAI = "notionai",
	ChatGPT = "chatgpt",
	OpenAIAPI = "openai-api",
	GoogleBard = "google-bard",
	GoogleAI = "google-ai",
	Bing = "bing",
	Claude = "claude",
	Groq = "groq",
}

export const EngineMappings = {
	[EngineEnum.NotionAI]: "🤖 NotionAI",
	[EngineEnum.ChatGPT]: "💬 ChatGPT",
	[EngineEnum.OpenAIAPI]: "💬 OpenAI API",
	[EngineEnum.GoogleBard]: "🎤 Google Bard",
	[EngineEnum.Bing]: "🔎 Bing",
	[EngineEnum.Claude]: "🤖 Claude",
	[EngineEnum.GoogleAI]: "🤖 Google AI",
	[EngineEnum.Groq]: "🤖 Groq",
}

export const EngineOptions: PromptType[] = [
	{ label: "🤖 NotionAI", value: EngineEnum.NotionAI, category: "" },
	{ label: "💬 ChatGPT Web", value: EngineEnum.ChatGPT, category: "" },
	{ label: "💬 OpenAI API", value: EngineEnum.OpenAIAPI, category: "" },
	{ label: "🎤 Bard", value: EngineEnum.GoogleBard, category: "" },
	{ label: "🔎 Bing", value: EngineEnum.Bing, category: "" },
	{ label: "🤖 Claude", value: EngineEnum.Claude, category: "" },
	{ label: "🤖 Google AI", value: EngineEnum.GoogleAI, category: "" },
	{ label: "🤖 Groq", value: EngineEnum.Groq, category: "" },
]

export enum OpenAIModelEnum {
	gpt35turbo = "gpt-3.5-turbo",
	gpt4turbo = "gpt-4-turbo",
}

export const OpenAIModelOptions: PromptType[] = [
	{
		label: "🤖 GPT-3.5 Turbo",
		value: OpenAIModelEnum.gpt35turbo,
		category: "",
	},
	{ label: "🤖 GPT-4", value: OpenAIModelEnum.gpt4turbo, category: "" },
]

export enum ProcessTypeEnum {
	Text = "text",
	Page = "page",
}

export enum PromptTypeEnum {
	TopicWriting = "topicWriting",
	ContinueWriting = "continueWriting",
	ChangeTone = "changeTone",
	Summarize = "summarize",
	ImproveWriting = "improveWriting",
	FixSpellingGrammar = "fixSpellingGrammar",
	Translate = "translate",
	ExplainThis = "explainThis",
	MakeLonger = "makeLonger",
	MakeShorter = "makeShorter",
	FindActionItems = "findActionItems",
	SimplifyLanguage = "simplifyLanguage",
	AskAI = "askAI",
}

export enum TopicEnum {
	brainstormIdeas = "brainstormIdeas",
	blogPost = "blogPost",
	outline = "outline",
	socialMediaPost = "socialMediaPost",
	pressRelease = "pressRelease",
	creativeStory = "creativeStory",
	essay = "essay",
	poem = "poem",
	meetingAgenda = "meetingAgenda",
	prosConsList = "prosConsList",
	jobDescription = "jobDescription",
	salesEmail = "salesEmail",
	recruitingEmail = "recruitingEmail",
}

export enum LanguageEnum {
	english = "english",
	korean = "korean",
	chinese = "chinese",
	japanese = "japanese",
	spanish = "spanish",
	russian = "russian",
	french = "french",
	german = "german",
	italian = "italian",
	portuguese = "portuguese",
	dutch = "dutch",
	indonesia = "indonesia",
	tagalog = "tagalog",
	vietnamese = "vietnamese",
}

export enum ToneEnum {
	professional = "professional",
	casual = "casual",
	straightforward = "straightforward",
	confident = "confident",
	friendly = "friendly",
}

export const PromptOptions: PromptType[] = [
	{ label: "❓ Ask AI", value: PromptTypeEnum.AskAI, category: "" },
	{
		label: "📝 Topic Writing",
		value: PromptTypeEnum.TopicWriting,
		category: "",
	},
	{
		label: "🚀 Continue Writing",
		value: PromptTypeEnum.ContinueWriting,
		category: "",
	},
	{ label: "🎭 Change Tone", value: PromptTypeEnum.ChangeTone, category: "" },
	{ label: "📝 Summarize", value: PromptTypeEnum.Summarize, category: "" },
	{
		label: "🔧 Improve Writing",
		value: PromptTypeEnum.ImproveWriting,
		category: "",
	},
	{
		label: "📖 Fix Spelling/Grammar",
		value: PromptTypeEnum.FixSpellingGrammar,
		category: "",
	},
	{ label: "🌐 Translate", value: PromptTypeEnum.Translate, category: "" },
	{
		label: "❓ Explain This",
		value: PromptTypeEnum.ExplainThis,
		category: "",
	},
	{ label: "📏 Make Longer", value: PromptTypeEnum.MakeLonger, category: "" },
	{
		label: "📐 Make Shorter",
		value: PromptTypeEnum.MakeShorter,
		category: "",
	},
	{
		label: "📋 Find Action Items",
		value: PromptTypeEnum.FindActionItems,
		category: "",
	},
	{
		label: "🗣️ Simplify Language",
		value: PromptTypeEnum.SimplifyLanguage,
		category: "",
	},
	{
		label: "💡 Brainstorm Ideas",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.brainstormIdeas}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📝 Blog Post",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.blogPost}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📃 Outline",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.outline}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📱 Social Media Post",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.socialMediaPost}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "🗞️ Press Release",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.pressRelease}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📖 Creative Story",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.creativeStory}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📝 Essay",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.essay}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📝 Poem",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.poem}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📅 Meeting Agenda",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.meetingAgenda}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "✅ Pros Cons List",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.prosConsList}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "🧑‍💼 Job Description",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.jobDescription}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📧 Sales Email",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.salesEmail}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "📧 Recruiting Email",
		value: `${PromptTypeEnum.TopicWriting}-${TopicEnum.recruitingEmail}`,
		category: PromptTypeEnum.TopicWriting,
	},
	{
		label: "🇺🇸 English",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.english}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇰🇷 Korean",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.korean}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇨🇳 Chinese",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.chinese}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇯🇵 Japanese",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.japanese}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇪🇸 Spanish",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.spanish}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇷🇺 Russian",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.russian}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇫🇷 French",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.french}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇩🇪 German",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.german}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇮🇹 Italian",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.italian}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇵🇹 Portuguese",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.portuguese}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇳🇱 Dutch",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.dutch}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇮🇩 Indonesian",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.indonesia}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇵🇭 Tagalog",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.tagalog}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "🇻🇳 Vietnamese",
		value: `${PromptTypeEnum.Translate}-${LanguageEnum.vietnamese}`,
		category: PromptTypeEnum.Translate,
	},
	{
		label: "💼 Professional",
		value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.professional}`,
		category: PromptTypeEnum.ChangeTone,
	},
	{
		label: "👤 Casual",
		value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.casual}`,
		category: PromptTypeEnum.ChangeTone,
	},
	{
		label: "📝 Straightforward",
		value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.straightforward}`,
		category: PromptTypeEnum.ChangeTone,
	},
	{
		label: "🦸 Confident",
		value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.confident}`,
		category: PromptTypeEnum.ChangeTone,
	},
	{
		label: "👋 Friendly",
		value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.friendly}`,
		category: PromptTypeEnum.ChangeTone,
	},
]

export function getPromptTypeLabel(prompt: PromptType): string {
	if (prompt.category == "") {
		return prompt.label
	}

	const parentLabel = PromptTypeMappings.get(prompt.category).label
	return `${parentLabel}-${prompt.label}`
}

export const PromptTypeMappings = new Map()
PromptOptions.forEach(option => PromptTypeMappings.set(option.value, option))

export function newPromptType(value: string): PromptType | undefined {
	return PromptTypeMappings.get(value)
}
