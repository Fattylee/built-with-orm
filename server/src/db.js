import Sequelize from 'sequelize';
// import d from 'debug';
import dotEnv from 'dotenv';
import path from 'path';

// const debug = d('active');
if (process.env.NODE_ENV === 'test') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.test') });
} else {
  dotEnv.config({ path: path.join(__dirname, '../../.env') });
}

const connectionStr = process.env.CONNECTION_STRING;
console.log('db:', connectionStr);
const db = process.env.NODE_ENV === 'test'
  ? new Sequelize(connectionStr, { logging: false })
  : new Sequelize(connectionStr);

export default db;
