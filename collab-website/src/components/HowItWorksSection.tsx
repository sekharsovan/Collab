import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-black transform -translate-y-1/2 z-0"></div>
          <div
            className="w-full md:w-1/3 mb-12 md:mb-0 flex flex-col items-center relative z-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>
            <div className="bg-white p-8 w-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Business Connection
              </h3>
              <p className="text-center">
                Register your business and define your goals, target audience,
                and campaign requirements.
              </p>
              <div className="mt-6 flex justify-center">
                <i className="fas fa-building text-5xl"></i>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/3 mb-12 md:mb-0 flex flex-col items-center relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <div className="bg-white p-8 w-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Influencer Matching
              </h3>
              <p className="text-center">
                Our algorithm matches your business with influencers who align
                with your brand values and audience.
              </p>
              <div className="mt-6 flex justify-center">
                <i className="fas fa-users text-5xl"></i>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/3 flex flex-col items-center relative z-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-6">
              3
            </div>
            <div className="bg-white p-8 w-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Campaign Execution
              </h3>
              <p className="text-center">
                Launch your campaign, track real-time metrics, and measure the
                impact on your business growth.
              </p>
              <div className="mt-6 flex justify-center">
                <i className="fas fa-chart-line text-5xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;