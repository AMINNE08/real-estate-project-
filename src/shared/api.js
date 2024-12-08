import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1", // Backend API URL
  withCredentials: true, // Include cookies in requests
});

export default api;
