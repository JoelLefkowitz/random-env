const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/main.ts",
  output: { format: "cjs", file: "publish/main.js" },
  plugins: [typescript(), nodeResolve(), commonjs()],
};
