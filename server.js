// require express
const express = require(`express`)
// Invoke an instance of express and save return value in app
const app = express()
let PORT = 3000


// Home Route. send Hello World
app.get('/', (req, res)=>{
    res.send(`Hello, World!`)
})


// Listen to the port
app.listen(PORT, ()=>{
    console.log(`Server is listening on: ${PORT}`)
})
