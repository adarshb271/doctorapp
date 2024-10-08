const express = require('express');
const controller = require('../controllers/departmentControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getDepartment);
router.post('/', upload.single('image'), controller.postDepartment);
router.get('/:id', controller.getDepartmentById);
// router.get(
//   '/doctor/department/:departmentid',
//   controller.getDoctorByDepartmentId
// );

module.exports = router;
