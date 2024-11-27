const config = require("../config/config");

const allowedOrigins = [
  config.origin,
  "http://localhost:5173",
  "http://192.168.0.47:5173",
  "http://localhost:3000",
  "http://64.227.144.138:3006",
];

module.exports = allowedOrigins;
