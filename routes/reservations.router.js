const express = require('express');

const ReservationService = require('../services/reservations.service');

const router = express.Router();
const service = new ReservationService();

router.get('/', async (req, res, next) => {

});

router.post('/', async (req, res, next) => {
   try {
      const data = req.body
      const newReservation = await service.create(data);
      res.json(newReservation);
   } catch (error) {
      next(error);
   }
});

module.exports = router;
