const express = require('express')
const data = require('./data')
const bcrypt = require('bcryptjs');
// const parser = require('body-parser');

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


// GET a single user
app.get('/users/:id',(req,res)=>{


        res.json(data.users[req.params.id])


        // const found = data.posts.some(post => post.id === Number(req.params.id))

        // if (found) {
          
        //     const post = data.posts.filter(post => post.id === Number(req.params.id))
        //     res.json(data.users[req.params.id])
        // } else {
        //     res.send('Post not found')
        // }

})

// Get user and schedule

app.get('/users/:id/schedules',(req,res)=>{
    // grab all schedules
    // let getSched =  [];

    // for (let index = 0; index < data.schedules.length; index++) {

    //     if(data.schedules[index].user_id === Number(req.params.id)){
    //         getSched.push(data.schedules[index]);
    //     }
        
    // }
    //     res.json(getSched);

    const getSched = data.schedules.filter(sched => sched.user_id===Number(req.params.id));
    res.json(getSched);
    

    // res.json(data.users[req.params.id].schedules)
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
    data.users.push(newUser);
    res.json(newUser);
    // res.json(req.body);
    // res.json(data.users);
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