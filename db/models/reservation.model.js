const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');

const reservationSchema = new Schema({
   arrival_date: { type: Date, required: true},
   departure_date: { type: Date, required: true},
   num_guests: { type: Number, required: true, max: 10 },
   num_rooms: { type: Number, required: true, max: 10 },
   total_cost: { type: Number, required: true },
   reservation_code: { type: String, required: true, maxlength: 14 },
   client: {
      name: { type: String, required: true, maxlength: 60 },
      phone: { type: String, required: true, maxlength: 10},
      email: { type: String, required: true, maxlength: 60 }
   },
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
}, { versionKey: false });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = {
   Reservation: Reservation
}
