import express from 'express';
import volleyball from 'volleyball';
import path from 'path';
import cors from 'cors';
import product from './routes/product';
import category from './routes/category';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));
app.get('/baba', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/index.html'));
});
const { NODE_ENV } = process.env;
if (NODE_ENV !== 'test' && NODE_ENV !== 'staging') {
  app.use(volleyball);
}
app.use(cors());
app.get('/bab', (req, res) => {
  res.send({ data: 'hurray' });
});
app.get('/users', (req, res) => {
  res.send([{ name: 'abu' }, { name: 'umu', age: 21 }]);
});
app.get('/foo', (req, res) => res.send({ data: 'foo bar' }));
app.post('/foo', (req, res) => res.status(201).send({
  data: req.body.foo.toUpperCase(),
}));
app.get('/head', (req, res) => res.status(200).send(req.headers.abu));
app.use('/api/v1', category);
app.use('/api/v1', product);

// app.listen(3000, () => console.log('servervservervser er'));
export default app;
