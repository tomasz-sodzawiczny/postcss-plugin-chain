// global: describe
import postcss from "postcss";
import circlePlugin from "postcss-circle";
import sizePlugin from "postcss-size";

import chainPlugins from "../src/index";

const css = `
.circle {
  circle: 100px red;
}
.size {
  size: 20px
}
`;

const chainedPlugin = chainPlugins("postcss-chained-plugin", [
  circlePlugin,
  sizePlugin
]);

describe("postcss-plugin-chain", () => {
  it("returns the same result as chaining the plugins manually", async () => {
    const expected = await postcss([circlePlugin, sizePlugin]).process(css, {
      from: undefined
    });
    const actual = await postcss([chainedPlugin]).process(css, {
      from: undefined
    });

    expect(actual.css).toEqual(expected.css);
  });
});
