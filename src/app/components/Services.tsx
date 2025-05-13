import React from "react";
import ParallaxSection from "./ParallaxSection";

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <ParallaxSection>
      {/* Grid karet služeb */}
      <div>
        {services.map((service, idx) => (
          <div key={idx}>
            {/* Card komponenta zde */}
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </ParallaxSection>
  );
};

export default Services; 