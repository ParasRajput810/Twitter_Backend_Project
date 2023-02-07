const express = require("express");
const {PORT}= require("./config/serverConfig");
const bodyparser = require("body-parser");
const connect = require("./config/databaseConfig");
const Apiroutes = require("./routes/index");


const serverConnect = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use("/api" , Apiroutes);

    app.listen(PORT, async()=>{
        console.log("connecting to database");
        
        await connect();
      
        console.log("connected to database");
        console.log("Server Started...");
    })
}

serverConnect();