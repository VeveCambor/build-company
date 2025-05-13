import React from "react";
import ParallaxSection from "./ParallaxSection";

export interface WhyUsProps {
  title: string;
  text: string;
}

const WhyUs = ({ title, text }: WhyUsProps) => {
  return (
    <ParallaxSection>
      {/* Nadpis, text, žlutý akcent */}
      <h2>{title}</h2>
      <p>{text}</p>
    </ParallaxSection>
  );
};

export default WhyUs; 