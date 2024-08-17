const express = require('express');
const controller = require('../controllers/userControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controller.getUser);
router.post('/signup', upload.single('image'), controller.signupUser);
router.post('/login', controller.loginUser);
router.post('/forgotpassword', controller.forgotPassword);
router.post('/reset/:token', controller.resetPassword);
router.get('/:id', controller.getUserById);

module.exports = router;
