const express = require('express');

const ReservationService = require('../services/reservations.service');

const router = express.Router();
const service = new ReservationService();

router.get('/', async (req, res, next) => {

});

module.exports = router;
