"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

// import d from 'debug';
// const debug = d('active');
var NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'test') {
  _dotenv["default"].config({
    path: _path["default"].join(__dirname, '../../.env.test')
  });
} else if (NODE_ENV === 'staging') {
  _dotenv["default"].config({
    path: _path["default"].join(__dirname, '../../.env.staging')
  });
} else if (NODE_ENV === 'development') {
  _dotenv["default"].config({
    path: _path["default"].join(__dirname, '../../.env')
  });
} else {
  process.env.CONNECTION_STRING = process.env.DATABASE_URL;
}

var connectionStr = process.env.CONNECTION_STRING;
console.log('db:', connectionStr, 'NODE_ENV', NODE_ENV);
var db = NODE_ENV === 'test' || NODE_ENV === 'staging' ? new _sequelize["default"](connectionStr, {
  logging: false
}) : new _sequelize["default"](connectionStr);
var _default = db;
exports["default"] = _default;