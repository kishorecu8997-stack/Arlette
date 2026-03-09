import impactBg from "../../assets/about3.png";
import polygon2 from "../../assets/Polygon 2.png";

function AboutImpactSection() {
  return (
    <section className="aboutp-impact">
      <img src={impactBg} alt="Industrial line background" className="aboutp-impact__bg" />
      <div className="aboutp-impact__overlay" />
      <div className="aboutp-impact__content">
        <h2 className="aboutp-impact__title">
          <span className="aboutp-impact__title-top">BONE TO</span>
          <span className="aboutp-impact__title-bottom">MAKE AN IMPACT</span>
        </h2>
        <div className="aboutp-impact__graph">
          <img src={polygon2} alt="Impact polygon timeline" className="aboutp-impact__polygon" />
          <span className="aboutp-impact__point aboutp-impact__point--top">2025</span>
          <span className="aboutp-impact__point aboutp-impact__point--left">2026</span>
          <span className="aboutp-impact__point aboutp-impact__point--right">2024</span>
        </div>
        <p className="aboutp-impact__copy">
          Your Gateway to Outstanding Metal Fabrication Services. <br />
          GK Industries is your go-to destination for top-tier metal fabrication services and job works in
          Coimbatore, Tamil Nadu. <br />
          Our unwavering commitment to excellence is evident in every project we undertake.
        </p>
        <p className="aboutp-impact__copy">
          Your Gateway to Outstanding Metal Fabrication Services. GK Industries is your go-to destination
          for top-tier metal fabrication services and job works in Coimbatore, Tamil Nadu.
        </p>
      </div>
    </section>
  );
}

export default AboutImpactSection;
