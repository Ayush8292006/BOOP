export type PetCategory = 'Dogs' | 'Cats' | 'Small Pets' | 'Birds' | 'Reptiles' | 'Aquatics';

export type ProductCategory = 
  | 'Food & Treats'
  | 'Toys & Play'
  | 'Collars & Leashes'
  | 'Grooming & Hygiene'
  | 'Travel & Carriers'
  | 'Beds & Comfort'
  | 'Health & Wellness'
  | 'Enrichment & More'
  | 'Aquarium & Care';

export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  additionalImages?: string[];
  petCategory: PetCategory;
  category: ProductCategory;
  description: string;
  features: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  weight?: string;
  rating?: number; // Internal quality rating for sorting (not fake customer reviews)
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface UserPet {
  id: string;
  name: string;
  type: PetCategory;
  breed: string;
  age: string;
}
