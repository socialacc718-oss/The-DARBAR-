import React from 'react';
import { Utensils, Users, Heart, Sparkles, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';
import biryaniSpecialImg from '../assets/images/biryani_darbaar_special_1790353206581.jpg';
import bbqKarahiImg from '../assets/images/bbq_karahi_darbaar_1790353218118.jpg';
import parathaRollsImg from '../assets/images/paratha_rolls_darbaar_1790353229402.jpg';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#0d0f14] border-b border-[#261f15] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Story Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Darbaar Heritage</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            A Place Where Tradition <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Meets Royal Taste
            </span>
          </h2>

          <p className="font-urdu text-2xl text-amber-300 font-bold mt-2">
            دیسی ذائقہ ، شاہی انداز · گھر جیسا خالص ذائقہ
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
            At The Darbaar, we bring you the true essence of Desi cuisine with a royal touch. 
            From flavorful biryanis and signature karahis to sizzling BBQ and mouth-watering rolls, 
            every dish is crafted with love, tradition, and the finest ingredients.
          </p>

          <p className="text-slate-400 text-sm mt-3 italic">
            "More than just a restaurant, The Darbaar is a place to gather, savor, and create lasting memories with family and friends."
          </p>
        </div>

        {/* 3 Visual Specialties Grid */}
        <div id="specialties" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Darbaari Biryani */}
          <div className="bg-[#12141b] rounded-xl overflow-hidden border border-[#2b2417] group hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/70">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={biryaniSpecialImg}
                alt="Darbaari Special Biryani in Traditional Brass Handi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <span className="font-serif text-base font-bold text-white">
                  Darbaari Dum Biryani
                </span>
                <span className="font-urdu text-sm text-amber-400">
                  درباری بریانی
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Cooked with long-grain basmati, pure saffron aroma, and tenderly marinated chicken pieces slow-dummed in brass cauldrons.
              </p>
              <div className="flex items-center justify-between text-xs border-t border-[#211a11] pt-3">
                <span className="text-slate-400">Portions: Half & Full</span>
                <span className="font-mono text-amber-300 font-semibold">From Rs. 150</span>
              </div>
            </div>
          </div>

          {/* Card 2: BBQ & Karahi */}
          <div className="bg-[#12141b] rounded-xl overflow-hidden border border-[#2b2417] group hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/70">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={bbqKarahiImg}
                alt="Sizzling Charcoal BBQ and Chicken Karahi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <span className="font-serif text-base font-bold text-white">
                  Live Wok Karahi & BBQ
                </span>
                <span className="font-urdu text-sm text-amber-400">
                  کڑاہی و بی بی کیو
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Chargrilled over glowing embers and tossed in roaring cast iron karahis with fresh ginger, tomatoes, and ground spices.
              </p>
              <div className="flex items-center justify-between text-xs border-t border-[#211a11] pt-3">
                <span className="text-slate-400">Tikka, Malai Boti, Handi</span>
                <span className="font-mono text-amber-300 font-semibold">From Rs. 550</span>
              </div>
            </div>
          </div>

          {/* Card 3: Paratha Rolls */}
          <div className="bg-[#12141b] rounded-xl overflow-hidden border border-[#2b2417] group hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/70">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={parathaRollsImg}
                alt="Golden Crispy Paratha Rolls with Garlic Mayo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <span className="font-serif text-base font-bold text-white">
                  Signature Paratha Rolls
                </span>
                <span className="font-urdu text-sm text-amber-400">
                  سپیشل رول پراٹھا
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Crispy multi-layered laccha paratha rolled with smokey grilled chicken boti, signature mayo garlic drizzle, and red onions.
              </p>
              <div className="flex items-center justify-between text-xs border-t border-[#211a11] pt-3">
                <span className="text-slate-400">Medium & Large</span>
                <span className="font-mono text-amber-300 font-semibold">From Rs. 400</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars from Menu Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#21190f]">
          <div className="text-center p-6 rounded-xl bg-[#101218] border border-[#231b12]">
            <div className="w-12 h-12 rounded-full bg-[#1e170e] border border-[#44331e] flex items-center justify-center mx-auto mb-4 text-amber-400">
              <Utensils className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-1">
              Great Food
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every recipe stays true to authentic Pakistani heritage with pure spices and fresh meat.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#101218] border border-[#231b12]">
            <div className="w-12 h-12 rounded-full bg-[#1e170e] border border-[#44331e] flex items-center justify-center mx-auto mb-4 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-1">
              Good People
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Passionate chefs and courteous hospitality to ensure every dining experience is memorable.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#101218] border border-[#231b12]">
            <div className="w-12 h-12 rounded-full bg-[#1e170e] border border-[#44331e] flex items-center justify-center mx-auto mb-4 text-amber-400">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-1">
              Memorable Moments
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bringing families and friends together around a feast of authentic desi culinary treasures.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
