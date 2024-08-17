const express = require('express');
const controller = require('../controllers/doctorControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getDoctor);
router.post('/signup', upload.single('image'), controller.signupDoctor);

router.post('/login', controller.loginDoctor);
router.post('/forgotpassword', controller.forgotPassword);
router.post('/reset/:token', controller.resetPassword);
router.get('/:id', controller.getDoctorById);
module.exports = router;
