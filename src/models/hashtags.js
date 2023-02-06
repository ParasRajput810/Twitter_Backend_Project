const mongoose = require("mongoose");
const {Schema} = mongoose;

const hashtagsSchema = new Schema({
    title:{
        type : String,
        required : true,
        unique : true
    },
    tweets:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ]
} , {timestamps : true});

const hashtags = mongoose.model('hashtags' , hashtagsSchema);

module.exports = hashtags;