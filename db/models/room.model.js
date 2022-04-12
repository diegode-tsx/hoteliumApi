const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
   room_type: { type: String, required: true, maxlength: 50 },
   price: { type: Number, required: true, max: 1000000 },
   capacity: {type: Number, required: true, maxlength: 10},
   amount: { type: Number, required: true }
}, { versionKey: false });

const Room = mongoose.model('Room', roomSchema);

module.exports = {
   Room: Room
}
