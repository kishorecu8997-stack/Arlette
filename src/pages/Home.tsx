import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import SafetyPartnersSection from "../components/home/SafetyPartnersSection";
import "./home.css";
import "../styles/animations.css";

function Home() {
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
    <div className="home-page pb-32 page-transition">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      {/* <ServicesSectionTwo /> */}
      <SafetyPartnersSection />
    </div>
  );
}

export default Home;
