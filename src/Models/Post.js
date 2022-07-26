const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Post', Schema);