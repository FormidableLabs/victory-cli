"use strict";

const React = require("react");
const Victory = require("victory");

const LIGHT_THEME = require("./themes/light.js");
// const DARK_THEME = require("./themes/dark.js");
const HACKER_THEME = require("./themes/hacker.js");

const {
  VictoryChart,
  VictoryArea,
  VictoryBar,
  VictoryLine,
  VictoryScatter,
  VictoryPie
} = Victory;

const themeMap = {
  light: LIGHT_THEME,
  hacker: HACKER_THEME
};

const chartTypeMap = {
  area: VictoryArea,
  bar: VictoryBar,
  line: VictoryLine,
  scatter: VictoryScatter,
  pie: VictoryPie
};

module.exports = function wrapperComponent(data, options) {
  class VictoryWrapper extends React.Component {
    render() {
      const Component = chartTypeMap[options.charttype];

      const props = {
        data
      };

      if (options.x) {
        props.x = options.x;
      }

      if (options.y) {
        props.y = options.y;
      }

      if (options.charttype === "pie") {
        return (
          <Component
            height={options.height}
            width={options.width}
            theme={themeMap[options.theme]} {...props}
          />
        );
      } else {
        return (
          <VictoryChart
            height={options.height}
            width={options.width}
            theme={themeMap[options.theme]}
          >
            <Component {...props} />
          </VictoryChart>
        );
      }
    }
  }

  return VictoryWrapper;
};
