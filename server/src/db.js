import Sequelize from 'sequelize';
// import d from 'debug';
import dotEnv from 'dotenv';
import path from 'path';

// const debug = d('active');
const { NODE_ENV } = process.env;
if (NODE_ENV === 'test') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.test') });
} else if (NODE_ENV === 'staging') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.staging') });
} else if (NODE_ENV === 'development') {
  dotEnv.config({ path: path.join(__dirname, '../../.env') });
} else {
  process.env.CONNECTION_STRING = process.env.DATABASE_URL;
}

const connectionStr = process.env.CONNECTION_STRING;
console.log('db:', connectionStr, 'NODE_ENV', NODE_ENV);
const db = NODE_ENV === 'test' || NODE_ENV === 'staging'
  ? new Sequelize(connectionStr, { logging: false })
  : new Sequelize(connectionStr);

export default db;
