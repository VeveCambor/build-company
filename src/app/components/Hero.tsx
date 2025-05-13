"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-4">
          Spoľahlivý partner pre vaše projekty
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-secondary mb-8">
          Od demolácie po vzduchotechniku
        </p>
        <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg cursor-pointer text-lg">
          Získať ponuku
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg
          className="w-6 h-6 text-secondary scroll-indicator"
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