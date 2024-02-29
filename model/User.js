const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    telegramId: {
      type: String,
      required: true,
      unique: true
    },
    proMemberSol: {
      type: Boolean,
      default: false,
    },
    proMemberEth: {
      type: Boolean,
      default: false,      
    },
    datetimeEth: {
      type: String,
      default: ""
    },
    datetimeSol: {
      type: String,
      default: ""
    },
    triesCount: {
      type: Number,
      default: 0
    },
  });
  // Create a User model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;