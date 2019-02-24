# postcss-plugin-chain

Utility for chaining multiple [PostCSS](https://postcss.org/) plugins as a single one.

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

Returned value is an asynchronous [postcss plugin](http://api.postcss.org/postcss.html#.plugin).

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
