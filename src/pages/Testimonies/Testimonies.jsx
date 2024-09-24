import "../Testimonies/Testimonies.css";

const Testimonies = () => {
  return (
    <div className="testimonies">
      <div className="testimony-hero">
        <img
          src="src/assets/images/our-work-hero.png"
          alt="testimony image"
          className="testimony-image"
        />
        <div className="testimony-overlay">
          <div className="testimony-hero-content">
            <h1>Our Testimonies</h1>
            <div className="underline"></div>
            <p>Testimonies of Faith, Strength, and Transformation</p>
          </div>
        </div>
      </div>
      <section className="testimony-container">
        {/* Testimony One */}
        <div className="testimony-row">
        <div className="image-container">
          <img src="src/assets/images/contact-hero.png" alt="" />
          <div className="testimony-image-overlay"></div>
          </div>

          <div className="testimony-content">
            <h3>Mariam's Story – A New Beginning</h3>
            <div className="underline"></div>
            <p>
              <em>
                "Before Mesgana Ministries, I struggled to provide for my
                children. With no education and little hope, every day was a
                challenge. But through their loan program and vocational
                training, I was able to start my own small business. Now, I can
                support my family, and my children are in school, something I
                never thought possible. Mesgana Ministries gave me the chance to
                create a better life, and I am forever grateful."
              </em>
            </p>
            <span>-Mariam, Mother of Two</span>
          </div>
        
        </div>
        {/* Testimony Two */}
        <div className="testimony-row">
        <div className="image-container">
          <img src="src/assets/images/testmoniy-img-2.png" alt="" />
          <div className="testimony-image-overlay"></div>
          </div>
          <div className="testimony-content">
            <h3>Selam's Journey – Building a Future </h3>
            <div className="underline"></div>
            <p>
              <em>
                "When my husband passed away, I felt lost and alone. Raising
                three children on my own seemed impossible. Mesgana Ministries
                changed my life by giving me access to education and helping me
                start a tailoring business. Today, I not only provide for my
                family, but I also employ other women in my community. Mesgana
                didn't just give me hope—they gave me the tools to build a
                future."
              </em>
            </p>
            <span>—Selam, Mother of Three</span>
          </div>
        </div>
        {/* Testimony Three */}
        <div className="testimony-row">
        <div className="testimony-image-container">
          <img src="src/assets/images/testmoniy-img-1.png" alt="" />
          <div className="testimony-image-overlay"></div>
          </div>
          <div className="testimony-content">
            <h3>Dawit's Success – A Dream Realized </h3>
            <div className="underline"></div>
            <p>
              <em>
                "As a single mother, I couldn’t afford to send my son Dawit to
                school. But with the support of Mesgana Ministries, everything
                changed. They provided us with the resources I needed to start a
                small business, and today, Dawit is excelling in his studies.
                His dream is to become a doctor, and thanks to Mesgana, that
                dream now feels within reach. I am so proud of the progress
                we’ve made."
              </em>
            </p>
            <span>—Rahel, Mother of One</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
