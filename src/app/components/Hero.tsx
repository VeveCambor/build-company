"use client";
import React from "react";
import Image from "next/image";

interface HeroProps {
  onGetOffer?: () => void;
}

const Hero = ({ onGetOffer }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-secondary mb-3 sm:mb-4">
          Spoľahlivý partner pre vaše projekty
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-secondary mb-6 sm:mb-8">
          Od demolácie po vzduchotechniku
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold py-3 sm:py-5 px-8 sm:px-14 rounded-full transition-transform duration-200 shadow-2xl cursor-pointer text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-yellow-300 hover:scale-105"
          onClick={onGetOffer}
        >
          Získať ponuku
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-secondary scroll-indicator"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 