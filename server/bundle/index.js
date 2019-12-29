"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _volleyball = _interopRequireDefault(require("volleyball"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _product = _interopRequireDefault(require("./routes/product"));

var _category = _interopRequireDefault(require("./routes/category"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../../public')));
app.get('/baba', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../../client/index.html'));
});
var NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV !== 'test' && NODE_ENV !== 'staging') {
  app.use(_volleyball["default"]);
}

app.use((0, _cors["default"])());
app.get('/foo', function (req, res) {
  return res.send({
    data: 'foo bar'
  });
});
app.post('/foo', function (req, res) {
  return res.status(201).send({
    data: req.body.foo.toUpperCase()
  });
});
app.get('/head', function (req, res) {
  return res.status(200).send(req.headers.abu);
});
app.use('/api/v1', _category["default"]);
app.use('/api/v1', _product["default"]);
var _default = app;
exports["default"] = _default;