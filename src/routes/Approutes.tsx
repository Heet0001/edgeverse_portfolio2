import { Routes, Route, BrowserRouter } from "react-router-dom"
import {
  Home,
  About,
  Career,
  CareerApply,
  Parent,
  Technology,
  Product,
  Imedge,
  Industries,
  Safety,
  Contact,
  Blog,
  BlogDetail,
  Leadership,
  Investors,
  TermsOfService,
  PrivacyPolicy,
} from "../pages"

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:slug/apply" element={<CareerApply />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/imedge" element={<Imedge />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes
