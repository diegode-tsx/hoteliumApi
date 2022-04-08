const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');

const reservationSchema = new Schema({
   arrival_date: { type: Date, required: true},
   departure_date: { type: Date, required: true},
   num_guests: { type: Number, required: true, max: 40 },
   cant_habs: { type: Number, required: true, max: 30 },
   total_cost: { type: Number, required: true, min: 1000 },
   reservation_code: { type: String, required: true, maxlength: 14 },
   cliente: {
      name: { type: String, required: true, maxlength: 80 },
      phone: { type: Number, required: true, maxlength: 10},
      email: { type: String, required: true, maxlength: 70 }
   },
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
}, { versionKey: false });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = {
   Reservation: Reservation
}
