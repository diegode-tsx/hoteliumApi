const express = require('express');

const ReservationService = require('../services/reservations.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createReservationSchema } = require('./../schemas/reservation.schema');

const router = express.Router();
const service = new ReservationService();

router.get('/', async (req, res, next) => {

});

<<<<<<< HEAD
router.post('/', async (req, res, next) => {
   try {
      const data = req.body
      const newReservation = await service.create(data);
      res.json(newReservation);
   } catch (error) {
      next(error);
   }
});
=======
router.post('/',
   validatorHandler(createReservationSchema),
   async (req, res, next) => {
      const reservation = req.body
      const newReservation = await service.create(reservation);
      res.json(newReservation);
   });
>>>>>>> api

module.exports = router;
