const express=require('express')
const mongoose=require('mongoose');
const fetchCryptoData=require('./controllers/fetchCryptoData')
const cryptoRoutes = require('./Routes/cryptoRoutes');
const schedule = require('node-schedule');
require('dotenv').config();

const app=express();

const PORT=process.env.PORT || 3000;

require("./config/database").connect();

app.use('/',cryptoRoutes)

//Task 1 :Implement a background job that will fetch the current price in USD,That will run every 2hrs

const job = schedule.scheduleJob('0 */2 * * *', async () => {
    try {
        await fetchCryptoData();
        console.log('Crypto data fetched successfully!');
    } catch (error) {
        console.error("Error fetching crypto data: ", error);
    }
});

app.listen(PORT ,()=>{
    console.log(`app running at port ${PORT}`);
})