const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
   //Definición del esquema para la colección de hoteles
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
