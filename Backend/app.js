

//importing express 
const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/user')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 8900;

//creating server
let app = express()

//Middleware
app.use(bodyParser.json())

//using cors for Cross Origin Resourse Sharing
app.use(cors())

//URL for mongodb
const MONGO_URI = `mongodb://localhost:27017/studied`;

//connecting to MongoDB 
mongoose.connect(MONGO_URI,{useNewUrlParser:true},()=>{
    console.log(`Connected to MongoDB.`)
    },
    e=>console.log(`Error in connecting to MongoDB:- ${e}`)
)


app.use('/',route)

//Server listening to PORT 8900
app.listen(PORT,()=>{
    console.log(`Listening to PORT:${PORT}`)
})