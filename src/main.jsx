import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext.jsx";
import DataContext from "./context/DataContext.jsx";
import { RouterProvider } from "react-router/dom";
import router from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={3000} theme="light" />
    <AuthContext>
      <DataContext>
        <RouterProvider router={router} />
      </DataContext>
    </AuthContext>
  </StrictMode>
);
