// 1. prompt

import { PromptTemplate } from "@langchain/core/prompts";
import { FewShotPromptTemplate } from "@langchain/core/prompts";


const examplePrompt = PromptTemplate.fromTemplate(
    "Sentence: {sentence}\neval: {evaluation}"
);

const examples = [
    {
        sentence: "It is a sunny day.",
        evaluation: "positive",
    }, {
        sentence: "It is raining.",
        evaluation: "negative",
    }, {
        sentence: "The weather is cloudy.",
        evaluation: "neutral",
    },
]

const prompt = new FewShotPromptTemplate({
    examples,
    examplePrompt,
    suffix: "Sentence: {sentence}",
    inputVariables: ["sentence"],
})

const formatted = await prompt.format({
    sentence: "It is a beautiful day.",
})
console.log("formatted은? ", formatted.toString());


// 2. model

import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";
import { StringOutputParser } from "@langchain/core/output_parsers";

const parser = new StringOutputParser();
const model = new ChatOpenAI({ model: "gpt-4o", temperature: 0.0 });
const result = await model.invoke(formatted);
const output = await parser.parse(result.content.toString());
console.log("output은? ", output);

// 3. chaining
const chain = model.pipe(parser)
const output2 = await chain.invoke(formatted);
console.log("output2는? ", output2);



// Node.js는 기본적으로 .js만 이해함.
// .ts는 트랜스파일(transpile) 과정을 거쳐야 해

// node --loader ts-node/esm FewShotPromptTemplate.ts

// tsx는 내부적으로 ESM/TS/JS/CJS 다 알아서 처리해주니까, --loader 안 써도 되고, 편함.
// npx는 node_modules/.bin 안에 있는 실행 파일을 직접 실행시켜주는 도구
// npx tsx FewShotPromptTemplate.ts
