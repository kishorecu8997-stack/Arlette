import { useEffect } from "react";
import AboutIntroSection from "../components/about/AboutIntroSection";
// import AboutImpactSection from "../components/about/AboutImpactSection";
import AboutValuesSection from "../components/about/AboutValuesSection";
import AboutTeamSection from "../components/about/AboutTeamSection";
import AboutCtaSection from "../components/about/AboutCtaSection";
import PrecisionLifecycle  from "../components/about/PrecisionLifecycle";
import "../components/about/about.css";
import "../styles/animations.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutp-page page-transition">
      <div className="aboutp-container">
        <AboutIntroSection />
        {/* <AboutImpactSection /> */}
        <PrecisionLifecycle/>
        <AboutValuesSection />
        <AboutTeamSection />
        <AboutCtaSection />
      </div>
    </div>
  );
}

export default About;
