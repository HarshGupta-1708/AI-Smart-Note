import axios from "./axios";
import { BASE_URL } from "../baseurl";
// Register user
export const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
  return response.data;
};

// Login user
export const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}/api/users/login`, userData);

  // Store token in localStorage
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get current user from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

// Get user profile
export const getUserProfile = async () => {
  const response = await axios.get(`${BASE_URL}/api/users/profile`);
  return response.data;
};
