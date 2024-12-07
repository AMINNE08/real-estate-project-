import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../utils/api"; 
import "react-toastify/dist/ReactToastify.css";
import "../login/Login.css";
import { AuthContext } from "../../context/AuthContext";

export default function Login({ setOpenModal }) {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const {updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/registre", formData);
      toast.success("Registration successful! 🎉");
      setIsActive(false); // Switch to login mode
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      console.log("Login attempt with formData:", formData); // Log user input
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Server response:", response.data); // Log response from the backend
  
      if (response.data) {
        updateUser(response.data.user); // Save user to context
        toast.success("Login successful! ✅");
        setOpenModal(false);
        navigate("/welcome_page");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error); // Log errors
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  

  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:3000/auth/google"; // Redirect to Google OAuth
  };

  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="modalBackground" onClick={() => setOpenModal(false)}>
        <div
          className={`container ${isActive ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Registration Form */}
          <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
              <h1>Create Account</h1>
              <button
                type="button"
                className="authicon"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="iicon" /> Sign in with Google
              </button>
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>

          {/* Login Form */}
          <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <button
                type="button"
                className="authicon"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="iicon" /> Sign in with Google
              </button>
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
              <Link to="/forgot_page">Forgot Your Password?</Link>
              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>

          {/* Form Toggle */}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
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
                <p>Register with your personal details to use all site features</p>
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
