const path = require("path");

module.exports = {
  entry: "./src/index.js", // Gantilah dengan path sesuai file utama proyek Anda
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      os: require.resolve("os-browserify/browser"),
      http: require.resolve("stream-http"),
      zlib: require.resolve("browserify-zlib"),
      url: require.resolve("url/"),
      util: require.resolve("util/"),
      vm: require.resolve("vm-browserify"),
      assert: require.resolve("assert/"),
      querystring: require.resolve("querystring-es3"),
      https: require.resolve("https-browserify"),
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
