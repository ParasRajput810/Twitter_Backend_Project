const mongoose = require("mongoose");
const {Schema} = mongoose

const tweetschema = new Schema({
    content : {
        type : String,
        required : true
    },
    likes :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like"
    }]
}, {timestamps : true});

const Tweet = mongoose.model("Tweet" , tweetschema);

module.exports = Tweet;