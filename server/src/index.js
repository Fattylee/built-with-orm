import express from 'express';
import volleyball from 'volleyball';
import path from 'path';
import d from 'debug';
import product from './routes/product';
import category from './routes/category';
import syncAndSeed from './seed/syncAndSeed';

const debug = d('active');

const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
app.get('/baba', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
app.use(volleyball);
app.use('/api/v1', category);
app.use('/api/v1', product);

const port = process.env.PORT || 3000;
syncAndSeed().then(() => {
  app.listen(port, debug(`Server is running on port: ${port}`));
});
