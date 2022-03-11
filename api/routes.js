'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductsController');

  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
};
