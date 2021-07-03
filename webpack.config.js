const path = require("path");
const miniCssExptractPlugin = require("mini-css-extract-plugin");

const config = {
  plugins: [new miniCssExptractPlugin()],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          miniCssExptractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.devServer = {
      contentBase: path.join(__dirname, "dist"),
      hot: true,
    };
  }

  if (argv.mode === "production") {
    config.devtool = false;
    // config.output = {
    //     clean: true,
    // }
  }
  // console.log(config.devtool, argv.mode);
  return config;
};
