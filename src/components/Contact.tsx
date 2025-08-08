import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import personalInfo from "../data/personalInfo.json";
import { downloadCV } from "./downloadCV";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Ready to start your next e-learning project? Let's discuss how I can
            help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                I'm always interested in discussing new opportunities and
                challenges. Whether you have a project in mind or just want to
                say hello, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 card hover:border-primary">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-secondary">{personalInfo.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 card hover:border-primary">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-secondary">{personalInfo.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 card hover:border-primary">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-secondary">
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 animate-pulse-hover"
                >
                  <Linkedin size={20} className="text-primary" />
                </a>
                <a
                  href={personalInfo.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 animate-pulse-hover"
                >
                  <Facebook size={20} className="text-primary" />
                </a>
                <a
                  href={personalInfo.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 animate-pulse-hover"
                >
                  <Instagram size={20} className="text-primary" />
                </a>
              </div>
            </div>

            {/* CV Download */}
            <button
              onClick={downloadCV}
              className="btn-primary flex items-center space-x-2 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>Download My CV</span>
            </button>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="card space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-custom rounded-lg focus:border-primary focus:outline-none text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-custom rounded-lg focus:border-primary focus:outline-none text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-custom rounded-lg focus:border-primary focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
