import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {AuthProvider} from "./AuthStore/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GoogleOAuthProvider clientId="857871468380-3vdet9hladr996gn7m15n7ks5lne5q87.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </AuthProvider>
);
