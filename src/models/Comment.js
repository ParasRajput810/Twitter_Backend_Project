const mongoose = require("mongoose");

const {Schema} = mongoose;

const CommentSchema = new Schema({
    content :{
        type : String,
        required : true
    },
    Comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Like'
    }]
},{timestamps:true});

const Comment = mongoose.model('Comment' , CommentSchema);

module.exports = Comment;