const { Reservation } = require('../db/models/reservation.model');

class ReservationsService {
   constructor() {

   }

   async find() {

   }

   async save(data) {
      const reservationSave = await Reservation.save(data);
      return reservationSave;
   }
}

module.exports = ReservationsService;
