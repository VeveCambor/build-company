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
import { IMAGES, SERVICE_DATA } from "./lib/data";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  
  usePrefetchImages([
    IMAGES.HERO,
    IMAGES.WHY_US,
    IMAGES.SERVICES_BG
  ]);

  const services = SERVICE_DATA.map(service => {
    let icon;
    switch(service.iconName) {
      case "GiWreckingBall":
        icon = <GiWreckingBall className="w-10 h-10 text-yellow-400 mx-auto" />;
        break;
      case "GiDigDug":
        icon = <GiDigDug className="w-10 h-10 text-yellow-400 mx-auto" />;
        break;
      case "GiBrickWall":
        icon = <GiBrickWall className="w-10 h-10 text-yellow-400 mx-auto" />;
        break;
      case "FaFan":
        icon = <FaFan className="w-10 h-10 text-yellow-400 mx-auto" />;
        break;
      default:
        icon = null;
    }
    return {
      ...service,
      icon
    };
  });

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
