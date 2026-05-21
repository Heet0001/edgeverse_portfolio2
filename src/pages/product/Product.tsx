import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductHeroSection from '../../components/product/ProductHeroSection'
import ProductIntroSection from '../../components/product/ProductIntroSection'
import ProductCapabilitiesSection from '../../components/product/ProductCapabilitiesSection'
import ProductSafetyCardsSection from '../../components/product/ProductSafetyCardsSection'
import ProductFeatureShowcase from '../../components/product/ProductFeatureShowcase'
import ProductDeploymentSection from '../../components/product/ProductDeploymentSection'
import ProductCtaSection from '../../components/product/ProductCtaSection'
import { PRODUCT_SHOWCASES } from '../../components/product/productData'

const Product = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <main>
      <ProductHeroSection />
      <ProductIntroSection />
      <ProductCapabilitiesSection />
      <ProductSafetyCardsSection />
      {PRODUCT_SHOWCASES.map((item) => (
        <ProductFeatureShowcase key={item.id} item={item} />
      ))}
      <ProductDeploymentSection />
      <ProductCtaSection />
    </main>
  )
}

export default Product
