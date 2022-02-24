const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 2555;
const connect = require("./config");

app.use(express.json());

const allTopicsController = require("./controllers/allTopics.controller");

app.use("/alltopics/", allTopicsController)

app.listen(port, async() => {
    try{
        await connect();
        console.log("Port 2555 is running");
    }catch(err){
        console.log(err.message);
    }
});

// changes something

