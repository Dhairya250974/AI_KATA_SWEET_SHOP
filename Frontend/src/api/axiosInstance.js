import axios from "axios";

// Get backend URL from environment variable or use default
// Note: Port 5000 is often used by macOS AirPlay, so defaulting to 3001
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

console.log("Backend URL configured:", BACKEND_URL);

const API = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  timeout: 10000, // 10 second timeout
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log error for debugging
    if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
      console.error("Network Error - Backend URL:", BACKEND_URL);
      console.error("Full error:", error);
    }
    
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Only redirect if not already on login page
      if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default API;
