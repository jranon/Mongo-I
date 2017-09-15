const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('User', UserSchema);
