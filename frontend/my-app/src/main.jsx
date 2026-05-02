import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Index from "./pages/landingPage.jsx";
import {BrowserRouter} from "react-router-dom"
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <App/>
</BrowserRouter>
);
