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
    <section className="border-t-0 px-[10px] pb-[3px] pt-[20px]">
      <h3 className="m-0 text-[32px] font-medium">Our Team</h3>
      <p className="mb-[25px] mt-[10px] text-[clamp(15px,1.08vw,19px)]">
        Our team is the backbone of our industrial operations. We believe that
        strong collaboration, mutual respect, and shared responsibility drive
        safe, efficient, and high-quality results. By working together with
        clarity and purpose, we ensure every project is delivered with precision
        and reliability. Our team drives all-metal operations and quality growth
        with precision and adaptability.
      </p>

      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-5 min-[1201px]:grid-cols-5">
        {members.map((member) => (
          <article
            key={`${member.name}-${member.role}`}
            className="group relative min-h-[234px] overflow-hidden rounded-[10px] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="block h-[380px] w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.08]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(9,17,43,0.9)] to-[rgba(9,17,43,0)] p-[12px_10px] text-[#ffffff]">
              <h4 className="m-0 text-[14px]">{member.name}</h4>
              <p className="m-0 mt-[3px] text-[11px] text-[rgba(255,255,255,0.85)]">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutTeamSection;
