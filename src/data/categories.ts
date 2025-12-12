import type { Product } from './products';
import {
    giftsForMenWhoHaveEverything,
    originalGiftsForMen2025,
    bestTechGifts2025,
    innovativeGadgets,
    smartwatchesForMen,
    wirelessHeadphones,
    beginnerDrones,
    experienceGifts,
    travelGifts,
    gourmetGifts,
    sportsGifts,
    selfCareKits,
    sustainableGifts,
    personalizedGifts,
    geekGamerGifts,
    giftsFor40s,
    giftsFor25s,
    luxuryGifts,
    usefulGifts,
    backpacksForMen,
    airFryers,
    kitchenRobots,
    powerBanks,
    humidifiers,
    giftsForDad,
    giftsForBoyfriend,
    secretSantaMen,
    giftsForBoss,
    giftsForBrother,
    portableSolarPanels
} from './products';

export interface Category {
    id: string;
    name: string;
    description: string;
    products: Product[];
}

export const categories: Category[] = [
    {
        id: 'regalos-hombre-tiene-todo',
        name: 'Regalos para un hombre que ya tiene todo',
        description: 'Ideas únicas y sorprendentes para quien parece tenerlo todo.',
        products: giftsForMenWhoHaveEverything
    },
    {
        id: 'regalos-originales-hombres-2025',
        name: 'Regalos originales para hombres 2025',
        description: 'Lo último en tendencias y originalidad para este año.',
        products: originalGiftsForMen2025
    },
    {
        id: 'mejores-regalos-tecnologia-2025',
        name: 'Mejores regalos de tecnología 2025',
        description: 'Gadgets y dispositivos de última generación.',
        products: bestTechGifts2025
    },
    {
        id: 'gadgets-innovadores-hombres',
        name: 'Gadgets innovadores para hombres',
        description: 'Tecnología puntera que le sorprenderá.',
        products: innovativeGadgets
    },
    {
        id: 'relojes-inteligentes-hombre',
        name: 'Relojes inteligentes regalo hombre',
        description: 'Smartwatches para estar siempre conectado y en forma.',
        products: smartwatchesForMen
    },
    {
        id: 'auriculares-inalambricos',
        name: 'Auriculares inalámbricos regalo',
        description: 'Sonido de alta calidad sin cables.',
        products: wirelessHeadphones
    },
    {
        id: 'drones-principiantes',
        name: 'Drones para principiantes regalo',
        description: 'Para empezar a surcar los cielos.',
        products: beginnerDrones
    },
    {
        id: 'regalos-experiencia-hombres',
        name: 'Regalos experiencia para hombres',
        description: 'Momentos inolvidables en lugar de cosas materiales.',
        products: experienceGifts
    },
    {
        id: 'regalos-viajeros-hombres',
        name: 'Regalos para viajeros hombres',
        description: 'Accesorios imprescindibles para su próxima aventura.',
        products: travelGifts
    },
    {
        id: 'regalos-gourmet-hombres',
        name: 'Regalos gourmet para hombres',
        description: 'Delicias para los paladares más exigentes.',
        products: gourmetGifts
    },
    {
        id: 'regalos-hombre-deporte',
        name: 'Regalos para hombre amante del deporte',
        description: 'Equipamiento y accesorios para su actividad favorita.',
        products: sportsGifts
    },
    {
        id: 'kits-autocuidado-hombres',
        name: 'Kits de autocuidado para hombres',
        description: 'Bienestar y cuidado personal masculino.',
        products: selfCareKits
    },
    {
        id: 'regalos-sostenibles-el',
        name: 'Regalos sostenibles para él',
        description: 'Opciones eco-friendly para cuidar el planeta.',
        products: sustainableGifts
    },
    {
        id: 'regalos-personalizados-hombre',
        name: 'Regalos personalizados para hombre',
        description: 'Detalles únicos con su nombre o un mensaje especial.',
        products: personalizedGifts
    },
    {
        id: 'regalos-hombre-friki-gamer',
        name: 'Regalos para hombre friki o gamer',
        description: 'Merchandising y accesorios para sus hobbies favoritos.',
        products: geekGamerGifts
    },
    {
        id: 'regalos-hombre-40-anos',
        name: 'Regalos para hombre de 40 años',
        description: 'Ideas perfectas para celebrar los 40.',
        products: giftsFor40s
    },
    {
        id: 'regalos-hombre-joven-25-anos',
        name: 'Regalos para hombre joven 25 años',
        description: 'Tendencias y estilo para los 25.',
        products: giftsFor25s
    },
    {
        id: 'regalos-lujo-hombre',
        name: 'Regalos de lujo para hombre',
        description: 'Exclusividad y calidad premium.',
        products: luxuryGifts
    },
    {
        id: 'regalos-utiles-hombres',
        name: 'Regalos útiles para hombres',
        description: 'Cosas prácticas que usará todos los días.',
        products: usefulGifts
    },
    {
        id: 'mochilas-estilo-hombre',
        name: 'Mochilas estilo hombre regalo',
        description: 'Mochilas funcionales y con estilo.',
        products: backpacksForMen
    },
    {
        id: 'freidora-aire-hombre',
        name: 'Freidora de aire regalo hombre',
        description: 'Cocina saludable y rápida.',
        products: airFryers
    },
    {
        id: 'robot-cocina-hombre',
        name: 'Robot de cocina regalo para él',
        description: 'El ayudante perfecto para el chef de la casa.',
        products: kitchenRobots
    },
    {
        id: 'power-bank-cargador',
        name: 'Power bank cargador portátil regalo',
        description: 'Energía extra para sus dispositivos.',
        products: powerBanks
    },
    {
        id: 'humidificador-hombre',
        name: 'Humidificador regalo hombre',
        description: 'Ambiente perfecto en casa o la oficina.',
        products: humidifiers
    },
    {
        id: 'regalos-padre-originales',
        name: 'Regalos para padre originales',
        description: 'Sorprende a papá con algo diferente.',
        products: giftsForDad
    },
    {
        id: 'regalos-sorpresa-novio',
        name: 'Regalos sorpresa para novio',
        description: 'Detalles románticos y divertidos para él.',
        products: giftsForBoyfriend
    },
    {
        id: 'ideas-amigo-invisible-hombre',
        name: 'Ideas para amigo invisible hombre',
        description: 'Regalos originales y económicos.',
        products: secretSantaMen
    },
    {
        id: 'regalos-jefe-companero',
        name: 'Regalos para jefe o compañero trabajo',
        description: 'Detalles profesionales y elegantes.',
        products: giftsForBoss
    },
    {
        id: 'regalos-hermano-adulto',
        name: 'Regalos para hermano adulto',
        description: 'Ideas geniales para tu hermano.',
        products: giftsForBrother
    },
    {
        id: 'paneles-solares-portatiles',
        name: 'Paneles solares portátiles regalo',
        description: 'Energía limpia donde quiera que vaya.',
        products: portableSolarPanels
    }
];
