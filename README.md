# postcss-plugin-chain [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![License: MIT][mit-img]][mit-url]
[![NPM version][npm-img]][npm-url]
[![Build Status][build-img]][build-url]

Utility for chaining multiple [PostCSS] plugins as a single one.

```js
// Define the plugin:
import chainPlugins from 'postcss-plugin-chain';

const shapesPlugin = chainPlugins('postcss-shapes', [
  require('postcss-circle'),
  require('postcss-triangle'),
]);

// And use it:
postcss([shapesPlugin]);
```

## Installation

```sh
yarn add --dev postcss-plugin-chain
```

## Usage

`chainPlugins()` function accepts 2 parameters: `pluginName` and `pluginsToChain` - both pretty self-explanatory.

Returned value is an asynchronous [postcss plugin].

## Options

If the plugin created with `chainPlugins` is initialized with options it passes them down to all chained plugins.

If you need to control the options passed to some specific plugins (e.g. map options names or set some defaults), you can wrap the plugin in a function:

```js
const chainedPlugin = chainPlugins('options-example', [
  options => require('postcss-calc')({ ...options, selectors: true }),
  // ...
]);
```

## License

[MIT](./LICENSE)

<!-- badges -->

[mit-img]: https://img.shields.io/badge/License-MIT-blue.svg
[mit-url]: https://opensource.org/licenses/MIT
[npm-img]: https://img.shields.io/npm/v/postcss-plugin-chain.svg
[npm-url]: https://www.npmjs.com/package/postcss-plugin-chain
[build-img]: https://img.shields.io/travis/tomasz-sodzawiczny/postcss-plugin-chain.svg
[build-url]: https://travis-ci.org/tomasz-sodzawiczny/postcss-plugin-chain

<!-- links -->

[postcss]: https://postcss.org/
[postcss plugin]: http://api.postcss.org/postcss.html#.plugin
