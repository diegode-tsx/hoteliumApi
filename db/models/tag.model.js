const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
   name: { type: String, required: true }
}, { versionKey: false });

const Tag = mongoose.model('Tag', tagSchema);

module.exports = {
   Tag: Tag
}
