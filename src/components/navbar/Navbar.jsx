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

const Navbar = ({showLogin = true }) => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const {currentUser}=useContext(AuthContext)
  console.log("Navbar currentUser:", currentUser); // Log current user

  const toggleMenu = () => {
    setIsActive(!isActive);
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

      {/* Right Side of Navbar */}
      <div className="rightNav">
        {currentUser ? (
          <div className="userNav">
            <img className="avatarImgNav" src={currentUser.avatar || noAvatar} alt="User Avatar" />
            <span>{currentUser.username || "User" }</span>
            <Link to="/welcome_page" className="profileNav">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
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