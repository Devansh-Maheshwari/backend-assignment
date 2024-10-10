const Crypto = require('../model/Crypto');
const { std } = require('mathjs'); 

// Task 2: Fetch latest stats for a cryptocurrency
const getStats = async (req, res) => {
    const { coin } = req.query;
    // console.log(coin)
    if (!coin) {
        return res.status(400).json({ error: 'Coin parameter is required.' });
    }

    try {
        const latestData = await Crypto.findOne({ coin }).sort({ Timestamp: -1 }).exec();
        // console.log(latestData);   
        if (!latestData) {
            return res.status(404).json({ error: 'No data found for the specified coin.' });
        }

        return res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h
        });
    } catch (error) {
        // console.error("Error fetching stats: ", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Task 3: Calculate standard deviation of prices for a cryptocurrency
const getDeviation = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin parameter is required.' });
    }

    try {
        const records = await Crypto.find({ coin }).sort({ Timestamp: -1 }).limit(100).exec();
        
        if (records.length === 0) {
            return res.status(404).json({ error: 'No data found for the specified coin.' });
        }

        const prices = records.map(record => record.price);
        // console.log(prices)
        const deviation = std(prices);
        // console.log(deviation)
        return res.json({ deviation: parseFloat(deviation.toFixed(2)) }); 
    } catch (error) {
        // console.error("Error fetching deviation: ", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getStats, getDeviation };
