import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_URL,
  // baseURL: "http://localhost:8080/auth/",
  // withCredentials: true,
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
