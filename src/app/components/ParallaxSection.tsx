"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export interface ParallaxSectionProps {
  bgImage?: string;
  overlayColor?: string;
  children: React.ReactNode;
}

const ParallaxSection = ({ bgImage, overlayColor = "rgba(0,0,0,0.5)", children }: ParallaxSectionProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section className="relative h-screen snap-start overflow-hidden">
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
      <div className="relative z-10 h-full py-12 md:py-20">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection; 