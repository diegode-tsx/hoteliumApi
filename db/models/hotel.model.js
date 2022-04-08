const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');
const { Country } = require('./country.model');

const hotelSchema = new Schema({
   name: { type: String, required: true, maxlength: 35 },
   rating: { type: Number, required: true, max: 5},
   local_iso: { type: String, required: true, maxlength: 5 },//MXSVC (pais y hotel)
   country: { type: Schema.Types.ObjectId, ref: 'Country'},
   short_desc: { type: String, required: true, maxlength: 255},
   description: { type: String, required: true},
   services: [
      {
         service: { type: String, required: true, maxlength: 50 }
      }
   ],
   tags: [
      {
         tag: { type: String, required: true, maxlength: 50 }
      }
   ],
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
   ubication: { type: String, required: true }
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
