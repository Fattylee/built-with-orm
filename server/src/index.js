import express from 'express';
import volleyball from 'volleyball';
import path from 'path';
import cors from 'cors';
import product from './routes/product';
import category from './routes/category';

console.log(55);
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));
app.get('/baba', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
const { NODE_ENV } = process.env;
if (NODE_ENV !== 'test' && NODE_ENV !== 'staging') {
  app.use(volleyball);
}
app.use(cors());
app.get('/bab', (req, res) => {
  setTimeout(() => {
    console.log('send response after 0s timeout');
    res.send({ data: 'hurray' });
  }, 0);
});
app.get('/foo', (req, res) => res.send({ data: 'foo bar' }));
app.post('/foo', (req, res) =>
  res.status(201).send({
    data: req.body.foo.toUpperCase()
  })
);
app.get('/head', (req, res) => res.status(200).send(req.headers.abu));
app.use('/api/v1', category);
app.use('/api/v1', product);

export default app;
