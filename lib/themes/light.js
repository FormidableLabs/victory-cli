// *
// * Colors
// *
const colors = [
  "#808080",
  "#8f8f8f",
  "#9e9e9e",
  "#aeaeae",
  "#bdbdbd",
  "#cecece",
  "#dedede",
  "#eeeeee",
  "#ffffff"
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
  padding: 50
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: "white",
  stroke: "transparent",
  strokeWidth: 0
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
        fill: "white"
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "none",
        stroke: "white",
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, baseLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "white"
      },
      ticks: {
        fill: "none",
        padding: 10,
        size: 1,
        stroke: "white"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: "white",
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
        stroke: "white",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 25,
        textAnchor: "end"
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: "white"
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "none",
        stroke: "white",
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
        stroke: "white",
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
        fill: "white",
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
