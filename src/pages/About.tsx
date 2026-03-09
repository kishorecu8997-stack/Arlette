import AboutIntroSection from "../components/about/AboutIntroSection";
import AboutImpactSection from "../components/about/AboutImpactSection";
import AboutValuesSection from "../components/about/AboutValuesSection";
import AboutTeamSection from "../components/about/AboutTeamSection";
import AboutCtaSection from "../components/about/AboutCtaSection";
import "../components/about/about.css";

function About() {
  return (
    <div className="aboutp-page">
      <div className="aboutp-container">
        <AboutIntroSection />
        <AboutImpactSection />
        <AboutValuesSection />
        <AboutTeamSection />
        <AboutCtaSection />
      </div>
    </div>
  );
}

export default About;
