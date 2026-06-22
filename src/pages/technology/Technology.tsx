import TechHeroSection from "../../components/technology/TechHeroSection";
import TechPartnerIntroSection from "../../components/technology/TechPartnerIntroSection";
import TechPlatformAdvantagesSection from "../../components/technology/TechPlatformAdvantagesSection";
import TechArchitectureStackSection from "../../components/technology/TechArchitectureStackSection";
import TechFleetLearningSection from "../../components/technology/TechFleetLearningSection";
import TechProprietaryDatasetSection from "../../components/technology/TechProprietaryDatasetSection";
import { useHashScroll } from "../../hooks/useHashScroll";

const Technology = () => {
  useHashScroll();

  return (
    <main>
      <TechHeroSection />
      <TechPartnerIntroSection />
      <TechPlatformAdvantagesSection />
      <TechArchitectureStackSection />
      <TechFleetLearningSection />
      <TechProprietaryDatasetSection />
    </main>
  );
};

export default Technology;
