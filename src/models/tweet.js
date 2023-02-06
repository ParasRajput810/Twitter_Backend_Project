const mongoose = require("mongoose");
const {Schema} = mongoose

const tweetschema = new Schema({
    content : {
        type : String,
        required : true
    },
    
}, {timestamps : true});

const Tweet = mongoose.model("Tweet" , tweetschema);

module.exports = Tweet;