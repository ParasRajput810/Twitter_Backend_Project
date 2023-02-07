const tweetSerivce = require("../services/tweetService");

const tweetservice= new tweetSerivce();

const create = async(req,res)=>{
    try {
        const response = await tweetservice.create(req.body);
        return res.status(201).json({
            data : response,
            success : true,
            err :{},
            message : "Tweet Created Successfully"
        })
    } catch (error) {
        return res.status(400).json({
            data : {},
            success : false,
            err : error,
            message : "Tweet cannot be created"
        })
    }

}

module.exports = {create};