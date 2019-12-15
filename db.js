import Sequelize from 'sequelize';
import d from 'debug';
import dotEnv from 'dotenv';

dotEnv.config();
const debug = d('active');
const connectionStr = process.env.CONNECTION_STRING;
const conn = new Sequelize(connectionStr);
const Product = conn.define('product', {
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

const Category = conn.define('category', {
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
});
// Product.belongsTo(Category);
Category.hasMany(Product);
Product.findInStock = function findInStock() {
  return this.findAll({ where: { inStock: true } });
};
Product.prototype.findSimilar = function findSimilar() {
  return Product.findAll({ where: { categoryId: this.categoryId } }).then((res) => res.filter((p) => p.id !== this.id));
};

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    debug('connection to db started!');
    const [categoryA, categoryB] = await Promise.all([
      Category.create({ name: 'category a' }),
      Category.create({ name: 'category b' }),
    ]);
    const [productA1, productA2, productA3, productB1] = await Promise.all([
      Product.create({ name: 'product a 1', categoryId: categoryA.id }),
      Product.create({ name: 'product a 2', categoryId: categoryA.id }),
      Product.create({ name: 'product a 3', categoryId: categoryA.id }),
      Product.create({ name: 'product b 1', categoryId: categoryB.id }),
      Product.create({ name: 'product c 1' }),
    ]);
    /* debug(
     *   categoryA.get(),
     *   categoryB.get(),
     *   productA1.get(),
     *   productA2.get(),
     *   productA3.get(),
     *   productB1.get(),
     * ); */
    // const res = await Product.findAll({ where: { name: 'product a 1' } });
    // const res = await Product.findAll({ where: { inStock: true } });
    // const res = await Product.findInStock();
    const res = await productA1.findSimilar();

    // const res = await Product.findByPk(productB1.id);
    // const res = await Product.findOne({ where: { id: productB1.id } });
    // const res = await Product.findOne({ where: { name: 'yeye' } });
    // debug(res && res.get());
    debug(res.map((e) => e.get()));
    // debug(res.length);
  } catch (err) {
    debug('something went wrong, could not connect', err);
  }
};

syncAndSeed();
