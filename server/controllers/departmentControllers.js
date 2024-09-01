const Department = require('../db/models/department-schema');
// const db = require('./db');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//get dep from api

module.exports.getDepartment = async (req, res) => {
  const department = await Department.find();

  res.status(200).json(department);
};
module.exports.postDepartment = async (req, res) => {
  const department = await Department.create({
    name: req.body.name,
    image: `http://localhost:${process.env.PORT}/upload/${req.file.filename}`,
  });
  res.status(200).json({ message: 'department added', data: department });
};

module.exports.getDepartmentById = async (req, res) => {
  const { id } = req.params;
  const department = await Department.findById(id);
  res.status(201).json(department);
};

