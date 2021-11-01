const path = require("path");
module.exports = {
  static: path.join(__dirname, "../dist"), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  port: 3001,
  hot: true, // hot reload
  open: true,
  client: {
    overlay: true,
  }, // show errors overlay on screen
  https: false,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
  },
};
