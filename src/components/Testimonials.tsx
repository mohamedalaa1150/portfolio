import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.testimonials.length) % testimonials.testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials.testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative card text-center p-8 sm:p-12 animate-fade-in-up">
            <Quote size={48} className="text-primary opacity-20 mx-auto mb-6" />
            
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-secondary leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <Star key={index} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4>
                <p className="text-primary font-medium">{currentTestimonial.position}</p>
                <p className="text-secondary text-sm">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary transition-colors duration-200 p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary transition-colors duration-200 p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid (Hidden on mobile) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-16">
            {testimonials.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card p-6 cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'border-primary bg-opacity-50' : 'hover:border-primary hover:border-opacity-50'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary"
                  />
                  <div>
                    <h5 className="font-bold text-white">{testimonial.name}</h5>
                    <p className="text-primary text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 150)}..."
                </p>
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;