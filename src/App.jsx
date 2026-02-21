import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <Industries />
        <TechStack />
        <Workflow />
        <Pricing />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}