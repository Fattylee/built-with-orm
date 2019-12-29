"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _debug = _interopRequireDefault(require("debug"));

var _syncAndSeed = _interopRequireDefault(require("./seed/syncAndSeed"));

var _index = _interopRequireDefault(require("./index"));

var debug = (0, _debug["default"])('active');
var port = process.env.PORT || 3000;
(0, _syncAndSeed["default"])().then(function () {
  _index["default"].listen(port, debug("Server is running on port: ".concat(port)));
});