import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg mb-8">
              Collab is your all-in-one influencer marketing platform that makes it easy to find, connect, and collaborate with the perfect influencers for your brand. Our smart matching technology and campaign management tools help you achieve measurable business growth.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <i className="fas fa-check-circle text-2xl text-black mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Smart Matching</h3>
                  <p>
                    Our AI-powered platform finds influencers who truly align with your brand values and target audience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-chart-line text-2xl text-black mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Growth Focused</h3>
                  <p>
                    We focus on delivering measurable results that directly impact your bottom line.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-rocket text-2xl text-black mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Quick Launch</h3>
                  <p>
                    Go from concept to campaign in just 48 hours with our streamlined process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-8 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-4xl font-bold mb-2 group-hover:text-5xl transition-all duration-300">95%</div>
              <p className="text-gray-600">Businesses report increased brand awareness.</p>
            </div>
            <div className="bg-gray-100 p-8 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-4xl font-bold mb-2 group-hover:text-5xl transition-all duration-300">3X</div>
              <p className="text-gray-600">Average ROI for our client campaigns.</p>
            </div>
            <div className="bg-gray-100 p-8 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-4xl font-bold mb-2 group-hover:text-5xl transition-all duration-300">10K+</div>
              <p className="text-gray-600">Verified influencers on our platform.</p>
            </div>
            <div className="bg-gray-100 p-8 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-4xl font-bold mb-2 group-hover:text-5xl transition-all duration-300">48hrs</div>
              <p className="text-gray-600">Average campaign launch time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;