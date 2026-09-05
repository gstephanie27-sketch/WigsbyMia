import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><HomePage /></React.StrictMode>,
);
