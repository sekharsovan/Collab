import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import InfluencersSection from "./components/InfluencersSection";
import ImpactSection from "./components/ImpactSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App: React.FC = () => {
  return (
    <div className="font-sans text-black min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <Header />
      <HeroSection />
      <VisionSection />
      <HowItWorksSection />
      <InfluencersSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;