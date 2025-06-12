import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img
          src="https://static.readdy.ai/image/3e2e8561d21b57edb1e812b201bd9ad7/4bdf9b33dae899ddbc14853ff08f84f5.jpeg"
          alt="Collab Background"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="block transform hover:translate-x-2 transition-transform duration-300">
              COLLAB
            </span>
            <span className="block text-xl md:text-2xl font-light mt-4 tracking-wide">
              Your Business Growth Partner
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            All your collaborations at one place
          </p>
          <div className="space-y-6">
            <p className="text-lg opacity-90">
              • Find perfect influencer matches for your brand
            </p>
            <p className="text-lg opacity-90"></p>
            <p className="text-lg opacity-90"></p>
          </div>
          <button className="mt-8 px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;