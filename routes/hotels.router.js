const express = require('express');

const HotelService = require('../services/hotels.service');

const router = express.Router();
const service = new HotelService();

router.get('/', async (req, res, next) => {
   const hotels = await service.find();
   res.json(hotels);
});

router.get('/:id', async (req, res, next) => {

});

router.get('/countries/:name', async (req, res, next) => {

});

router.get('/tags/:name', async (req, res, next) => {

});

router.post('/', async (req, res, next) => {
   try {
      const body = req.body;
      const newHotel = await service.create(body);
      res.json(newHotel);
   } catch (error) {

   }
});

module.exports = router;
