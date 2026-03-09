import memberOne from "../../assets/person1.png";
import memberTwo from "../../assets/person2.png";
import memberThree from "../../assets/person3.png";
import memberFour from "../../assets/person4.png";
import memberFive from "../../assets/person5.png";

const members = [
  { name: "Jhone Kasper", role: "CEO", image: memberOne },
  { name: "Jhone Kasper", role: "COO", image: memberTwo },
  { name: "Jhone Kasper", role: "Project Lead", image: memberThree },
  { name: "Jhone Kasper", role: "HR", image: memberFour },
  { name: "Jhone Kasper", role: "Director", image: memberFive },
];

function AboutTeamSection() {
  return (
    <section className="aboutp-team">
      <h3>Our Team</h3>
      <p className="aboutp-team__lead">
        Our team is the backbone of our industrial operations. We believe that strong collaboration, mutual respect,
         and shared responsibility drive safe, efficient, and high-quality results. By working together with clarity and
       purpose,we ensure every project is delivered with precision and reliability.ur team drives all-metal operations 
       and quality growth with precision and adaptability.
      </p>

      <div className="aboutp-team__grid">
        {members.map((member) => (
          <article key={`${member.name}-${member.role}`} className="aboutp-team__card">
            <img src={member.image} alt={member.name} />
            <div className="aboutp-team__meta">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutTeamSection;
