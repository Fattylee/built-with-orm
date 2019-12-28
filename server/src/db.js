import Sequelize from 'sequelize';
// import d from 'debug';
import dotEnv from 'dotenv';
import path from 'path';

// const debug = d('active');
if (process.env.NODE_ENV === 'test') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.test') });
} else if (process.env.NODE_ENV === 'staging') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.staging') });
} else {
  dotEnv.config({ path: path.join(__dirname, '../../.env') });
}

const connectionStr = process.env.CONNECTION_STRING;
const { NODE_ENV } = process.env;
console.log('db:', connectionStr, 'NODE_ENV', NODE_ENV);
const db = NODE_ENV === 'test' || NODE_ENV === 'staging'
  ? new Sequelize(connectionStr, { logging: false })
  : new Sequelize(connectionStr);

export default db;
