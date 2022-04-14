const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
   name: { type: String, required: true, maxlength: 35 },
   class: { type: String, required: true }
}, { versionKey: false })

const Service = mongoose.model('Service', serviceSchema);

module.exports = {
   Service: Service
}
