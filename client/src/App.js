import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/notes/new"
                element={
                  <ProtectedRoute>
                    <CreateNote />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/notes/:id"
                element={
                  <ProtectedRoute>
                    <ViewNote />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/notes/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditNote />
                  </ProtectedRoute>
                }
              />

              {/* Handle 404 */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
