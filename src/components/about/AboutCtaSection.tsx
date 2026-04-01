import ctaLeft from "../../assets/about4.png";
import ctaRight from "../../assets/about5.png";

function AboutCtaSection() {
  return (
    <section className="relative mt-[12px] grid min-h-[380px] grid-cols-1 overflow-hidden xl:min-h-[260px] xl:grid-cols-2">
      <img
        src={ctaLeft}
        alt="Industrial setup left"
        className="h-[190px] w-full rounded-l-[20px] object-cover xl:h-[450px]"
      />
      <img
        src={ctaRight}
        alt="Industrial setup right"
        className="h-[190px] w-full rounded-r-[20px] object-cover xl:h-[450px]"
      />
      <div className="absolute inset-0 m-auto h-fit max-w-[calc(100%-30px)] bg-[rgba(10,18,56,0.87)] p-[28px_28px_24px] text-white xl:max-w-[640px]">
        <p className="m-0 text-[12px] text-[rgba(255,255,255,0.75)]">
          Built the Future, Restore the Past
        </p>
        <h3 className="mt-[8px] mb-[10px] text-[clamp(26px,1.8vw,38px)] font-medium leading-[1.28]">
          Individual Assess Each Plan And Offer Optimal Solutions
        </h3>
        <p className="m-0 text-[13px] leading-[1.55] text-[rgba(255,255,255,0.9)]">
          Browse our products and services to find dependable industrial solutions. We combine quality,
          reliable equipment and engineered performance.
        </p>
        <a href="/products" className="mt-[14px] inline-flex items-center gap-[6px] text-[13px] text-white no-underline after:content-['\2197']">
          View Our Products and Services
        </a>
      </div>
    </section>
  );
}

export default AboutCtaSection;
