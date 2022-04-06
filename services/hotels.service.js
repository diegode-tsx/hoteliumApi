const { Hotel } = require('../db/models/hotel.model');

class HotelsService {
   constructor() {

   }

   async find() {
      const hotels = await Hotel.find();
      return hotels;
   }

   async findOne(id) {

   }

   async findByCountry(country) {

   }

   async findByTag(tag) {

   }

   async create(data) {
      const newHotel = await Hotel.create(data);
      return newHotel;
   }
}

module.exports = HotelsService;
