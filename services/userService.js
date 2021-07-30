const User = require('../database/models/userModel');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const { formatMongoData } = require('../helpers/dbHelper');
const jwt = require('jsonwebtoken');

const signup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    }
    await bcrypt.hash(password, 10);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong: Service: singup', error);
    throw new Error(error);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constants.userMessage.USER_NOT_FOUND);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      throw new Error(comments.userMessage.INVALID_PASSWORD);
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'secret',
      { expiresIn: '1d' }
    );
    return { token };
  } catch (error) {
    console.log('Something went wrong: Service: login', error);
    throw new Error(error);
  }
};

module.exports = {
  signup,
  login,
};
