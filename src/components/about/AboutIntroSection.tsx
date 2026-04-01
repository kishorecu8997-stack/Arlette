import About from "../../assets/img333.jpg (1).jpeg";
import Small from "../../assets/about2.png";

function AboutIntroSection() {
  return (
    <section className="aboutp-intro">
      {/* The aboutp-intro__content class has no direct styles, so it's replaced with a div. */}
      <div>
        <p className="m-0 text-base text-[#111827]">/ About</p>
        <h1 className="mt-[10px] mb-[14px] max-w-[690px] text-[clamp(34px,2.35vw,52px)] leading-[1.22] font-semibold">
          Engineering excellence built on precision, innovation, and trust.
        </h1>
        <p className="mb-[14px] max-w-[760px] text-[#374151] text-[clamp(14px,0.9vw,17px)] leading-[1.62]">
          At Arlett Engineering, we specialize in delivering high-quality
          engineering and manufacturing solutions designed to power modern
          industries. Based in Coimbatore, we combine technical expertise with a
          commitment to precision to produce dependable machinery and engineered
          products that meet evolving industrial demands.{" "}
        </p>
        <p className="mb-[14px] max-w-[760px] text-[#374151] text-[clamp(14px,0.9vw,17px)] leading-[1.62]">
          From concept to execution, our approach is driven by innovation,
          efficiency, and uncompromising quality standards. Whether it’s
          manufacturing components or developing advanced equipment, Arlett
          Engineering stands as a trusted partner for businesses seeking
          performance-driven engineering.
        </p>
        <div className="mt-[18px] flex items-center gap-[12px]">
          <span className="text-sm text-[#111827]">Follow Us On</span>
          <a href="#" aria-label="Instagram" className="w-6 h-6 rounded-full border border-[#111827] inline-flex items-center justify-center no-underline text-[#111827] text-[11px] font-semibold">
            in
          </a>
          <a href="#" aria-label="LinkedIn" className="w-6 h-6 rounded-full border border-[#111827] inline-flex items-center justify-center no-underline text-[#111827] text-[11px] font-semibold">
            li
          </a>
          <a href="#" aria-label="X" className="w-6 h-6 rounded-full border border-[#111827] inline-flex items-center justify-center no-underline text-[#111827] text-[11px] font-semibold">
            x
          </a>
        </div>
      </div>

      {/* <div className="aboutp-intro__media">
        <img src={About} alt="Metal fabrication preview" />
        <div className="aboutp-intro__badge">
          <img src={Small} alt="Process detail preview" />
        </div>
      </div> */}

      <div className="relative rounded overflow-hidden">
  <img
    src={About}
    alt="Metal fabrication preview"
    className="w-full h-[420px] md:h-[420px] max-md:h-[280px] object-cover block"
  />

  <div className="absolute left-[2px] top-[56%] -translate-y-1/2 w-[104px] h-[100px] rounded-lg overflow-hidden">
    <img
      src={Small}
      alt="Process detail preview"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </section>
  );
}

export default AboutIntroSection;
