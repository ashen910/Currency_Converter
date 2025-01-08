const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();

//middle wares 
app.use(cors());
app.use(express.json());

//Get access to the All currencies
app.get("/getAllCurrencies",async (req, res)=> {
const nameURL =`https://openexchangerates.org/api/currencies.json?app_id=cc2f32e33aa9418eacd4b68a3f6411fd`;

    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;

        return res.json(nameData);
    }catch(err) {
        console.error(err);
    }

});

//Target Converted amount storing in server side
app.get("/convert",async(req, res)=> {

const {date,sourceCurrency,targetCurrency,amountInSourceCurrency}= 
req.query;

try {
    const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=cc2f32e33aa9418eacd4b68a3f6411fd`;

    const dataResponce = await axios.get(dataURL);
    const rates = dataResponce.data.rates;
//rates
const sourceRate = rates[sourceCurrency];
const targetRate = rates[targetCurrency];

//Final target Value
const targetAmount = (targetRate/sourceRate) * amountInSourceCurrency;

return res.json(targetAmount.toFixed(2));

//Calcualate Target Curency
} catch(err) {
    console.error(err);  
}
});

//listen to a port
app.listen(3000, () =>{
    console.log("SERVER STARTED");
})