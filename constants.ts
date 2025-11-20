
import { Product, ServiceData } from './types';

export const IMAGES = {
  HERO: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  OWNER: "https://static.wixstatic.com/media/dd3786_ce12f14476054c968df3d042083ab99a~mv2.jpg/v1/crop/x_121,y_0,w_927,h_1080/fill/w_326,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jen%20J2_edited.jpg",
  SHOP_MOOD_1: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  SHOP_MOOD_2: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sommerkleid "Flora"',
    price: 289.00,
    category: 'Unikate',
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ein luftiges Sommerkleid aus hochwertiger Baumwolle mit floralem Muster. Der Schnitt schmeichelt jeder Figur und die eingenähten Taschen sorgen für praktischen Komfort. Handgefertigt im Atelier Zollikofen."
  },
  {
    id: '2',
    name: 'Upcycling Jeans "Rebel"',
    price: 159.00,
    category: 'Unikate',
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Einzigartiges Unikat aus wiederverwertetem Denim. Diese Jeans wurde mit viel Liebe zum Detail umgearbeitet und besticht durch individuelle Patchwork-Elemente und einen modernen Schnitt."
  },
  {
    id: '3',
    name: 'Seidenschal "Azure"',
    price: 89.00,
    category: 'Accessoires',
    image: "https://images.unsplash.com/photo-1571498521264-5fcaa7f8edf4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxuriöser Schal aus 100% reiner Seide. Die leuchtenden Blautöne erinnern an das Mittelmeer und verleihen jedem Outfit einen Hauch von Eleganz. Maße: 180cm x 45cm."
  },
  {
    id: '4',
    name: 'Leinenbluse "Pure"',
    price: 129.00,
    category: 'Unikate',
    image: "https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Klassische Bluse aus feinstem Leinen in Naturweiß. Atmungsaktiv und angenehm auf der Haut, perfekt für warme Tage oder als stilvolle Ergänzung im Büro."
  }
];

export const SERVICES: ServiceData[] = [
  {
    id: 'TAILORING',
    title: "Design & Produktion",
    description: "Ich entwerfe individuelle Mode, die perfekt auf die Wünsche und die Figur der einzelnen Klientin abgestimmt ist. Bei mir findest du Mode, die auch in großen Größen perfekt sitzt. Die einzelnen Stücke zeichnen sich durch besondere Details aus, die sie einzigartig machen.",
    image: "https://images.unsplash.com/photo-1565206776249-a01813727c94?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 'ALTERATION',
    title: "Änderungen & Reparaturen",
    description: "Ich ändere Kleidungsstücke, die nicht mehr passen. Kleider (Hosen, Röcke, Beine, Ärmel...) werden gekürzt, verlängert, tailliert oder erweitert. Ich passe zudem auch Konfektionsmode auf die individuellen Bedürfnisse an und repariere Defekte.",
    image: "https://images.unsplash.com/photo-1696546760878-de1c222740c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 'STYLING',
    title: "Modeberatung",
    description: "Ich orientiere mich an den aktuellen Modetrends und schaffe Mehrwerte durch eigene hochwertige Kreationen mit natürlichen Stoffen. Persönliche Modeberatung basierend auf über 20 Jahren Berufserfahrung als Designerin und Schneiderin.",
    image: "https://images.unsplash.com/photo-1760264558913-397f57259abf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const CONTACT_INFO = {
  address: "Bernstrasse 81, 3052 Zollikofen",
  filiale: "Neuengasse 14, 3177 Laupen",
  email: "missleafashion@gmail.com",
  phone: "+41 76 228 38 81",
  hours: "Di - Fr: 09:00 - 18:00 | Sa: 09:00 - 16:00",
};