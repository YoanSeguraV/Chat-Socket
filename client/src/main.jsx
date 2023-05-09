import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";
// import { ServiceContextProvider } from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ServiceContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </ServiceContextProvider>
);
