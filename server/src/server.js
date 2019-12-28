import d from 'debug';
import syncAndSeed from './seed/syncAndSeed';
import app from './index';

const debug = d('active');
const port = process.env.PORT || 3000;
syncAndSeed().then(() => {
  app.listen(port, debug(`Server is running on port: ${port}`));
});
