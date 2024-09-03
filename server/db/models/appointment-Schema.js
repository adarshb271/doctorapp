const Department = require('./department-schema');
const Doctor = require('./doctor-Schema');
const User = require('./user-Schema');
const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },

  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },

  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  firstname: {
    type: String,
  },
  mobilenumber: {
    type: String,
  },
  email: {
    type: String,
  },
  reason: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

// const mongoose = require('mongoose');
// const Doctor = require('./doctor-Schema');
// const User = require('./user-Schema');
// const Department = require('./department-schema');

// const appointmentSchema = mongoose.Schema({
//   // department: {
//   //   type: String,
//   //   // required: true,
//   // },
//   department: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Department',
//   },

//   // doctor: {
//   //   type: mongoose.Schema.Types.ObjectId,
//   //   ref: 'Doctor',
//   // },
//   doctor: {
//     type: mongoose.Schema.Types.ObjectId,

//     ref: 'Doctor',
//     // required: true,
//   },
//   date: {
//     type: Date,
//     // required: true,
//   },
//   time: {
//     type: String,
//     // required: true,
//   },
//   firstname: {
//     type: String,
//     // required: true,
//   },
//   mobilenumber: {
//     type: String,
//     // required: true,
//   },
//   email: {
//     type: String,
//     // required: false,
//   },
//   reason: {
//     type: String,
//     // required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//   },
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// module.exports = Appointment;
