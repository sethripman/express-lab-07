const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  measurement: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  directions: [String]
});

module.exports = mongoose.model('Recipe', schema);
