import React from "react";
import ParallaxSection from "./ParallaxSection";

export interface WhyUsProps {
  title: string;
  text: string;
}

const WhyUs = ({ title, text }: WhyUsProps) => {
  return (
    <ParallaxSection 
      bgImage="/images/whyus.jpg" 
      overlayColor="rgba(0,0,0,0.7)"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default WhyUs; 