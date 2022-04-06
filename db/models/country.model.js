const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
   name: { type: String, required: true }
}, { versionKey: false });

const Country = mongoose.model('Country', countrySchema);

module.exports = {
   Country: Country
}
