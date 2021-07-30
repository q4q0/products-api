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

router.get(
  '/',
  validationSchema.validateQueryParams(productSchema.getAllProductSchema),
  productController.getAllProducts
);

router.get('/:id', productController.getProductById);

router.put(
  '/:id',
  validationSchema.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
);

module.exports = router;
