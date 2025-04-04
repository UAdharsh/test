import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import AdminDashboard from "./pages/admin/HomePage";
import TeacherDashboard from "./pages/teacher/HomePage";
import StudentDashboard from "./pages/student/HomePage";
import { isAuthenticated, getUserRole } from "./utils/auth";

const PrivateRoute = ({ children, allowedRoles }) => {
  if (!isAuthenticated()) return <Navigate to="/login" />;
  if (!allowedRoles.includes(getUserRole())) return <Navigate to="/" />;
  return children;
};

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* Teacher Routes */}
      <Route
        path="/teacher"
        element={
          <PrivateRoute allowedRoles={["teacher"]}>
            <TeacherDashboard />
          </PrivateRoute>
        }
      />

      {/* Student Routes */}
      <Route
        path="/student"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </PrivateRoute>
        }
      />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RoutesComponent;
