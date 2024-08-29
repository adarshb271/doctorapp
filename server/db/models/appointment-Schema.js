const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  department: {
    type: String,
    // required: true,
  },
  doctor: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  time: {
    type: String,
    // required: true,
  },
  fullname: {
    type: String,
    // required: true,
  },
  mobilenumber: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: false,
  },
  reason: {
    type: String,
    // required: true,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
