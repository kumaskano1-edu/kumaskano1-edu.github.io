const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    telegramId: {
      type: String,
      required: true,
      unique: true
    },
    proMember: {
      type: Boolean,
      default: false
    },
    triesCount: {
      type: Number,
      default: 0
    },
  });
  // Create a User model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;