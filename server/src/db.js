import Sequelize from 'sequelize';
// import d from 'debug';
import dotEnv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV === 'test') {
  dotEnv.config({ path: path.join(__dirname, '../../.env.test') });
} else {
  dotEnv.config({ path: path.join(__dirname, '../../.env') });
}
// const debug = d('active');
const connectionStr = process.env.CONNECTION_STRING;
console.log(connectionStr);
const db = new Sequelize(connectionStr);

export default db;
