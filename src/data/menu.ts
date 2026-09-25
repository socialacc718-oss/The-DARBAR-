import heroFeastImg from '../assets/images/hero_darbaar_feast_1790353192841.jpg';
import biryaniSpecialImg from '../assets/images/biryani_darbaar_special_1790353206581.jpg';
import bbqKarahiImg from '../assets/images/bbq_karahi_darbaar_1790353218118.jpg';
import parathaRollsImg from '../assets/images/paratha_rolls_darbaar_1790353229402.jpg';
import biryaniPlateImg from '../assets/images/biryani_plate_clean_1790353778941.jpg';
import tikkaBotiImg from '../assets/images/tikka_boti_clean_1790353794778.jpg';
import karahiWokImg from '../assets/images/karahi_wok_clean_1790353811178.jpg';
import parathaRollCleanImg from '../assets/images/paratha_roll_clean_1790353826068.jpg';
import teaDrinksImg from '../assets/images/tea_drinks_clean_1790353841204.jpg';

export interface MenuItemVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  nameUrdu?: string;
  category: string;
  description?: string;
  price?: number;
  variants?: MenuItemVariant[];
  popular?: boolean;
  image?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  nameUrdu: string;
  icon: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'deals', name: 'Exclusive Deals', nameUrdu: 'شاہی ڈیلز', icon: 'Sparkles', description: 'Curated value combos for singles, duos & families' },
  { id: 'starters', name: 'Starters', nameUrdu: 'شروعات', icon: 'Utensils', description: 'Crispy delights and warm traditional soups' },
  { id: 'biryani', name: 'Darbaari Biryani', nameUrdu: 'درباری بریانی', icon: 'Flame', description: 'Fragrant basmati cooked with authentic spices' },
  { id: 'bbq', name: 'Darbaar Special BBQ', nameUrdu: 'دربار سپیشل بی بی کیو', icon: 'FlameKindling', description: 'Charcoal grilled skewers and tender tikkas' },
  { id: 'karahi', name: 'Darbaar Special Karahi', nameUrdu: 'دربار سپیشل کڑاہی', icon: 'CookingPot', description: 'Wok-cooked rich chicken curries infused with spices' },
  { id: 'handi', name: 'Darbaar Special Handi', nameUrdu: 'دربار سپیشل ہانڈی', icon: 'Soup', description: 'Slow-cooked creamy boneless handi specialties' },
  { id: 'rolls', name: 'Darbaar Special Rolls', nameUrdu: 'سپیشل رول پراٹھا', icon: 'Sandwich', description: 'Golden laccha parathas rolled with juicy BBQ' },
  { id: 'light', name: 'Something Light', nameUrdu: 'ہلکی پھلکی غذا', icon: 'Salad', description: 'Traditional homestyle curries, daal and chawal' },
  { id: 'paratha', name: 'Paratha', nameUrdu: 'پراٹھے', icon: 'Disc', description: 'Crisp golden parathas made to perfection' },
  { id: 'cold-drinks', name: 'Cold Beverages', nameUrdu: 'ٹھنڈے مشروبات', icon: 'GlassWater', description: 'Chilled soft drinks and pure mineral water' },
  { id: 'hot-drinks', name: 'Hot Beverages', nameUrdu: 'گرم چائے و قہوہ', icon: 'Coffee', description: 'Special Darbari Chai, Gud Chai and Green Tea' },
  { id: 'sides', name: 'Sides & Breads', nameUrdu: 'سلاد، رائتہ و روٹی', icon: 'Wheat', description: 'Freshly baked tandoori naans, rotis & chutneys' }
];

export const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  biryani: biryaniPlateImg,
  bbq: tikkaBotiImg,
  karahi: karahiWokImg,
  handi: karahiWokImg,
  rolls: parathaRollCleanImg,
  paratha: parathaRollCleanImg,
  starters: tikkaBotiImg,
  light: karahiWokImg,
  'cold-drinks': teaDrinksImg,
  'hot-drinks': teaDrinksImg,
  sides: biryaniSpecialImg,
  deals: heroFeastImg,
};

