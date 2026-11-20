import { PetCategory, ProductCategory } from '../types';

export interface PetTypeItem {
  id: PetCategory;
  name: string;
  image: string;
  bgGradient: string;
  accentColor: string;
  description: string;
}

export const PET_CATEGORIES: PetTypeItem[] = [
  {
    id: 'Dogs',
    name: 'Dogs',
    image: '/images/pet-dog-hd.jpg',
    bgGradient: 'from-[#E8F1F5] to-[#D5E5EE]',
    accentColor: '#3B82F6',
    description: 'Nutrition, chew toys, leashes & bedding',
  },
  {
    id: 'Cats',
    name: 'Cats',
    image: '/images/pet-cat-hd.jpg',
    bgGradient: 'from-[#FDF0EC] to-[#F8DED6]',
    accentColor: '#F97316',
    description: 'Grain-free kibble, scratchers & litter',
  },
  {
    id: 'Small Pets',
    name: 'Small Pets',
    image: '/images/pet-small-hd.jpg',
    bgGradient: 'from-[#FEF6E4] to-[#FCEEC7]',
    accentColor: '#EAB308',
    description: 'Bunnies, hamsters & guinea pig essentials',
  },
  {
    id: 'Birds',
    name: 'Birds',
    image: '/images/pet-bird-hd.jpg',
    bgGradient: 'from-[#EDF6EE] to-[#DCEDDE]',
    accentColor: '#22C55E',
    description: 'Seed mixes, perches, vitamins & toys',
  },
  {
    id: 'Reptiles',
    name: 'Reptiles & Turtles',
    image: '/images/pet-reptile-hd.jpg',
    bgGradient: 'from-[#F2EDE8] to-[#E5DBD2]',
    accentColor: '#84CC16',
    description: 'Terrarium care, heating & specialized diets',
  },
];

export interface ProductCategoryItem {
  id: ProductCategory;
  name: string;
  iconImage: string;
  iconName: string;
  itemCount: number;
}

export const PRODUCT_CATEGORIES: ProductCategoryItem[] = [
  {
    id: 'Food & Treats',
    name: 'Food & Treats',
    iconImage: '/images/cat-food-treats.png',
    iconName: 'Utensils',
    itemCount: 48,
  },
  {
    id: 'Toys & Play',
    name: 'Toys & Play',
    iconImage: '/images/cat-toys-play.png',
    iconName: 'Gamepad2',
    itemCount: 32,
  },
  {
    id: 'Collars & Leashes',
    name: 'Collars & Leashes',
    iconImage: '/images/cat-collars-leashes.png',
    iconName: 'Shield',
    itemCount: 26,
  },
  {
    id: 'Grooming & Hygiene',
    name: 'Grooming & Hygiene',
    iconImage: '/images/cat-grooming-hygiene.png',
    iconName: 'Sparkles',
    itemCount: 38,
  },
  {
    id: 'Travel & Carriers',
    name: 'Travel & Carriers',
    iconImage: '/images/cat-travel-carriers.png',
    iconName: 'Luggage',
    itemCount: 18,
  },
  {
    id: 'Beds & Comfort',
    name: 'Beds & Comfort',
    iconImage: '/images/cat-beds-comfort.png',
    iconName: 'Home',
    itemCount: 22,
  },
  {
    id: 'Health & Wellness',
    name: 'Health & Wellness',
    iconImage: '/images/cat-health-wellness.png',
    iconName: 'HeartPulse',
    itemCount: 29,
  },
  {
    id: 'Enrichment & More',
    name: 'Enrichment & More',
    iconImage: '/images/cat-enrichment-more.png',
    iconName: 'Smile',
    itemCount: 34,
  },
];
