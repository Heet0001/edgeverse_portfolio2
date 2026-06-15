import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TechHeroSection from "../../components/technology/TechHeroSection";
import TechPartnerIntroSection from "../../components/technology/TechPartnerIntroSection";
import TechArchitectureStackSection from "../../components/technology/TechArchitectureStackSection";
import TechPlatformAdvantagesSection from "../../components/technology/TechPlatformAdvantagesSection";
import TechStackIntroSection from "../../components/technology/TechStackIntroSection";
import TechApproachSection from "../../components/technology/TechApproachSection";
// import TechAdvantagesSection from "../../components/technology/TechAdvantagesSection";
import TechFleetLearningSection from "../../components/technology/TechFleetLearningSection";
import TechFleetAdvantagesSection from "../../components/technology/TechFleetAdvantagesSection";
// import TechCapabilityCardsSection from "../../components/technology/TechCapabilityCardsSection";
// import TechStackRowsSection from "../../components/technology/TechStackRowsSection";

const Technology = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    target?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <main>
      <TechHeroSection />
      <TechPartnerIntroSection />
      <TechArchitectureStackSection />
      <TechPlatformAdvantagesSection />
      {/* <TechStackIntroSection /> */}
      {/* <TechApproachSection /> */}
      {/* <TechAdvantagesSection /> */}
      <TechFleetLearningSection />
      <TechFleetAdvantagesSection />
      {/* <TechCapabilityCardsSection /> */}
      {/* <TechStackRowsSection /> */}
    </main>
  );
};

export default Technology;
