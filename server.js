import express from 'express';
import volleyball from 'volleyball';
import db, { syncAndSeed } from './db';

const app = express();
app.use(volleyball);
// eslint-disable-next-line
app.get("/api/v1/products", async (req, res) => {
  res.send(await db.Product.findAll());
});
const port = process.env.PORT || 3000;
syncAndSeed().then(() => {
  app.listen(port, console.log(`Server is running on port: ${port}`));
});
