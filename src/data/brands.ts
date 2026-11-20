export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  specialty: string;
  popularFor: string;
}

export const BRANDS: BrandItem[] = [
  {
    id: 'royal-canin',
    name: 'Royal Canin',
    logo: '/images/brand-royal-canin.png',
    specialty: 'Breed Health Nutrition',
    popularFor: 'Puppy & Breed Specific Diets',
  },
  {
    id: 'pedigree',
    name: 'Pedigree',
    logo: '/images/brand-pedigree.png',
    specialty: 'Everyday Canine Nutrition',
    popularFor: 'Dry Kibble & Meat Gravy Pouches',
  },
  {
    id: 'whiskas',
    name: 'Whiskas',
    logo: '/images/brand-whiskas.png',
    specialty: 'Feline Gourmet Nutrition',
    popularFor: 'Ocean Fish & Mackerel Wet Food',
  },
  {
    id: 'drools',
    name: 'Drools',
    logo: '/images/brand-drools.png',
    specialty: 'Balanced Protein Formulas',
    popularFor: 'Focus Adult & Real Chicken Biscuits',
  },
  {
    id: 'farmina',
    name: 'Farmina',
    logo: '/images/brand-farmina.png',
    specialty: 'Natural & Delicious (N&D)',
    popularFor: 'Grain-Free Low Ancestral Grain Food',
  },
  {
    id: 'himalaya',
    name: 'Himalaya',
    logo: '/images/brand-himalaya.png',
    specialty: 'Ayurvedic Pet Care Since 1930',
    popularFor: 'Herbal Shampoos & Digyton Drops',
  },
  {
    id: 'hikari',
    name: 'Hikari',
    logo: '/images/brand-hikari.png',
    specialty: 'World-Renowned Japanese Aquatic Feeds',
    popularFor: 'Cichlid Bio-Gold & Micro Pellets',
  },
  {
    id: 'teraa',
    name: 'Teraa',
    logo: '/images/brand-teraa.png',
    specialty: 'Aquatic Ecosystem Care',
    popularFor: 'Live Plant Substrate & Water Conditioners',
  },
  {
    id: 'okiko',
    name: 'Okiko',
    logo: '/images/brand-okiko.png',
    specialty: 'Premium Flowerhorn Feeds',
    popularFor: 'Head-Up & Platinum Color Enhancers',
  },
  {
    id: 'promeal',
    name: 'ProMeal',
    logo: '/images/brand-promeal.png',
    specialty: 'Natural Insect & Live Diets',
    popularFor: 'Dried Mealworms & Reptile Protein',
  },
  {
    id: 'hagen',
    name: 'Hagen',
    logo: '/images/brand-hagen.png',
    specialty: 'Pet Innovation & Enclosures',
    popularFor: 'Living World & Exo-Terra Essentials',
  },
  {
    id: 'and-more',
    name: 'and More...',
    logo: '/images/brand-and-more.png',
    specialty: '50+ Curated Pet Brands',
    popularFor: 'Expanding our catalogue daily',
  },
];
