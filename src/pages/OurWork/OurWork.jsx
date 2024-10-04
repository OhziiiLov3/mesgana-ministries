import { motion } from "framer-motion";
import "../OurWork/OurWork.css";

// Import images
import heroImage from '../../assets/images/our-work-hero.png';
import missionImage from '../../assets/images/mission-image.png';

const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const OurWork = () => {
  return (
    <div className="our-work">
      {/* Hero Section */}
      <div className="our-work-hero">
        <motion.img
          src={heroImage}
          alt="Hero Image"
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div 
          className="our-work-overlay"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-content">
            <h1>Our Work </h1>
            <div className="underline"></div>
            <p>
              Empowering single mothers in East Africa for a brighter future
            </p>
          </div>
        </motion.div>
      </div>

      <section className="top">
        <div className="our-work-col-1">
          <h2>Mission</h2>
          <div className="underline"></div>
          <p>
          At Mesgana Ministries, our mission is to uplift single mothers in East Africa by providing the education, resources, and support needed to create sustainable livelihoods. Inspired by <strong><em>Proverbs 19:17 </em></strong> — "Whoever is generous to the poor lends to the Lord, and He will repay him for his deed" — we believe that empowering women to build brighter futures for themselves and their children is a divine calling.
          </p>
          <br />
          <span>
          Through our revolving loan programs and educational support, we invest in the lives of single mothers. By lifting up these mothers, we are sowing into stronger families, flourishing communities, and a brighter tomorrow for all.
          </span>
        </div>
          
        <div className="our-work-col-2">
          <div className="image-container">
            <img src={missionImage} alt="Mission" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      <section className="bottom">
        {/* Yellow Banner */}
        <div className="top-banner">
          <h2>What we Believe</h2>
          <div className="underline"></div>
        </div>

        {/* White Card Overlapping the Banner */}
        <div className="card-container">
          <motion.div className="card-content"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="card-col-1">
              <h3>Empower</h3>
              <p>
              We believe in empowering single mothers to recognize their strength and potential. By providing financial resources and education, we help women take charge of their futures with confidence and faith, knowing they are equipped to succeed.
              </p>
              <span>"God is within her, she will not fall; God will help her at break of day."<span> - <em>Psalm 46:5</em></span></span>
            </div>
            <div className="card-col-2">
              <h3>Equip</h3>
              <p>
              We believe in equipping women with the tools they need to create sustainable livelihoods. Through our training programs and access to resources, we prepare mothers to thrive both economically and spiritually to build a stable future.
              </p>
              <span>"She is clothed with strength and dignity, and she laughs without fear of the future." <span> — <em>Proverbs 31:25</em></span></span>
            </div>
            <div className="card-col-3">
              <h3>Educate</h3>
              <p>
              We believe in educating women and their families to break the cycle of poverty. Knowledge is a powerful tool, and through education, we empower mothers to make informed decisions, nurture their children, and build brighter futures.
              </p>
              <span>"Teach me knowledge and good judgment, for I trust your commands." <span>— <em>Psalm 119:66</em></span></span>
            </div>
          </motion.div>
        </div>

        {/* 2nd card container */}
        <div className="second-card-container">
          <motion.div className="second-card-content"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="card-col-1">
              <h3>Restore</h3>
              <p>
              We believe in restoring the dignity, identity, and purpose of every woman we serve. Each mother we empower is fearfully and wonderfully made, and through our support, we aim to remind her of her value and God-given potential.
              </p>
              <span>"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."<span> — <em>Psalm 139:14</em></span></span>
            </div>
            <div className="card-col-2">
              <h3>Renew</h3>
              <p>
              We believe in the power of renewal—helping women and their children renew their minds, spirits, and futures. By fostering hope and providing education, we renew their strength to pursue new opportunities and build sustainable lives.
              </p>
              <span>"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."<span> — <em>Isaiah 40:31</em></span></span>
            </div>
            <div className="card-col-3">
              <h3>Rebuild</h3>
              <p>
              We believe in rebuilding communities, one family at a time. Through our revolving loan programs, we empower mothers to not only provide for their children but to also contribute to the restoration of their communities.
              </p>
              <span>"They will rebuild the ancient ruins and restore the places long devastated; they will renew the ruined cities that have been devastated for generations." <span> — <em>Isaiah 61:4</em></span></span>
            </div>
          </motion.div>
        </div>

        <div className="bottom-banner"></div>
      </section>
    </div>
  );
};

export default OurWork;
