import heroImage from "../../assets/Rectangle 5 (1).png";
import group76Image from "../../assets/Group 76.png";
import group71Image from "../../assets/Rectangle 6.png";
import group57Image from "../../assets/Group 57.png";
// import arletteLogo from "../../assets/Group 74 (1).png";

function HeroSection() {
  return (
    <section className="hero-section home-container">
      <div className="hero-media">
        <img src={heroImage} alt="Industrial" className="hero-bg" />
        <div className="hero-overlay" />
        

        <div className="hero-center">
          <div className="hero-kicker-row">
            <span>Innovate</span>
            <img src={group57Image} alt="separator" />
            <span>Build</span>
            <img src={group57Image} alt="separator" />
            <span>Arlette</span>
          </div>

          <h1 className="hero-title">Everything You Need To Get Started In One Place</h1>
        </div>

        <div className="hero-bottom-right">
          <p>
            // We provide reliable, scalable solutions that empower organizations to improve efficiency,
            make smarter decisions, and drive sustainable growth.
          </p>
          <button type="button" className="hero-connect-btn">
            <img src={group76Image} alt="Connect Us" />
          </button>
        </div>
      </div>

      <div className="hero-gray-cut" />

      <div className="hero-card">
        <img src={group71Image} alt="Contact Here" className="hero-card-image" />
        <div className="hero-card-content">
          <h3>
            Have Questions?
            <br />
            We're Here
          </h3>
          <p>Our team is ready to support and deliver the quality assured product</p>
          <button type="button" className="hero-card-btn">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