export const MENU_ITEMS: MenuItem[] = [
  // --- EXCLUSIVE DEALS ---
  {
    id: 'deal-1',
    name: 'Deal 1',
    nameUrdu: 'ڈیل ۱',
    category: 'deals',
    description: '1 Full Biryani + Raita + Cold Drink (350ml)',
    price: 450,
    popular: true,
  },
  {
    id: 'deal-2',
    name: 'Deal 2',
    nameUrdu: 'ڈیل ۲',
    category: 'deals',
    description: '1 Large Roll + Raita + Cold Drink (350ml)',
    price: 660,
    popular: true,
  },
  {
    id: 'deal-3',
    name: 'Deal 3',
    nameUrdu: 'ڈیل ۳',
    category: 'deals',
    description: 'Any 2 Large Rolls + 2x Cold Drink (350ml)',
    price: 1199,
    popular: true,
  },
  {
    id: 'deal-4',
    name: 'Deal 4',
    nameUrdu: 'ڈیل ۴',
    category: 'deals',
    description: 'Chicken Tikka Leg + Chicken Malai Boti (6pc) + Chicken Seekh Kabab (4pc) + 2 Poori Parathas + 2x Cold Drink (350ml)',
    price: 2199,
    popular: true,
  },
  {
    id: 'deal-5',
    name: 'Deal 5',
    nameUrdu: 'ڈیل ۵',
    category: 'deals',
    description: 'Half Karahi + Half Handi + 4 Naan + Raita + Salad + 1.5L Cold Drink',
    price: 2799,
    popular: true,
  },
  {
    id: 'family-deal',
    name: 'Family Deal',
    nameUrdu: 'فیملی ڈیل',
    category: 'deals',
    description: 'Karahi + 2 Biryani + 2 Rolls + 6pc Malai Boti + 4pc Seekh Kabab + 3 Naan + Raita + Salad + 1.5L Cold Drink',
    price: 5299,
    popular: true,
  },
  {
    id: 'darbaari-special-deal',
    name: 'Darbaari Special Deal',
    nameUrdu: 'درباری سپیشل ڈیل',
    category: 'deals',
    description: '1 Full Biryani + 1 Tikka Leg + 6pc Malai Boti + Half Chicken Karahi + Half Special Handi + 1 Any Large Roll + 1 Poori Paratha + 6 Naan + 2 Raita + 2 Salad + 1.5L Cold Drink',
    price: 5099,
    popular: true,
  },

  // --- STARTERS ---
  {
    id: 'fish-crackers',
    name: 'Fish Crackers',
    nameUrdu: 'فش کریکرز',
    category: 'starters',
    description: 'Crispy fried seafood crackers served with dip',
    price: 200,
  },
  {
    id: 'chicken-corn-soup',
    name: 'Chicken Corn Soup',
    nameUrdu: 'چکن کارن سوپ',
    category: 'starters',
    description: 'Classic hearty broth loaded with tender shredded chicken and sweet corn',
    price: 450,
    popular: true,
  },
  {
    id: 'bbq-wings',
    name: 'BBQ Wings',
    nameUrdu: 'بی بی کیو ونگز',
    category: 'starters',
    description: 'Glazed chicken wings grilled with smokey barbecue sauce',
    price: 500,
  },
  {
    id: 'fried-wings',
    name: 'Fried Wings',
    nameUrdu: 'فرائیڈ ونگز',
    category: 'starters',
    description: 'Golden crunchy chicken wings with signature spice crust',
    price: 600,
  },

  // --- DARBAARI BIRYANI ---
  {
    id: 'chicken-biryani-single',
    name: 'Chicken Biryani (Single)',
    nameUrdu: 'چکن بریانی (سنگل)',
    category: 'biryani',
    description: 'Traditional spiced long-grain basmati with 1 succulent chicken piece',
    variants: [
      { label: 'Half', price: 250 },
      { label: 'Full', price: 350 },
    ],
    popular: true,
  },
  {
    id: 'chicken-biryani-double',
    name: 'Chicken Biryani (Double)',
    nameUrdu: 'چکن بریانی (ڈبل چکن)',
    category: 'biryani',
    description: 'Rich spiced biryani loaded with double succulent chicken pieces',
    variants: [
      { label: 'Half', price: 350 },
      { label: 'Full', price: 500 },
    ],
    popular: true,
  },
  {
    id: 'sada-biryani-aloo-single',
    name: 'Sada Biryani Aloo (Single)',
    nameUrdu: 'سادہ بریانی آلو (سنگل)',
    category: 'biryani',
    description: 'Aromatic seasoned biryani rice served with tender marinated potato',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 250 },
    ],
  },
  {
    id: 'sada-biryani-aloo-double',
    name: 'Sada Biryani Aloo (Double)',
    nameUrdu: 'سادہ بریانی آلو (ڈبل)',
    category: 'biryani',
    description: 'Aromatic seasoned biryani rice with extra portions of marinated potato',
    variants: [
      { label: 'Half', price: 250 },
      { label: 'Full', price: 350 },
    ],
  },

  // --- DARBAAR SPECIAL BBQ ---
  {
    id: 'chicken-tikka-chest',
    name: 'Chicken Tikka (Chest)',
    nameUrdu: 'چکن تکہ (سینہ)',
    category: 'bbq',
    description: 'Prime chicken breast quarter marinated in darbaari secret masala and chargrilled',
    price: 600,
    popular: true,
  },
  {
    id: 'chicken-tikka-leg',
    name: 'Chicken Tikka (Leg)',
    nameUrdu: 'چکن تکہ (لیگ)',
    category: 'bbq',
    description: 'Juicy chicken leg quarter chargrilled over hot coals with fresh lemon garnish',
    price: 550,
    popular: true,
  },
  {
    id: 'chicken-boti-boneless',
    name: 'Chicken Boti (Boneless)',
    nameUrdu: 'چکن بوٹی بون لیس',
    category: 'bbq',
    description: 'Tender boneless chicken cubes marinated in spicy yogurt blend',
    variants: [
      { label: '6 pc', price: 599 },
      { label: '12 pc', price: 1099 },
    ],
  },
  {
    id: 'malai-boti-boneless',
    name: 'Malai Boti (Boneless)',
    nameUrdu: 'ملائی بوٹی بون لیس',
    category: 'bbq',
    description: 'Melt-in-mouth boneless chicken cubes infused with fresh clotted cream and mild spices',
    variants: [
      { label: '6 pc', price: 699 },
      { label: '12 pc', price: 1199 },
    ],
    popular: true,
  },
  {
    id: 'chicken-seekh-kabab',
    name: 'Chicken Seekh Kabab',
    nameUrdu: 'چکن سیخ کباب',
    category: 'bbq',
    description: 'Minced chicken blended with fresh herbs and aromatic spices skewered over open coals',
    variants: [
      { label: '4 pc', price: 899 },
      { label: '6 pc', price: 999 },
    ],
    popular: true,
  },

  // --- DARBAAR SPECIAL KARAHI ---
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    nameUrdu: 'چکن کڑاہی',
    category: 'karahi',
    description: 'Traditional wok-fried chicken in fresh tomato, ginger, garlic and black pepper gravy',
    variants: [
      { label: 'Half', price: 1199 },
      { label: 'Full', price: 2099 },
    ],
    popular: true,
  },
  {
    id: 'chicken-achari-karahi',
    name: 'Chicken Achari Karahi',
    nameUrdu: 'چکن اچاری کڑاہی',
    category: 'karahi',
    description: 'Tangy pickled spice blend wok-tossed with fresh chicken and green chilies',
    variants: [
      { label: 'Half', price: 1399 },
      { label: 'Full', price: 2299 },
    ],
  },
  {
    id: 'chicken-makhni-karahi',
    name: 'Chicken Makhni Karahi',
    nameUrdu: 'چکن مکھنی کڑاہی',
    category: 'karahi',
    description: 'Rich velvety karahi prepared with generous dollops of pure desi butter and cream',
    variants: [
      { label: 'Half', price: 1599 },
      { label: 'Full', price: 2499 },
    ],
    popular: true,
  },
  {
    id: 'chicken-tikka-karahi',
    name: 'Chicken Tikka Karahi',
    nameUrdu: 'چکن تکہ کڑاہی',
    category: 'karahi',
    description: 'Smokey chargrilled chicken tikka pieces finished in thick spicy karahi masala',
    variants: [
      { label: 'Half', price: 1299 },
      { label: 'Full', price: 2099 },
    ],
  },
  {
    id: 'seekh-kabab-karahi',
    name: 'Seekh Kabab Karahi',
    nameUrdu: 'سیخ کباب کڑاہی',
    category: 'karahi',
    description: 'Succulent chicken seekh kabab medallions cooked into spicy tomato-onion gravy',
    variants: [
      { label: 'Half', price: 1199 },
      { label: 'Full', price: 2099 },
    ],
  },
  {
    id: 'white-karahi',
    name: 'White Karahi',
    nameUrdu: 'سفید کڑاہی (وائٹ کڑاہی)',
    category: 'karahi',
    description: 'Mild creamy white chicken curry seasoned with crushed cumin and white pepper',
    variants: [
      { label: 'Half', price: 1299 },
      { label: 'Full', price: 2499 },
    ],
    popular: true,
  },

  // --- DARBAAR SPECIAL HANDI ---
  {
    id: 'chicken-makhni-handi',
    name: 'Chicken Makhni Handi',
    nameUrdu: 'چکن مکھنی ہانڈی',
    category: 'handi',
    description: 'Boneless tender chicken simmered in clay handi with rich buttery cashew gravy',
    variants: [
      { label: 'Half', price: 1350 },
      { label: 'Full', price: 2599 },
    ],
    popular: true,
  },
  {
    id: 'chicken-achari-handi',
    name: 'Chicken Achari Handi',
    nameUrdu: 'چکن اچاری ہانڈی',
    category: 'handi',
    description: 'Clay-pot boneless chicken infused with fragrant pickle seeds and fiery spices',
    variants: [
      { label: 'Half', price: 1299 },
      { label: 'Full', price: 2499 },
    ],
  },
  {
    id: 'chicken-jalfarezi-handi',
    name: 'Chicken Jalfarezi Handi',
    nameUrdu: 'چکن جلفریزی ہانڈی',
    category: 'handi',
    description: 'Boneless chicken stir-fried with bell peppers, onions, tomatoes and egg garnish',
    variants: [
      { label: 'Half', price: 1299 },
      { label: 'Full', price: 2499 },
    ],
  },
  {
    id: 'chicken-ginger-handi',
    name: 'Chicken Ginger Handi',
    nameUrdu: 'چکن جنجر ہانڈی',
    category: 'handi',
    description: 'Boneless chicken pieces slow-cooked with aromatic julienned fresh ginger',
    variants: [
      { label: 'Half', price: 1299 },
      { label: 'Full', price: 2499 },
    ],
  },

  // --- DARBAAR SPECIAL ROLLS ---
  {
    id: 'chicken-roll-paratha',
    name: 'Chicken Roll Paratha',
    nameUrdu: 'چکن رول پراٹھا',
    category: 'rolls',
    description: 'Golden flaky paratha wrapped with juicy spiced chicken chunks and onions',
    variants: [
      { label: 'Med', price: 400 },
      { label: 'Large', price: 600 },
    ],
    popular: true,
  },
  {
    id: 'chicken-cheese-roll-paratha',
    name: 'Chicken Cheese Roll Paratha',
    nameUrdu: 'چکن چیز رول پراٹھا',
    category: 'rolls',
    description: 'Flaky paratha rolled with seasoned chicken boti and melted cheddar cheese',
    variants: [
      { label: 'Med', price: 450 },
      { label: 'Large', price: 650 },
    ],
    popular: true,
  },
  {
    id: 'chicken-mayo-roll',
    name: 'Chicken Mayo Roll',
    nameUrdu: 'چکن مایو رول',
    category: 'rolls',
    description: 'Grilled chicken wrapped with signature garlic-infused mayonnaise',
    variants: [
      { label: 'Med', price: 420 },
      { label: 'Large', price: 620 },
    ],
  },
  {
    id: 'chicken-cheese-mayo-roll',
    name: 'Chicken Cheese Mayo Roll',
    nameUrdu: 'چکن چیز مایو رول',
    category: 'rolls',
    description: 'Double indulgence with generous cheddar cheese and rich garlic mayo sauce',
    variants: [
      { label: 'Med', price: 470 },
      { label: 'Large', price: 670 },
    ],
    popular: true,
  },
  {
    id: 'chicken-malai-roll-paratha',
    name: 'Chicken Malai Roll Paratha',
    nameUrdu: 'چکن ملائی رول پراٹھا',
    category: 'rolls',
    description: 'Ultra tender malai boti rolled in crispy paratha with mint raita',
    variants: [
      { label: 'Med', price: 400 },
      { label: 'Large', price: 600 },
    ],
  },
  {
    id: 'chicken-malai-cheese-roll-paratha',
    name: 'Chicken Malai Cheese Roll Paratha',
    nameUrdu: 'چکن ملائی چیز رول پراٹھا',
    category: 'rolls',
    description: 'Creamy malai boti paired with melted cheese in hot flaky paratha',
    variants: [
      { label: 'Med', price: 450 },
      { label: 'Large', price: 650 },
    ],
  },
  {
    id: 'chicken-malai-mayo-roll',
    name: 'Chicken Malai Mayo Roll',
    nameUrdu: 'چکن ملائی مایو رول',
    category: 'rolls',
    description: 'Succulent malai boti wrapped with velvety garlic cream sauce',
    variants: [
      { label: 'Med', price: 420 },
      { label: 'Large', price: 620 },
    ],
  },
  {
    id: 'chicken-malai-cheese-mayo-roll',
    name: 'Chicken Malai Cheese Mayo Roll',
    nameUrdu: 'چکن ملائی چیز مایو رول',
    category: 'rolls',
    description: 'The ultimate royal roll with malai boti, cheddar cheese, and signature mayo',
    variants: [
      { label: 'Med', price: 470 },
      { label: 'Large', price: 670 },
    ],
    popular: true,
  },
  {
    id: 'chicken-seekh-kabab-roll',
    name: 'Chicken Seekh Kabab Roll',
    nameUrdu: 'چکن سیخ کباب رول',
    category: 'rolls',
    description: 'Fresh chargrilled seekh kabab wrapped with sliced onions and tangy chutney',
    variants: [
      { label: 'Med', price: 400 },
      { label: 'Large', price: 600 },
    ],
  },
  {
    id: 'chicken-crispy-roll',
    name: 'Chicken Crispy Roll',
    nameUrdu: 'چکن کرسپی رول',
    category: 'rolls',
    description: 'Crunchy golden chicken tenders wrapped in warm paratha',
    variants: [
      { label: 'Med', price: 400 },
      { label: 'Large', price: 600 },
    ],
  },
  {
    id: 'chicken-crispy-mayo-roll',
    name: 'Chicken Crispy Mayo Roll',
    nameUrdu: 'چکن کرسپی مایو رول',
    category: 'rolls',
    description: 'Crunchy fried chicken strips drenched in garlic mayo sauce and folded in paratha',
    variants: [
      { label: 'Med', price: 420 },
      { label: 'Large', price: 620 },
    ],
  },

  // --- SOMETHING LIGHT ---
  {
    id: 'chicken-qourma',
    name: 'Chicken Qourma',
    nameUrdu: 'چکن قورمہ',
    category: 'light',
    description: 'Aromatic traditional spiced shahi qourma with caramelized onion gravy',
    variants: [
      { label: 'Half', price: 180 },
      { label: 'Full', price: 299 },
    ],
  },
  {
    id: 'murgh-channa',
    name: 'Murgh Channa',
    nameUrdu: 'مرغ چنا',
    category: 'light',
    description: 'Lahori style tender chickpeas stewed with chicken in fragrant spices',
    variants: [
      { label: 'Half', price: 200 },
      { label: 'Full', price: 250 },
    ],
    popular: true,
  },
  {
    id: 'anda-channa',
    name: 'Anda Channa',
    nameUrdu: 'انڈا چنا',
    category: 'light',
    description: 'Slow-cooked spiced chickpeas paired with boiled egg',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 200 },
    ],
  },
  {
    id: 'daal-maash',
    name: 'Daal Maash',
    nameUrdu: 'دال ماش فرائی',
    category: 'light',
    description: 'Pan-fried white lentils tempered with cumin, whole red chilies and ginger',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 200 },
    ],
  },
  {
    id: 'mix-sabzi',
    name: 'Mix Sabzi',
    nameUrdu: 'مکس سبزی',
    category: 'light',
    description: 'Fresh seasonal vegetables cooked homestyle with ground spices',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 200 },
    ],
  },
  {
    id: 'daal-chawal',
    name: 'Daal Chawal',
    nameUrdu: 'دال چاول',
    category: 'light',
    description: 'Comforting yellow lentil curry served with fragrant boiled basmati rice',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 250 },
    ],
  },
  {
    id: 'channa-chawal',
    name: 'Channa Chawal',
    nameUrdu: 'چنا چاول',
    category: 'light',
    description: 'Spiced chickpea curry served over fluffy steamed basmati rice',
    variants: [
      { label: 'Half', price: 150 },
      { label: 'Full', price: 250 },
    ],
  },

  // --- PARATHA ---
  {
    id: 'laccha-paratha',
    name: 'Laccha Paratha',
    nameUrdu: 'لچھا پراٹھا',
    category: 'paratha',
    description: 'Multi-layered crispy flaky paratha fried with desi ghee',
    price: 80,
    popular: true,
  },
  {
    id: 'poori-paratha',
    name: 'Poori Paratha',
    nameUrdu: 'پوری پراٹھا',
    category: 'paratha',
    description: 'Crispy deep-fried light puffy golden paratha',
    price: 100,
  },
  {
    id: 'sulemani-paratha',
    name: 'Sulemani Paratha',
    nameUrdu: 'سلیمانی پراٹھا',
    category: 'paratha',
    description: 'Thin delicate layered griddle paratha',
    price: 70,
  },
  {
    id: 'cheese-paratha',
    name: 'Cheese Paratha',
    nameUrdu: 'چیز پراٹھا',
    category: 'paratha',
    description: 'Stuffed with gooey melted mozzarella and cheddar cheese',
    price: 250,
  },
  {
    id: 'aloo-paratha',
    name: 'Aloo Paratha',
    nameUrdu: 'آلو پراٹھا',
    category: 'paratha',
    description: 'Classic flatbread stuffed with spiced crushed potato filling',
    price: 200,
  },
  {
    id: 'aloo-cheese-paratha',
    name: 'Aloo Cheese Paratha',
    nameUrdu: 'آلو چیز پراٹھا',
    category: 'paratha',
    description: 'Spiced potato mash stuffed with generous melted cheddar',
    price: 200,
  },
  {
    id: 'chicken-paratha',
    name: 'Chicken Paratha',
    nameUrdu: 'چکن پراٹھا',
    category: 'paratha',
    description: 'Stuffed generously with seasoned minced chicken and green herbs',
    price: 360,
  },
  {
    id: 'chicken-cheese-paratha',
    name: 'Chicken Cheese Paratha',
    nameUrdu: 'چکن چیز پراٹھا',
    category: 'paratha',
    description: 'Warm crispy paratha stuffed with seasoned chicken and cheese',
    price: 260,
    popular: true,
  },
  {
    id: 'malai-paratha',
    name: 'Malai Paratha',
    nameUrdu: 'ملائی پراٹھا',
    category: 'paratha',
    description: 'Rich flaky paratha prepared with fresh dairy cream',
    price: 200,
  },
  {
    id: 'anda-paratha',
    name: 'Anda Paratha',
    nameUrdu: 'انڈا پراٹھا',
    category: 'paratha',
    description: 'Golden paratha topped and fried with spiced egg omelette layer',
    price: 130,
  },

  // --- COLD BEVERAGES ---
  {
    id: 'water-500ml',
    name: 'Water (500ml)',
    nameUrdu: 'منرل واٹر (۵۰۰ ملی لٹر)',
    category: 'cold-drinks',
    description: 'Pure bottled mineral water',
    price: 70,
  },
  {
    id: 'water-1-5l',
    name: 'Water (1.5L)',
    nameUrdu: 'منرل واٹر (۱.۵ لٹر)',
    category: 'cold-drinks',
    description: 'Large pure mineral water bottle',
    price: 140,
  },
  {
    id: 'cold-drink-350ml',
    name: 'Cold Drink (350ml)',
    nameUrdu: 'کولڈ ڈرنک (۳۵۰ ملی لٹر)',
    category: 'cold-drinks',
    description: 'Chilled soft drink bottle (Coke, Sprite, Fanta, Dew)',
    price: 130,
  },
  {
    id: 'cold-drink-500ml',
    name: 'Cold Drink (500ml)',
    nameUrdu: 'کولڈ ڈرنک (۵۰۰ ملی لٹر)',
    category: 'cold-drinks',
    description: 'Chilled regular bottle',
    price: 190,
  },
  {
    id: 'cold-drink-1-5l',
    name: 'Cold Drink (1.5L)',
    nameUrdu: 'کولڈ ڈرنک (۱.۵ لٹر)',
    category: 'cold-drinks',
    description: 'Family size chilled soft drink bottle',
    price: 230,
  },

  // --- HOT BEVERAGES ---
  {
    id: 'chai',
    name: 'Chai',
    nameUrdu: 'کڑک چائے',
    category: 'hot-drinks',
    description: 'Strong authentic spiced milk tea brewed with cardamom',
    price: 80,
  },
  {
    id: 'darbari-chai',
    name: 'Darbari Chai',
    nameUrdu: 'درباری خاص چائے',
    category: 'hot-drinks',
    description: 'Our royal signature creamy slow-brewed tea with saffron and crushed nuts',
    price: 100,
    popular: true,
  },
  {
    id: 'gud-chai',
    name: 'Gud Chai',
    nameUrdu: 'گڑ والی چائے',
    category: 'hot-drinks',
    description: 'Traditional organic jaggery infused steaming milk tea',
    price: 110,
  },
  {
    id: 'kahwa',
    name: 'Kahwa',
    nameUrdu: 'سبز قہوہ',
    category: 'hot-drinks',
    description: 'Fragrant green tea brewed with cardamom, cinnamon and lemon twist',
    price: 80,
  },

  // --- SIDES ---
  {
    id: 'raita',
    name: 'Raita',
    nameUrdu: 'زیرہ و پودینہ رائتہ',
    category: 'sides',
    description: 'Fresh whisked yogurt with crushed mint, coriander and roasted cumin',
    price: 60,
  },
  {
    id: 'salad',
    name: 'Fresh Salad',
    nameUrdu: 'تازہ سلاد',
    category: 'sides',
    description: 'Crisp seasonal sliced cucumbers, tomatoes, onions, and lemon',
    price: 80,
  },
  {
    id: 'naan',
    name: 'Tandoori Naan',
    nameUrdu: 'تندوری نان',
    category: 'sides',
    description: 'Soft tandoori leavened flatbread freshly baked in earthen oven',
    price: 40,
  },
  {
    id: 'roti',
    name: 'Tandoori Roti',
    nameUrdu: 'تندوری روٹی',
    category: 'sides',
    description: 'Whole wheat tandoori flatbread',
    price: 35,
  },
  {
    id: 'chapati',
    name: 'Ghar Ki Chapati',
    nameUrdu: 'گھر کی چپاتی',
    category: 'sides',
    description: 'Light homestyle whole wheat tawa chapati',
    price: 30,
  },
];

export const RESTAURANT_INFO = {
  name: 'The Darbaar',
  nameUrdu: 'دربار',
  tagline: 'دیسی ذائقہ ، شاہی انداز',
  subTagline: 'Traditional Flavors, Modern Experience · A Taste of Home',
  phone: '0333 1117788',
  phoneFormatted: '+92 333 111 77 88',
  phoneWhatsappRaw: '923331117788',
  address: 'The Darbaar Restaurant, Main Commercial Hub',
  mapsLink: 'https://maps.app.goo.gl/xiAeqX31KW4g4Sxp9',
  timings: 'Daily 12:00 PM – 02:00 AM',
  deliveryTime: '30 - 45 Mins',
  minimumOrder: 400,
  deliveryFee: 150,
  freeDeliveryThreshold: 2000,
};
