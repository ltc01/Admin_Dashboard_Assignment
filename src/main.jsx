import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TransactionProvider from "./context/TransactionProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <TransactionProvider>
      <App />
    </TransactionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
