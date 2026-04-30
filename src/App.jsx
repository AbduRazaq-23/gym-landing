import { useState } from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
}
