import PromptSync from "prompt-sync";
import { mainFunction } from "./main";

const prompt = PromptSync({ sigint: true });

const result = mainFunction(prompt("Please provide a rpn operation: "));
console.log(result);
