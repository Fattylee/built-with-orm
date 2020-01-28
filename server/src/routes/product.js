import express from 'express';
import Category from '../models/Category';
import Product from '../models/Product';

const router = express.Router();
router.get('/products', async (req, res, next) => {
  try {
    const result = await Product.findAll({ include: [Category] });
    // console.log(result.map(o => o.dataValues));
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

export default router;
