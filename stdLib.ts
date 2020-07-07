// import {v4} from "https://deno.land/std/uuid/mod.ts"


// const uid = v4.generate()

// console.log(uid)

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts"

const jsonObj = await readJson("tt.json")

console.log(jsonObj)

const books = [
    {
        title: "enook 1",
        author: "nook"
    }
]

await writeJson('books.json', books, {
    spaces: 2
})
console.log('created books.json')