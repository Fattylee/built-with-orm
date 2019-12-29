"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _Product = _interopRequireDefault(require("../models/Product"));

var router = _express["default"].Router(); // eslint-disable-next-line


router.get("/products",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = res;
            _context.next = 4;
            return _Product["default"].findAll({
              include: [_Category["default"]]
            });

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
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;