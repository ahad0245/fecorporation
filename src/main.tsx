// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GarlicPage from "./components/GarlicPage";
import TeamMemberPage from "./components/TeamMemberPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<App />} />
        <Route path="/garlic" element={<GarlicPage />} />
        {/* /kamran, /hana, /gareth, etc. */}
        <Route path="/:firstName" element={<TeamMemberPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
