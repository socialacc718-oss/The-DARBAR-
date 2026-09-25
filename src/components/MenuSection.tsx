import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Heart, Sparkles, Utensils, Flame, Disc, GlassWater, Coffee, Wheat, CookingPot, Soup, Sandwich, Salad } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS, CATEGORY_DEFAULT_IMAGES, MenuItem, MenuItemVariant } from '../data/menu';
import { useCart } from '../context/CartContext';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Utensils,
  Flame,
  FlameKindling: Flame,
  CookingPot,
  Soup,
  Sandwich,
  Salad,
  Disc,
  GlassWater,
  Coffee,
  Wheat,
};

interface MenuSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const { addToCart } = useCart();

  // Selected variant state for multi-variant items (itemId -> selected variant index)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});

  const handleSelectVariant = (itemId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedVariants((prev) => ({
      ...prev,
      [itemId]: index,
    }));
  };

  const toggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleAddToCart = (item: MenuItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let chosenVariant: MenuItemVariant | undefined = undefined;
    if (item.variants && item.variants.length > 0) {
      const idx = selectedVariants[item.id] ?? 0;
      chosenVariant = item.variants[idx];
    }
    addToCart(item, chosenVariant);

    setAddedItemNotification(item.id);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 1500);
  };

  // Filter items: exclude deals because deals have their dedicated untouched section
  const nonDealItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.category !== 'deals');
  }, []);

  const filteredItems = useMemo(() => {
    let list = nonDealItems;

    if (selectedCategory !== 'all' && selectedCategory !== 'deals') {
      list = list.filter((i) => i.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.nameUrdu && i.nameUrdu.includes(q)) ||
          (i.description && i.description.toLowerCase().includes(q)) ||
          i.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [nonDealItems, selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-12 sm:py-16 bg-[#0a0c10] border-b border-[#261f15]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-1">
            Freshly Prepared Dishes
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Darbaar Specialties & A La Carte
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-amber-300/90 mt-1">
            دیسی ذائقہ ، شاہی انداز · لذیذ کڑاہی، بریانی، بی بی کیو اور رول
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Browse through our royal kitchen offerings in card view with quick size selection.
          </p>
        </div>

        {/* Search bar & Category Controls */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative px-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Karahi, Biryani, Tikka, Roll)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#13161d] border border-[#2d2417] focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (Clean horizontal scroll for mobile and wrap for desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center px-1">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                  : 'bg-[#15171e] text-slate-300 hover:text-white hover:bg-[#1f222c] border border-[#2b251a]'
              }`}
            >
              <span>All Dishes</span>
              <span className="text-[10px] opacity-80 tabular-nums">({nonDealItems.length})</span>
            </button>

            {CATEGORIES.filter((c) => c.id !== 'deals').map((cat) => {
              const IconComp = ICON_MAP[cat.icon] || Utensils;
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                      : 'bg-[#15171e] text-slate-300 hover:text-white hover:bg-[#1f222c] border border-[#2b251a]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5 text-amber-400" />
                  <span>{cat.name.replace('Darbaar Special ', '').replace('Darbaari ', '')}</span>
                  <span className="text-[10px] opacity-80 tabular-nums">({count})</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 2-column on mobile, 3-column on tablet, 4-column on desktop matching user's reference screenshot */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#111319] rounded-2xl border border-[#231b12] max-w-md mx-auto">
            <p className="text-slate-400 text-xs sm:text-sm">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredItems.map((item) => {
              const hasVariants = item.variants && item.variants.length > 0;
              const currentVariantIndex = selectedVariants[item.id] ?? 0;
              const currentPrice = hasVariants
                ? item.variants![currentVariantIndex].price
                : (item.price || 0);

              const isAdded = addedItemNotification === item.id;
              const isFav = !!favorites[item.id];
              const itemImage =
                item.image ||
                CATEGORY_DEFAULT_IMAGES[item.category] ||
                CATEGORY_DEFAULT_IMAGES.karahi;

              return (
                <div
                  key={item.id}
                  className="bg-[#12141c] border border-[#292218] hover:border-amber-500/50 rounded-2xl p-2.5 sm:p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-black/70 group relative"
                >
                  {/* Top Image Container with Heart button & Red Add Button (Exact user screenshot design) */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#181a24] mb-3">
                    <img
                      src={itemImage}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Right Heart Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(item.id, e)}
                      className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 shadow-md transition-transform hover:scale-110 active:scale-95"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          isFav ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </button>

                    {/* Bottom Right Floating Red Circular '+' Button */}
                    <button
                      onClick={(e) => handleAddToCart(item, e)}
                      className={`absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-90 ${
                        isAdded
                          ? 'bg-emerald-600 text-white animate-bounce'
                          : 'bg-[#cf1d1d] hover:bg-[#b01414] text-white'
                      }`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      )}
                    </button>

                    {/* Popular Badge if applicable */}
                    {item.popular && (
                      <span className="absolute top-2 left-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950 px-2 py-0.5 rounded-md shadow-md">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Body Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Dish Name */}
                      <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                        {item.name}
                      </h3>

                      {/* Description / Subtext formatted like screenshot */}
                      <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-tight line-clamp-2 mt-1 min-h-[28px] sm:min-h-[32px] leading-tight font-sans">
                        {item.description || `${item.category.toUpperCase()} SPECIAL FRESHLY PREPARED`}
                      </p>
                    </div>

                    {/* Variants and Price Area */}
                    <div className="mt-2 pt-2 border-t border-[#231b12]">
                      {/* Variant toggles if multiple sizes exist (e.g. Half / Full or Med / Large) */}
                      {hasVariants ? (
                        <div className="flex items-center gap-1 mb-2 bg-[#090b0e] p-1 rounded-lg border border-[#211a12]">
                          {item.variants!.map((v, vIdx) => {
                            const isSelected = currentVariantIndex === vIdx;
                            return (
                              <button
                                key={v.label}
                                onClick={(e) => handleSelectVariant(item.id, vIdx, e)}
                                className={`flex-1 py-0.5 px-1 rounded text-[10px] sm:text-xs font-semibold transition-all ${
                                  isSelected
                                    ? 'bg-amber-500 text-stone-950 font-bold'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                {v.label}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}

                      {/* Prominent Price matching screenshot "Rs 699" format */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm sm:text-base lg:text-lg font-extrabold text-white tracking-tight">
                          Rs {currentPrice.toLocaleString()}
                        </span>
                        
                        {/* Quick feedback text */}
                        {isAdded ? (
                          <span className="text-[10px] text-emerald-400 font-bold">
                            Added!
                          </span>
                        ) : hasVariants ? (
                          <span className="text-[10px] text-slate-400">
                            {item.variants![currentVariantIndex].label}
                          </span>
                        ) : null}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
