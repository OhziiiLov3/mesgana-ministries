import "../GetInvolved/GetInvolved.css";
import  {Link} from "react-router-dom";
import donationImage from '../../assets/images/donation-image.jpg';


const GetInvolved = () => {
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
    love, and resources flow freely as we follow His example. Just as Christ 
    selflessly sacrificed His life for us, we willingly share what we have. 
    It's a divine ripple effect of love and abundance!
  </p>
  <div className="top-line"></div>

  <div className="donation-content">
    <div className="donation-text">
      <h3>Giving</h3>
      <p>
        Around here, we want God to have our whole heart. That includes our 
        finances! So, we teach and fully believe that we should honor God as 
        our first priority in our hearts by giving the first 10% of our income.
      </p>
    </div>
    <img src={donationImage} alt="Ready to Give?" />
    <div className="donation-overlay">
      <h3>Ready to give?</h3>
      <Link to="/testimonies" className='donation-button'> &gt; Support Here</Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default GetInvolved;
