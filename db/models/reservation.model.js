const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
   //Definición del esquema para la colección de reservaciones
}, { versionKey: false });

const Reservation = mongoose.model('Hotel', reservationSchema);

module.exports = {
   Reservation: Reservation
}
