import postcss from "postcss";

export default function chainPlugins(pluginName, pluginsToChain) {
  return postcss.plugin(pluginName, options => {
    // initialize with the options
    const initializedPlugins = pluginsToChain.map(plugin => plugin(options));

    // chain the plugins
    return (root, result) =>
      initializedPlugins.reduce(
        (promise, plugin) => promise.then(() => plugin(result.root, result)),
        Promise.resolve()
      );
  });
}
