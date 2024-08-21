const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// app.use(express.static('templates'))

app.get('/', (req, res)=>{
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.render("index", {siteName:siteName, searchText:searchText})
})

app.get('/blog/:slug', (req, res)=>{
    let blogTitle = "Adidas when and why?"
    let blogContent = "It is a very good brand name"
    res.render("blogpost", {blogTitle: blogTitle, blogContent:blogContent})
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})

