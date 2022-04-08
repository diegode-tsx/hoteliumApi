const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
   room_type: {type: String, required: true, maxlength: 35},
   price: {type: Number, required: true, max: 50000}
}, { versionKey: false });

const Room = mongoose.model('Room', roomSchema);

module.exports = {
   Room: Room
}
