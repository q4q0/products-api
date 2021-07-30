const productService = require('../services/productService');
const constants = require('../constants');
const createProduct = async (req, res) => {
  let response = {};
  try {
    const createdProduct = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = createdProduct;
  } catch (error) {
    console.log('Something went wrong: Controller: createProduct', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).json(response);
};

const getAllProducts = async (req, res) => {
  let response = {};
  try {
    const allProducts = await productService.getAllProducts(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = allProducts;
  } catch (error) {
    console.log('Something went wrong: Controller: getAllProducts', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).json(response);
};

const getProductById = async (req, res) => {
  let response = {};
  try {
    const allProducts = await productService.getProductById(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = allProducts;
  } catch (error) {
    console.log('Something went wrong: Controller: getProductById', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).json(response);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
