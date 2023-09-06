import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";

const http = axios.create({
  baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
  async function (config) {
    if (config.url === "/topics")
      config.url += `?token=${localStorageService.getAccessToken()}&login=${localStorageService.getUserLogin()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
