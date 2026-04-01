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
    description:
      "We do our best with a team of integrity, with trust and honesty",
    image: collaborative,
  },
];

function AboutValuesSection() {
  return (
    <section className="border-t-0 pt-[25px]">
      <h3 className="reveal m-0 text-[30px] font-medium">Core Values</h3>
      <p
        className="reveal reveal-delay-100 mt-[10px] text-[clamp(15px,1.08vw,20px)]"
      >
        At the heart of our operations are values that define how we work,
        deliver, and grow. These principles guide our people, shape our
        processes, and ensure we consistently provide reliable industrial
        solutions to our clients.
      </p>

      <div className="mt-[25px] grid grid-cols-1 min-[1201px]:grid-cols-3">
        {values.map((value, index) => (
          <article
            key={value.title}
            className={`hover-card reveal reveal-delay-${(index + 1) * 100} px-[16px] pb-[32px] pt-[26px] text-center ${
              index !== 0
                ? "border-[#d8dbe3] max-[1200px]:border-t min-[1201px]:border-l"
                : ""
            }`}
          >
            <div className="mx-auto flex items-center justify-center text-[15px] text-[#6b7280]">
              <img
                src={value.image}
                alt={value.title}
                className="h-auto w-[60px] rounded-none"
              />
            </div>
            <h4 className="mb-[6px] mt-[10px] text-[16px] text-[#374151]">{value.title}</h4>
            <p className="mx-auto max-w-[280px] text-[12px] text-[#6b7280]">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutValuesSection;
