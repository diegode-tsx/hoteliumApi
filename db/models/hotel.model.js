const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');

const hotelSchema = new Schema({
   name: { type: String, required: true, maxlength: 35 },
   qualification: { type: Number, required: true, max: 5},
   local_iso: { type: String, required: true, maxlength: 5 },//MXSVC (pais y hotel)
   country: { type: String, required: true, maxlength: 35 },
   short_desc: { type: String, required: true, maxlength: 40},
   description: { type: String, required: true, maxlength: 255},
   servicios: [
      {
         servicio: { type: String, required: true, maxlength: 50 }
      }
   ],
   etiquetas: [
      {
         etiqueta: { type: String, required: true, maxlength: 50 }
      }
   ],
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
   ubicacion: { type: String, required: true }
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
