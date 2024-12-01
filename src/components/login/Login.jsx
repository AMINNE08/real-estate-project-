import { useState } from "react";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "../login/Login.css";
export default function Login({ setOpenModal }) {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterClick = () => {
    setIsActive(true);
    setErrorMessage("");
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setErrorMessage("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/auth/registre",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        }
      );
      toast.success("Registration successful! 🎉"); // Success toast
      setIsActive(false); // Switch to login mode
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed.";
      toast.error(message); // Error toast
      setErrorMessage(message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      toast.success("Login successful! ✅"); // Success toast
      setOpenModal(false); // Close modal on success
      navigate("/welcome_page");
    } catch (error) {
      const message = error.response?.data?.message || "Login failed.";
      toast.error(message); // Error toast
      setErrorMessage(message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google"; 
 };

 

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="modalBackground" onClick={() => setOpenModal(false)}>
        <div
          className={`container ${isActive ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Register Form */}
          <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
              <h1>Create Account</h1>
              <div className="social-icons">
              <button className="authicon" onClick={handleGoogleLogin}>
                    <FaGoogle className="iicon" /> Sign in with Google
                </button>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="phoneNumber"
                name="phone"
                placeholder="phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>

          {/* Login Form */}
          <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className="social-icons">
                <button className="authicon" onClick={handleGoogleLogin}>
                  <FaGoogle className="iicon" /> Sign in with Google
                </button>
              </div>
              <span>or use your email and password</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Link to='/forgot_page'>Forgot Your Password?</Link>
              <button type="submit">Login</button>
            </form>
          </div>

          {/* Toggle Between Forms */}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>
                  Enter your personal details to use all of our site features
                </p>
                <button
                  className="hidden"
                  id="login"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of our site
                  features
                </p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
