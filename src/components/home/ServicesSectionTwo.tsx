import listImage from "../../assets/Rectangle 14.png";

const serviceRows = [
  { id: "01", title: "Consulting" },
  { id: "02", title: "Fabrication" },
  { id: "03", title: "Maintenance" },
];

function ServicesSectionTwo() {
  return (
    <section className="services-two-section home-container">
      <div className="services-two-wrap">
        <img src={listImage} alt="Service process" className="services-two-left-image" />

        <div className="services-two-content">
          <p className="services-label">Services</p>
          <h4 className="services-two-title">Where Consistency Matter The Most</h4>

          <div className="services-two-rows">
            {serviceRows.map((row) => (
              <div key={row.id} className="services-two-row">
                <p>{row.id}</p>
                <p>{row.title}</p>
                <p>
                  We provide expert consulting services that help manufacturing companies improve efficiency,
                  reduce costs, and drive sustainable operational growth.
                </p>
              </div>
            ))}
          </div>

          <button type="button" className="services-two-view-more">
            View More 
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSectionTwo;
