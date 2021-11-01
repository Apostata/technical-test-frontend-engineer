const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const environments = require("../envVars");

module.exports = [
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(environments),
  }),
  new HtmlWebpackPlugin({
    title: "Ion test",
    template: "./src/index.html",
    inject: "body",
  }),
];
