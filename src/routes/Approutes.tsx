import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home, About, Career, Parent, Technology, Industries, Safety, Contact } from "../pages"

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes