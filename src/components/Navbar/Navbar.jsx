import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom"; 
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    const [activeLink, setActiveLink] = useState(null); // Track which link is clicked


    const handleClick = () => setSideNav(!sideNav);
    const closeMenu = (path) => {
        setSideNav(false);
        setActiveLink(path); 
    };

    return (
        <>
        <header className="navbar">
            <div className="navbar-left">
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>

            <nav className={`navbar-links ${sideNav ? "active" : ""}`}>
                <Link 
                    to="/" 
                    onClick={() => closeMenu("/")}
                    className={activeLink === "/" ? "active" : ""} 
                >
                    Home
                </Link>
                <Link 
                    to="/about" 
                    onClick={() => closeMenu("/about")}
                    className={activeLink === "/about" ? "active" : ""}
                >
                    About
                </Link>
                <Link 
                    to="/our-work" 
                    onClick={() => closeMenu("/our-work")}
                    className={activeLink === "/our-work" ? "active" : ""}
                >
                    Our Work
                </Link>
                <Link 
                    to="/get-involved" 
                    onClick={() => closeMenu("/get-involved")}
                    className={activeLink === "/get-involved" ? "active" : ""}
                >
                    Get Involved
                </Link>
            </nav>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="hamburger" onClick={handleClick}>
                {sideNav ? (
                    <FaTimes size={25} style={{ color: "#181818"}} />
                ): (
                    <FaBars size={25} style={{ color: "#181818"}} />
                )}
            </div>
            <div className="navbar-button">
                <Link to="/learn-more" className="learn-more-btn">Learn More</Link>
            </div>
        </header>
        <div className="values-banner">
                <ul>
                    <li>Empower</li>
                    <li>Equip</li>
                    <li>Educate</li>
                </ul>
            </div>
        {/* Overlay for background when menu is active */}
        <div className={`overlay ${sideNav ? "active" : ""}`} onClick={() => closeMenu(activeLink)}></div>
        </>
    );
};

export default Navbar;
