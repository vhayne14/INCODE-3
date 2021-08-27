const express = require('express')
const data = require('./data')
const app = express()
const PORT = process.env.PORT || 3000
const msg = "Hello World Branch 3b"
console.log(data.users)


// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set view engine EJS
app.set('view engine', 'ejs')

// Set our static folder
app.use(express.static('public'))

// GET request - route


app.get('/',(req, res) =>{
    res.send(msg)
})

app.listen(PORT, () => {
    console.log(`You guys are doing great, here's your app:
    http://localhost:${PORT}`);
})