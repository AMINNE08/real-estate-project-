import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import ForgotPage from "./pages/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/welcome_page" element={<WelcomePage />} />
          <Route path="/forgot_Page" element={<ForgotPage />} />
          <Route path="/reset-password" element={<ResetPage />} />
        </Routes>
      </Router>
  </StrictMode>
);
