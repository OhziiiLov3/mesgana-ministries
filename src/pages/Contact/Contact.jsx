import "../Contact/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from 'emailjs-com';

import contactHeroImage from '../../assets/images/contact-hero.png';
import formImage from '../../assets/images/form-image.png';
import contactBannerImage from '../../assets/images/contact-banner.png';

const Contact = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const [isPopupVisible, setIsPopupVisible] = useState(false);
const [popupMessage, setPopupMessage] = useState('');

const handleChange  = (e) =>{
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
};

const handleSubmit = (e) => {
  e.preventDefault();

  const emailData = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    emailData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setPopupMessage('Thank you for your message, we will reach out shortly.');
      setIsPopupVisible(true); // Show success popup
      setTimeout(() => setIsPopupVisible(false), 3000); // Hide after 3 seconds
    })
    .catch((error) => {
      console.error('EmailJS Error:', error.text);
      setPopupMessage('Failed to send message. Please try again.'); // Show error popup
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000); // Hide after 3 seconds
    });
};

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
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}  required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  required />
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}  required />
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

          {/* Pop-up Message */}
          {isPopupVisible && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}

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
