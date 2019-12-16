"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _volleyball = _interopRequireDefault(require("volleyball"));

var _db = require("./db");

var _product = _interopRequireDefault(require("./routes/product"));

var _category = _interopRequireDefault(require("./routes/category"));

var app = (0, _express["default"])();
app.use(_volleyball["default"]);
app.use('/api/v1', _category["default"]);
app.use('/api/v1', _product["default"]);
var port = process.env.PORT || 3000;
(0, _db.syncAndSeed)().then(function () {
  app.listen(port, console.log("Server is running on port: ".concat(port)));
});