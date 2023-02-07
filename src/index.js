const express = require("express");
const {PORT}= require("./config/serverConfig");
const bodyparser = require("body-parser");
const connect = require("./config/databaseConfig");
const Apiroutes = require("./routes/index");
const UserRepository = require("./repository/UserRepository");

const serverConnect = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use("/api" , Apiroutes);

    app.listen(PORT, async()=>{
        console.log("connecting to database");
        
        await connect();
        const userrepo = new UserRepository();
        const response = await userrepo.create({name:"Paras", emailId:"pr008101999@gmail.com" , password : "8101999"})
        console.log("connected to database");
        console.log("Server Started...");
    })
}

serverConnect();