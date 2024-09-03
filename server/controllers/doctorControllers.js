const Doctor = require('../db/models/doctor-Schema');
const genPassword = require('generate-password');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports.getDoctor = async (req, res) => {
  const doctor = await Doctor.find().populate('department', 'name');

  res.status(200).json(doctor);
};

module.exports.signupDoctor = async (req, res) => {
  const doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor) {
    return res.status(403).json({ message: 'Email already taken' });
  }

  const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  // const docPassword = genPassword.generate({
  //   length: 10,
  //   numbers: true,
  // });

  const hashedPassword = await bcrypt.hash(req.body.password, 2);

  const response = await Doctor.create({
    ...req.body,
    password: hashedPassword,
    image: imageLink,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    to: req.body.email,
    subject: 'Login Credentials for Doctor Booking App',
    text: `Hello, ${req.body.firstName}
    Your Username is : ${req.body.email}
    And Password is : ${req.body.password}`,
  };

  transporter.sendMail(mailOptions, err => {
    if (err) {
      return res.status(404).json({ message: 'error in mail sending' });
    } else res.status(200).json({ message: 'Mail Send', response: response });
  });
};

module.exports.loginDoctor = async (req, res) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (!doctor) {
    return res.status(403).json({ message: 'Email is incorrect' });
  }
  try {
    const isMatching = await bcrypt.compare(req.body.password, doctor.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'Incorrect Password' });
    }
  } catch {
    console.log('error');
  }

  const token = jwt.sign(
    { id: doctor._id, role: 'doctor' },
    process.env.DOCTORKEY,
    {
      expiresIn: '365d',
    }
  );

  res.status(200).json({ message: 'You Are Logged In', token, id: doctor._id });
};
module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (!doctor) {
    res.status(201).json({ message: 'Email doesnt exist' });
  }

  const resetToken = jwt.sign({ email: email }, process.env.DOCTORKEY, {
    expiresIn: 700,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.MAIL,
    to: email,
    subject: 'PASSWORD RESET MAIL',

    text: `please rest your password through this link  http://localhost:${process.env.PORT}/doctor/reset/${resetToken}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ ErrorOccurred: error });
    } else return res.status(201).json({ message: 'Mail Send' });
  });
};
module.exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmpassword } = req.body;

  try {
    const isValid = jwt.verify(token, process.env.DOCTORKEY);
    if (password != confirmpassword) {
      return res.status(201).json({ message: 'Passwords doesnt match' });
    }

    const email = isValid.email;
    const hashedpassword = await bcrypt.hash(password, 2);
    const doctor = await Doctor.findOneAndUpdate(
      { email: email },
      { password: hashedpassword }
    );
    res.status(201).json({ message: 'password reset suceesfully' });
  } catch (e) {
    res.status(401).json({ message: 'invalid Token' });
  }
};
module.exports.getDoctorById = async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  res.status(200).json(doctor);
};

module.exports.getDoctorByDepartmentId = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const doctors = await Doctor.find({
      department: new mongoose.Types.ObjectId(departmentId),
    }).populate('department', 'name');

    if (doctors.length === 0) {
      return res.status(404).json({ message: 'No doctors found' });
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error finding doctors by department:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching doctors.' });
  }
  // try {
  //   const doctor = await Doctor.find({
  //     department: new mongoose.Types.ObjectId(departmentId),
  //     // department: new mongoose.Types.ObjectId(departmentId),
  //   }).populate('department', 'name');
  //   // console.log('Doctors found:', doctor);
  //   res.status(200).json(doctor);
  // } catch (error) {
  //   console.error('Error finding doctors by department:', error);
  //   res
  //     .status(500)
  //     .json({ error: 'An error occurred while fetching doctors.' });
  // }
};
module.exports.getDoctorById = async (req, res) => {
  const { id } = req.params;
  const user = await Doctor.findById(id);
  res.status(200).json(user);
};
