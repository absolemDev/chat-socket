import config from "../config.json";
import axios from "axios";

const httpAuth = axios.create({
  baseURL: config.apiEndpoint,
});

const authService = {
  login: async (payload) => {
    const { data } = await httpAuth.post("/auth", { login: btoa(payload.login), password: btoa(payload.password) });
    return data;
  },
};

export default authService;
