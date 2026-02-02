import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Smart Notes</h1>
        <p style={styles.subtitle}>
          Create, organize, and find your notes with AI assistance
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/login" style={styles.loginButton}>
            Login
          </Link>
          <Link to="/register" style={styles.registerButton}>
            Register
          </Link>
        </div>
      </div>

      <div style={styles.features}>
        <h2 style={styles.featuresTitle}>Features</h2>

        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Create Notes</h3>
            <p style={styles.featureDesc}>
              Write and save your thoughts, ideas, and important information in
              one place.
            </p>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>AI-Powered Summaries</h3>
            <p style={styles.featureDesc}>
              Automatically generate concise summaries of your notes using AI
              technology.
            </p>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Smart Tags</h3>
            <p style={styles.featureDesc}>
              Get tag suggestions based on your content to help categorize and
              find notes easily.
            </p>
          </div>

          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Search</h3>
            <p style={styles.featureDesc}>
              Quickly find your notes by searching through content, titles, or
              tags.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  hero: {
    textAlign: "center",
    padding: "3rem 1rem",
    marginBottom: "3rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#7f8c8d",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  loginButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "0.75rem 2rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#27ae60",
    color: "#fff",
    padding: "0.75rem 2rem",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  features: {
    padding: "2rem 0",
  },
  featuresTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#2c3e50",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  featureTitle: {
    color: "#2c3e50",
    marginBottom: "0.75rem",
  },
  featureDesc: {
    color: "#7f8c8d",
    lineHeight: 1.6,
  },
};

export default Home;
