"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));

/* eslint-disable react/react-in-jsx-scope  */

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable no-undef */
var App = function App() {
  var arr = [1, 3, 5, 6, 8, 'hi'];
  var url = 'http://localhost:4000/products';
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    arr = ((0, _readOnlyError2["default"])("arr"), data);
    console.log(arr);
  });
  return React.createElement("div", null, React.createElement("h1", null, "Hello React"), arr, React.createElement("hr", null), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "facebook"
  }, "Facebook")), React.createElement("li", null, React.createElement("a", {
    href: "google"
  }, "Google")), React.createElement("li", null, React.createElement("a", {
    href: "twitter"
  }, "Twitter")), React.createElement("li", null, React.createElement("a", {
    href: "instagram"
  }, "Instagram"))), React.createElement("hr", null), React.createElement("h2", null, "Walhamdulllilaahi rabi l alamin"), React.createElement("p", null, "this paragraph is awesome!"), React.createElement("h2", null, "Nolan McGinley"), React.createElement("ul", null, React.createElement("li", null, "1. Learn in Flow - Mental state when you are energized and have focus with full involvement and enjoyment"), React.createElement("li", null, "2. Just Start - Screw it lets do it, you might be successful"), React.createElement("li", null, "3. Rule of 2/3 - Spend 1/3 studying and 2/3 applying"), React.createElement("li", null, "4. The Sweet Spot - Challenging our selves 60-80% of the time"), React.createElement("li", null, "5. Commitment - Put in the time and continuously sharpen you skills"), React.createElement("li", null, "6. Find a Mentor - Can guild you along the path of mastery and can help you see the success of it")));
};

ReactDOM.render(React.createElement(App, null), document.querySelector('#fake'));