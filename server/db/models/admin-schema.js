const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      //   required: true,
      trim: true,
    },
    lastname: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
      trim: true,
    },
    mobilenumber: {
      type: String,
      // required: true,
      trim: true,
    },

    confirmpassword: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'doctor', 'user'],
      default: 'admin',
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
