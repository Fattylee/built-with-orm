"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("../db"));

var router = _express["default"].Router(); // eslint-disable-next-line


router.get("/products", function _callee(req, res, next) {
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.t0 = res;
          _context.next = 4;
          return _regenerator["default"].awrap(_db["default"].Product.findAll({
            include: [_db["default"].Category]
          }));

        case 4:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t2 = _context["catch"](0);
          next(_context.t2);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
var _default = router;
exports["default"] = _default;