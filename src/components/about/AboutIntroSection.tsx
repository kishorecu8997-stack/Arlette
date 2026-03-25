import About from "../../assets/img333.jpg (1).jpeg";
import Small from "../../assets/about2.png";

function AboutIntroSection() {
  return (
    <section className="aboutp-intro">
      <div className="aboutp-intro__content">
        <p className="aboutp-kicker">/ About</p>
        <h1>
          Engineering excellence built on precision, innovation, and trust.
        </h1>
        <p>
          At Arlett Engineering, we specialize in delivering high-quality
          engineering and manufacturing solutions designed to power modern
          industries. Based in Coimbatore, we combine technical expertise with a
          commitment to precision to produce dependable machinery and engineered
          products that meet evolving industrial demands.{" "}
        </p>
        <p>
          From concept to execution, our approach is driven by innovation,
          efficiency, and uncompromising quality standards. Whether it’s
          manufacturing components or developing advanced equipment, Arlett
          Engineering stands as a trusted partner for businesses seeking
          performance-driven engineering.
        </p>
        <div className="aboutp-social">
          <span>Follow Us On</span>
          <a href="#" aria-label="Instagram">
            in
          </a>
          <a href="#" aria-label="LinkedIn">
            li
          </a>
          <a href="#" aria-label="X">
            x
          </a>
        </div>
      </div>

      <div className="aboutp-intro__media">
        <img src={About} alt="Metal fabrication preview" />
        <div className="aboutp-intro__badge">
          <img src={Small} alt="Process detail preview" />
        </div>
      </div>
    </section>
  );
}

export default AboutIntroSection;
