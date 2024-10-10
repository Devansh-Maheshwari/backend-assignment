const express=require('express')
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();

const PORT=process.env.PORT || 3000;

require("./config/database").connect();
app.listen(PORT ,()=>{
    console.log(`app running at port ${PORT}`);
})