import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AppLayout from "../components/layout/AppLayout";

import Chatbox from "../views/Chatbox";
import Welcome from "../views/Welcome";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
// import Register from "../views/Register";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Welcome />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/conversation"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Chatbox />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
