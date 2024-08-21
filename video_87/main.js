const { error } = require("console");
const fs = require("fs");
// console.log(fs)

console.log("starting")
// fs.writeFileSync("rohit.txt", "rohit is good developer")
fs.writeFile("rohitG.txt", "rohit gupta is a good developer", ()=>{
    console.log("file written successfully")
    fs.readFile("rohitG.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})
console.log("ending")