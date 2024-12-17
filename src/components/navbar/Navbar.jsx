import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
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
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = user?.username || "User";
  const location = useLocation(); // To track the current path

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && !user) {
      dispatch({ type: "user/login", payload: storedUser });
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "user/logout" }); 
    toast.success("Logged out successfully!"); 
    navigate("/"); 
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logoimage" />
        <img src={logokeys} alt="logokeys" className="keys" />
      </div>
      <div className={`nav-bg ${isActive ? "active" : ""}`}>
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            <IoHomeOutline className="nav-icon" id="homeelem" />
            Home
          </Link>
          <Link
            to="/listing"
            className={location.pathname === "/listing" ? "active" : ""}
          >
            <RiCheckboxMultipleBlankFill className="nav-icon" />
            Listing
          </Link>
          <div
            className={`dropdown-wrapper ${
              location.hash === "#services" ? "active" : ""
            }`}
          >
            <Link
              to="#services"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              <MdMiscellaneousServices className="nav-icon" />
              Services
            </Link>
            {showServicesDropdown && (
              <div
                className={`ddropdown-menu ${
                  isActive ? "responsive-dropdown" : "desktop-dropdown"
                }`}
              >
                <Link to="/bRPage">Buy</Link>
                <Link to="/bRPage">Rent</Link>
                <Link to="/Sell">Sell</Link>
              </div>
            )}
          </div>
          <Link
            to="#help"
            className={location.hash === "#help" ? "active" : ""}
          >
            <MdOutlineHelpCenter className="nav-icon" />
            Help
          </Link>
          <Link
            to="#language"
            className={location.hash === "#language" ? "active" : ""}
          >
            <GrLanguage className="nav-icon" />
            Language
          </Link>
        </nav>
      </div>
      <div className="cont-right">
        {user ? (
          <div className="user-menu">
            <img
              src={user.avatar || noAvatar}
              alt="User Avatar"
              className="user-avatar"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            <span className="username">{username}</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/updateProfile">Update Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="logbutton responsive-logbutton"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>
        )}
        {isLoginOpen && <Login setOpenModal={setIsLoginOpen} />}{" "}
        <div className="menu-icon" onClick={() => setIsActive(!isActive)}>
          {isActive ? <FiX size={36} /> : <FiMenu size={36} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
