const mongoose = require('mongoose');

const lenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 1  // enforce minimum lending time of 1 unit (day, hour, etc.)
  },
  images: {
    type: [String],
    validate: {
      validator: (images) => images.length <= 3,
      message: 'Maximum of 3 images allowed'
    }
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  productQuality: {
    type: Number,
    min: 1,
    max: 5  // allow ratings from 1 (worst) to 5 (best)
  },
  negotiable: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Lender', lenderSchema);