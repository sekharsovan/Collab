import React from "react";

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Business Impact
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h3 className="text-3xl font-bold mb-6">Measurable Growth</h3>
            <p className="text-lg mb-8">
              Our clients experience an average of 3X growth in key metrics
              after implementing influencer campaigns through our platform. We
              focus on delivering measurable results that directly impact your
              bottom line.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-black mr-3 text-xl"></i>
                <span className="text-lg">
                  300% increase in website traffic
                </span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-black mr-3 text-xl"></i>
                <span className="text-lg">
                  250% boost in social media engagement
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-black mr-3 text-xl"></i>
                <span className="text-lg">
                  200% growth in conversion rates
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-6 border-l-4 border-black">
              <p className="italic">
                "Collab transformed our digital marketing strategy. Within
                three months, we saw our customer acquisition costs decrease
                by 40% while our conversion rate tripled."
              </p>
              <p className="font-bold mt-4">
                — Sarah Johnson, CEO of ModernTech
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder for chart or additional content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;