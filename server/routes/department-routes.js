const express = require('express');
const controller = require('../controllers/departmentControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getDepartment);
router.post('/', upload.single('image'), controller.postDepartment);
router.get('/:id', controller.getDepartmentById);
module.exports = router;
