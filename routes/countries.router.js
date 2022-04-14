const express = require('express');

const CountryService = require('../services/countries.service');

const router = express.Router();
const service = new CountryService();

router.get('/', async (req, res, next) => {
   try {
      const countries = await service.find();
      res.json(countries);
   } catch (error) {
      next(error);
   }
});

module.exports = router;
