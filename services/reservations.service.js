const mongoose = require('mongoose');
const boom = require('@hapi/boom');

const { Reservation } = require('../db/models/reservation.model');
const { Room } = require('../db/models/room.model');

class ReservationsService {
   constructor() {

   }

   async create(data) {
      const rooms = data.rooms;
      for(const id of rooms) {
         const room = await Room.findById(id).select('amount -_id');
         if (room.amount <= 0) {
            throw boom.badRequest('room is not available');
         }
         const update = { $inc: { amount: -1 } };
         await this.updateRoomById(id, update);
      }

      const newReservation = await Reservation.create(data);
      return newReservation;
   }

   async updateRoomById(id, update) {
      await Room.findByIdAndUpdate(id, update);
   }
}

module.exports = ReservationsService;
