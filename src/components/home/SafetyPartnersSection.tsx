import { useEffect, useRef, useState } from "react";
import safetyImage from "../../assets/Rectangle 18.png";

import tata from "../../assets/Company.png";
import TM from "../../assets/Company (1).png";
import bosch from "../../assets/Company (2).png";
import wipro from "../../assets/Company (3).png";

//hovercase
import ActiveTata from "../../assets/l1.png"
import ActiveTM from "../../assets/Tech_Mahindra_New_Logo.svg 1.png" 
import ActiveBosch from "../../assets/bosch-logo-png_seeklogo-298084 1.png"
import ActiveWipro from "../../assets/wipro-logo 1.png"

import creativeIdeasImage from "../../assets/image 21.png";
import security from "../../assets/Mask group (5).png";
import suppourt from "../../assets/Mask group (6).png";

import ratingIcon from "../../assets/Mask group.png";
import teamIcon from "../../assets/Mask group (3).png";
import clientsIcon from "../../assets/Mask group (4).png";

import { testimonials } from "../../data/testimonials";

const featureCards = [
  {
    title: "Creative Ideas",
    theme: "theme-white",
    icon: creativeIdeasImage,
  },
  {
    title: "Super Safety",
    theme: "theme-blue-light",
    icon: security,
  },
  {
    title: "24/7 Support",
    theme: "theme-blue-dark",
    icon: suppourt,
  },
];

const progressItems = [
  { label: "Working Ability", value: 95 },
  { label: "Machine Power", value: 88 },
  { label: "Time Management", value: 80 },
];

const statsItems = [
  { label: "5 Star Rating", value: "1.2K +", icon: ratingIcon },
  { label: "Team Members", value: "100+", icon: teamIcon },
  { label: "Happy Clients", value: "1.2 K +", icon: clientsIcon },
];

function SafetyPartnersSection() {
  const barSectionRef = useRef<HTMLDivElement | null>(null);
  const [isBarsInView, setIsBarsInView] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
    progressItems.map(() => 0),
  );
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const target = barSectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBarsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isBarsInView) {
      return;
    }

    const durationMs = 1300;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      setAnimatedPercentages(
        progressItems.map((item) => Math.round(item.value * progress)),
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [isBarsInView]);

  // Auto-slide testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = (activeTestimonialIndex - 1 + total) % total;
    const curr = activeTestimonialIndex;
    const next = (activeTestimonialIndex + 1) % total;
    return [testimonials[prev], testimonials[curr], testimonials[next]];
  };

  return (
    <section className="safetyp-section home-container">
      <div className="safetyp-hero">
        <img src={safetyImage} alt="Safety" className="safetyp-bg-image" />
        <div className="safetyp-overlay" />

        <div className="safetyp-content">
          <p className="safetyp-kicker">Why Choose Us</p>
          <h3>Commitment to Safety & Sustainability</h3>
          <p className="safetyp-intro">
            We follow strict safety protocols and environmentally responsible
            practices to protect our people, our partners, and the planet.
            Quality is embedded at every stage-from raw materials to final
            inspection so every product leaving our facility meets rigorous
            performance and safety benchmarks.
          </p>

          <div className="safetyp-bars" ref={barSectionRef}>
            {progressItems.map((item, index) => (
              <div className="safetyp-bar-row" key={item.label}>
                <span>{item.label}</span>
                <div className="safetyp-bar">
                  <div
                    className="safetyp-bar-fill"
                    style={{ width: `${animatedPercentages[index]}%` }}
                  />
                </div>
                <strong>{animatedPercentages[index]}%</strong>
              </div>
            ))}
          </div>

          <div className="safetyp-stats-row">
            {statsItems.map((item) => (
              <div className="safetyp-stat-item" key={item.label}>
                <img src={item.icon} alt={item.label} />
                <p>
                  {item.label}
                  <br />
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="safetyp-feature-cards">
          {featureCards.map((card, index) => (
           <article key={card.title} className={`safetyp-feature-card ${card.theme} hover-card reveal reveal-delay-${(index + 1) * 100}`}>
  <img src={card.icon} alt={card.title} className="safetyp-feature-icon" />

  <div className="safetyp-feature-text">
    <h5>{card.title}</h5>
    <p>
      Innovation starts with an idea. We turn creative concepts into efficient, reliable, and scalable
      manufacturing solutions.
    </p>
  </div>
</article>
          ))}
        </div>
      </div>

      <div className="safetyp-partners">
        <p className="safetyp-partners-kicker reveal">Our Trusted Partner</p>
        <h3 className="reveal reveal-delay-100">
          We work with chosen partners to ensure stability and control in
          production.
        </h3>

        <div className="safetyp-logos-grid reveal reveal-delay-200">
          <img 
            src={tata} 
            alt="Partner 1" 
            onMouseEnter={(e) => (e.currentTarget.src = ActiveTata)}
            onMouseLeave={(e) => (e.currentTarget.src = tata)}
          />
          <img src={TM} alt="Partner 2" 
          onMouseEnter={(e) => (e.currentTarget.src = ActiveTM)}
          onMouseLeave={(e) => (e.currentTarget.src = TM)}
          />
          <img src={bosch} alt="Partner 3" 
          onMouseEnter={(e) => (e.currentTarget.src = ActiveBosch)}
          onMouseLeave={(e) => (e.currentTarget.src = bosch)}
          />
          <img src={wipro} alt="Partner 4" 
          onMouseEnter={(e) => (e.currentTarget.src = ActiveWipro)}
          onMouseLeave={(e) => (e.currentTarget.src = wipro)}
          />
        </div>
      </div>

      <div className="safetyp-testimonials" style={{ width: "80%", margin: "4rem auto", textAlign: "center" }}>
        {/* <p className="safetyp-testimonials-kicker reveal">Testimonials</p> */}

        <h3 className="reveal reveal-delay-100">What Our Partners Say</h3>

        <div className="safetyp-testimonial-grid">
          {getVisibleTestimonials().map((testimonial, idx) => {
            const isCenter = idx === 1;
            return (
              <article
                key={`${testimonial.id}-${activeTestimonialIndex}`}
                className={`safetyp-testimonial hover-card page-transition reveal reveal-delay-${(idx + 1) * 100} ${isCenter ? 'featured' : 'small'}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (idx === 0) setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  if (idx === 2) setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
                }}
              >
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-content">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  {isCenter && (
                    <>
                      <blockquote>"{testimonial.quote}"</blockquote>
                      <span>Rated {testimonial.rating}</span>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SafetyPartnersSection;
