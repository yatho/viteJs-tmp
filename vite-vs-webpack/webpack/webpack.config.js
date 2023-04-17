const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: 'production',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public/dist"),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
    open: true,
  },
};
