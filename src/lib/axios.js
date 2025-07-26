import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-backend-mccp.onrender.com/api" : "https://chat-backend-mccp.onrender.com/api",
  withCredentials: true,
});
