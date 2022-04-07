const { Hotel } = require('../db/models/hotel.model');

class HotelsService {
   constructor() {

   }

   async find() {
      const hotels = await Hotel.find();
      return hotels;
   }
}

module.exports = HotelsService;
