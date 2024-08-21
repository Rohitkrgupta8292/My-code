console.log("hello world!")

var slugify = require("slugify")

let a = slugify('some string')
console.log(a)

const b = slugify('some string', '_')
console.log(b) // some_string.