"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../db"));

var _Category = _interopRequireDefault(require("./Category"));

var Product = _db["default"].define('product', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true,
    defaultValue: _sequelize["default"].UUIDV4
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    unique: true
  },
  inStock: {
    type: _sequelize["default"].BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  underscored: true
});

Product.belongsTo(_Category["default"], {
  /* targetKey: 'name', */
  // foreignKey: 'parent',
  onDelete: 'CASCADE'
});

_Category["default"].hasMany(Product);

Product.findInStock = function findInStock() {
  return this.findAll({
    where: {
      inStock: true
    }
  });
};

Product.prototype.findSimilar = function findSimilar() {
  var _this = this;

  return Product.findAll({
    where: {
      categoryId: this.categoryId
    } // eslint-disable-next-line

  }).then(function (res) {
    return res.filter(function (p) {
      return p.id !== _this.id;
    });
  });
};

var _default = Product;
exports["default"] = _default;