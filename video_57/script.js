console.log(" I am a tutorial on loops")

// let a = 1
// for (let i = 0; i < 100; i++) {
//     console.log(a + i)
// }

let obj = {
    name: "harry",
    role: "programmer",
    company: "codewithharry"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const c of "harry") {
    console.log(c)
}

// while (i<6) {
    //     console.log(i)
    //     i++
    // }
    
let i = 0
do {
    console.log(i)
    i++
} while (i<6);