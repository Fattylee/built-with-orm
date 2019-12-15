import express from 'express';
import db from '../db';

const router = express.Router();
// eslint-disable-next-line
router.get("/categories", async (req, res) => {
  res.send(await db.Category.findAll());
});

export default router;
