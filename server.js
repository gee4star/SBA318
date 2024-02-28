// https://dev.to/alexmercedcoder/basics-of-expressjs-todo-list-tutorial-1a4d
// used this site as a guide to create a todo list
let ejs= require("ejs")
// require express
const express = require(`express`)
// Invoke an instance of express and save return value in app
const app = express()
// app.set("view engine", ejs)
let PORT = 3000
// view template



const mopFloor= function (req, res, next) {
    console.log(`Request Recieved`);
    next();
};
const washWindows= function (req, res, next) {
    console.log(`Request Recieved`);
    next();
}


// middleware
app.use(`/static`, express.static(`static`))
app.use(`/washClothes`,mopFloor)
app.use(`/dust`,washWindows)

// error handling middleware
const errorHandlingMiddleware = (err, req, res, next) => {
    console.log(`Engaging error handling middleware`);
    res.status(500).json({ error: `Server Error`});
};

// routes
app.get(`/`, (req, res) => {
   
    // ejs.render(`index`, req.query)
    res.sendFile(`/Users/germaine/Desktop/Per Scholas/rtt125/SBA318/index.html`)
    
})
app.get(`/users`, (req,res) => {
    const users = [
        {
            school: `GCC`,
            name: `Antoni`,
        },
        {
            school: `ASU`,
            name: `Timmeko`,
        },
        {
        school: `UofP`,
        name: `Derrick`,
        },
        {
        school: `GCU`,
        name: `Tasha`,    
        },
        {
            school: `UofA`,
            name: `Jojo`,
        }
    ];
  
    res.json(users);
});
app.get(`/comments`, (req, res) => {
    const comments = [
        {
         message:`This app saved me so much time!`,
         name: `Antoni`,
        },
        {
            message:`Highly Reccomend`,
            name: `Timmeko`,
        },
        {
            message:`This is it!`,
            name: `Derrick`,
        },
        {
            message:`Yes for me`,
            name: `Tasha`,
        },
        {
            message:`Organization is key`,
            name:`Jojo`,
        }
    ]
})
app.get(`/posts`, (req, res) => {
    const posts = [
        {
         post:`Article: This app saved me so much time!`,
         author: `Antoni`,
        },
        {
            post:`Article: Highly Reccomend`,
            author: `Timmeko`,
        },
        {
            post:`Article: This is it!`,
            author: `Derrick`,
        },
        {
            post:`Article: Yes for me`,
            author: `Tasha`,
        },
        {
            post:`Article: Organization is key`,
            author:`Jojo`,
        }
    ]
})
app.get(`/posts?author=Antoni`, (req, res) => {
    const posts = [
        {
         post:`Article: This app saved me so much time!`,
         author: `Antoni`,
        },
        {
            post:`Article: Highly Reccomend`,
            author: `Timmeko`,
        },
        {
            post:`Article: This is it!`,
            author: `Derrick`,
        },
        {
            post:`Article: Yes for me`,
            author: `Tasha`,
        },
        {
            post:`Article: Organization is key`,
            author:`Jojo`,
        }
    ]
    console.log(posts)
})

// home route. send Hello World
app.get('/Hello', (req, res)=>{
    res.send(`Hello, World!`)
    req.body
})
// post route
app.post(`/`, async (req, res)=>{
    console.log(`Get 'er done!`)
    //Example from class slides MongoDB with Node
    let collection = await db.collection(`posts`);
    let newPost = req.body;
    newPost.date = newDate();
    let result = await collection. insertOne(newPost);
    res.send(result). status(204); 

})
// put route
app.put(`/`, async (req, res)=>{
    console.log(`Get 'er done!`)
    //Example from class slides MongoDB with Node
    let collection = await db.collection(`posts`);
    let newPost = req.body;
    newPost.date = newDate();
    let result = await collection. insertOne(newPost);
    res.send(result). status(204); 

}) 
// route parameter
// delete route
app.delete(`/:id`, async (req,res) => {
    const query = { _id: ObjectId( req.params.id) };
    const collection = db.collection(`posts`);
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
});
// listen to the port
app.listen(PORT, ()=>{
    console.log(`Server is listening on: ${PORT}`)
})
