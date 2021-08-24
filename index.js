const express = require('express')
const data = require('./data')
const app = express()
const PORT = 3000
const msg = "Hello World"
console.log(data.users)

// GET request - route
app.get('/',(req, res) =>{
    res.send(msg)
})

app.listen(PORT, () => {
    console.log(`You guys are doing great, here's your app:
    http://localhost:${PORT}`);
})