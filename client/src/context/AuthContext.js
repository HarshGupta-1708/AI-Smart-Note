import React, { createContext, useState, useEffect } from "react";
import { login, logout, register, getCurrentUser } from "../api/auth";

// Create context
export const AuthContext = createContext();

// Create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on initial load and when dependencies change
  useEffect(() => {
    const checkAuthStatus = () => {
      // Check if user is already logged in
      const currentUser = getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Login user
  const loginUser = async (userData) => {
    setLoading(true);
    try {
      const response = await login(userData);
      setUser(response);
      setLoading(false);
      return { success: true };
    } catch (error) {
      setLoading(false);
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  // Register user
  const registerUser = async (userData) => {
    setLoading(true);
    try {
      const response = await register(userData);
      setUser(response);
      setLoading(false);
      return { success: true };
    } catch (error) {
      setLoading(false);
      return {
        success: false,
        error: error.response?.data?.message || "Registration failed",
      };
    }
  };

  // Logout user
  const logoutUser = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        registerUser,
        logoutUser,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
