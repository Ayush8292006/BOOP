import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, UserPet, PetCategory, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  // Navigation & Views
  activeTab: 'home' | 'shop' | 'about';
  setActiveTab: (tab: 'home' | 'shop' | 'about') => void;
  selectedPetFilter: PetCategory | 'All';
  setSelectedPetFilter: (pet: PetCategory | 'All') => void;
  selectedCategoryFilter: ProductCategory | 'All';
  setSelectedCategoryFilter: (cat: ProductCategory | 'All') => void;
  selectedBrandFilter: string | 'All';
  setSelectedBrandFilter: (brand: string | 'All') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  navigateToShopWithFilter: (opts: { pet?: PetCategory | 'All'; category?: ProductCategory | 'All'; brand?: string | 'All' }) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  appliedPromo: string | null;
  promoDiscount: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Modals & Drawers
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  wishlistDrawerOpen: boolean;
  setWishlistDrawerOpen: (open: boolean) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  activeProductModal: Product | null;
  setActiveProductModal: (prod: Product | null) => void;
  policyModal: 'shipping' | 'returns' | 'privacy' | 'terms' | null;
  setPolicyModal: (policy: 'shipping' | 'returns' | 'privacy' | 'terms' | null) => void;
  contactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
  petProfileModalOpen: boolean;
  setPetProfileModalOpen: (open: boolean) => void;
  checkoutModalOpen: boolean;
  setCheckoutModalOpen: (open: boolean) => void;

  // First Visit Welcome
  welcomeScreenVisible: boolean;
  setWelcomeScreenVisible: (visible: boolean) => void;
  replayWelcomeScreen: () => void;

  // User Pet Profiles
  userPets: UserPet[];
  addUserPet: (pet: Omit<UserPet, 'id'>) => void;
  removeUserPet: (id: string) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<'home' | 'shop' | 'about'>('home');
  const [selectedPetFilter, setSelectedPetFilter] = useState<PetCategory | 'All'>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory | 'All'>('All');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('boop_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 },
        { product: PRODUCTS[2], quantity: 1 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('boop_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[3].id];
    } catch {
      return [];
    }
  });

  // User pets
  const [userPets, setUserPets] = useState<UserPet[]>(() => {
    try {
      const saved = localStorage.getItem('boop_user_pets');
      return saved ? JSON.parse(saved) : [
        { id: 'pet-1', name: 'Simba', type: 'Dogs', breed: 'Golden Retriever', age: '2 Years' }
      ];
    } catch {
      return [{ id: 'pet-1', name: 'Simba', type: 'Dogs', breed: 'Golden Retriever', age: '2 Years' }];
    }
  });

  // Drawers and modals
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [policyModal, setPolicyModal] = useState<'shipping' | 'returns' | 'privacy' | 'terms' | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [petProfileModalOpen, setPetProfileModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Promo code
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState<number>(0);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Welcome screen on first visit
  const [welcomeScreenVisible, setWelcomeScreenVisible] = useState<boolean>(() => {
    try {
      const hasSeen = localStorage.getItem('boop_welcome_seen');
      return !hasSeen;
    } catch {
      return true;
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('boop_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('boop_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Persist user pets
  useEffect(() => {
    try {
      localStorage.setItem('boop_user_pets', JSON.stringify(userPets));
    } catch {
      // ignore
    }
  }, [userPets]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const setActiveTab = (tab: 'home' | 'shop' | 'about') => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShopWithFilter = (opts: { pet?: PetCategory | 'All'; category?: ProductCategory | 'All'; brand?: string | 'All' }) => {
    if (opts.pet !== undefined) setSelectedPetFilter(opts.pet);
    if (opts.category !== undefined) setSelectedCategoryFilter(opts.category);
    if (opts.brand !== undefined) setSelectedBrandFilter(opts.brand);
    setActiveTabState('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedSize }];
    });
    showToast(`Added ${product.title.slice(0, 24)}... to your Cart ❤️`);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  // Cart calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BOOP10') {
      const discount = Math.round(cartSubtotal * 0.1);
      setAppliedPromo('BOOP10 (10% OFF)');
      setPromoDiscount(discount);
      showToast('Yay! 10% discount applied ✨');
      return { success: true, message: '10% discount applied successfully!' };
    } else if (clean === 'LOVEPETS') {
      const discount = 150;
      setAppliedPromo('LOVEPETS (₹150 OFF)');
      setPromoDiscount(discount);
      showToast('₹150 flat discount applied ❤️');
      return { success: true, message: '₹150 pet-lover discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "BOOP10" or "LOVEPETS"' };
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoDiscount(0);
    showToast('Promo code removed');
  };

  const replayWelcomeScreen = () => {
    setWelcomeScreenVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addUserPet = (pet: Omit<UserPet, 'id'>) => {
    const newPet: UserPet = {
      ...pet,
      id: `pet-${Date.now()}`,
    };
    setUserPets((prev) => [...prev, newPet]);
    showToast(`Registered ${pet.name}! 🐾`);
  };

  const removeUserPet = (id: string) => {
    setUserPets((prev) => prev.filter((p) => p.id !== id));
    showToast('Pet profile removed');
  };

  return (
    <ShopContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedPetFilter,
        setSelectedPetFilter,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        selectedBrandFilter,
        setSelectedBrandFilter,
        searchQuery,
        setSearchQuery,
        navigateToShopWithFilter,

        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingProgress,
        appliedPromo,
        promoDiscount,
        applyPromoCode,
        removePromoCode,

        wishlist,
        toggleWishlist,
        isWishlisted,

        cartDrawerOpen,
        setCartDrawerOpen,
        wishlistDrawerOpen,
        setWishlistDrawerOpen,
        searchModalOpen,
        setSearchModalOpen,
        activeProductModal,
        setActiveProductModal,
        policyModal,
        setPolicyModal,
        contactModalOpen,
        setContactModalOpen,
        petProfileModalOpen,
        setPetProfileModalOpen,
        checkoutModalOpen,
        setCheckoutModalOpen,

        welcomeScreenVisible,
        setWelcomeScreenVisible,
        replayWelcomeScreen,

        userPets,
        addUserPet,
        removeUserPet,

        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
