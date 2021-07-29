const productService = require('../services/productService');

const createProduct = async (req, res) => {
  let response = {};
  try {
    const createdProduct = await productService.createProduct(req.body);
    response.status = 200;
    response.message = 'Product created successfully';
    response.body = createdProduct;
  } catch (error) {
    console.log('Something went wrong: Controller: createProduct', error);
    response.status = 400;
    response.message = error.mesage;
    response.body = {};
  }
  return res.status(response.status).json(response);
};

module.exports = {
  createProduct,
};
