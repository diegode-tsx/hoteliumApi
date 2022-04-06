const mongoose = require('mongoose');
const { Schema } = mongoose;

const { Country } = require('./country.model');
const { Tag } = require('./tag.model');

const hotelSchema = new Schema({
   hotel: { type: String, required: true, maxlength: 40 },
   calification: { type: Number, required: true, max: 5 },
   description: { type: String, required: true, maxlength: 255 },
   tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
   country: { type: Schema.Types.ObjectId, ref: 'Country' },
}, { versionKey: false });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
   Hotel: Hotel
}
