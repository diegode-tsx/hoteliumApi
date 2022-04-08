const express = require('express');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {
   const detailedRooms = req.query.detailed_rooms;
   const hotels = await service.find(detailedRooms);
   res.json(hotels);
});

router.get('/tags/:tag', async (req, res, next) => {

});

router.get('countries/:country', async (req, res, next) => {

});

router.post('/', async (req, res, next) => {
   const body = req.body;
   const newHotel = await service.create(body);
   res.json(newHotel);
});

module.exports = router;
