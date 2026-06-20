import ProductHeroSection from "../../components/product/ProductHeroSection";
import ProductLineSection from "../../components/product/ProductLineSection";
// import ProductIntroSection from "../../components/product/ProductIntroSection";
// import ProductCapabilitiesSection from "../../components/product/ProductCapabilitiesSection";
// import ProductSafetyCardsSection from "../../components/product/ProductSafetyCardsSection";
// import ProductFeatureShowcase from "../../components/product/ProductFeatureShowcase";
// import ProductDeploymentSection from "../../components/product/ProductDeploymentSection";
import ProductCtaSection from "../../components/product/ProductCtaSection";
import { useHashScroll } from "../../hooks/useHashScroll";
import {
  PRODUCT_LINES,
  // PRODUCT_SHOWCASES,
} from "../../components/product/productData";

const Product = () => {
  useHashScroll();

  return (
    <main>
      <ProductHeroSection />

      {PRODUCT_LINES.map((line, index) => (
        <ProductLineSection key={line.id} line={line} index={index} />
      ))}

      {/* <ProductIntroSection /> */}
      {/* <ProductCapabilitiesSection /> */}
      {/* <ProductSafetyCardsSection /> */}
      {/* {PRODUCT_SHOWCASES.map((item) => (
        <ProductFeatureShowcase key={item.id} item={item} />
      ))} */}
      {/* <ProductDeploymentSection /> */}
      <ProductCtaSection />
    </main>
  );
};

export default Product;
