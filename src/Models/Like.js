const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  picture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
});

module.exports = mongoose.model('Like', Schema);