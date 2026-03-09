import workerImage from "../../assets/Rectangle 8.png";
import leftImage from "../../assets/Rectangle 7.png";
import group63Image from "../../assets/Group 63 (1).png";

function AboutSection() {
  return (
    <section className="about-section home-container">
      <div className="about-grid">
        <div className="about-left">
          <img src={leftImage} alt="About left" className="about-left-image" />
          <img src={group63Image} alt="26 years of experience" className="about-badge-image" />
        </div>

        <div className="about-content">
          <p className="about-content-label">About</p>
          <h2>Design and technology combined to help brands connect and stand out.</h2>
          <p>
            GK industries, an ISO 9001:2015 certified company, boasts a rich history of 50 years in
            manufacturing and exporting diverse sheet metal components. Our expertise lies in crafting
            customized designs that cater to our customers' specific applications. Established in 1971,
            our journey began with job working for renowned textile and engineering firms.
          </p>
          <p>
            Your Gateway to Outstanding Metal Fabrication Services. GK Industries is your go-to destination
            for top-tier metal fabrication services and job works in Coimbatore, Tamil Nadu. Our unwavering
            commitment to excellence is evident in every project we undertake.
          </p>
          <div className="about-cta">
            <button type="button">Read More</button>
          </div>
        </div>

        <img src={workerImage} alt="About right" className="about-right" />
      </div>

      <div className="about-stats">
        <p className="about-stats-copy">
          Sustainable, visionary steel solutions that serve customers and communities, people and
          planet.Sustainable, visionary steel solutions that
        </p>

        <div>
          <p className="about-stat-value">100%</p>
          <p className="about-stat-desc">Our products are 100% infinitely recyclable without quality degradation</p>
        </div>

        <div>
          <p className="about-stat-value">90%</p>
          <p className="about-stat-desc">Steel contains up to 90% recycled steel content</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
