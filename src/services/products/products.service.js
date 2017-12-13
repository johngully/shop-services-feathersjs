// Initializes the `products` service on path `/products`
const createService = require('feathers-nedb');
const createModel = require('../../models/products.model');
const hooks = require('./products.hooks');
const filters = require('./products.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'products',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/products', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('products');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }

  // Create an alias at /product
  app.use('/product', service);
};
