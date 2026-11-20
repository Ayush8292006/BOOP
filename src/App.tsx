import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { WelcomeScreen } from './components/common/WelcomeScreen';
import { MobileStoryBar } from './components/home/MobileStoryBar';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { ShopByPet } from './components/home/ShopByPet';
import { AquaticSection } from './components/home/AquaticSection';
import { ShopByCategory } from './components/home/ShopByCategory';
import { FeaturedProducts } from './components/home/FeaturedProducts';
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
    <div className="min-h-screen flex flex-col bg-[#FFFAF4] text-[#35150E] pb-16 lg:pb-0">
      {/* 1. Cinematic Luxury Welcome Screen */}
      <WelcomeScreen />

      {/* 2. Top Minimalist Announcement Bar */}
      <AnnouncementBar />

      {/* 3. Sticky Main Navigation */}
      <Navbar />

      {/* 4. Mobile Quick Stories/Category Portal Bar */}
      {activeTab === 'home' && <MobileStoryBar />}

      {/* 5. Active Page View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <TrustStrip />
            <ShopByPet />
            <AquaticSection />
            <ShopByCategory />
            <FeaturedProducts />
            <PromoBanners />
            <ShopByBrands />
            <CollabBanner />
          </>
        )}

        {activeTab === 'shop' && <ShopView />}

        {activeTab === 'about' && <AboutPage />}
      </main>

      {/* 6. Rich Chocolate Footer */}
      <Footer />

      {/* 7. Native Mobile iOS/Android Bottom App Dock */}
      <MobileBottomBar />

      {/* 8. Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ProductDetailModal />
      <CheckoutModal />
      <PolicyModal />
      <PetProfileModal />
      <ContactModal />

      {/* 9. Action Toast */}
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
