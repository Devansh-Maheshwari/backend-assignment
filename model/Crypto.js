const mongoose=require('mongoose')

const cryptoSchema=new mongoose.Schema({
    coin:String,
    price:Number,
    marketCap:Number,
    change24h:Number,
    Timestamp:{type:Date,default:Date.now}
});
module.exports=mongoose.model('Crypto',cryptoSchema);