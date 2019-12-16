import Sequelize from 'sequelize';
// import d from 'debug';
import dotEnv from 'dotenv';

dotEnv.config();
// const debug = d('active');
const connectionStr = process.env.CONNECTION_STRING;
const db = new Sequelize(connectionStr);

export default db;
