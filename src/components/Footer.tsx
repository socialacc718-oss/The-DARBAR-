import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080b] text-slate-400 border-t border-[#231b12] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#07080b] rounded-[7px] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2C8 6 6 9 6 14a6 6 0 0 0 12 0c0-5-2-8-6-12Z" strokeLinecap="round" />
                    <path d="M12 8v10" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-amber-200 uppercase block">
                  The Darbaar
                </span>
                <span className="font-urdu text-sm text-amber-400 block -mt-1">
                  دربار · دیسی دسترخوان
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bringing royal culinary heritage to your table. Authentic Dum Biryani, 
              sizzling Charcoal BBQ, fresh Handi curries, and gourmet paratha rolls.
            </p>

            <div className="pt-1">
              <span className="font-urdu text-base text-amber-300 font-bold block">
                دیسی ذائقہ ، شاہی انداز
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                Traditional Flavors · Modern Experience
              </span>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#deals" className="hover:text-amber-400 transition-colors">
                  Exclusive Feast Deals
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Darbaari Dum Biryani
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Live BBQ (Tikka & Malai Boti)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Special Karahi & Clay Handi
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Darbaar Special Rolls & Parathas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Darbari Chai & Beverages
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Service */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Operating Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Monday – Sunday</span>
                  <span className="text-slate-400">{RESTAURANT_INFO.timings}</span>
                </div>
              </div>
              <div className="bg-[#12141c] p-2.5 rounded-lg border border-[#231b12]">
                <span className="text-emerald-400 font-semibold block text-[11px]">
                  ✓ Kitchen Open Everyday
                </span>
                <span className="text-slate-400 text-[11px]">
                  Dine-in, Takeaway & Home Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Orders */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Hotline & WhatsApp
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono font-semibold">{RESTAURANT_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.phoneWhatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Kitchen Order</span>
              </a>

              <a
                href={RESTAURANT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors pt-1"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Google Maps Location</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a140f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Darbaar (دربار). All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with royal passion for authentic Desi cuisine</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
