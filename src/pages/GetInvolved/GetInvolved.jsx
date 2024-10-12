import "../GetInvolved/GetInvolved.css";
import getInvolvedHero from "../../assets/images/testmoniy-img-2.png"
import donationImage from '../../assets/images/donation-image.jpg';

const GetInvolved = () => {

  const handleRedirectToPayPal = () => {
    const amount = '10.00'; // Set the donation amount here
    const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=SSMEPEU49TVXY`;
    window.open(paypalUrl, '_blank');
  };

  return (
    <div className="getInvolved">
      <div className="getInvolved-hero">
        <img
          src={getInvolvedHero}
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
        <h2>Your Giving Makes a Lasting Impact!</h2>
        <p>
        At Mesgana Ministries, we believe that by lifting the burdens of others, we fulfill a deeper purpose—both theirs and ours. We all have needs—whether financial, spiritual, mental, or physical—but when we unite in love and generosity, we fill each other's needs. Through this act of giving, we experience the beauty of liberation together.
        </p>

        <p>
        As <strong> <em>Lilla Watson wisely</em> </strong> said, <em>“If you have come here to help me you are wasting your time, but if you have come because your liberation is bound up with mine, then let us work together.”</em> When you give, you are not just offering help—you are becoming part of a shared journey toward freedom and empowerment. Your generosity creates real change, breaking the cycle of poverty and renewing the hope of countless single mothers and families.
        </p>
        <div className="top-line"></div>

        <div className="donation-content">
          <div className="donation-text">
            <h3>Support Our Mission</h3>
            <p>We are called to reflect God's generosity, as He freely pours His love and resources into our lives. As we embrace His teachings, we become vessels of transformation, blessing others as we ourselves are blessed. Every gift—whether time, love, or finances—flows from a heart transformed by His grace.</p>
            <span>Your giving allows us to uplift, equip, and empower the women and families we serve in East Africa, helping them build sustainable livelihoods and brighter futures.</span>
            <p><strong>Support us by donating via PayPal.</strong></p>
          </div>
          <div className="donation-image-container">
            <img src={donationImage} alt="Ready to Give?" />
            <div className="donation-overlay-text">
              <h3>Ready to give?</h3>
              <button className="donation-button" onClick={handleRedirectToPayPal}>
                Support Here
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

