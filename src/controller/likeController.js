const likeService = require("../services/likeService");

const likeservice = new likeService();

const createlike = async(req,res)=>{
    try {
        const response = await likeservice.create(req.body.ModelType , req.body.ModelID , req.body.UserId);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Like Updated",
            err : {}
        });
    } catch (error) {
        return res.status(401).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error 
        })
    }
}

module.exports = {createlike};