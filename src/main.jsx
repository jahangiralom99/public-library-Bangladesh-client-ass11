import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./Routes/Root.jsx";
import AuthProvider from "./AuthProvider/AuthProvide.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Root}></RouterProvider>
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
