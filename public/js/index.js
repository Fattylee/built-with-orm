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