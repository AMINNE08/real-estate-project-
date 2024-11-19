import { useState } from 'react';
import './navbar.css'; // Importing the CSS file
import logo from '../navbar/logo.png';
import logokeys from '../navbar/logokeys.png';
import Login from '../login/Login';
import { GrLanguage } from "react-icons/gr";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // State to manage the modal

    const toggleMenu = () => {
        setIsActive(!isActive); // Toggle menu visibility on click
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logoimage" />
                <img src={logokeys} alt="logokeys" className="keys" />
            </div>
            <i
                className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu}
            ></i>
            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <a href="#"><IoHomeOutline className="nav-icon" />Home</a>
                <a href="#"><MdMiscellaneousServices className="nav-icon" />Services</a>
                <a href="#"><CiSquareInfo className="nav-icon" />About</a>
                <a href="#"><MdOutlineHelpCenter className="nav-icon" />Help</a>
                <a href="#"><GrLanguage className="nav-icon" />Language</a>
            </nav>
            <button
                className="logbutton"
                onClick={() => setModalOpen(true)} // Open the modal when clicked
            >
                Login
            </button>
            <div className={`nav-bg ${isActive ? 'active' : ''}`}></div>
            {modalOpen && <Login setOpenModal={setModalOpen} />} {/* Render Login modal if open */}
        </header>
    );
};

export default Navbar;
