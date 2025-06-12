import React from "react";

const influencers = [
    {
        name: "Cartoon Any",
        category: "Comedy & Entertainment",
        followers: "1.5M",
        engagement: "5.2%",
        image:
            "https://static.readdy.ai/image/3e2e8561d21b57edb1e812b201bd9ad7/b423b527f7407819c672e823c73787ab.jpeg",
    },
    {
        name: "Vijendar Chauhan",
        category: "Business & Finance",
        followers: "950K",
        engagement: "4.8%",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20business%20influencer%20in%20formal%20attire%20against%20a%20dark%20minimalist%20background%2C%20high%20contrast%20black%20and%20white%20photography%2C%20urban%20aesthetic%2C%20professional%20headshot%20with%20dramatic%20lighting&width=400&height=500&seq=2&orientation=portrait",
    },
    {
        name: "Ankur Warikoo",
        category: "Entrepreneurship",
        followers: "1.2M",
        engagement: "6.1%",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20entrepreneur%20with%20casual%20style%20against%20a%20dark%20minimalist%20background%2C%20high%20contrast%20black%20and%20white%20photography%2C%20urban%20aesthetic%2C%20professional%20headshot%20with%20dramatic%20lighting&width=400&height=500&seq=3&orientation=portrait",
    },
    {
        name: "Kunal Kashyap",
        category: "Tech & Innovation",
        followers: "820K",
        engagement: "4.5%",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20tech%20influencer%20with%20unique%20style%20against%20a%20dark%20minimalist%20background%2C%20high%20contrast%20black%20and%20white%20photography%2C%20urban%20aesthetic%2C%20professional%20headshot%20with%20dramatic%20lighting&width=400&height=500&seq=4&orientation=portrait",
    },
    {
        name: "Ashneer Grover",
        category: "Startups & Investing",
        followers: "1.8M",
        engagement: "5.7%",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20business%20investor%20with%20glasses%20against%20a%20dark%20minimalist%20background%2C%20high%20contrast%20black%20and%20white%20photography%2C%20urban%20aesthetic%2C%20professional%20headshot%20with%20dramatic%20lighting&width=400&height=500&seq=5&orientation=portrait",
    },
    {
        name: "Prajakta Kholi",
        category: "Lifestyle & Fashion",
        followers: "1.4M",
        engagement: "5.9%",
        image:
            "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20lifestyle%20influencer%20with%20long%20hair%20against%20a%20dark%20minimalist%20background%2C%20high%20contrast%20black%20and%20white%20photography%2C%20urban%20aesthetic%2C%20professional%20headshot%20with%20dramatic%20lighting&width=400&height=500&seq=6&orientation=portrait",
    },
];

const InfluencersSection: React.FC = () => {
    return (
        <section id="influencers" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Our <span className="text-purple-400">Featured</span> talents
                </h2>
                <p className="text-center mb-16">
                    Top talents to choose from updated daily
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {influencers.map((influencer, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                            <img
                                src={influencer.image}
                                alt={influencer.name}
                                className="w-full h-[300px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <h3 className="text-xl font-bold">
                                    {influencer.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfluencersSection;