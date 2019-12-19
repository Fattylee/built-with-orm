(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],4:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],5:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":8}],6:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],7:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":9,"./assertThisInitialized":1}],8:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],9:[function(require,module,exports){
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

/* eslint-disable react/react-in-jsx-scope  */

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable no-undef */
var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).call(this, props));
    _this.state = {
      products: []
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = 'http://localhost:4000/api/v1/products';
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          products: data
        });

        console.log(data);
      })["catch"](function (err) {
        console.log('Error:', err.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var products = this.state.products;
      var list = React.createElement("ul", null, "// eslint-disable-next-line", products.map(function (p) {
        return React.createElement("li", {
          key: p.id
        }, p.name);
      }));
      return React.createElement("div", null, React.createElement("h1", null, "Hello React world"), products[0] && products[0].name, list, React.createElement("hr", null), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "facebook"
      }, "Facebook")), React.createElement("li", null, React.createElement("a", {
        href: "google"
      }, "Google")), React.createElement("li", null, React.createElement("a", {
        href: "twitter"
      }, "Twitter")), React.createElement("li", null, React.createElement("a", {
        href: "instagram"
      }, "Instagram"))), React.createElement("hr", null), React.createElement("h2", null, "Walhamdulllilaahi rabi l alamin"), React.createElement("ul", null, React.createElement("li", null, "1. Learn in Flow - Mental state when you are energized and have focus with full involvement and enjoyment"), React.createElement("li", null, "2. Just Start - Screw it lets do it, you might be successful"), React.createElement("li", null, "3. Rule of 2/3 - Spend 1/3 studying and 2/3 applying"), React.createElement("li", null, "4. The Sweet Spot - Challenging our selves 60-80% of the time"), React.createElement("li", null, "5. Commitment - Put in the time and continuously sharpen you skills"), React.createElement("li", null, "6. Find a Mentor - Can guild you along the path of mastery and can help you see the success of it")));
    }
  }]);
  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#fake'));
},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/getPrototypeOf":4,"@babel/runtime/helpers/inherits":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/possibleConstructorReturn":7}]},{},[10]);
