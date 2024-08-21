import fs from "fs/promises"

let a = await fs.readFile("rohit.txt")
let b = await fs.appendFile("rohit.txt", "\n\n Rohit is a genius developer")

console.log(a.toString())