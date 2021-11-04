const mongoose = require('mongoose');
//define schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
//intialise model
const User = mongoose.model("users",UserSchema)
module.exports = User;