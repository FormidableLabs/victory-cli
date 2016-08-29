const React = require("react");
const ReactDOM = require("react-dom/server");

module.exports = function generateSVG(comp) {
  return ReactDOM.renderToString(React.createElement(comp));
};
