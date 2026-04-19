import { Routes, Route ,BrowserRouter} from "react-router-dom"
import { Home, About, Career, Parent } from "../pages"

const Approutes = () => {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Parent />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Approutes