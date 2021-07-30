const Product = require('../database/models/productModel');
const { formatMongoData } = require('../helpers/dbHelper');

const createProduct = async (data) => {
  try {
    let product = new Product({
      ...data,
    });
    let result = await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong: Service: createProduct', error);
    throw new Error(error);
  }
};

const getAllProducts = async (data) => {
  try {
    let products = await Product.find({});
    return formatMongoData(products);
  } catch (error) {
    console.log('Something went wrong: Service: getAllProducts', error);
    throw new Error(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
