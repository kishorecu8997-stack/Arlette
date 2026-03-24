import About from "../../assets/about1st.png";
import Small from "../../assets/about2.png";

function AboutIntroSection() {
  return (
    <section className="aboutp-intro">
      <div className="aboutp-intro__content">
        <p className="aboutp-kicker">/ About</p>
        <h1>Engineering excellence built on precision, innovation, and trust.</h1>
        <p>
          GK industries,an ISO 9001:2015 certified company, boasts a rich history of 50 years in manufacturing and exporting diverse sheet metal components. Our expertise lies in crafting customized designs that cater to our customers’ specific applications. Established in 1971, our journey began with job working for renowned textile and engineering firms. It’s a matter of great pride that we’ve consistently received accolades for delivering high-quality products on time. Welcome to GK Industries.
        </p>
        <p>
          Your Gateway to Outstanding Metal Fabrication Services. GK Industries is your go-to destination for top-tier metal fabrication services and job works in Coimbatore, Tamil Nadu. Our unwavering commitment to excellence is evident in every project we undertake.
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
