import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Product from "../pages/Product";
import About from "../pages/PagesFooter/About";
import Security from "../pages/PagesFooter/Security";
import Send from "../pages/PagesFooter/Send";
import Payment from "../pages/PagesFooter/Payment";
import TimeGuarantee from "../pages/PagesFooter/TimeGuarantee";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/products/:id/" element={<Products />} />
      <Route path="/products/:product/:id/" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/security" element={<Security />} />
      <Route path="/send" element={<Send />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/guarantee" element={<TimeGuarantee />} />
    </Routes>
  );
}
