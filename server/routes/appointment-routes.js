const express = require('express');
const controller = require('../controllers/appointmentControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getAppointment);
router.post('/book/appointment', controller.bookAppointment);
router.get('/:id', controller.getAppointmentById);
router.delete('/:id', controller.deleteAppointmentById);
router.get('/doctor/:doctorId', controller.getAppointmentByDoctorId);
router.get('/api/:userId', controller.getAppointmentsByUserId);
module.exports = router;
