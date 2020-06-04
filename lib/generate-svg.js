const React = require("react");
const ReactDOM = require("react-dom/server");

const generateSVG = (comp) =>
  ReactDOM.renderToString(React.createElement(comp));

module.exports = generateSVG;
