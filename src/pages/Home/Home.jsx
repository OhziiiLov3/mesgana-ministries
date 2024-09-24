import { Link } from "react-router-dom";
import "../Home/Home.css"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='home'>
        {/* Hero Section */}
        <motion.div className="hero-section"
          style={{ backgroundImage: "url('src/assets/images/home-image.png')" }}
          initial={{ backgroundPositionY: "0%" }}
          animate={{ backgroundPositionY: "50%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className="hero-overlay">
              <motion.div className="hero-content-col-1"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1}}
              >
        <h1>Welcome to Mesgana Ministries</h1>
              </motion.div>

              <motion.div className="hero-content-col-2"
              initial={{ opacity: 0, y: 50}}
              animate={{ opacity: 1, y: 0}}
              transition={{duration: 1.5}}
              >
              <h1>Uplifting Single Mothers<br/> in East Africa</h1>
              <p>Through Education and Opportunity,<br/>We help Build Brigther Futures.</p>
              </motion.div>
        </div>
        </motion.div>
    {/* Banner */}
    <div className='yellow-banner'>
        <div className='home-banner-content'>
          <p>Join us in making a difference Today!</p>
          <Link to="/get-involved" className='home-banner-button'>HELP A MOTHER TODAY</Link>
        </div>
        
      </div>

      <h2  className="programs"style={{ marginTop: '20px' , fontSize: "1.8rem"}}>Our Programs</h2>

 {/* Card Section */}
 <motion.section
  className="card-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Card 1 */}
  <motion.div
  className="card card-1"
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} 
>
  <div className='card-overlay'>
    <h2>We Equip Single Mothers in East Africa</h2>
    <Link to="/our-work" className='card-button'>&gt; Learn More About Us</Link>
  </div>
</motion.div>
        {/* Crad 2 */}

        <motion.div className='card card-2'
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
        >
          <div className='card-overlay'>
            <h2>We provide revolving Loans and Education</h2>
            <Link to="/testimonies" className='card-button'> &gt; Hear Our Testimonies</Link>
          </div>
        </motion.div>
      </motion.section>



    </div>
  )
}

export default Home;