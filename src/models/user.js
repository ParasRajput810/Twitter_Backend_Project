const mongoose = require("mongoose");
const {Schema} = mongoose;
const {isEmail} = require("validator")
const {SALT} = require("../config/serverConfig");
const bcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

UserSchema.pre('save' , function (next){
    const user = this;
    const bcryptpassword = bcypt.hashSync(user.password , SALT);
    user.password = bcryptpassword;
    next(); 
})

UserSchema.methods.comparepassword = function compare(password){
    return bcypt.compareSync(password , this.password);
}

UserSchema.methods.genJWT = function gen(){
    return jwt.sign({id:this.id , email:this.email } , "twitter_secret" , {expiresIn : '1h'});
}

const User = mongoose.model('User' , UserSchema);

module.exports = User;