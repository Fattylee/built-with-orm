import d from 'debug';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';
import db from '../db';

const debug = d('active');
const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    debug('connection to db was successful');
    const users = [
      {
        firstName: 'fatai',
        lastName: 'balogun',
      },
      {
        firstName: 'haleemath',
        lastName: 'balogun',
      },
      {
        firstName: 'abdullah',
        lastName: 'abdulFattah',
      },
    ];
    /* eslint-disable */
    const [fatai, haleemath, abdullah] = await Promise.all(
      users.map(user => User.create(user))
    )
    /* eslint-enable */
    debug(fatai.get());
    /* eslint-disable-next-line */
    const [categoryA, categoryB, categoryC, categoryD] = await Promise.all([
      Category.create({ name: 'category a', ownerId: fatai.id }),
      Category.create({ name: 'category b', ownerId: abdullah.id }),
      Category.create({ name: 'category c', ownerId: haleemath.id }),
      Category.create({ name: 'category d', ownerId: haleemath.id }),
    ]);
    // eslint-disable-next-line
    const [productA1, productA2, productA3, productB1] = await Promise.all([
      Product.create({ name: 'product a 1', categoryId: categoryA.id }),
      Product.create({ name: 'product a 2', categoryId: categoryA.id }),
      Product.create({ name: 'product a 3', categoryId: categoryA.id }),
      Product.create({ name: 'product b 1', categoryId: categoryB.id }),
      Product.create({ name: 'product c 1' }),
      Product.create({ name: 'product d', categoryId: categoryD.id }),
      Product.create({ name: 'product d 2', categoryId: categoryD.id }),
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
    await productA1.findSimilar();

    // const res = await Product.findByPk(productB1.id);
    // const res = await Product.findOne({ where: { id: productB1.id } });
    // const res = await Product.findOne({ where: { name: 'yeye' } });
    // debug(res && res.get());
    // debug(res.map((e) => e.get()));
    // debug(res.length);
  } catch (err) {
    debug('something went wrong, could not connect', err);
  }
};

export default syncAndSeed;
