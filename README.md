<h1 align="center">victory-cli</h1>

<p align="center">
  <a title='Build Status' href="https://raw.githubusercontent.com/FormidableLabs/babel-plugin-transform-define/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square' />
  </a>
  <a href="https://badge.fury.io/js/victory-cli">
    <img src="https://badge.fury.io/js/victory-cli.svg" alt="npm version" height="18">
  </a>
  <a href='http://travis-ci.org/FormidableLabs/victory-cli'>
    <img src='https://secure.travis-ci.org/FormidableLabs/victory-cli.svg?branch=master' />
  </a>
  <a href="https://github.com/FormidableLabs/victory-cli#maintenance-status">
    <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-experimental-purple.svg" />
  </a>
</p>

<h4 align="center">
  A tool for generating <a href="https://github.com/FormidableLabs/victory/">Victory</a> chart svgs from the command line.
</h4>

---

## Installation

```sh
$ npm install -g victory-cli
# or, using yarn
$ yarn global add victory-cli
```

## Usage

Once installed, you can run `victory-cli` from the command line. Check out the usage info below to
see some of the cool things you can do:

```sh
Usage: victory-cli [data] [script] [options]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -c, --charttype [charttype]  'area', 'bar', 'line', 'scatter' or 'pie' (default: line)
    -h, --h [h]                  Chart height (default: 500)
    -w, --w [w]                  Chart width (default: 500)
    -x, --x [x]                  Data x value (default: null)
    -y, --y [y]                  Data y value (default: null)
    -t, --theme [theme]          'light', 'dark' or 'hacker' (default: hacker)
```

### Basic Example

So, like [Victory](https://github.com/FormidableLabs/victory/), `victory-cli` comes with some sensible defaults,
which includes a default data set.

If you wanted to print a line chart using the default data set to `test.svg`, you could run:

```sh
$ victory-cli -c line > test.svg
```

You can also use the `-c` flag to select any of our preset charts, detailed in the usage doc above.

### Theming

Out of the box we support a light, dark and hacker (green) theme for your charts. Simply set the `-t` flag
to have the theme applied:

```sh
$ victory-cli -c area -t light
```

### Custom Data

So you brought your own data did ya? Thats cool, its the first argument of this bin. You can pass your
own data in like this:

```sh
$ victory-cli data/data.json
```

We expect the data to be in a regular chart data format like:

```json
{
  "data": [{ "x": 0, "y": 15 }]
}
```

Lets say it isn't though. Thats cool, if its close enough you can use the x and y flags to select your
field names. So if your data looks like this:

```json
{
  "data": [{ "foo": 0, "bar": 15 }]
}
```

It can still work by running:

```sh
$ victory-cli data/data.json -x foo -y bar
```

If your data is too different from what we accept, check out how to do a custom component script below.

### Custom Component Scripts

Ok. You want to get serious here about your customization. We have you covered. The second argument for
this bin is a custom script where you can define the component that gets rendered. All you have to do is
create a file that returns a function that we can pass data and options to, and that returns a React component
that renders a valid SVG.

Check this example out:

```js
// script.js

const React = require("react");
const Victory = require("victory");

const { VictoryChart, VictoryLine, VictoryTheme, VictoryScatter } = Victory;

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
                stroke: "#3498db",
              },
            }}
          />
          <VictoryScatter
            data={data}
            style={{
              data: {
                fill: "#e74c3c",
              },
            }}
          />
        </VictoryChart>
      );
    }
  }

  return VictoryWrapper;
};
```

After you've created this file, simply run it like this:

```sh
$ victory-cli data.json script.js
```

💥 And it's custom chart city:

![http://i.imgur.com/VyB4eqa.png](http://i.imgur.com/VyB4eqa.png)

## _IMPORTANT_

<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-experimental-purple.svg" />

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!
