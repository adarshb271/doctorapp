const Hospital = require('../db/models/hospital-Schema');

module.exports.getHospital = async (req, res) => {
  const hospital = await Hospital.find();
  res.status(200).json(hospital);
};

module.exports.getHospitalById = async (req, res) => {
  const { id } = req.params;
  const hospital = await Hospital.findById(id);
  res.status(201).json(hospital);
};

module.exports.postHospital = async (req, res) => {
  const hospital = await Hospital.create({
    name: req.body.name,
    image: `http://localhost:${process.env.PORT}/upload/${req.file.filename}`,
  });
  res.status(200).json({ message: 'department added', data: hospital });
};
