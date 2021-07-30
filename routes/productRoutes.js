const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validationSchema = require('../middlewares/validationSchema');
const productValidationSchema = require('../schema/productValidationSchema');

router.post(
  '/',
  validationSchema.validateBody(productValidationSchema.createProductSchema),
  productController.createProduct
);

router.get(
  '/',
  validationSchema.validateQueryParams(productValidationSchema.getAllProductSchema),
  productController.getAllProducts
);

router.get('/:id', productController.getProductById);

router.put(
  '/:id',
  validationSchema.validateBody(productValidationSchema.updateProductSchema),
  productController.updateProduct
);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
