import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import ServicesSectionTwo from "../components/home/ServicesSectionTwo";
import SafetyPartnersSection from "../components/home/SafetyPartnersSection";
import "./home.css";

function Home() {
  return (
    <div className="home-page pb-32">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ServicesSectionTwo />
      <SafetyPartnersSection />
    </div>
  );
}

export default Home;
