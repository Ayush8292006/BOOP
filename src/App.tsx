import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { WelcomeScreen } from './components/common/WelcomeScreen';
import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { ShopByPet } from './components/home/ShopByPet';
import { AquaticSection } from './components/home/AquaticSection';
import { ShopByCategory } from './components/home/ShopByCategory';
import { PromoBanners } from './components/home/PromoBanners';
import { ShopByBrands } from './components/home/ShopByBrands';
import { CollabBanner } from './components/home/CollabBanner';
import { Footer } from './components/common/Footer';
import { ShopView } from './components/shop/ShopView';
import { AboutPage } from './components/about/AboutPage';
import { CartDrawer } from './components/shop/CartDrawer';
import { WishlistDrawer } from './components/shop/WishlistDrawer';
import { SearchModal } from './components/shop/SearchModal';
import { ProductDetailModal } from './components/shop/ProductDetailModal';
import { CheckoutModal } from './components/shop/CheckoutModal';
import { PolicyModal } from './components/common/PolicyModal';
import { PetProfileModal } from './components/common/PetProfileModal';
import { ContactModal } from './components/contact/ContactModal';
import { Toast } from './components/common/Toast';

const AppContent: React.FC = () => {
  const { activeTab } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF4] text-[#3B160D]">
      {/* 1. First Visit Welcome Screen */}
      <WelcomeScreen />

      {/* 2. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 3. Sticky Main Navigation */}
      <Navbar />

      {/* 4. Active Main Page View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <TrustStrip />
            <ShopByPet />
            <AquaticSection />
            <ShopByCategory />
            <PromoBanners />
            <ShopByBrands />
            <CollabBanner />
          </>
        )}

        {activeTab === 'shop' && <ShopView />}

        {activeTab === 'about' && <AboutPage />}
      </main>

      {/* 5. Rich Chocolate Footer */}
      <Footer />

      {/* 6. Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ProductDetailModal />
      <CheckoutModal />
      <PolicyModal />
      <PetProfileModal />
      <ContactModal />

      {/* 7. Action Toast */}
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
