const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

//middleware 1
app.use((req, res, next) => {
    console.log("logged m1")
    next();
})

//middleware 2
app.use((req, res, next) => {
    console.log("logged m2")
    next();
})


// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send(`<h1>Hello world date=18 jan!</h1>`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})