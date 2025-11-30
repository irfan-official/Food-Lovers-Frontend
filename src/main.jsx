import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./context/AuthContext.jsx";
import DataContext from "./context/DataContext.jsx";
import { RouterProvider } from "react-router/dom";
import router from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />

      <AuthContext>
        <DataContext>
          <RouterProvider router={router} />
        </DataContext>
      </AuthContext>
    </QueryClientProvider>
  </StrictMode>
);
