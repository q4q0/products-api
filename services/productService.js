const Product = require('../database/models/productModel');
const { checkObjectId, formatMongoData } = require('../helpers/dbHelper');
const constants = require('../constants');

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

const getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    console.log('Something went wrong: Service: getAllProducts', error);
    throw new Error(error);
  }
};

const getProductById = async (id) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Something went wrong: Service: getProductById', error);
    throw new Error(error);
  }
};

const updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Something went wrong: Service: updateProduct', error);
    throw new Error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Something went wrong: Service: deleteProduct', error);
    throw new Error(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
