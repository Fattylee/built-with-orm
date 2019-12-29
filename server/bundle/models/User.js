"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../db"));

var _Category = _interopRequireDefault(require("./Category"));

var User = _db["default"].define('user', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true,
    defaultValue: _sequelize["default"].UUIDV4
  },
  firstName: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  fullname: {
    type: _sequelize["default"].VIRTUAL,
    get: function get() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }
}, {
  underscored: true
});

_Category["default"].belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: 'ownerId'
});

User.hasMany(_Category["default"], {
  foreignKey: 'ownerId'
});
var _default = User;
exports["default"] = _default;