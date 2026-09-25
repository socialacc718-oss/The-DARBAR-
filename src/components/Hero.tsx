import React from 'react';
import { Sparkles, UtensilsCrossed, Clock, ShieldCheck, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';
import heroFeastImg from '../assets/images/hero_darbaar_feast_1790353192841.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] pt-6 pb-16 lg:py-20 border-b border-[#2a2216]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-900/20 via-amber-950/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Royal Tagline / Kicker without pill box */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-amber-400">
              <span className="font-urdu text-xl text-amber-300 font-bold">دیسی ذائقہ ، شاہی انداز</span>
              <span className="text-amber-600/70" aria-hidden="true">·</span>
              <span className="tracking-widest uppercase text-[11px] text-amber-400/90 font-serif">
                A Taste of Home
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Royal Desi Dining, <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Crafted for Connoisseurs.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Experience the royal legacy of slow-cooked handis, aromatic darbaari biryanis, 
              sizzling charcoal BBQ, and flaky paratha rolls. Order online with instant 
              order slip dispatch directly to our kitchen.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </a>

              <a
                href="#deals"
                className="bg-[#1b1712] hover:bg-[#282118] text-amber-300 border border-[#4a3a25] px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm sm:text-base font-semibold whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Exclusive Deals</span>
              </a>
            </div>

            {/* Value badges: Clean typography without pill badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#261f15] text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Live BBQ & Handi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>30-45 Min Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Fresh & Halal</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#473722] shadow-2xl shadow-black/80 group">
              <img
                src={heroFeastImg}
                alt="The Darbaar Royal Desi Feast with Biryani, BBQ, and Karahi"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <span className="font-urdu text-base text-amber-300 block">شاہی دسترخوان</span>
                  <span className="font-serif text-lg font-bold text-white tracking-wide">
                    The Darbaar Grand Spread
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Traditional Flavors · Modern Experience
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                    Helpline
                  </span>
                  <span className="font-mono text-xs text-white font-semibold">
                    {RESTAURANT_INFO.phoneFormatted}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
