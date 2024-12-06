import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WelcomePage from './pages/WelcomePage.jsx'; 
import ForgotPage from './pages/ForgotPage.jsx';
import ResetPage from './pages/ResetPage.jsx';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import UpdatePage from './pages/UpdatePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/welcome_page" element={<WelcomePage />} />
        <Route path="/forgot_Page" element={<ForgotPage/>} />
        <Route path="/reset-password" element={<ResetPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/updateProfile" element={<UpdatePage />} />

      </Routes>
    </Router>
    </AuthContextProvider>
  </StrictMode>,
);
