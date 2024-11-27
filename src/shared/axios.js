const axios = require("axios");
const config = require("../config/config");

const HttpService = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return error;
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const bkashHttpService = HttpService(config.bkash.bkashBaseUrl);

module.exports = { HttpService, bkashHttpService };
