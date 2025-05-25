import "dotenv/config";
import { OpenAI } from "openai"
const { OPENAI_API_KEY } = process.env

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
})

const completions = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "system", content: "You are a helpful assistant."
        },
        {
            role: "user", content: "Let me know what I should be careful using Chat GPT for in Korean"
        },
    ],
})

console.log(completions.choices[0].message.content);