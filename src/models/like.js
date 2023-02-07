const mongoose = require("mongoose");

const {Schema} = mongoose;

const LikeSchema = new Schema({
    onModel :{
        type : String,
        required : true,
        enum :['Tweet' , 'Comment']
    },
    likeable:{
        type : mongoose.Schema.Types.ObjectId,
        refPath : 'onModel',
        required : 'true'
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required :true
    }
} , {timestamps : true});

const Like = mongoose.model('Like' , LikeSchema);
module.exports = Like;