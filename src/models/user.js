const mongoose = require("mongoose");
const {Schema} = mongoose;
const {isEmail} = require("validator")

const UserSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    emailId:{
        type :String,
        validate : [isEmail , "Invalid Email"],
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    }
})

const User = mongoose.model('User' , UserSchema);

module.exports = User;