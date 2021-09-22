const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/about', (requ, res) => {
    res.sendFile(path.join(__dirname + '/views/about.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static(__dirname + '/public'));