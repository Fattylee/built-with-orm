import express from 'express';
import Category from '../models/Category';
import Product from '../models/Product';

const router = express.Router();
router.get('/products', async (req, res, next) => {
  try {
    res.send(await Product.findAll({ include: [Category] }));
  } catch (ex) {
    next(ex);
  }
});

export default router;
