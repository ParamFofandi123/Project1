import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import Principals from "./pages/Principals/Principals";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/principals" element={<Principals />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
