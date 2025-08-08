import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import qualifications from '../data/qualifications.json';

const Qualification: React.FC = () => {
  return (
    <section id="qualification" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A timeline of my educational background and professional experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6 relative">
              {qualifications.education.map((edu, index) => (
                <div key={edu.id} className="relative pl-12 pb-8 timeline-item animate-fade-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="card hover:border-primary">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-primary font-medium">{edu.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-secondary">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6 relative">
              {qualifications.experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 pb-8 timeline-item animate-fade-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="card hover:border-primary">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-primary font-medium">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{exp.position}</h4>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-secondary">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;