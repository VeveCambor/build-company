import { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Reference {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const IMAGES = {
  HERO: "/images/hero-bg.jpg",
  WHY_US: "/images/whyus.jpg",
  SERVICES_BG: "/images/dark-gray-stone-wall.jpg",
  REFERENCES: {
    REF1: "/images/references/reference1.jpg",
    REF2: "/images/references/reference2.jpg",
    REF3: "/images/references/reference3.jpg",
  }
};

export const SERVICE_DATA = [
  {
    iconName: "GiWreckingBall",
    title: "Demolácie",
    description: "Kompletné demolácie budov a konštrukcií s dôrazom na bezpečnosť a ekologickú likvidáciu materiálu."
  },
  {
    iconName: "GiDigDug",
    title: "Výkopové práce",
    description: "Výkopové práce všetkých rozmerov, vrátane zemných prác a terénnych úprav."
  },
  {
    iconName: "GiBrickWall",
    title: "Murárske práce",
    description: "Komplexné murárske práce od základov až po finálne úpravy, vrátane rekonštrukcií."
  },
  {
    iconName: "FaFan",
    title: "Vzduchotechnika",
    description: "Návrh, montáž a údržba vzduchotechnických systémov pre komerčné aj priemyselné objekty."
  }
];

export const REFERENCES: Reference[] = [
  {
    name: "Ján Novák",
    text: "S firmou Mokosh sme boli maximálne spokojní. Práce boli vykonané rýchlo, kvalitne a podľa dohody.",
    rating: 5,
    image: IMAGES.REFERENCES.REF1
  },
  {
    name: "Petra Kováčová",
    text: "Profesionálny prístup, výborná komunikácia a skvelý výsledok. Určite odporúčam!",
    rating: 5,
    image: IMAGES.REFERENCES.REF2
  },
  {
    name: "Miroslav Horváth",
    text: "Stavebné práce prebehli bez problémov, všetko bolo hotové načas. Ďakujeme!",
    rating: 4,
    image: IMAGES.REFERENCES.REF3
  }
]; 