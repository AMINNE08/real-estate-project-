import  { useState } from 'react';
import './navbar.css'; // Importing the CSS file
import logo from '../navbar/logo.png'
import { GrLanguage } from "react-icons/gr";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";





const Navbar = () => {
    const [isActive, setIsActive] = useState(false); 

    const toggleMenu = () => {
        setIsActive(!isActive); // Toggle menu visibility on click
    };

    return (
        <header className="header">
            <img src={logo} alt="" className='logoimage'/>
            <i
                className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu} // Toggle menu when clicked
            ></i>
            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <a href="#"><IoHomeOutline className="nav-icon" />Home</a>
                <a href="#"><MdMiscellaneousServices className="nav-icon" />Services</a>
                <a href="#"><CiSquareInfo className="nav-icon" />About</a>
                <a href="#"> <MdOutlineHelpCenter className="nav-icon" />Help</a>
                <a href="#" > <GrLanguage className="nav-icon" />language</a>

            </nav>
            <button className='logbutton'>login</button>
            <div className={`nav-bg ${isActive ? 'active' : ''}`}></div> {/* Background overlay for mobile */}
        </header>
    );
};

export default Navbar;
