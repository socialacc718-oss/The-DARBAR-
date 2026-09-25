import React from 'react';
import { MessageSquare, Phone, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menu';

export const FloatingActions: React.FC = () => {
  const { totalItems, grandTotal, setIsCartOpen } = useCart();

  return (
    <>
      {/* Floating Action Buttons matching screenshot bottom-right stack */}
      <aside
        aria-label="Direct Quick Contact & Ordering"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto"
      >
        {/* Floating Cart Button for Mobile when items exist */}
        {totalItems > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="md:hidden flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold px-4 py-2.5 rounded-full shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 transition-all text-xs"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="tabular-nums font-mono">({totalItems})</span>
            <span className="font-mono tabular-nums">Rs. {grandTotal.toLocaleString()}</span>
          </button>
        )}

        {/* WhatsApp Green Floating Circle */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.phoneWhatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-90 transition-transform group"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950" />
        </a>

        {/* Direct Call Red Floating Circle matching screenshot call button */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8B0000] hover:bg-[#a00000] text-white flex items-center justify-center shadow-2xl shadow-red-950/60 hover:scale-110 active:scale-90 transition-transform group"
          aria-label="Call Restaurant Helpline"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </aside>
    </>
  );
};
