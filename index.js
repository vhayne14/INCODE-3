const express = require('express')
const data = require('./data')
const app = express()
const PORT = process.env.PORT || 3000
const bcrypt = require('bcryptjs');
const { render } = require('ejs');
const db = require('./database')


const msg = "Hello World Branch 3c"
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
    
    // res.render("pages/users", {
    //     users: data.users
    // })


    db.any('SELECT * FROM users;',)
   .then(users => {
        console.log(users)
         res.render("pages/users", {
        users
    })
      
   })
   .catch( err => {
        console.log(err)
        res.send(err)

   })
    
})



// GET all schedules
app.get('/schedules',(req,res)=>{
   
   

    db.any('SELECT * FROM schedules;',)
    .then((sched)=>{
        console.log(sched);
        res.render("pages/allSched", {
            schedules: sched
        })
    })
    .catch((err)=>{
        console.log(error);
    })

    

})
// GET a new user  ---> This needs to be on top of GET req single user to prevent misbehavior

app.get('/users/new', (req,res)=>{
    res.render('pages/newUser')
})

// POST a new user

app.post('/users/new', (req, res) => {
    // // console.log(req.body)
    // const {firstname, lastname, email, password} = req.body
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);
    // // console.log(hash);

    // const newUser = {
    //     firstname, lastname, email, password: hash
    // }
    // data.users.push(newUser)
    // // res.json(newUser)
    // res.redirect("/users");
   
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    db.none('INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4);',
    [req.body.firstname, req.body.lastname, req.body.email, hash])
    .then(()=>{
        res.redirect("/users");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })



})



// GET a single user
app.get('/users/:id',(req,res) => {



    //  const checkUser = data.users.some((user, index) => index === Number(req.params.id));

    //  if (checkUser) {
    //      const getUser = data.users.filter((user, index) => index === Number(req.params.id));
    //      res.render("pages/aboutUser.ejs", {
    //         getUser: getUser
    //     })
      
    //  } else {
    //     const getUser = "No such user";
    //     res.render("pages/invalidUser.ejs", {
    //         getUser: getUser
    //     })

    //  }
    
    // const checkUser = db.some((user, index) => index === Number(req.params.id));

    // console.log(checkUser);


     db.any('SELECT * FROM users WHERE id = $1', [Number(req.params.id)+1])
    .then((users)=>{
        console.log(users);
        res.render("pages/aboutUser.ejs",{
            getUser: users
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    });

    
    // db.any('SELECT * FROM users WHERE users IN $1', [Number(req.params.id)+1])
    //     .then((users)=>{
    //         console.log(users);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         res.send(err)
    //     });

  

    // if (checkUser) {
    //     const getUser = data.users.filter((user, index) => index === Number(req.params.id));
    //     res.render("pages/aboutUser.ejs", {
    //        getUser: getUser
    //    })
     
    // } else {
    //    const getUser = "No such user";
    //    res.render("pages/invalidUser.ejs", {
    //        getUser: getUser
    //    })

    // }




})

// GET a single user and schedule
app.get('/users/:id/schedules',(req,res)=>{


    // const getSched = data.schedules.filter(sched => sched.user_id===Number(req.params.id));
    
    // res.render("pages/schedules.ejs", {
    //     getSched: getSched
    // })



    db.any('SELECT * FROM schedules WHERE user_id = $1', [Number(req.params.id)])
    .then((sched)=>{
        console.log(sched);
        res.render("pages/schedules.ejs",{
            getSched: sched
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    });
    


})


// GET ROUTE for new schedule
app.get('/schedules/new',(req,res)=>{

    
    res.render('pages/newSched')

    
})


// POST for new schedule
app.post('/schedules/new',(req,res)=>{


    // const {user_id, day, start_at, end_at} = req.body 
   

    // const newSched = {
    //     user_id, day, start_at, end_at
    // }
    // data.schedules.push(newSched);
    // // res.json(newSched);



    // res.redirect('/schedules');



    db.none('INSERT INTO schedules (user_id, username, day, start_at, end_at) VALUES ($1, $2, $3, $4, $5);',
    [req.body.user_id, req.body.username, req.body.day, req.body.start_at, req.body.end_at])
    .then(()=>{
        res.redirect("/schedules");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })









})


app.listen(PORT, () => {
    console.log(`You guys are doing great, here's your app:
    http://localhost:${PORT}`);
})