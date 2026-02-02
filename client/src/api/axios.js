import axios from "axios";

const API_URL = "/api";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Make sure to format the Authorization header correctly
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized responses
    if (error.response && error.response.status === 401) {
      console.log("Authentication error detected - clearing token");

      // Clear authentication data
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Only redirect if not already on the login page to avoid loops
      const currentPath = window.location.pathname;
      if (currentPath !== "/login" && currentPath !== "/register") {
        window.location.href = `/login?redirect=${encodeURIComponent(
          currentPath
        )}`;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
