(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _math = _interopRequireDefault(require("./math"));

console.log(_math["default"].sumAll(50, 10));
console.log(_math["default"].subtractAll(50, 10));
console.log(_math["default"].multiplyAll(50, 10));
console.log(_math["default"].divideAll(50, 10));
},{"./math":3,"@babel/runtime/helpers/interopRequireDefault":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sumAll = function sumAll(a, b) {
  return a + b;
};

var subtractAll = function subtractAll(a, b) {
  return a - b;
};

var divideAll = function divideAll(a, b) {
  return a / b;
};

var multiplyAll = function multiplyAll(a, b) {
  return a * b;
};

var _default = {
  sumAll: sumAll,
  subtractAll: subtractAll,
  divideAll: divideAll,
  multiplyAll: multiplyAll
};
exports["default"] = _default;
},{}]},{},[2]);
