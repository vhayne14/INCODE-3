const express = require('express')
const data = require('./data')
const app = express()
const PORT = process.env.PORT || 3000
const msg = "Hello World Branch 3b"
// console.log(data.users)


// Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set view engine EJS
app.set('view engine', 'ejs')

//app.set('views','./example')  Customized your views folder name to example

// Set our static folder
app.use(express.static('public'))

// GET request - route

// Homepage
app.get('/',(req, res) =>{
    res.render("pages/index")
})

// Displays all users
app.get('/users',(req, res) =>{
    res.render("pages/users", {
        users: data.users
    })
    
})


// GET a single user and schedule
app.get('/users/:id/schedules',(req,res)=>{


    const getSched = data.schedules.filter(sched => sched.user_id===Number(req.params.id));

    res.render("pages/schedules.ejs", {
        getSched: getSched
    })

})





app.listen(PORT, () => {
    console.log(`You guys are doing great, here's your app:
    http://localhost:${PORT}`);
})