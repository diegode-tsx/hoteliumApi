const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');

const reservationSchema = new Schema({
   room: { type: Schema.Types.ObjectId, ref: 'Room' }
}, { versionKey: false });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = {
   Reservation: Reservation
}
