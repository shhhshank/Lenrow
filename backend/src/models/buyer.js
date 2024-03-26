
const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  priceRange: {
    type: {
      min: { type: Number, required: true },
      max: { type: Number, required: true }
    }
  },
  duration: {
    type: Number,
    required: true,
    min: 1  // enforce minimum lending time of 1 unit (day, hour, etc.)
  },
  
});

module.exports = mongoose.model('Buyer', buyerSchema);