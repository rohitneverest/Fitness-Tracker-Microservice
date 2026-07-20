import axios from "axios";
import keycloak from "../auth/keycloak";

const api = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (keycloak.authenticated) {
    try {
      await keycloak.updateToken(30);

      config.headers.Authorization = `Bearer ${keycloak.token}`;
    } catch (err) {
      console.error("Failed to refresh token", err);

      keycloak.login();
    }
  }

  return config;
});

export default api;