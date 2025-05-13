"use client";
import React from "react";

const Contact = () => {
  return (
    <div >
      <h2 className="text-3xl font-bold text-center text-accent mb-6">Kontaktujte nás</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Jméno</label>
          <input type="text" id="name" name="name" required className="w-full rounded-md border border-gray-700 bg-black/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">E-mail</label>
          <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-700 bg-black/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Zpráva</label>
          <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-gray-700 bg-black/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-colors cursor-pointer">Odeslat</button>
        </div>
      </form>
    </div>
  );
};

export default Contact; 