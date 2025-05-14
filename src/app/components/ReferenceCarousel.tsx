"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { REFERENCES } from "../lib/data";

const ReferenceCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? REFERENCES.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === REFERENCES.length - 1 ? 0 : i + 1));
  const ref = REFERENCES[index];
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({
    ref: carouselRef,
    rootMargin: '100px'
  });
  
  useEffect(() => {
    if (isInView) {
      const imagesToPrefetch = REFERENCES.map(ref => ref.image);
      const img = new Image();
      imagesToPrefetch.forEach(src => {
        img.src = src;
      });
    }
  }, [isInView]);

  return (
    <section className="w-full py-16 pb-44 sm:pb-40 md:pb-32">
      <div 
        ref={carouselRef}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur rounded-xl p-5 md:p-8 shadow-lg relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-4 md:mb-6">Referencie</h2>
        <div className="flex items-center justify-between mb-3 md:mb-6">
          <button onClick={prev} aria-label="Predchádzajúca" className="text-yellow-400 text-lg md:text-2xl p-1 md:p-2 hover:bg-white/10 rounded-full transition-colors">
            <FaChevronLeft />
          </button>
          <div className="flex-1 px-1 md:px-4">
            <div className="flex justify-center mb-1 md:mb-2">
              {[...Array(ref.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-base md:text-xl" />
              ))}
            </div>
            <blockquote className="text-sm md:text-lg text-white italic text-center mb-1 md:mb-2">&ldquo;{ref.text}&rdquo;</blockquote>
            <div className="text-center text-accent font-bold text-sm md:text-base">{ref.name}</div>
          </div>
          <button onClick={next} aria-label="Ďalšia" className="text-yellow-400 text-lg md:text-2xl p-1 md:p-2 hover:bg-white/10 rounded-full transition-colors">
            <FaChevronRight />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-3 md:mt-4">
          {REFERENCES.map((_, i) => (
            <span key={i} className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${i === index ? "bg-yellow-400" : "bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceCarousel; 