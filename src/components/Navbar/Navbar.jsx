import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom"; 
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    const [activeLinkState, setActiveLinkState] = useState(null); 


    const handleClick = () => setSideNav(!sideNav);

    const closeMenu = (path) => {
        setSideNav(false);
        setActiveLinkState(path); 
    };

    return (
        <>
        <header className="navbar">
            <div className="navbar-left">
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>

            <nav className={`navbar-links ${sideNav ? "active" : ""}`}>     
                <Link to="/" onClick={() => closeMenu("/")} className={activeLinkState === "/" ? "active" : ""}>
                  Home
                </Link>
                <Link to="/our-work" onClick={() => closeMenu("/our-work")} className={activeLinkState === "/our-work" ? "active" : ""}>
                  Our Work
                </Link>
                <Link to="/contact" onClick={() => closeMenu("/contact")} className={activeLinkState === "/contact" ? "active" : ""}>
                  Contact
                </Link>
                <Link to="/get-involved" onClick={() => closeMenu("/get-involved")} className={activeLinkState === "/get-involved" ? "active" : ""}>
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
