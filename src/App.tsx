import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Qualification />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
