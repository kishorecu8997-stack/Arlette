import heroImage from "../../assets/Rectangle 9.png";
import gridimg from "../../assets/Rectangle 11.png";
const productRows = [
  "Precision Engineering",
  "Manufacturing Solutions",
  "Infrastructure Project",
  "Energy System",
  "Visit Our Product Page",
];

function StatsSection() {
  return (
    <section className="stats-section home-container">
      <div className="stats-wrap">
        <div className="stats-left">
          <img src={heroImage} alt="Welding" className="stats-welding-image" />
        </div>

        <div className="stats-panel">
          <p className="stats-label">Our Products</p>
          <h3 className="stats-title">Building Meaningful Brand Experiences Through Design And Technology</h3>

          <div className="stats-lines">
            {productRows.map((item) => (
              <div key={item} className="stats-line-item">
                <span>{item}</span>
              </div>
            ))}
          </div>

          <img src={gridimg} alt="Product preview" className="stats-inline-image" />
          {/* <button type="button" className="stats-inline-arrow" aria-label="Open">
            ?
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
