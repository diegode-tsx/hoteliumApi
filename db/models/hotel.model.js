const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');
const { Country } = require('./country.model');
const { Service } = require('./service.model');

const hotelSchema = new Schema({
   name: { type: String, required: true, maxlength: 35 },
   rating: { type: Number, required: true, max: 5 },
   local_iso: { type: String, required: true, maxlength: 5 },//MXSVC (pais y hotel)
   country: { type: Schema.Types.ObjectId, ref: 'Country' },
   short_desc: { type: String, required: true, maxlength: 255 },
   description: { type: String, required: true },
   services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
   tag: { type: String, required: true, maxlength: 20 },
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
   location: { type: String, required: true },
   images: [{ type: String, required: true }]
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
