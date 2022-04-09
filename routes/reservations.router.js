const express = require('express');

const ReservationService = require('../services/reservations.service');

const router = express.Router();
const service = new ReservationService();

router.get('/', async (req, res, next) => {

});

router.post('/', async (req, res, next) => {
const reservation = req.body
const newReservation = await service.create(reservation);
res.json(newReservation);
});

module.exports = router;
