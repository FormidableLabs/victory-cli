"use strict";

const React = require("react");
const Victory = require("victory");

const {
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryTheme
} = Victory;

module.exports = function wrapperComponent(data, options) {
  class VictoryWrapper extends React.Component {
    render() {
      return (
        <VictoryChart
          height={options.height}
          width={options.width}
          theme={VictoryTheme.material}
        >
          <VictoryLine
            data={data}
            style={{
              data: {
                stroke: "#3498db"
              }
            }}
          />
          <VictoryScatter
            data={data}
            style={{
              data: {
                fill: "#e74c3c",
              }
            }}
          />
        </VictoryChart>
      );
    }
  }

  return VictoryWrapper;
};
