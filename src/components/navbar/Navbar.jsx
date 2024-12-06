import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import "./navbar.css";
import logo from "../../shared/images/logo.png";
import logokeys from "../../shared/images/logokeys.png";
import Login from "../login/Login";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import  noAvatar from "../../shared/images/noavatar.jpg"
import api from "../../utils/api";


const Navbar = ({showLogin = true }) => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false); // New State for User Dropdown

  const {currentUser}=useContext(AuthContext)
  console.log("Navbar currentUser:", currentUser); // Log current user

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const { updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logoimage" />
        <img src={logokeys} alt="logokeys" className="keys" />
      </div>
      <div className={`nav-bg ${isActive ? "active" : ""}`}>

      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <a href="#">
          <IoHomeOutline className="nav-icon" id="homeelem" />
          Home
        </a>
        <a
          href="#"
          className={activeTab === "Services" ? "active" : ""}
          onClick={() => {
            setActiveTab("Services");
            setShowServicesDropdown(!showServicesDropdown);
          }}
        >
          <MdMiscellaneousServices className="nav-icon" />
          Services
        </a>
        {showServicesDropdown && (
  <div
    className={`dropdown-menu ${
      isActive ? "responsive-dropdown" : "desktop-dropdown"
    }`}
  >
    <a href="#">Buy</a>
    <a href="#">Rent</a>
    <a href="#">Sell</a>
  </div>
)}

        <a href="#">
          <CiSquareInfo className="nav-icon" />
          About
        </a>
        <a href="#">
          <MdOutlineHelpCenter className="nav-icon" />
          Help
        </a>
        <a href="#">
          <GrLanguage className="nav-icon" />
          Language
        </a>
      </nav>
      </div>

      <div className="rightNav">
        {currentUser ? (
          <div className="userNav">
            <img
              className="avatarImgNav"
              src={currentUser.avatar || noAvatar}
              alt="User Avatar"
              onClick={() => setShowUserDropdown(!showUserDropdown)} // Toggle dropdown on click
            />
            <span onClick={() => setShowUserDropdown(!showUserDropdown)}>
              {currentUser || "User"}
            </span>
            {showUserDropdown && (
              <div className="user-dropdown">
                <Link to="/profile">My Profile</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/property-list">Property List</Link>
                <Link to="/reservation-list">Reservation List</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          showLogin && (
            <button
              className="logbutton"
              onClick={() => setModalOpen(true)}
            >
              Login
            </button>
          )
        )}
      </div>

      {modalOpen && <Login setOpenModal={setModalOpen} />}

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isActive ? <FiX size={36} /> : <FiMenu size={36} />}
      </div>
    </header>
  );
};

export default Navbar;