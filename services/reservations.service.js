const { Reservation } = require('../db/models/reservation.model');

class ReservationsService {
   constructor() {

   }

   async create(data) {
      const reservationSave = await Reservation.updateOne(data);
      return reservationSave;
   }

   async update(data) {

   }
}

module.exports = ReservationsService;
