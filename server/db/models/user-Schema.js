const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      // required: true,
      // trim: true,
    },
    lastname: {
      type: String,
      //   required: true,
      // trim: true,
    },

    email: {
      type: String,
      //   required: true,
      // unique: true,
      trim: true,
    },
    password: {
      type: String,
      // trim: true,
    },
    mobilenumber: {
      type: String,
      // required: true,
      // trim: true,
    },
    DOB: {
      type: Date,
      // required: true,
    },
    gender: {
      type: String,
      // enum: ['Male', 'Female', 'Other'],
      // required: true,
    },
    address: {
      type: String,
      // required: true,
      // trim: true,
    },
    confirmpassword: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'doctor', 'user'],
      default: 'user',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
