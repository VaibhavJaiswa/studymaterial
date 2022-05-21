const mongoose = require('mongoose')


//Location Schema
const schema = new mongoose.Schema({
    _id:String,
    name:String,
    email:String,
    password:String,
    phone:String,
    studyMaterial:Array
})

//exporting location model
module.exports = mongoose.model('users',schema,'users')