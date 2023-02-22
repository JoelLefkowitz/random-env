const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "src/main.ts",
  output: {
    dir: "publish",
    format: "cjs",
  },
  plugins: [typescript()],
};
