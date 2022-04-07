const express = require('express');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {
   const hotels = await service.find();
   res.json(hotels);
});

module.exports = router;
