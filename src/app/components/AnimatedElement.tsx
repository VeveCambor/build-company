"use client";
import React, { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoom';
  duration?: number;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function AnimatedElement({
  children,
  className = '',
  delay = 0,
  animation = 'fadeIn',
  duration = 0.8
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { delay, rootMargin: '75px' });
  
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{ 
        duration, 
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: duration * 1.2 } 
      }}
    >
      {children}
    </motion.div>
  );
} 