// https://dev.to/alexmercedcoder/basics-of-expressjs-todo-list-tutorial-1a4d
// used this site as a guide to create a todo list
// require express
const express = require(`express`)
// Invoke an instance of express and save return value in app
const app = express()
let PORT = 3000


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
app.get(`/test`, (req, res) => {
    res.send(`Hello`)
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

// home route. send Hello World
app.get('/', (req, res)=>{
    res.send(`Hello, World!`)
})


// listen to the port
app.listen(PORT, ()=>{
    console.log(`Server is listening on: ${PORT}`)
})
