const express = require('express');

const CountryService = require('../services/countries.service');

const router = express.Router();
const service = new CountryService();

router.get('/', async (req, res, next) => {

});

module.exports = router;
