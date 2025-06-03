import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const references = [
  {
    title: 'Rekonstrukce bytu',
    description: 'Kompletní rekonstrukce bytu v centru města.',
    image: '/images/reference1.jpg',
    tags: ['Rekonstrukce', 'Byt', 'Interiér']
  },
  {
    title: 'Novostavba rodinného domu',
    description: 'Výstavba moderního rodinného domu na klíč.',
    image: '/images/reference2.jpg',
    tags: ['Novostavba', 'Dům', 'Exteriér']
  }
];

const References = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? references.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === references.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Reference</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src={references[currentIndex].image}
                    alt={references[currentIndex].title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-4">{references[currentIndex].title}</h3>
                  <p className="text-white/80 mb-4">{references[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {references[currentIndex].tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Předchozí reference"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Další reference"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default References; 