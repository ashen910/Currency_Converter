const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();

//middle wares 
app.use(cors());
app.use(express.json());

//Get access to the All currencies
app.get("/getAllCurrencies",async (req, res)=> {
const nameURL ='https://docs.openexchangerates.org/reference/currencies-json?app_id=cc2f32e33aa9418eacd4b68a3f6411fd';

return res.json(nameData);

    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;
    }catch(err) {
        console.error(err);
    }

});

//listen to a port
app.listen(3000, () =>{
    console.log("SERVER STARTED");
})