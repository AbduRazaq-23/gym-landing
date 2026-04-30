import { useState } from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Pricing />
      <Features />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
