const userService = require("../services/userService");

const userservice = new userService();

const signup = async(req,res)=>{
    try {
        const response = await userservice.signup(req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : "User Created Successfully",
            err : {}
        })
    } catch (error) {
        return res.status(401).json({
            data : {},
            success : false,
            message : "User Creation failed",
            err : error
        })
    }
}

const signin = async(req,res)=>{
    try {
        
        const response = await userservice.signin(req.body);
        return res.status(201).json({
            data: response,
            success : true,
            message : "Sigin successfull",
            err : {}
        });
    } catch (error) {
        return res.status(401).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error
        });
    }
}

module.exports = {signup , signin};