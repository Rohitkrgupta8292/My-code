// CRUD operation
use("CrudDb")
console.log(db)
// Create
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Curso de MongoDB",
//     price: 0,
//     assignment:12,
//     projects: 40
// })

// db.courses.insertMany([
//     {
//         "name": "Curso de MongoDB",
//         "price": 0,
//         "assignments": 12,
//         "projects": 40
//     },
//     {
//         "name": "MongoDB for Beginners",
//         "price": 15000,
//         "assignments": 8,
//         "projects": 20
//     },
//     {
//         "name": "Advanced MongoDB Techniques",
//         "price": 25000,
//         "assignments": 15,
//         "projects": 30
//     },
//     {
//         "name": "MongoDB Data Modeling",
//         "price": 18000,
//         "assignments": 10,
//         "projects": 25
//     },
//     {
//         "name": "MongoDB and Node.js Integration",
//         "price": 20000,
//         "assignments": 12,
//         "projects": 35
//     },
//     {
//         "name": "MongoDB Security Best Practices",
//         "price": 22000,
//         "assignments": 18,
//         "projects": 45
//     }
// ])

//Read
// let a = db.courses.find({price:0})
// console.log(a.toArray())

//Update
db.courses.updateMany({ price: 0 }, { $set: { price: 100 }})

//Delete
// db.courses.deleteOne({price: 100})
db.courses.deleteMany({price:100})