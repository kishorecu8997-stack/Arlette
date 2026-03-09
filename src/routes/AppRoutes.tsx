import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Career from "../pages/Career";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
