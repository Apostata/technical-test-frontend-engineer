module.exports = [
  {
    test: /\.js$/,
    use: [
      {
        loader: "babel-loader",
      },
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.ts/,
    loader: "ts-loader",
    options: {
      transpileOnly: true,
    },
    exclude: /dist/,
  },
  {
    test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
    use: ["file-loader"],
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
];
