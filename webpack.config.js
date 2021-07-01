const path = require("path");

const config = {
  module: {
    rules: [
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
    };
  }

  if (argv.mode === "production") {
    config.devtool = false;
    // config.output = {
    //     clean: true,
    // }
  }
  console.log(config.devtool, argv.mode);
  return config;
};
