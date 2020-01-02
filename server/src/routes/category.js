import express from 'express';
import Category from '../models/Category';
import Product from '../models/Product';

const router = express.Router();
// eslint-disable-next-line
router.get('/categories', async (req, res) => {
  res.send(await Category.findAll({ include: [Product] }));
});

export default router;
