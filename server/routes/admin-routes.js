const express = require('express');
const controller = require('../controllers/adminControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/signup', controller.signupAdmin);
router.post('/login', controller.loginAdmin);

module.exports = router;
