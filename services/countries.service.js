const boom = require('@hapi/boom');
const { Country } = require('../db/models/country.model');

class CountriesService {
   constructor() {

   }

   async find() {
      const countries = await Country.find();
      if (countries.length === 0) {
         throw boom.notFound('countries not found');
      }
      return countries;
   }
}

module.exports = CountriesService;
