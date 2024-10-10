const express = require('express');
const { getStats, getDeviation } = require('../controllers/cryptoController');
const fetchCryptoData = require('../controllers/fetchCryptoData');
const router = express.Router();

//routes for /stats
router.get('/stats', getStats);

//routes for /deviation
router.get('/deviation', getDeviation);

module.exports = router;