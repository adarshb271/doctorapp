const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      //   required: true,
      trim: true,
    },
    email: {
      type: String,
      //   required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    confirmpassword: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
