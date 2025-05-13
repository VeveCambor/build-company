"use client";
import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import Contact from "./Contact";

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
    <ParallaxSection 
      bgImage="/images/services-bg.jpg" 
      overlayColor="rgba(0,0,0,0.5)"
    >
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 pointer-events-none bg-black/80 z-10" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
              Naše služby
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border-t-4 border-primary cursor-pointer shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-accent mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-16">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Services; 