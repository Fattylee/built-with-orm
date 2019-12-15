import express from 'express';
import db from '../db';

const router = express.Router();
// eslint-disable-next-line
router.get("/products", async (req, res) => {
  res.send(await db.Product.findAll());
});

export default router;
