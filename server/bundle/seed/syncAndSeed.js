"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _debug = _interopRequireDefault(require("debug"));

var _Product = _interopRequireDefault(require("../models/Product"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _User = _interopRequireDefault(require("../models/User"));

var _db = _interopRequireDefault(require("../db"));

var debug = (0, _debug["default"])('active');

var syncAndSeed =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var users, _ref2, _ref3, fatai, haleemath, abdullah, _ref4, _ref5, categoryA, categoryB, categoryC, categoryD, _ref6, _ref7, productA1, productA2, productA3, productB1;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _db["default"].sync({
              force: true
            });

          case 3:
            debug('connection to db was successful');
            users = [{
              firstName: 'fatai',
              lastName: 'balogun'
            }, {
              firstName: 'haleemath',
              lastName: 'balogun'
            }, {
              firstName: 'abdullah',
              lastName: 'abdulFattah'
            }];
            /* eslint-disable */

            _context.next = 7;
            return Promise.all(users.map(function (user) {
              return _User["default"].create(user);
            }));

          case 7:
            _ref2 = _context.sent;
            _ref3 = (0, _slicedToArray2["default"])(_ref2, 3);
            fatai = _ref3[0];
            haleemath = _ref3[1];
            abdullah = _ref3[2];

            /* eslint-enable */
            debug(fatai.get());
            /* eslint-disable-next-line */

            _context.next = 15;
            return Promise.all([_Category["default"].create({
              name: 'category a',
              ownerId: fatai.id
            }), _Category["default"].create({
              name: 'category b',
              ownerId: abdullah.id
            }), _Category["default"].create({
              name: 'category c',
              ownerId: haleemath.id
            }), _Category["default"].create({
              name: 'category d',
              ownerId: haleemath.id
            })]);

          case 15:
            _ref4 = _context.sent;
            _ref5 = (0, _slicedToArray2["default"])(_ref4, 4);
            categoryA = _ref5[0];
            categoryB = _ref5[1];
            categoryC = _ref5[2];
            categoryD = _ref5[3];
            _context.next = 23;
            return Promise.all([_Product["default"].create({
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
            }), _Product["default"].create({
              name: 'product d',
              categoryId: categoryD.id
            }), _Product["default"].create({
              name: 'product d 2',
              categoryId: categoryD.id
            })]);

          case 23:
            _ref6 = _context.sent;
            _ref7 = (0, _slicedToArray2["default"])(_ref6, 4);
            productA1 = _ref7[0];
            productA2 = _ref7[1];
            productA3 = _ref7[2];
            productB1 = _ref7[3];
            _context.next = 31;
            return productA1.findSimilar();

          case 31:
            _context.next = 36;
            break;

          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](0);
            debug('something went wrong, could not connect', _context.t0);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 33]]);
  }));

  return function syncAndSeed() {
    return _ref.apply(this, arguments);
  };
}();

var _default = syncAndSeed;
exports["default"] = _default;