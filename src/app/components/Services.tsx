"use client";
import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";
import ReferenceCarousel from "./ReferenceCarousel";
import AnimatedElement from "./AnimatedElement";

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
      overlayColor="rgba(0,0,0,0.1)"
      bgImage="/images/dark-gray-stone-wall.jpg"
    >
      <div className="relative w-full min-h-[50vh]">
        <div className="absolute inset-0 pointer-events-none bg-black/80 z-10" />
        <div className="container mx-auto px-4 h-full pb-40 sm:pb-32 md:pb-16 relative z-20">
          <div className="w-full">
            <AnimatedElement animation="slideUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white text-center pt-0 md:pt-2">
                Naše služby
              </h2>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-4 md:pb-8 items-stretch">
              {services.map((service, idx) => (
                <AnimatedElement 
                  key={idx} 
                  animation="zoom"
                  delay={250 * idx}
                >
                  <div className="relative group h-full">
                    {/* Vnější container s group hover */}
                    <motion.div
                      className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer shadow-lg transition-all duration-300 h-full flex flex-col"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 16px 40px rgba(0,0,0,0.35)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                    >
                      {/* Border element který reaguje na group hover */}
                      <div className="absolute inset-0 rounded-lg border border-transparent transition-colors duration-200 group-hover:border-yellow-400"></div>
                      
                      <motion.div
                        className="flex justify-center mb-4 relative z-10"
                        whileHover={{ rotate: -8 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        {service.icon}
                      </motion.div>

                      <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                        {service.title}
                      </h3>
                      <p className="text-white/80 relative z-10 flex-1">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
            <div className="pointer-events-none select-none fixed right-0 bottom-8 hidden sm:block w-[220px] md:w-[340px] z-10">
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
                <rect x="155" y="35" width="14" height="65" rx="6" fill="#FFD600" stroke="#222" strokeWidth="4" transform="rotate(20 190 60)" />
                {/* Lžíce */}
                <ellipse cx="150" cy="25" rx="16" ry="10" fill="#FFD600" stroke="#222" strokeWidth="4" />
                <ellipse cx="150" cy="25" rx="10" ry="6" fill="#222" />
              </svg>
            </div>
            <AnimatedElement animation="slideUp" delay={800}>
              <div className="mb-32 md:mb-24">
                <ReferenceCarousel />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Services; 