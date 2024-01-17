const sequelize = require('../config/connection');

// Import models with conditional checks
const Category = require('./Category') || sequelize.import('./Category');
const Product = require('./Product') || sequelize.import('./Product');
const Tag = require('./Tag') || sequelize.import('./Tag');
const ProductTag = require('./ProductTag') || sequelize.import('./ProductTag');

// Define associations

// Sync sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};

