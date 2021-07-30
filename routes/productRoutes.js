const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validationSchema = require('../middlewares/validationSchema');
const productSchema = require('../schema/productSchema');

router.post(
  '/',
  validationSchema.validateBody(productSchema.createProductSchema),
  productController.createProduct
);

router.get('/', productController.getAllProducts);

module.exports = router;
