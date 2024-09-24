import "../GetInvolved/GetInvolved.css";
import donationImage from '../../assets/images/donation-image.jpg';

const GetInvolved = () => {

  const handleRedirectToPayPal = () => {
    const amount = '10.00'; // Set the donation amount here
    const paypalUrl = `https://www.sandbox.paypal.com/donate/?hosted_button_id=E9T7QXTLFUZJN`;
    window.open(paypalUrl, '_blank');
  };

  return (
    <div className="getInvolved">
      <div className="getInvolved-hero">
        <img
          src="src/assets/images/testmoniy-img-2.png"
          alt="testimony image"
          className="getInvolved-image"
        />
        <div className="getInvolved-overlay">
          <div className="getInvolved-hero-content">
            <h1>Get Involved</h1>
            <div className="underline"></div>
            <p>Your giving makes a difference!</p>
          </div>
        </div>
      </div>
      <section className="getInvolved-container">
        <div className="top-line"></div>
        <h2>Your giving is making a difference!</h2>
        <p>
          Embracing God's teachings leads to a beautiful transformation within us. 
          As we journey in His footsteps, we start reflecting His generosity. Our time, 
          love, and resources flow freely as we follow His example.
        </p>
        <div className="top-line"></div>

        <div className="donation-content">
          <div className="donation-text">
            <h3>Giving</h3>
            <p>Around here, we want God to have our whole heart. That includes our 
        finances! So, we teach and fully believe that we should honor God as 
        our first priority in our hearts by giving the first 10% of our income.</p>
            <p><strong>Support us by donating via PayPal.</strong></p>
          </div>
          <img src={donationImage} alt="Ready to Give?" />
          <div className="donation-overlay">
            <h3>Ready to give?</h3>
            <button className="donation-button" onClick={handleRedirectToPayPal}>
              Support Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

