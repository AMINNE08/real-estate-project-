import { useState } from "react";
import "./navbar.css";
import logo from "../navbar/logo.png";
import logokeys from "../navbar/logokeys.png";
import Login from "../login/Login";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

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
      <button
        className="logbutton"
        onClick={() => setModalOpen(true)} // Open the modal when clicked
      >
        Login
      </button>
      
      {modalOpen && <Login setOpenModal={setModalOpen} />}{" "}
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isActive ?<FiX size={36} /> : <FiMenu size={36} />}
      </div>
    </header>
  );
};

export default Navbar;
