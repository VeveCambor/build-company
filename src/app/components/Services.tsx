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
            <div className="pointer-events-none select-none fixed right-0 bottom-8 w-[220px] md:w-[340px] z-10">
              <svg
                viewBox="0 0 320 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto animate-crane"
              >
                {/* Pás */}
                <rect x="75" y="120" width="100" height="16" rx="9" fill="#FFD600" stroke="#222" strokeWidth="10" />
                {/* Karoserie */}
                <rect x="90" y="85" width="80" height="30" rx="8" fill="#FFD600" stroke="#222" strokeWidth="4" />
                {/* Kabina */}
                <rect x="90" y="55" width="45" height="35" rx="8" fill="#FFD600" stroke="#222" strokeWidth="4" />
                <rect x="92" y="60" width="30" height="25" rx="4" fill="#fff" stroke="#222" strokeWidth="2" />
                {/* Rameno */}
                <rect x="150" y="20" width="14" height="65" rx="6" fill="#FFD600" stroke="#222" strokeWidth="4" transform="rotate(-25 180 60)" />
                {/* Lžíce */}
                <ellipse cx="160" cy="30" rx="14" ry="8" fill="#FFD600" stroke="#222" strokeWidth="4" />
                <ellipse cx="160" cy="30" rx="7" ry="4" fill="#222" />
              </svg>
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