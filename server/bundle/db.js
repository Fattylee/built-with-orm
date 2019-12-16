"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.syncAndSeed = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _debug = _interopRequireDefault(require("debug"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Product = _interopRequireDefault(require("./models/Product"));

var _Category = _interopRequireDefault(require("./models/Category"));

_dotenv["default"].config();

var debug = (0, _debug["default"])('active');
var connectionStr = process.env.CONNECTION_STRING;
var db = new _sequelize["default"](connectionStr);

var syncAndSeed = function syncAndSeed() {
  var _ref, _ref2, categoryA, categoryB, _ref3, _ref4, productA1, productA2, productA3, productB1;

  return _regenerator["default"].async(function syncAndSeed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _regenerator["default"].awrap(db.sync({
            force: true
          }));

        case 3:
          debug('connection to db started!');
          _context.next = 6;
          return _regenerator["default"].awrap(Promise.all([_Category["default"].create({
            name: 'category a'
          }), _Category["default"].create({
            name: 'category b'
          })]));

        case 6:
          _ref = _context.sent;
          _ref2 = (0, _slicedToArray2["default"])(_ref, 2);
          categoryA = _ref2[0];
          categoryB = _ref2[1];
          _context.next = 12;
          return _regenerator["default"].awrap(Promise.all([_Product["default"].create({
            name: 'product a 1',
            categoryId: categoryA.id
          }), _Product["default"].create({
            name: 'product a 2',
            categoryId: categoryA.id
          }), _Product["default"].create({
            name: 'product a 3',
            categoryId: categoryA.id
          }), _Product["default"].create({
            name: 'product b 1',
            categoryId: categoryB.id
          }), _Product["default"].create({
            name: 'product c 1'
          })]));

        case 12:
          _ref3 = _context.sent;
          _ref4 = (0, _slicedToArray2["default"])(_ref3, 4);
          productA1 = _ref4[0];
          productA2 = _ref4[1];
          productA3 = _ref4[2];
          productB1 = _ref4[3];
          _context.next = 20;
          return _regenerator["default"].awrap(productA1.findSimilar());

        case 20:
          _context.next = 25;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          debug('something went wrong, could not connect', _context.t0);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

exports.syncAndSeed = syncAndSeed;
var _default = db;
exports["default"] = _default;