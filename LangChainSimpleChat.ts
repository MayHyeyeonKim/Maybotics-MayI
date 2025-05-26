import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

import "dotenv/config";
import { Chat } from "openai/resources/index.mjs";

const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.9,
    maxTokens: 1000,
})

const messages = [
    new SystemMessage("You are a helpful assistant."),
    new HumanMessage("What is the capital of France?"),
]

const answer = await model.invoke(messages);
console.log(answer.content);