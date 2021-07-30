const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');
const app = express();
const PORT = process.env.PORT || 6060;

dotenv.config();

const middleware = (req, res, next) => {
  console.log('sexy & mexy');
  next();
};

// db conecativity

dbConnection();

// cors
app.use(cors());

// request payload midddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');
app.use('/api/v1/products', productRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

// error handler middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    msg: 'something went wrong',
    body: {},
  });
});
