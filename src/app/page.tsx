import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import { FaHammer, FaTruck, FaTools, FaFan } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      icon: <FaHammer className="w-8 h-8" />,
      title: "Demolice",
      description: "Kompletní demolice budov a konstrukcí s důrazem na bezpečnost a ekologickou likvidaci materiálu."
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Výkopové práce",
      description: "Výkopové práce všech rozměrů, včetně zemních prací a terénních úprav."
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Zednické práce",
      description: "Komplexní zednické práce od základů až po finální úpravy, včetně rekonstrukcí."
    },
    {
      icon: <FaFan className="w-8 h-8" />,
      title: "Vzduchotechnika",
      description: "Návrh, instalace a údržba vzduchotechnických systémů pro komerční i průmyslové objekty."
    }
  ];

  return (
    <main className="snap-y snap-mandatory">
      <Hero />
      <WhyUs 
        title="Proč si vybrat právě nás?"
        text="Jsme mezinárodní stavební firma s více než 15 lety zkušeností. Naše týmy pracují po celé Evropě a poskytují komplexní stavební řešení. Zaměřujeme se na kvalitu, bezpečnost a dodržení termínů. Naši klienti oceňují naši spolehlivost a profesionální přístup ke každému projektu."
      />
      <Services services={services} />
    </main>
  );
}
