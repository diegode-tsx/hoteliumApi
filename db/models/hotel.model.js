const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Room } = require('./room.model');

const hotelSchema = new Schema({
   name: { type: String, required: true, maxlength: 35 },
   country: { type: String, required: true, maxlength: 35 },
   rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
