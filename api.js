import { OpenAIApi, Configuration } from 'openai'
import 'dotenv/config'

const openaiApiKey = process.env.OPENAI_API_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey  
})
console.log(openai)

export const openai = new OpenAIApi(configuration)