"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../db"));

var _Product = _interopRequireDefault(require("./Product"));

var Category = _db["default"].define('category', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true,
    defaultValue: _sequelize["default"].UUIDV4
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    unique: true
  }
});

Category.hasMany(_Product["default"]);
var _default = Category;
exports["default"] = _default;