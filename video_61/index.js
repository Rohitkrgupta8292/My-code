/*Create a faulty calculator.
This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operation as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times

*/

let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}