import React, { useContext } from "react";
import { Navigate } from "react-router";
import { Auth_Context } from "../context/AuthContext.jsx";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(Auth_Context);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black text-lg">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Else show the protected page
  return children;
}

export default ProtectedRoute;
