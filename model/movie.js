const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String },
  year: { type: Number, required: true },
  director: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
