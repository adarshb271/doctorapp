const express = require('express');
const upload = require('../middlewares/upload');
const controller = require('../controllers/hospitalControllers');

const router = express.Router();

router.get('/', controller.getHospital);
router.get('/:id', controller.getHospitalById);

// router.post('/ ', controller.postHospital);
router.post('/', upload.single('image'), controller.postHospital);

  
module.exports = router;
