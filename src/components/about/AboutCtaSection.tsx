import ctaLeft from "../../assets/about4.png";
import ctaRight from "../../assets/about5.png";

function AboutCtaSection() {
  return (
    <section className="aboutp-cta">
      <img src={ctaLeft} alt="Industrial setup left" className="aboutp-cta__bg aboutp-cta__bg--left" />
      <img src={ctaRight} alt="Industrial setup right" className="aboutp-cta__bg aboutp-cta__bg--right" />
      <div className="aboutp-cta__overlay">
        <p>Built the Future, Restore the Past</p>
        <h3>Individual Assess Each Plan And Offer Optimal Solutions</h3>
        <p>
          Browse our products and services to find dependable industrial solutions. We combine quality,
          reliable equipment and engineered performance.
        </p>
        <a href="/products">View Our Products and Services</a>
      </div>
    </section>
  );
}

export default AboutCtaSection;
