import { useState } from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <LeadForm />
      </div>

      <FAQ />
      <Footer />
    </div>
  );
}
