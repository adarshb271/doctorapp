const mongoose = require('mongoose');
const Department = require('./department-schema');
const Hospital = require('./hospital-Schema');

// const doctorSchema = mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//       // required: true,
//       // trim: true,
//     },
//     lastname: {
//       type: String,
//       // required: true,
//       // trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       // trim: true,
//       // unique: true,
//     },
//     password: {
//       type: String,
//       // required: true,
//       trim: true,
//     },
//     mobilenumber: {
//       type: String,
//       // required: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//       // required: true,
//     },
//     confirmpassword: {
//       type: String,
//     },
//     department: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Department',
//     },
//     hospital: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Hospital',
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Doctor = mongoose.model('Doctor', doctorSchema);

// module.exports = Doctor;

const doctorSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    mobilenumber: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'doctor', 'user'],
      default: 'doctor',
    },
    specialization: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
