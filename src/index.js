const express = require("express");
const {PORT}= require("./config/serverConfig");
const bodyparser = require("body-parser");
const connect = require("./config/databaseConfig");



const serverConnect = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT, async()=>{
        console.log("connecting to database");
        
        await connect();
        console.log("entering");
        console.log("connected to database");
        console.log("Server Started...")
    })
}

serverConnect();