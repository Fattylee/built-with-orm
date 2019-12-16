import express from 'express';
import volleyball from 'volleyball';
// import db from './db';
import product from './routes/product';
import category from './routes/category';
import syncAndSeed from './seed/syncAndSeed';

const app = express();
app.use(volleyball);
app.use('/api/v1', category);
app.use('/api/v1', product);

const port = process.env.PORT || 3000;
syncAndSeed().then(() => {
  app.listen(port, console.log(`Server is running on port: ${port}`));
});
