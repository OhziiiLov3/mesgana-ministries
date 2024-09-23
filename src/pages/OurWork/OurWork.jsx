import { motion } from "framer-motion";
import "../OurWork/OurWork.css";

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
          src="src/assets/images/our-work-hero.png"
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
            At Mesgana Ministries, our mission is to uplift single mothers in
            East Africa by providing them with the education and resources they
            need to create sustainable livelihoods. Through our revolving loan
            programs and educational support, we empower women to build brighter
            futures for themselves and their children.
          </p>
          <br />
          <span>
            We believe that by investing in single mothers, we are investing in
            stronger families, communities, and a brighter tomorrow.
          </span>
        </div>
          
        <div className="our-work-col-2">
          <div className="image-container">
      <img src="src/assets/images/mission-image.png" alt="Mission" />
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about empowering mothers.</span>
            </div>
            <div className="card-col-2">
              <h3>Equip</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about equipping mothers.</span>
            </div>
            <div className="card-col-3">
              <h3>Educate</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about educating mothers.</span>
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
              <h3>Inspire</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about inspiring mothers.</span>
            </div>
            <div className="card-col-2">
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about supporting mothers.</span>
            </div>
            <div className="card-col-3">
              <h3>Guide</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum magnam nemo distinctio totam deleniti accusantium dicta
                dolor cumque sapiente neque ullam excepturi, natus asperiores
                aut.
              </p>
              <span>More details about guiding mothers.</span>
            </div>
          </motion.div>
        </div>

        <div className="bottom-banner"></div>
      </section>
    </div>
  );
};

export default OurWork;
