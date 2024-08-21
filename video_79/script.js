let a = prompt('Enter first number')
let b = prompt('Enter second number')
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

try {
    console.log('The sum is  ', sum * x)
} catch (error) {
    console.log("Error aagya bhai")
}
finally{
    console.log("File are closed and db connection is being closed")
}

// console.log("rohit")