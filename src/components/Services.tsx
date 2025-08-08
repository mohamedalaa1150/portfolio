import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import services from "../data/services.json";

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Monitor;
  };

  return (
    <>
      <section id="services" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-responsive-lg font-bold mb-3 lg:mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary max-w-2xl mx-auto">
              Comprehensive e-learning solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid-responsive">
            {services.services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="card group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="text-center space-y-3 lg:space-y-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto bg-primary bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <IconComponent
                        size={24}
                        className="text-primary lg:w-8 lg:h-8"
                      />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-secondary leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <button className="btn-outline mx-auto group text-sm">
                      <span>Learn More</span>
                      <ArrowRight
                        size={14}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-custom">
              <div className="flex items-center space-x-3">
                {React.createElement(getIcon(selectedService.icon), {
                  size: 24,
                  className: "text-primary",
                })}
                <h3 className="text-lg lg:text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-secondary hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
              <p className="text-sm lg:text-lg text-secondary leading-relaxed">
                {selectedService.fullDescription}
              </p>

              <div>
                <h4 className="text-base lg:text-lg font-bold text-white mb-3 lg:mb-4">
                  Key Features
                </h4>
                <div className="grid gap-2 lg:gap-3">
                  {selectedService.features.map(
                    (feature: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm lg:text-base text-secondary">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-base lg:text-lg font-bold text-white mb-3 lg:mb-4">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tools.map((tool: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 lg:px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-xs lg:text-sm border border-primary border-opacity-30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="pt-3 lg:pt-4 border-t border-custom">
                <button className="btn-primary w-full text-sm">
                  Get Started with This Service
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
