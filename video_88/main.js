const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req,res)=>{
    res.send(`<h1>Hello Rohit!</h1>`);
})
app.get('/about', (req,res)=>{
    res.send(`<h1>about us!</h1>`);
})
app.get('/contact', (req,res)=>{
    res.send(`<h1>contact!</h1>`);
})
app.get('/blog', (req,res)=>{
    res.send(`<h1>Here is a blog!</h1>`);
})
app.get('/blog/:slug', (req,res)=>{
    res.send(`<h1>Here is a blog ${req.params.slug}</h1>`);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})