import React, { useState } from "react";
import { ArrowRight, User, Award, Target, X, Circle } from "lucide-react";
import personalInfo from "../data/personalInfo.json";
import heroImg from "/img/hero.jpg";

const About: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="about" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-responsive-lg font-bold mb-3 lg:mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary max-w-2xl mx-auto">
              Who am I
            </p>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-6 animate-fade-in-left">
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Transforming Learning Through Innovation
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed">
                  {personalInfo.about.summary}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 lg:gap-6">
                {[
                  { icon: User, title: `Years\n Experience`, value: "03+" },
                  { icon: Award, title: "Projects\n Completed", value: "14+ " },
                  { icon: Target, title: "Companies\n Worked", value: "03+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 lg:p-4 card">
                    <stat.icon
                      size={24}
                      className="text-primary mx-auto mb-2 lg:mb-3"
                    />
                    <div className="text-lg lg:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-secondary">
                      {stat.title.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="btn-primary group w-full sm:w-auto "
              >
                <span>Know More</span>
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>

            {/* Right Content - Skills */}
            <div className="space-y-4 lg:space-y-6 animate-fade-in-right text-center lg:text-left lg:ml-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Knowledge
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {personalInfo.about.knowledge.map((knowledge, index) => (
                  <div key={index} className="space-y-1 lg:space-y-2 ">
                    <div className="flex lg:justify-between items-center">
                      <span className="text-sm lg:text-base text-secondary font-medium flex items-center gap-2 ml-8 lg:ml-0">
                        <Circle color="#CE8A7F" size={9} absoluteStrokeWidth />
                        {knowledge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 animate-fade-in-right text-center lg:text-left lg:ml-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Programs & Tools
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {personalInfo.about.programs.map((program, index) => (
                  <div key={index} className="space-y-1 lg:space-y-2 ">
                    <div className="flex lg:justify-between items-center">
                      <span className="text-sm lg:text-base text-secondary font-medium flex items-center gap-2 ml-8 lg:ml-0">
                        <Circle color="#CE8A7F" size={9} absoluteStrokeWidth />
                        {program}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-custom">
              <h3 className="text-lg lg:text-2xl font-bold text-white">
                About Mohamed Alaa
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-secondary hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-3 lg:border-4 border-primary">
                <img
                  src={heroImg}
                  alt="Mohamed Alaa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">
                  {personalInfo.name}
                </h4>
                <p className="text-sm lg:text-base text-primary font-medium">
                  {personalInfo.title}
                </p>
              </div>
              <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-secondary leading-relaxed">
                {personalInfo.about.fullBio
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
              <div className="pt-3 lg:pt-4 border-t border-custom">
                <h5 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3">
                  Expertise Areas
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {personalInfo.about.knowledge.map((knowledge, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs lg:text-sm text-secondary">
                        {knowledge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
