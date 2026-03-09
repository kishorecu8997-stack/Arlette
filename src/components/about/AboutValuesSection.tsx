import think from "../../assets/think.png";
import neversettle from "../../assets/neverSettle.png";
import collaborative from "../../assets/colobrate.png";

const values = [
  {
    title: "THINK BIG",
    description: "Empowering each individual with confidence",
    image: think,
  },
  {
    title: "NEVER SETTLE",
    description: "Consistently improving, inspiring and taking the right steps",
    image: neversettle,
  },
  {
    title: "BE COLLABORATIVE",
    description: "We do our best with a team of integrity, with trust and honesty",
    image: collaborative,
  },
];

function AboutValuesSection() {
  return (
    <section className="aboutp-values">
      <h3>Core Values</h3>
      <p className="aboutp-values__lead">
        At the heart of our operations are values that define how we work,
        deliver, and grow. These principles guide our people, shape our
        processes, and ensure we consistently provide reliable industrial
        solutions to our clients.
      </p>

      <div className="aboutp-values__grid">
        {values.map((value) => (
          <article key={value.title} className="aboutp-values__item">
            <div className="aboutp-values__icon">
              <img
                src={value.image}
                alt={value.title}
                className="aboutp-values__img"
              />
            </div>
            <h4>{value.title}</h4>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutValuesSection;