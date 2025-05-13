import React from "react";

export interface ParallaxSectionProps {
  bgImage?: string;
  overlayColor?: string;
  children: React.ReactNode;
}

const ParallaxSection = ({ bgImage, overlayColor, children }: ParallaxSectionProps) => {
  return (
    <section>
      {/* Parallax logika a overlay zde */}
      {children}
    </section>
  );
};

export default ParallaxSection; 