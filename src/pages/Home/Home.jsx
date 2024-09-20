import { Link } from "react-router-dom";
import "../Home/Home.css"

const Home = () => {
  return (
    <div className='home'>
        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-overlay">
              <div className="hero-content-col-1">
        <h1>Welcome to Mesgana Ministries</h1>
              </div>
              <div className="hero-content-col-2">
              <h1>Uplifting Single Mothers<br/> in East Africa</h1>
              <p>Through Education and Opportunity,<br/>We help Build Brigther Futures.</p>
              </div>
        </div>
        </section>
    {/* Banner */}
    <div className='yellow-banner'>
        <div className='banner-content'>
          <p>Join us in making a difference Today!</p>
          <Link to="/get-involved" className='banner-button'>HELP A MOTHER TODAY</Link>
        </div>
      </div>

 {/* Card Section */}
 <section className='card-section'>
  {/* Card 1 */}
        <div className='card card-1'>
          <div className='card-overlay'>
            <h2>We Equip Single Mothers in East Africa</h2>
            <Link to="/our-work" className='card-button'>&gt; Learn More About Us</Link>
          </div>
        </div>
        {/* Crad 2 */}
        <div className='card card-2'>
          <div className='card-overlay'>
            <h2>We provide revolving Loans and Education</h2>
            <Link to="/testimonies" className='card-button'> &gt; Hear Our Testimonies</Link>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home