console.log("This is javascript array tutorial")

/*
Array is muttable
*/

let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr, typeof arr)
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])

// arr[0] = 8
// console.log(arr)

console.log(arr.toString())
console.log(arr.join(" and "))
let a = [1, 2, 3, 4, 5, 6]
console.log(a)
console.log(a.pop()) // pop remove element from end
console.log(a)
a.push(7) // push add element at end
a.push("rohit")
console.log(a)
console.log(a.shift()) // shift remove element from beginning
a.unshift("jack") // unshift add element at beginning
console.log(a)
delete a[2] // delete value from index not block of memory
console.log(a)

// concat function create new array and does not change existing array ..//
/*
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3))
console.log(a1)
*/

// sort function sort array the existing array ..//
/*
let b = [7,5,2]
console.log(b.sort())
*/
/* splice function can be used add new items to an array or delete from array
let num = [1,2,3,4,5]
num.splice(1,2)
console.log(num)

let num = [1,2,3,4,5]
num.splice(1,2,22,33)
console.log(num)
*/

/*
let c = [1,93,5,6,88]

for (let i = 0; i < c.length; i++) {
    const element = c[i];
    console.log(element)
}

c.forEach((value , index, arr )=>{
    console.log(value, index, arr)
})

// for in loop for object
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];   
        console.log(element)  
    }
}

// for of loop for arrays
for (const iterator of c) {
    console.log(iterator)
}
*/

/*
// map, reduced, filter
let c = [1, 13, 5, 7, 11]
let newC = []
for (let i = 0; i < c.length; i++) {
    const element = c[i];
    newC.push(element ** 2)
}
console.log(newC)

let newc = c.map((e) => {
    return e ** 2
})
console.log(newc)

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(c.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
const red = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))
*/

console.log(Array.from("Rohit"))