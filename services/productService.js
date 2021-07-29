const Product = require('../database/models/productModel');

const createProduct = async (data) => {
  try {
    let product = new Product({
      ...data,
    });
    return await product.save();
  } catch (error) {
    console.log('Something went wrong: Service: createProduct', error);
    throw new Error(error);
  }
};

module.exports = {
  createProduct,
};
