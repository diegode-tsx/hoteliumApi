const express = require('express');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {
   const hotels = await service.find();
   res.json(hotels);
});

router.post('/', async (req, res, next) => {
   const body = req.body;
   const newHotel = await service.create(body);
   res.json(newHotel);
})

module.exports = router;
