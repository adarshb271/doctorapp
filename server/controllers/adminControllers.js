const Admin = require('../db/models/admin-schema');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.loginAdmin = async (req, res) => {
  const { email } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (!admin) {
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

  const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.ADMIN, {
    expiresIn: '365d',
  });

  res.status(200).json({ message: 'You Are Logged In', token, id: admin._id });
};

module.exports.signupAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      return res
        .status(403)
        .json({ message: 'Email already exists, please use a different one.' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newAdmin = await Admin.create({
      ...req.body,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: 'Admin created successfully.', admin: newAdmin });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Server error', error: err.message });
  }
};
