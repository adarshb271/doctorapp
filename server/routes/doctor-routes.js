const express = require('express');
const controller = require('../controllers/doctorControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getDoctor);
router.post('/signup', upload.single('image'), controller.signupDoctor);
router.get('/:id', controller.getDoctorById);

router.post('/login', controller.loginDoctor);
router.post('/forgotpassword', controller.forgotPassword);
router.post('/reset/:token', controller.resetpassword);
router.get('/:id', controller.getDoctorById);
router.get(
  '/doctors/department/:departmentId',
  controller.getDoctorByDepartmentId
);
module.exports = router;
