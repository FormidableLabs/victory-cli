// *
// * Colors
// *
const colors = [
  "#006400",
  "#067005",
  "#0c7d0b",
  "#138912",
  "#1a9719",
  "#20a51f",
  "#26b225",
  "#2cbf2c",
  "#32cd32"
];

// *
// * Typography
// *
const sansSerif = "monospace";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
  padding: 50,
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: "green",
  stroke: "transparent"
};
// *
// * Strokes
// *
const strokeLinecap = "round";
const strokeLinejoin = "round";

module.exports = {
  area: Object.assign({
    style: {
      data: {
        fill: "green"
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "none",
        stroke: "green",
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, baseLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "transparent"
      },
      ticks: {
        fill: "none",
        padding: 10,
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: "green",
        padding: 10,
        stroke: "transparent",
        strokeWidth: 0,
        width: 8
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: Object.assign({
    style: {
      data: {
        stroke: "green",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 25,
        textAnchor: "end"
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: "green"
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "none",
        stroke: "green",
        strokeWidth: 2
      },
      labels: Object.assign({}, baseLabelStyles, {
        textAnchor: "start"
      })
    }
  }, baseProps),
  group: Object.assign({
    colorScale: colors
  }, baseProps),
  line: Object.assign({
    style: {
      data: {
        fill: "none",
        stroke: "green",
        strokeWidth: 2
      },
      labels: Object.assign({}, baseLabelStyles, {
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 20,
        stroke: "none",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 240,
        textAnchor: "middle"
      })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: Object.assign({
    style: {
      data: {
        fill: "green",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: Object.assign({}, baseLabelStyles, {
        textAnchor: "middle"
      })
    }
  }, baseProps),
  stack: Object.assign({
    colorScale: colors
  }, baseProps)
};