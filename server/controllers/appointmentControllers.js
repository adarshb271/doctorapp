const Appointment = require('../db/models/appointment-Schema');

module.exports.getAppointment = async (req, res) => {
  const appointment = await Appointment.find();

  res.status(200).json(appointment);
};

// module.exports.postAppointment = async (req, res) => {
//   const appointment = await Appointment.create({
//     fullName: req.body.fullName,
//     // department: req.body.department,
//     // email: req.body.email,
//     // date: req.body.date,
//     // time: req.body.time,
//     // doctor: req.body.doctor,
//     // reson: req.body.reson,
//   });
//   res.status(200).json({ message: 'appointment added', data: appointment });
// };
module.exports.bookAppointment = async (req, res) => {
  try {
    const response = await Appointment.create({
      department: req.body.department,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      message: req.body.message,
      fullname: req.body.fullname,
    });

    res
      .status(200)
      .json({ message: 'Slot Booked successfully', data: response });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error booking slot', error: error.message });
  }
};
