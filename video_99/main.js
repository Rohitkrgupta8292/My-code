import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";
mongoose.connect('mongodb://127.0.0.1:27017/company')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

let arr = [];

app.get('/', (req, res) => {

    res.render('index', { arr })
})
app.get('/generate', async (req, res) => {
    // clear the collection employees
    await Employee.deleteMany({})
    // Generate random data
    let randomNames = ["Sagar", "Raushan", "Harry", "Rohit", "Rahul", "Rohan"]
    let randomLang = ["C", "C++", "Java", "JavaScript", "Swift", "Python"]
    let randomCity = ["kolkata", "Pune", "Mumbai", "Patna", "Delhi", "Goa"]
    let e;
    for (let i = 0; i < 10; i++) {
        e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCity),
            isManager: Math.random() > 0.5 ? true : false
        })
        arr.push(e);
        if (arr.length > 10) {
            arr.shift();
        }
        // await e.save()     
    }
    console.log(arr)
    console.log(arr.length)
    res.render('index', { arr })
    // console.log(arr)

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
