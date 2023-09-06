import config from "../config.json";
import axios from "axios";

const httpAuth = axios.create({
  baseURL: config.apiEndpoint,
});

const authService = {
  login: async ({ login, password }) => {
    const { data } = await httpAuth.post("/auth", {
      login: btoa(login),
      password: btoa(password),
    });
    return data;
  },
};

export default authService;
