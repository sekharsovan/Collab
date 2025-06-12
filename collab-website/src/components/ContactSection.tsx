import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Let's Connect
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="mb-8">
              Ready to amplify your business growth? Reach out to us today and
              discover how our platform can connect you with the perfect
              influencers for your brand.
            </p>
            <div className="mb-6 flex items-center">
              <i className="fas fa-phone-alt mr-4 text-xl"></i>
              <span>+917086665218</span>
            </div>
            <div className="mb-6 flex items-center">
              <i className="fas fa-envelope mr-4 text-xl"></i>
              <span>contact@collabplatform.com</span>
            </div>
            <div className="mb-10 flex items-center">
              <i className="fas fa-map-marker-alt mr-4 text-xl"></i>
              <span>Global Headquarters, Innovation District</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-2xl hover:text-gray-400 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-400 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-400 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-400 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-gray-400 transition-colors duration-300 text-white border-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-gray-400 transition-colors duration-300 text-white border-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-gray-400 transition-colors duration-300 text-white border-none"
                  placeholder="Your Company"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  className="w-full bg-transparent border-b-2 border-white py-3 focus:outline-none focus:border-gray-400 transition-colors duration-300 text-white border-none"
                  placeholder="Your Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;