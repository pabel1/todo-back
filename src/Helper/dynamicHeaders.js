/* eslint-disable node/no-unsupported-features/es-syntax */
const config = require("../config/config");

const createBkashTokenHeaders = (options = {}) => {
  const {
    contentType = "application/json",
    accept = "application/json",
    additionalHeaders = {},
  } = options;

  // Base authentication headers from config
  const authHeaders = {
    username: config.bkash.username,
    password: config.password,
  };

  // Construct and return complete headers
  return {
    "Content-Type": contentType,
    Accept: accept,
    ...authHeaders,
    ...additionalHeaders,
  };
};

exports.dynamicHeaders = {
  createBkashTokenHeaders,
};
