const products = require('./products/products.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(products);
};
