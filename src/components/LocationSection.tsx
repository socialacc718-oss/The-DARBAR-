import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#090b0e] border-b border-[#261f15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us or Order In</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Location & Contact
          </h2>
          <p className="font-urdu text-xl text-amber-300/90 mt-1">
            ہمارا پتہ اور رابطہ · شاہی مہمان نوازی
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Visit our royal dining hall or place your order online with instant doorstep delivery.
          </p>
        </div>

        {/* Grid: Details card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Timings Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#12141c] border border-[#2b2316] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Restaurant Brand Info */}
              <div className="border-b border-[#21190f] pb-5">
                <span className="font-urdu text-2xl text-amber-300 font-bold block">
                  The Darbaar | دربار
                </span>
                <span className="font-serif text-lg font-bold text-white block mt-0.5">
                  Traditional Desi Cuisine
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  Fresh Handi, Live BBQ, Authentic Karahi & Dum Biryani
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#211a10] border border-[#443520] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Restaurant Location
                  </span>
                  <p className="text-sm text-slate-200 font-medium mt-0.5">
                    The Darbaar Restaurant, Main Commercial Hub
                  </p>
                  <a
                    href={RESTAURANT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline font-semibold mt-1.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#211a10] border border-[#443520] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Service Hours
                  </span>
                  <p className="text-sm text-slate-200 font-medium mt-0.5">
                    {RESTAURANT_INFO.timings}
                  </p>
                  <span className="text-xs text-emerald-400 block mt-0.5">
                    Kitchen Open Now for Dine-in & Delivery
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#211a10] border border-[#443520] flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Helpline & WhatsApp Order
                  </span>
                  <p className="text-sm text-amber-300 font-mono font-bold mt-0.5">
                    {RESTAURANT_INFO.phoneFormatted}
                  </p>
                  <p className="text-xs text-slate-400">
                    Direct Kitchen Dispatch via WhatsApp
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-[#21190f]">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Air Conditioned Family Hall · Prayer Area · Valet</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#21190f] grid grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1d1710] hover:bg-[#2c2216] border border-[#4a3a25] text-amber-300 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.phoneWhatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Google Maps Integration (7 Cols) */}
          <div className="lg:col-span-7 bg-[#12141c] border border-[#2b2316] rounded-2xl overflow-hidden shadow-xl flex flex-col">
            
            {/* Map Top Bar */}
            <div className="bg-[#181a24] px-5 py-3 border-b border-[#2b2316] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-200">
                  Google Map Live Navigation
                </span>
              </div>

              <a
                href={RESTAURANT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium transition-colors"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="relative flex-1 min-h-[350px] w-full bg-[#1b1e28]">
              <iframe
                title="The Darbaar Restaurant Location"
                src="https://maps.google.com/maps?q=31.5204,74.3587&hl=en&z=14&output=embed"
                className="w-full h-full min-h-[350px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay banner prompting user with exact link */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0e1017]/90 backdrop-blur-md border border-[#3a2f20] p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xl">
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-white block">
                    The Darbaar Location Pin
                  </span>
                  <span className="text-[11px] text-slate-300 block">
                    Tap to open exact verified location in Google Maps app
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-lg text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Navigation</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
