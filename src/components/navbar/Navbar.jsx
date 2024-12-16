import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import logokeys from "../../assets/images/logokeys.png";
import Login from "../login/Login";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import noAvatar from "../../assets/images/noavatar.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [activeTab, setActiveTab] = useState("/");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!user && storedUser) {
        dispatch({type:"user/login", payload: storedUser})
    }
    console.log("Navbar User Data:", user);
  }, [dispatch, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logoimage" />
        <img src={logokeys} alt="logokeys" className="keys" />
      </div>
      <div className={`nav-bg ${isActive ? "active" : ""}`}>
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <a
            href="/"
            className={activeTab === "/" ? "active" : ""}
            onClick={() => setActiveTab("/")}
          >
            <IoHomeOutline className="nav-icon" id="homeelem" />
            Home
          </a>
          <a
            href="/listing"
            className={activeTab === "/listing" ? "active" : ""}
            onClick={() => setActiveTab("/listing")}
          >
            <RiCheckboxMultipleBlankFill className="nav-icon" />
            Listing
          </a>
          <a
            href="#services"
            className={activeTab === "#services" ? "active" : ""}
            onClick={() => {
              setActiveTab("#services");
              setShowServicesDropdown(!showServicesDropdown);
            }}
          >
            <MdMiscellaneousServices className="nav-icon" />
            Services
          </a>
          {showServicesDropdown && (
            <div
              className={`ddropdown-menu ${
                isActive ? "responsive-dropdown" : "desktop-dropdown"
              }`}
            >
              <a href="/bRPage">Buy</a>
              <a href="/bRPage">Rent</a>
              <a href="/Sell">Sell</a>
            </div>
          )}
          <a
            href="#help"
            className={activeTab === "#help" ? "active" : ""}
            onClick={() => setActiveTab("#help")}
          >
            <MdOutlineHelpCenter className="nav-icon" />
            Help
          </a>
          <a
            href="#language"
            className={activeTab === "#language" ? "active" : ""}
            onClick={() => setActiveTab("#language")}
          >
            <GrLanguage className="nav-icon" />
            Language
          </a>
        </nav>
      </div>
      {user ? (
        <div className="user-menu">
          <img
            src={user.avatar || noAvatar}
            alt="User Avatar"
            className="user-avatar"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <span className="username">{user.user?.username || "user"}</span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/wishlist">Wishlist</a>
              <a href="/updateProfile">UpdateProfile</a>
              <button onClick={handleLogout}>logout</button>
            </div>
          )}
        </div>
      ) : (
        <button className="logbutton" onClick={() => setIsLoginOpen(true)}>
          Login
        </button>
      )}
      {isLoginOpen && <Login setOpenModal={setIsLoginOpen} />}{" "}
      <div className="menu-icon" onClick={() => setIsActive(!isActive)}>
        {isActive ? <FiX size={36} /> : <FiMenu size={36} />}
      </div>
    </header>
  );
};

export default Navbar;
