const userService = require('../services/userService');
const constants = require('../constants');

const signup = async (req, res) => {
  let response = {};
  try {
    const createdProduct = await userService.signup(req.body);
    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = createdProduct;
  } catch (error) {
    console.log('Something went wrong: Controller: signup', error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).json(response);
};

module.exports = {
  signup,
};
