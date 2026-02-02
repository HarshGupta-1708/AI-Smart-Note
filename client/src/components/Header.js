import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logoutUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <h1>Smart Notes</h1>
        </Link>

        <nav style={styles.nav}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={styles.navLink}>
                Dashboard
              </Link>
              <span style={styles.username}>Hi, {user?.username}</span>
              <button onClick={handleLogout} style={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.navLink}>
                Login
              </Link>
              <Link to="/register" style={styles.navLink}>
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "1rem 0",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "1.5rem",
    fontSize: "1rem",
  },
  username: {
    marginLeft: "1.5rem",
    color: "#ecf0f1",
    fontSize: "0.9rem",
  },
  logoutBtn: {
    marginLeft: "1.5rem",
    padding: "0.5rem 1rem",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default Header;
