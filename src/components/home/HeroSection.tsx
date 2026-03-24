import { useState } from "react";
import heroImage from "../../assets/Main.jpeg";
import group76Image from "../../assets/Group 76.png";
import group71Image from "../../assets/Rectangle 6.png";
import group57Image from "../../assets/Group 57.png";
import { Popup } from "../Popup";
import { ContactForm } from "../contact/ContactForm";
// import arletteLogo from "../../assets/Group 74 (1).png";

function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
    <section className="hero-section home-container">
      <div className="hero-media">
        <img src={heroImage} alt="Industrial" className="hero-bg" />
        <div className="hero-overlay" />
        

        <div className="hero-center reveal">
          <div className="hero-kicker-row">
            <span>Innovate</span>
            <img src={group57Image} alt="separator" />
            <span>Build</span>
            <img src={group57Image} alt="separator" />
            <span>Arlette</span>
          </div>

          <h1 className="hero-title">Everything You Need To Get Started In One Place</h1>
        </div>

        <div className="hero-bottom-right reveal reveal-delay-200">
          <p>
            // Arlett Engineering delivers precision manufacturing and innovative engineering solutions, ensuring reliable performance, superior quality, and efficiency for modern industrial applications.
          </p>
          <button type="button" style={{ borderRadius: '6px' }} onClick={() => setIsPopupOpen(true)}>
            <img src={group76Image} alt="Connect Us" />
          </button>
        </div>
      </div>

      <div className="hero-gray-cut" />

      <div className="hero-card hover-card reveal reveal-delay-300">
        <img src={group71Image} alt="Contact Here" className="hero-card-image" />
        <div className="hero-card-content">
          <h3>
            Have Questions?
            <br />
            We're Here
          </h3>
          <p>Our team is ready to support and deliver the quality assured product</p>
          <button type="button" className="hero-card-btn" onClick={() => setIsPopupOpen(true)}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ContactForm />
      </Popup>
    </>
  );
}

export default HeroSection;
