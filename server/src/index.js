const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();

//middle wares 
app.use(cors());
app.use(express.json());

//listen to a port
app.listen(3000, () =>{
    console.log("SERVER STARTED");
})