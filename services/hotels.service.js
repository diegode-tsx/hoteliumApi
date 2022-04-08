const { Hotel } = require('../db/models/hotel.model');
const { Reservation } = require('../db/models/reservation.model');

class HotelsService {
   constructor() {

   }

   async find() {
      const hotels = await Reservation.find();
      const populatedHotels = Reservation.populate(hotels, {path: "room"});
      return populatedHotels;
      //return hotels;
   }

   async create(data) {
      const newHotel = await Reservation.create(data);
      return newHotel;
   }
}

module.exports = HotelsService;
