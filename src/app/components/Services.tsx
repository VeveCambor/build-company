"use client";
import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import ReferenceCarousel from "./ReferenceCarousel";

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
      overlayColor="rgba(0,0,0,0.5)"
    >
      <div className="relative w-full min-h-[50vh]">
        <div className="absolute inset-0 pointer-events-none bg-black/80 z-10" />
        <div className="container mx-auto px-4 h-full relative z-20">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white text-center pt-0 md:pt-2">
              Naše služby
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-4 md:pb-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border-t-4 border-primary cursor-pointer shadow-lg group"
                  whileHover={{ scale: 1.08, boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mb-20 md:mb-24">
              <ReferenceCarousel />
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Services; 