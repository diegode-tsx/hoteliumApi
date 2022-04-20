const express = require('express');

const ReservationService = require('../services/reservations.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createReservationSchema } = require('./../schemas/reservation.schema');
const sendMailOp = require('../libs/mail/nodemailer');

const router = express.Router();
const service = new ReservationService();

router.get('/', async (req, res, next) => {

});

router.post('/',
   validatorHandler(createReservationSchema),
   async (req, res, next) => {
      try {
         const data = req.body
         const newReservation = await service.create(data);
         await sendMailOp(data);
         res.json(newReservation);
      } catch (error) {
         next(error);
      }
   });

module.exports = router;
