import workerImage from "../../assets/Rectangle 8.png";
import leftImage from "../../assets/Rectangle 7.png";
import group63Image from "../../assets/Group 63 (1).png";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="about-section home-container">
      <div className="about-grid">
        <div className="about-left">
          <img src={leftImage} alt="About left" className="about-left-image " />
          <img src={group63Image} alt="26 years of experience" className="about-badge-image rotate-animation" />
        </div>

        <div className="about-content">
          <p className="about-content-label">About</p>
          <h2>Engineering excellence built on precision, innovation, and trust.</h2>
          <p>
           At Arlett Engineering, we specialize in delivering high-quality engineering and manufacturing solutions designed 
           to power modern industries. Based in Coimbatore, we combine technical expertise with a commitment to precision to produce 
           dependable machinery and engineered products that meet evolving industrial demands.
          </p>
          <p>
            From concept to execution, our approach is driven by innovation, efficiency, and uncompromising quality standards. Whether it’s manufacturing components 
            or developing advanced equipment, 
            Arlett Engineering stands as a trusted partner for businesses seeking performance-driven engineering
          </p>
          <div className="about-cta">
            <button type="button" onClick={() => navigate('/about')}>Read More</button>
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
