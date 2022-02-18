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
  A tool for generating <a href="https://github.com/FormidableLabs/victory/">Victory</a> component image charts on the command line.
</h4>

---

## Installation

First, install `librsvg`, which is a dependency for this library to work. **THIS IS IMPORTANT**:

If you do not install `librsvg` first, the global install _will blow up_.

#### Ubuntu:

```bash
sudo apt-get install librsvg2-dev
```

#### RedHat / OpenSUSE:

```bash
sudo yum install librsvg2-devel
```

#### Mac OS X:

```bash
brew install librsvg
```

If, after installing LibRSVG through homebrew you are experiencing issues installing this module,
try manually exporting the package config with this command:

```bash
export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
```

Then, install this module.

```sh
npm install -g victory-cli
```

For further information, [see this thread](https://github.com/Homebrew/homebrew/issues/14123).

#### Windows:

You will need cairo and librsvg-2 libraries which is bundled in GTK. Go to http://www.gtk.org/download/win64.php
(or http://www.gtk.org/download/win32.php for 32-bit node) and download the all-in-one bundle (these instructions
used the following zip http://win32builder.gnome.org/gtk+-bundle_3.6.4-20131201_win64.zip). Unzip the contents
in C:\GTK (if you want to change this you must define `-GTK_Root=c:\another\path` shell variable to npm or node-gyp
to reflect your changes), and add `"C:\GTK\bin;"` to the PATH environment variable in Windows, it's necessary for
node-rsvg runtime to load those libs.

## Usage

Once installed, you can now run `victory-cli` from the command line. Check out the usage info below to
see some of the cool things you can do:

```sh
Usage: victory-cli [data] [script] [options]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -c, --charttype [charttype]  'area', 'bar', 'line', 'scatter' or 'pie' (default: line)
    -f, --format [format]        'png' or 'svg' (default: png)
    -p, --print                  Prints chart to console (iTerm3 & .png format only!) (default: false)
    -h, --h [h]                  Chart height (default: 500)
    -w, --w [w]                  Chart width (default: 500)
    -x, --x [x]                  Data x value (default: null)
    -y, --y [y]                  Data y value (default: null)
    -t, --theme [theme]          'light', 'dark' or 'hacker' (default: hacker)
```

### Basic Example

So, like [Victory](https://github.com/FormidableLabs/victory/), `victory-cli` comes with some sensible defaults.
To render a default line chart to a png, you would run:

```sh
victory-cli -c line > test.png
```

If you instead wanted an svg file, you could run:

```sh
victory-cli -c line -f svg > test.svg
```

You can also use the `-c` flag to select any of our preset charts, detailed in the usage doc above.

### Images in the Term

Generating images is cool, but displaying charts in the terminal is even cooler! By default `victory-cli` writes
to `stdout`, so you can do things like piping and file output, but you can override this with the `-p` or `--print` flag.

> Note: This only works on iTerm 3. It should work in HyperChart soon.

```sh
victory-cli -c line --print
```

💥 Boom:

![http://i.imgur.com/ZF3e5lh.png](http://i.imgur.com/ZF3e5lh.png)

### Theming

Out of the box we support a light, dark and hacker (green) theme for your charts. Simply set the `-t` flag
to have the theme applied:

```sh
victory-cli -c area -t light --print
```

### Custom Data

So you brought your own data did ya? Thats cool, its the first argument of this bin. You can pass your
own data in like this:

```sh
victory-cli data/data.json --print
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
victory-cli data/data.json -x foo -y bar --print
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
victory-cli data.json script.js --print
```

💥 And it's custom chart city:

![http://i.imgur.com/VyB4eqa.png](http://i.imgur.com/VyB4eqa.png)

## Credits

This project was HEAVILY inspired by Matthew Conlens work on [https://github.com/mathisonian/hyperchart](https://github.com/mathisonian/hyperchart)

## _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!


## Maintenance Status

**Archived:** This project is no longer maintained by Formidable. We are no longer responding to issues or pull requests unless they relate to security concerns. We encourage interested developers to fork this project and make it their own!
