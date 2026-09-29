import React from 'react';
import { Sparkles, Plus, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

export const DealsSection: React.FC = () => {
  const { addToCart } = useCart();
  const deals = MENU_ITEMS.filter((item) => item.category === 'deals');

  return (
    <section id="deals" className="py-10 sm:py-16 bg-[#0c0e13] border-b border-[#261f15] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-1">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1.5 sm:mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Value Combinations</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Royal Feast Deals
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-amber-300/90 mt-1">
            شاہی ڈیلز · دیسی ذائقہ بہترین بچت کے ساتھ
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 sm:mt-2">
            Specially assembled with our signature biryani, BBQ, handi, and chilled beverages.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deals.map((deal) => {
            const isMegaDeal = deal.id === 'family-deal' || deal.id === 'darbaari-special-deal';
            const includes = deal.description?.split('+').map((s) => s.trim()) || [];

            return (
              <div
                key={deal.id}
                className={`relative rounded-xl border flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px] ${
                  isMegaDeal
                    ? 'bg-gradient-to-b from-[#1f180e] via-[#14120e] to-[#0e1014] border-amber-500/60 shadow-xl shadow-amber-950/20'
                    : 'bg-[#12141a] border-[#2f271c] hover:border-amber-600/50 hover:shadow-lg hover:shadow-black/60'
                } p-4 sm:p-6`}
              >
                <div>
                  {/* Deal Header */}
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 font-semibold block truncate">
                        The Darbaar Combo
                      </span>
                      <h3 className="font-serif text-base sm:text-xl font-bold text-white tracking-wide truncate">
                        {deal.name}
                      </h3>
                      <span className="font-urdu text-xs sm:text-sm text-amber-300/80 block truncate">
                        {deal.nameUrdu}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] sm:text-xs text-slate-400 block">Price</span>
                      <span className="font-mono text-base sm:text-xl font-extrabold text-amber-300 tabular-nums">
                        Rs. {deal.price?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Included Items List */}
                  <div className="my-3 sm:my-4 pt-3 border-t border-[#261f15] space-y-1.5 sm:space-y-2">
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Includes:
                    </span>
                    <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {includes.map((inc, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <div className="pt-3 sm:pt-4 border-t border-[#261f15] mt-3 sm:mt-4">
                  <button
                    onClick={() => addToCart(deal)}
                    className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-[#221a11] hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-600/40 hover:border-amber-500 py-2 sm:py-2.5 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] text-center"
                  >
                    <Plus className="w-4 h-4 shrink-0 text-amber-400" />
                    <span className="truncate">Add {deal.name} · Rs. {deal.price?.toLocaleString()}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
