const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidationSchema = require('../schema/userValidationSchema');
const validationSchema = require('../middlewares/validationSchema');

router.post(
  '/signup',
  validationSchema.validateBody(userValidationSchema.signup),
  userController.signup
);

router.post(
  '/login',
  validationSchema.validateBody(userValidationSchema.login),
  userController.login
);

module.exports = router;
