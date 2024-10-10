const Crypto=require('../model/Crypto')
require("dotenv").config()

const fetchCryptoData=async()=>{
    const coins=['bitcoin', 'ethereum','matic-network'];
    const url=process.env.API_URL;
    try {
        const response=await fetch(url);
        const data =await response.json();
        
        // console.log(data);
        for(const coin of coins){
            const cryptoData = {
                coin: coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change
            
        }; 
            // console.log(cryptoData);
            await Crypto.create(cryptoData);
        }

    }
    catch(error){
        console.log("Error fetching data: ",error);
    }
}
module.exports=fetchCryptoData;