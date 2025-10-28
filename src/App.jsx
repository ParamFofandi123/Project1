import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrolToTop";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import Floats from "./pages/Products/Floats/Floats";
import Level_instruments_and_flappers from "./pages/Products/Level_instruments_and_flappers/Level_instruments_and_flappers";
import Valves_and_Fittings from "./pages/Products/Valves_and_Fittings/Valves_and_Fittings";

import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/floats" element={<Floats />} />
            <Route path="/products/Level-instruments-and-Flappers" element={<Level_instruments_and_flappers />} />
            <Route path="/products/Valves-and-Fittings" element={<Valves_and_Fittings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
