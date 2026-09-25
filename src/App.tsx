import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DealsSection } from './components/DealsSection';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ReceiptSlipModal } from './components/ReceiptSlipModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black antialiased">
        {/* Responsive Sticky Header with Category Links and prominent 'Order Now' button */}
        <Navbar
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Banner with feast image & tagline */}
          <Hero />

          {/* Deals section untouched as requested */}
          <DealsSection />

          {/* Non-deal dishes in grid view matching user screenshot */}
          <MenuSection
            selectedCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />

          {/* Brand Story & Specialties */}
          <StorySection />

          {/* Google Maps & Location Section */}
          <LocationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Overlays & Modals */}
        <CartDrawer />
        <CheckoutModal />
        <ReceiptSlipModal />
        <FloatingActions />
      </div>
    </CartProvider>
  );
}
