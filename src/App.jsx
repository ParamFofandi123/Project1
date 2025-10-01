import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import Electronics from "./pages/Products/Electronics/Electronics";
import Furniture from "./pages/Products/Products";
import Clothing from "./pages/Products/Products";

import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import Principals from "./pages/Principals/Principals";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/electronics" element={<Electronics/>}/>
            <Route path="/products/furniture" element={<Furniture/>}/>
            <Route path="/products/clothing" element={<Clothing/>}/>
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/principals" element={<Principals />} />
            <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<NotFound />} />
                    
          </Route>
          
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
