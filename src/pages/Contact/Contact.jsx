import "../Contact/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


import contactHeroImage from '../../assets/images/contact-hero.png';
import formImage from '../../assets/images/form-image.png';
import contactBannerImage from '../../assets/images/contact-banner.png';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <div className="contact-hero">
        <img
          src={contactHeroImage}
          alt="Contact image"
          className="contact-image"
        />
        <div className="contact-overlay">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <div className="underline"></div>
            <p>We would love to hear from you!</p>
          </div>
        </div>
      </div>

      {/* Form and Photo */}
      <div className="form-background">
        <section className="form-container">
          <div className="form-content">
            <h1>Contact Us</h1>
            <div className="underline"></div>
            <p>We would love to hear from you!</p>
            <form action="" className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" required />
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message" required />
              <button type="submit" className="contact-form-btn">
                Send
              </button>
            </form>
          </div>
          <div className="form-image-container">
            <img
              src={formImage}
              alt="Form Image"
              className="form-image"
            />
            <div className="form-image-overlay"></div>
          </div>
        </section>
      </div>

      {/* Banner and Icons */}
      <section className="icon-banner-container">
        <img
          src={contactBannerImage}
          alt="Contact Banner"
          className="contact-banner-image"
        />
        <div className="contact-banner-overlay">
          <div className="contact-banner-content">
            <h2>Get in Touch</h2>
            <div className="contact-underline"></div>
            <p>Join us in making a difference in East Africa</p>
          </div>
        </div>
        <div className="contact-icons">
          <ul>
            <li>
              <FaPhoneAlt /> (510) 234-4746
            </li>
            <li>
              <FaEnvelope /> contact@mesgana.org
            </li>
            <li>
              <FaMapMarkerAlt /> 123 SW Anytown, CA
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
