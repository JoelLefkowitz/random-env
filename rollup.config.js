const { nodeResolve } = require("@rollup/plugin-node-resolve");
const ts = require("rollup-plugin-ts");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/main.ts",
  output: { format: "cjs", file: "publish/main.js" },
  plugins: [ts(), nodeResolve(), commonjs()],
};
