const express = require('express');
const controller = require('../controllers/appointmentControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getAppointment);
router.post('/', controller.bookAppointment);

module.exports = router;
