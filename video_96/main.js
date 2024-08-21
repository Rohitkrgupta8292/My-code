import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    const todo = new Todo({title:"first todo", desc:"This is the first todo", isDone:false})
    todo.save()
    res.send("hello world!")
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
