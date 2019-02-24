import postcss from "postcss";

export default function chainPlugins(name, plugins) {
  return postcss.plugin(name, options => {
    // initialize with the options
    const initializedPlugins = plugins.map(plugin => plugin(options));

    // chain the plugins
    return (root, result) =>
      initializedPlugins.reduce(
        (promise, plugin) => promise.then(() => plugin(result.root, result)),
        Promise.resolve()
      );
  });
}
