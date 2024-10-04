import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaPaypal } from "react-icons/fa";

const Footer = ({setActiveLink}) => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="col col-1">
          <img src={logo} alt="" />
          <h3 className="col-1-content">
            Uplifting Single Mothers
            <br />
            in East Africa
          </h3>
        </div>

        <div className="col col-2">
          <h3>
            We Welcome Your Support <br /> to Empower Single Mothers
          </h3>
          <h4>Get in touch</h4>
          <ul>
            <li>Email: Mesgana5219@gmail.com</li>
            <li>Tel: 510-393-9200</li>
            <li>Address: Oakland, Ca</li>
          </ul>
          <div className="icon-container">
            <a href="https://www.facebook.com" className="icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="icon">
              <FaInstagram />
            </a>
            <a href="https://www.paypal.com" className="icon">
              <FaPaypal />
            </a>
          </div>
        </div>
        <div className="col col-3">
        <ul>
            <li>
              <Link to="/" onClick={() => setActiveLink("/")}>Home</Link>
            </li>
            <li>
              <Link to="/our-work" onClick={() => setActiveLink("/our-work")}>Our Work</Link>
            </li>
            <li>
              <Link to="/testimonies" onClick={() => setActiveLink("/testimonies")}>Testimonies</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setActiveLink("/contact")}>Contact</Link>
            </li>
            <li>
              <Link to="/get-involved" onClick={() => setActiveLink("/get-involved")}>Get Involved</Link>
            </li>
          </ul>
        </div>
      </div>

      <footer>
        <p>&copy; Copyright 2024 | Mesgana Ministries</p>
      </footer>
    </div>
  );
};

export default Footer;
