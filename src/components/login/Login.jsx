import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../shared/api"
import "react-toastify/dist/ReactToastify.css";
import "../login/Login.css";
import { useDispatch } from "react-redux";
import {login} from "../../redux/userSlice"

export default function Login({ setOpenModal }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const [isActive, setIsActive] = useState(false);

  const navigate= useNavigate();
  const dispatch=useDispatch();



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      console.log("Login attempt with formData:", formData); 
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Server response:", response.data); 
  
      const userData = response.data;
      console.log("Login successful:", userData);

      localStorage.setItem("user", JSON.stringify(userData)); 
      localStorage.setItem("token", userData.token);
      console.log("User saved to localStorage:", JSON.parse(localStorage.getItem("user")));


      await dispatch(login(userData));
      toast.success("Login successful! ✅");
      setOpenModal(false);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/registre", formData);
      toast.success("Registration successful! 🎉");
      setIsActive(false); 
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/v1/auth/google"; 
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000}
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
          {/* login Form */}
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
