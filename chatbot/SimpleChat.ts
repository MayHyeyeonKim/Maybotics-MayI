import { ChatOpenAI } from "@langchain/openai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import "dotenv/config";

const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.0,
})

// 대화 내용 유지 안됨.
// console.log((await llm.invoke([new HumanMessage("안녕? 난 May야!")])).content);
// console.log((await llm.invoke([new HumanMessage("내 이름은 뭐게?")])).content);

// 대화 내용 유지됨.
console.log((await llm.invoke([
    new HumanMessage("안녕? 난 May야!"),
    new AIMessage("안녕, May! 만나서 반가워!"),
    new HumanMessage("내 이름은 뭐게?"),
])).content);