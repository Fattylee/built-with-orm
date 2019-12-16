import Sequelize from 'sequelize';
import db from '../db';
import Category from './Category';

const Product = db.define('product', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
Product.belongsTo(Category);
Category.hasMany(Product);
Product.findInStock = function findInStock() {
  return this.findAll({ where: { inStock: true } });
};
Product.prototype.findSimilar = function findSimilar() {
  return Product.findAll({
    where: { categoryId: this.categoryId },
    // eslint-disable-next-line
  }).then((res) => res.filter((p) => p.id !== this.id));
};

export default Product;
