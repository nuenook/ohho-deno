import { camelCase } from "https://deno.land/x/case/mod.ts";


const text = "hello again kiki"
const camel = camelCase(text)

console.log("camel: ", camel)