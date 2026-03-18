import mainImage from "../../assets/Rectangle 14.png";
import miniImage from "../../assets/Rectangle 11.png";

const serviceCards = [
  {
    title: "Consulting",
    body: "We provide expert consulting services that help manufacturing companies improve efficiency, reduce costs, and drive sustainable operational growth.",
  },
  {
    title: "Fabrication",
    body: "Our fabrication services combine advanced machinery and skilled craftsmanship to produce durable, precision-fabricated components.",
  },
  {
    title: "Maintenance",
    body: "We provide comprehensive maintenance services to ensure optimal performance, safety, and longevity of manufacturing equipment and facilities.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section home-container">
      <div className="services-wrap">
        <img src={mainImage} alt="Services" className="services-left-image" />

        <div>
          <p className="services-label">Services</p>
          <p className="services-copy">
            Standardized workflows eliminate variation, delivering uniform quality from first batch to last.
          </p>

          <div className="services-metrics-block">
            <img src={miniImage} alt="Service preview" className="services-mini-image" />

            <div className="services-metrics">
              <div>
                <p className="services-metric-value"> 1.2%</p>
                <p className="services-metric-label">Allowed deviation</p>
              </div>
              <div>
                <p className="services-metric-value">100%</p>
                <p className="services-metric-label">Critical Checkpoint</p>
              </div>
              <div>
                <p className="services-metric-value">97.8%</p>
                <p className="services-metric-label">First-Pass Yield</p>
              </div>
            </div>
          </div>

          <h4 className="services-heading">Where Consistency Matter The Most</h4>

          <div className="services-cards-grid">
            {serviceCards.map((card) => (
              <article key={card.title} className="services-card">
                <img src={mainImage} alt={card.title} className="services-card-bg" />
                <div className="services-card-overlay">
                  <h5>{card.title}</h5>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
