const mongoose = require("mongoose");

const {Schema} = mongoose;

const CommentSchema = new Schema({
    content :{
        type : String,
        required : true
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Like'
    }],
    onModel:{
        type : String,
        enum : ['Tweet' , 'Comment'],
        required : true
    },
    Commentable:{
        type : mongoose.Schema.Types.ObjectId,
        refPath : 'onModel',
        required :true,
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required :true
    }
},{timestamps:true});

const Comment = mongoose.model('Comment' , CommentSchema);

module.exports = Comment;