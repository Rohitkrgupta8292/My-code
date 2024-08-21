console.log("This is javascript function tutorial")

function nice(name) {
    console.log("hey " + name + " you are nice!")
}

nice("harry")
nice("Rohan")
nice("Rohit")

function sum(a, b, c = 3) {
    // console.log(a+b)
    return a + b + c
}
result1 = sum(3, 5)
result2 = sum(6, 11)
result3 = sum(2, 8 , 5)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34)
func1(66)
func1(45)
