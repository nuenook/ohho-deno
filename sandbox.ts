/** Reading file */
// const decoder = new TextDecoder('utf-8')

/** top level await */
// const data = await Deno.readFile('readme.txt')

// console.log(decoder.decode(data))

// const data = await Deno.readTextFile('readme.txt')

/** Writing Files */
// const encoder = new TextEncoder()
// const text = encoder.encode('hello again')

// await Deno.writeFile('readme.txt', text)


/** Renaming and removing files */
// await Deno.rename('readme.txt', 'deleteme.txt')
// await Deno.remove('deleteme.txt')


/** Fetch API */

// const res = await fetch('https://swapi.dev/api/films/');
// const fetchData = await res.json()

// console.log(fetchData)