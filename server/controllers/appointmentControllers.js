const Appointment = require('../db/models/appointment-Schema');
const mongoose = require('mongoose');

module.exports.getAppointment = async (req, res) => {
  const appointment = await Appointment.find()

    .populate('department', 'name')
    .populate('doctor', 'firstname lastname');

  res.status(200).json(appointment);
};

module.exports.bookAppointment = async (req, res) => {
  console.log('Received appointment data:', req.body);
  try {
    const response = await Appointment.create({
      department: req.body.department,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      reason: req.body.reason,
      fullname: req.body.fullname,
      user: req.body.user,
    });

    res
      .status(200)
      .json({ message: 'Slot Booked successfully', data: response });
  } catch (error) {
    res.status(500).json({ message: 'Error booking slot:', e: error.message });
  }
};

// module.exports.bookAppointment = async (req, res) => {
//   try {
//     const response = await Appointment.create({
//       department: req.body.department,
//       doctor: req.body.doctor,
//       date: req.body.date,
//       time: req.body.time,
//       email: req.body.email,
//       mobilenumber: req.body.mobilenumber,
//       message: req.body.message,
//       fullname: req.body.fullname,
//       user: req.body.user,
//     });

//     res
//       .status(200)
//       .json({ message: 'Slot Booked successfully', data: response });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Error booking slot', error: error.message });
//   }
// };

// module.exports.getAppointmentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await Appointment.findById(id);
//     res.status(201).json(response);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// module.exports.getAppointmentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const appointment = await Appointment.findById(id);
//     res.status(201).json(appointment);
//   } catch (e) {
//     res.status(500).json({ AppointmentError: e.message });
//   }
// };
module.exports.getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id)
      .populate('department', 'name')
      .populate('doctor', 'firstname lastname');

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
};
module.exports.deleteAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Appointment.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: 'appointment not found' });
    }
    res.status(200).json({ message: 'appointment deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.getAppointmentsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const appointments = await Appointment.find({ user: userId })
      .populate('doctor')
      .populate('department');

    if (appointments.length === 0) {
      return res
        .status(404)
        .json({ error: 'No appointments found for this user' });
    }

    res.status(200).json({ appointments });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching appointments', error: error.message });
  }
};
module.exports.getAppointmentByDoctorId = async (req, res) => {
  const { doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId)) {
    return res.status(400).json({ message: 'Invalid doctor ID' });
  }

  try {
    const appointments = await Appointment.find({
      doctor: new mongoose.Types.ObjectId(doctorId),
    });

    if (!appointments.length) {
      return res
        .status(404)
        .json({ message: 'No appointments found for this doctor' });
    }

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
