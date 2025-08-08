import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import personalInfo from "../data/personalInfo.json";
import { downloadCV } from "./downloadCV";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "qualification", label: "Qualification" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    // { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-custom backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Logo size="md" />
            <span className="text-lg sm:text-xl font-bold text-white">
              {personalInfo.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-secondary hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadCV}
              className="btn-primary text-xs px-3 py-2"
            >
              <Download size={14} />
              <span className="ms-2">Download CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors duration-200 p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-custom">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={downloadCV}
                className="btn-primary w-full mt-3 text-sm py-2"
              >
                <Download size={14} />
                <span className="ms-2">Download CV</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
