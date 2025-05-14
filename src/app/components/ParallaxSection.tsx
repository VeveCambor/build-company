"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export interface ParallaxSectionProps {
  bgImage?: string;
  overlayColor?: string;
  children: React.ReactNode;
}

const ParallaxSection = ({ bgImage, overlayColor = "rgba(0,0,0,0.5)", children }: ParallaxSectionProps) => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "40%"]);

  return (
    <section className="relative min-h-screen h-auto snap-start overflow-hidden">
      {bgImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover"
            priority={false}
          />
          <div 
            className="absolute inset-0" 
            style={{ background: `linear-gradient(to bottom, ${overlayColor} 70%, transparent 100%)` }}
          />
        </motion.div>
      )}
      <div className="relative z-10 h-full py-12 sm:py-16 md:py-24 lg:py-32">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection; 