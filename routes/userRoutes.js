const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidationSchema = require('../schema/userValidationSchema');
const validationSchema = require('../middlewares/validationSchema');

router.post(
  '/singup',
  validationSchema.validateBody(userValidationSchema.signup),
  userController.signup
);

module.exports = router;
