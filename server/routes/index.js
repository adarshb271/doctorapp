const express = require('express');

const departmentRoutes = require('./department-routes');
const hospitalRoutes = require('./hospital-routes');
const userRoutes = require('./a-user-routes');
const doctorRoutes = require('./doctor-routes');
const appointmentRoutes = require('./appointment-routes');
const router = express.Router();
router.use('/appointment', appointmentRoutes);
router.use('/department', departmentRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/user', userRoutes);
router.use('/doctor', doctorRoutes);

module.exports = router;
