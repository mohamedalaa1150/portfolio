import React, { useState } from "react";
import {
  ExternalLink,
  Download,
  Play,
  X,
  ArrowLeft,
  ArrowRight,
  MessageCircleWarning,
} from "lucide-react";
import projects from "../data/projects.json";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6); // عدد العناصر اللي بتظهر أول مرة

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A showcase of my recent work in e-learning development and
              instructional design
            </p>
          </div>

          <div className="grid-responsive">
            {projects.projects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="card group cursor-pointer overflow-hidden animate-fade-in-up"
                onClick={() => openProject(project)}
              >
                <div className="relative mb-4">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-center justify-center ">
                    <ExternalLink
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={24}
                    />
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded border border-primary border-opacity-30"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 text-secondary text-xs">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* زرار Show More */}
          {visibleCount < projects.projects.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleShowMore}
                className="btn-primary px-6 py-3 rounded-lg"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content max-w-6xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-custom">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-sm rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-secondary hover:text-white transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-64 sm:h-96 object-cover rounded-lg"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={previousImage}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                      >
                        <ArrowRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? "bg-primary"
                                : "bg-white bg-opacity-50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      {selectedProject.category === "Storyboarding"
                        ? "Storyboard Overview"
                        : "Project Overview"}
                    </h4>

                    <p className="text-secondary leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map(
                        (feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-secondary">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(
                        (tool: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm border border-primary border-opacity-30"
                          >
                            {tool}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info & Actions */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.duration && (
                      <div className="card">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {selectedProject.duration}
                          </div>
                          <div className="text-sm text-secondary">Duration</div>
                        </div>
                      </div>
                    )}
                    {selectedProject.team && (
                      <div className="card">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {selectedProject.team}
                          </div>
                          <div className="text-sm text-secondary">
                            Team Size
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {selectedProject.client && (
                    <div className="card">
                      <h5 className="font-bold text-white mb-2">Client</h5>
                      <p className="text-primary">{selectedProject.client}</p>
                    </div>
                  )}

                  {/* Video Preview */}
                  {selectedProject.videoUrl && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-white">Preview</h4>
                      <div className="aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                          src={selectedProject.videoUrl}
                          className="w-full h-full"
                          allowFullScreen
                          title={`${selectedProject.title} Preview`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {selectedProject.scormUrl && (
                      <button
                        onClick={() =>
                          window.open(selectedProject.scormUrl, "_blank")
                        }
                        className="btn-primary w-full flex items-center justify-center space-x-2"
                      >
                        <Play size={16} />
                        <span>Launch SCORM Package</span>
                      </button>
                    )}

                    {selectedProject.files &&
                      selectedProject.files.length > 0 && (
                        <>
                          <h5 className="font-bold text-white">
                            Download Files
                          </h5>
                          <div className="space-y-2">
                            {selectedProject.files.map(
                              (file: any, index: number) => (
                                <a
                                  key={index}
                                  href={file.url}
                                  download
                                  className="w-full flex items-center justify-between p-3 bg-secondary border border-custom rounded-lg hover:border-primary transition-colors duration-200"
                                >
                                  <span className="text-white">
                                    {file.name}
                                  </span>
                                  <Download
                                    size={16}
                                    className="text-primary"
                                  />
                                </a>
                              )
                            )}
                          </div>
                          <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
                            <MessageCircleWarning
                              size={26}
                              className="inline-block icon-pulse"
                              style={{ ["--primary-color" as any]: "#CB877C" }}
                            />
                            <span>
                              This storyboard is a sample version for
                              demonstration purposes only. All rights reserved.
                            </span>
                            <style>{`
        .icon-pulse {
          display: inline-block;
          color: white;
          transform-origin: center;
          animation: iconPulse 1.6s ease-in-out infinite;
        }

        .icon-pulse svg {
          transform-origin: center;
        }

        @keyframes iconPulse {
          0%   { transform: scale(1);    color: white; }
          50%  { transform: scale(1.2); color: var(--primary-color); }
          100% { transform: scale(1);    color: white; }
        }
      `}</style>
                          </p>
                        </>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
