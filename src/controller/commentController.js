const commentService = require("../services/commentService");

const commentservice = new commentService();

const createcomment = async(req,res)=>{
    try {
        const response = await commentservice.create(req.body);
        return res.status(201).json({
            data : response,
            err : {},
            message : "Comment created Successfully",
            success : true
        })
    } catch (error) {
        throw {error};
    }
}

module.exports = {createcomment};