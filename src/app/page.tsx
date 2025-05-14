"use client";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { FaFan } from "react-icons/fa";
import { GiWreckingBall, GiBrickWall, GiDigDug } from "react-icons/gi";
import { useState } from "react";
import { usePrefetchImages } from "./hooks/usePrefetchImages";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  
  usePrefetchImages([
    "/images/hero-bg.jpg",
    "/images/whyus.jpg",
    "/images/dark-gray-stone-wall.jpg"
  ]);

  const services = [
    {
      icon: <GiWreckingBall className="w-10 h-10 text-yellow-400 mx-auto" />,
      title: "Demolácie",
      description: "Kompletné demolácie budov a konštrukcií s dôrazom na bezpečnosť a ekologickú likvidáciu materiálu."
    },
    {
      icon: <GiDigDug className="w-10 h-10 text-yellow-400 mx-auto" />,
      title: "Výkopové práce",
      description: "Výkopové práce všetkých rozmerov, vrátane zemných prác a terénnych úprav."
    },
    {
      icon: <GiBrickWall className="w-10 h-10 text-yellow-400 mx-auto" />,
      title: "Murárske práce",
      description: "Komplexné murárske práce od základov až po finálne úpravy, vrátane rekonštrukcií."
    },
    {
      icon: <FaFan className="w-10 h-10 text-yellow-400 mx-auto" />,
      title: "Vzduchotechnika",
      description: "Návrh, montáž a údržba vzduchotechnických systémov pre komerčné aj priemyselné objekty."
    }
  ];

  return (
    <>
      <main className="snap-y snap-mandatory">
        <Hero onGetOffer={() => setModalOpen(true)} />
        <WhyUs 
          title="Proč si vybrat právě nás?"
          text="Jsme mezinárodní stavební firma s více než 15 lety zkušeností. Naše týmy pracují po celé Evropě a poskytují komplexní stavební řešení. Zaměřujeme se na kvalitu, bezpečnost a dodržení termínů. Naši klienti oceňují naši spolehlivost a profesionální přístup ke každému projektu."
        />
        <Services services={services} />
      </main>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Contact />
      </Modal>
      <Footer />
    </>
  );
}
