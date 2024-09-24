import { useState,   useEffect  } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom"; 
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    const [activeLinkState, setActiveLinkState] = useState(null); 

    const [buttonText, setButtonText] = useState("Learn More");


    const handleClick = () => setSideNav(!sideNav);

    // const closeMenu = (path) => {
    //     setSideNav(false);
    //     setActiveLinkState(path); 
    // };

    const closeMenu = (path) => {
        setActiveLinkState(path);
        if (path !== "/") {
            setButtonText("Help a Mother Today!");
        } else {
            setButtonText("Learn More");
        }
        setSideNav(false); 
    };

    const handleHelpMotherClick = () => {
        setActiveLinkState("/get-involved"); 
        setButtonText("Help a Mother Today!");
        setSideNav(false); 
    };


    useEffect(() => {
        if (activeLinkState === "/") {
            setButtonText("Learn More");
        }
    }, [activeLinkState]);


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
            <Link to={activeLinkState === "/" ? "/our-work" : "/get-involved"} className="learn-more-btn"  onClick={handleHelpMotherClick} >
                    {buttonText}
                </Link>
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
