// Ex1.

import { PromptTemplate } from '@langchain/core/prompts';

const template1 = PromptTemplate.fromTemplate("Solve my math homework: {problem}");

const prompt1 = await template1.invoke({ problem: "What is 2 + 2?" });
console.log("prompt1은? ", prompt1); // Output: Solve my math homework: What is 2 + 2?

// Ex2.

import { ChatPromptTemplate } from "@langchain/core/prompts";

const template2 = ChatPromptTemplate.fromMessages([
    ["system", "You are a math teacher."],
    ["user", "solve my math homework: {problem}"],
])

const prompt2 = await template2.invoke({ problem: "10 * 11" })
console.log("prompt2은? ", prompt2);

// Ex3.

import {
    AIMessage,
    HumanMessage,
    SystemMessage,
} from "@langchain/core/messages";

import { HumanMessagePromptTemplate } from "@langchain/core/prompts";

const systemMessage = new SystemMessage("You are a math teacher.");

const template3 = HumanMessagePromptTemplate.fromTemplate([
    systemMessage,
    new HumanMessage("solve my math homework: {problem}"),
    new AIMessage("You don't want to study, don't you?"),
    "{input}",
])

const prompt3 = await template3.formatMessages({ input: "No, I want to study!" });
console.log("prompt3은? ", prompt3);

// node --loader ts-node/esm PromptTemplates.ts
