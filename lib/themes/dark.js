// *
// * Colors
// *
const colors = [
  "#808080",
  "#707070",
  "#5f5f5f",
  "#4f4f4f",
  "#3f3f3f",
  "#313131",
  "#222222",
  "#141414",
  "#000000"
];

// *
// * Typography
// *
const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
  padding: 50,
  colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: "black",
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
        fill: "black"
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "none",
        stroke: "black",
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
        fill: "black",
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
        stroke: "black",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 25,
        textAnchor: "end"
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: "black"
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "none",
        stroke: "black",
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
        stroke: "black",
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
        padding: 10,
        stroke: "none",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 200,
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
        fill: "black",
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
