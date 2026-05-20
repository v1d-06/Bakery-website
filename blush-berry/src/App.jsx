import React from "react";
import { Routes, Route } from "react-router-dom";

import { BasketProvider } from "./context/BasketContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Heritage from "./components/Heritage";
import Recommended from "./components/Recommended";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingBasket from "./components/FloatingBasket";
import Story from "./pages/Story";
import FullMenu from "./pages/FullMenu";
import Contact from "./pages/Contact";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";


function HomePage() {
  return (
    <>
      <Hero />
      <Heritage />
      <Recommended />
      <Features />
      <Testimonials />
      <Newsletter/>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BasketProvider>
      <div className="bg-[#FFF0F3] font-sans text-[#7A2438] selection:bg-[#E8728A] selection:text-white min-h-screen">

        <Navbar />
            <ScrollToTop/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/full-menu" element={<FullMenu />}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <FloatingBasket />
      </div>
    </BasketProvider>
  );
}