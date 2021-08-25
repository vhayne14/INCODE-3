const express = require('express')
const data = require('./data')

const bcrypt = require('bcryptjs');



const app = express()
const PORT = process.env.PORT || 3000
const msg = "Hello World"
console.log(data.users)


// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// GET request - route
app.get('/',(req, res) =>{
    res.send(msg)
})

// GET request for users
app.get('/users',(req,res)=>{
    res.json(data.users)
})

// Add a new user
app.post('/users', (req, res) => {
    const {firstname, lastname, email, password} = req.body 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);

    const newUser = {
        firstname, lastname, email, password: hash
    }

    res.json(req.body)

})

// Display a single post
app.get('/posts/:id',(req,res)=>{
    const found = data.posts.some(post => post.id === Number(req.params.id))

    if (found) {
        //res.send(data.posts.filter(post => post.id === Number(req.params.id)))
        const post = data.posts.filter(post => post.id === Number(req.params.id))
        res.send(post[0])
    } else {
        res.send('Post not found')
    }

    // console.log(found);
    // res.end()
    // data.posts[req.params.id]
    // res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log(`You guys are doing great, here's your app:
    http://localhost:${PORT}`);
})