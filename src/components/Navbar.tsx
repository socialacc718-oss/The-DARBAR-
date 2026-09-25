import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Sparkles, Utensils, Flame, CookingPot, Soup, Sandwich, Salad, Disc, GlassWater, Coffee, Wheat } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, CATEGORIES } from '../data/menu';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  deals: Sparkles,
  starters: Utensils,
  biryani: Flame,
  bbq: Flame,
  karahi: CookingPot,
  handi: Soup,
  rolls: Sandwich,
  light: Salad,
  paratha: Disc,
  'cold-drinks': GlassWater,
  'hot-drinks': Coffee,
  sides: Wheat,
};

interface StickyNavbarProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const Navbar: React.FC<StickyNavbarProps> = ({ activeCategory, onSelectCategory }) => {
  const { totalItems, grandTotal, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
    
    // Smooth scroll to target section
    if (catId === 'deals') {
      const el = document.getElementById('deals');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('menu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNowClick = () => {
    // If cart has items, open cart, else scroll to menu
    if (totalItems > 0) {
      setIsCartOpen(true);
    } else {
      const el = document.getElementById('menu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0d0f14]/98 backdrop-blur-md border-b border-[#2d2417] shadow-xl">
      {/* Top micro bar for announcements */}
      <div className="bg-[#17120a] border-b border-[#352514] text-amber-300 text-xs px-3 sm:px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-urdu text-sm hidden sm:inline">دیسی ذائقہ ، شاہی انداز</span>
          <span className="hidden sm:inline text-amber-700">·</span>
          <span className="font-medium text-[11px] sm:text-xs">
            Free Delivery on orders above Rs. 2,000
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hover:text-amber-200 transition-colors flex items-center gap-1 font-mono text-[11px] sm:text-xs"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{RESTAURANT_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-950/40">
            <div className="w-full h-full bg-[#0d0f14] rounded-[7px] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:scale-105 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 2C8 6 6 9 6 14a6 6 0 0 0 12 0c0-5-2-8-6-12Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8v10" strokeLinecap="round" />
                <path d="M9 14h6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-amber-200 uppercase">
              The Darbaar
            </span>
            <span className="font-urdu text-[11px] sm:text-xs text-amber-400/80 -mt-0.5 sm:-mt-1">
              دربار · شاہی انداز
            </span>
          </div>
        </a>

        {/* Desktop Category Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-300 overflow-x-auto py-1">
          <button
            onClick={() => handleCategoryClick('deals')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeCategory === 'deals'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                : 'hover:text-amber-400 hover:bg-[#1c1f2b]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deals</span>
          </button>

          {CATEGORIES.slice(1, 8).map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Utensils;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                    : 'hover:text-amber-400 hover:bg-[#1c1f2b]'
                }`}
              >
                <Icon className="w-3 h-3 text-amber-400" />
                <span>{cat.name.replace('Darbaar Special ', '').replace('Darbaari ', '')}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Prominent 'Order Now' button & Cart Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Prominent 'Order Now' button */}
          <button
            onClick={handleOrderNowClick}
            className="bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-red-950/40 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            aria-label="Order Now"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Order Now</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#1b1e2a] hover:bg-[#252a3a] border border-[#3e3223] text-amber-300 font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-xs">Cart</span>
            {totalItems > 0 && (
              <span className="bg-amber-500 text-stone-950 text-xs px-2 py-0.5 rounded-full font-mono tabular-nums font-bold">
                {totalItems}
              </span>
            )}
            {grandTotal > 0 && (
              <span className="hidden md:inline text-xs font-mono font-bold text-amber-300 border-l border-[#3a2f20] pl-2 tabular-nums">
                Rs. {grandTotal.toLocaleString()}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Horizontal Sub-Bar for Quick Category Scrolling (Visible on Mobile & Tablet) */}
      <div className="lg:hidden bg-[#0a0c10] border-t border-[#231b12] px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => handleCategoryClick('deals')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            activeCategory === 'deals'
              ? 'bg-amber-500 text-stone-950 font-bold'
              : 'bg-[#151722] text-slate-300 border border-[#2b2216]'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>Deals</span>
        </button>
        {CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.id] || Utensils;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-[#151722] text-slate-300 border border-[#2b2216]'
              }`}
            >
              <Icon className="w-3 h-3 text-amber-400" />
              <span>{cat.name.replace('Darbaar Special ', '').replace('Darbaari ', '')}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-[#2d2417] px-4 py-4 space-y-2 max-h-[75vh] overflow-y-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 px-2">
            Categories & Menu
          </div>
          <button
            onClick={() => handleCategoryClick('deals')}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm flex items-center justify-between ${
              activeCategory === 'deals'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-slate-200 hover:bg-[#1a1d28]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Exclusive Deals (شاہی ڈیلز)</span>
            </span>
          </button>

          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Utensils;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-slate-200 hover:bg-[#1a1d28]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{cat.name}</span>
                </span>
                <span className="font-urdu text-xs text-amber-400/80">{cat.nameUrdu}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#251e15] flex flex-col gap-2">
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-[#181a24] text-amber-300 border border-[#3b2d1c] py-2.5 rounded-lg text-xs font-semibold"
            >
              Google Map & Location
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg text-xs font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline ({RESTAURANT_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
