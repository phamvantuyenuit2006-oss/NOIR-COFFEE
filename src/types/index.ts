export type RoastLevel = 'All' | 'Light Roast' | 'Medium Roast' | 'Dark Roast';
export type MenuCategory = 'All' | 'Signatures' | 'Espresso' | 'Iced Coffee' | 'Specialty Cold Brew' | 'Tea & Matchas' | 'Pastries & Brunch';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Espresso' | 'Iced Coffee' | 'Signatures' | 'Specialty Cold Brew' | 'Tea & Matchas' | 'Pastries & Brunch';
  description: string;
  tastingNotes: string;
  price: number;
  priceFormatted: string;
  image: string;
  badge?: 'SIGNATURE' | 'POPULAR' | 'NEW' | 'CHEF PICK' | 'FRESH BAKED';
  temperature?: 'Hot' | 'Iced' | 'Both';
  caffeineLevel?: 'High' | 'Medium' | 'Decaf' | 'None';
  calories?: string;
  originInfo?: string;
  allergens?: string[];
  isPastry?: boolean;
}

export interface CoffeeBean {
  id: string;
  name: string;
  region: string;
  origin: string;
  altitude: string;
  process: string;
  roast: 'Light Roast' | 'Medium Roast' | 'Dark Roast';
  tastingNotes: string[];
  price: number;
  priceFormatted: string;
  weightOptions: string[];
  description: string;
  image: string;
  badge?: string;
  varietal?: string;
  batchNumber?: string;
  roastDate?: string;
  bagsRemaining?: number;
}

export interface DrinkCustomization {
  size: 'Regular (350ml)' | 'Large (480ml)';
  milk: 'Whole Milk' | 'Oat Milk (+15k)' | 'Almond Milk (+15k)' | 'None / Black';
  sweetness: '100% Normal' | '70% Less Sweet' | '30% Light' | '0% No Sugar';
  ice: 'Regular Ice' | 'Less Ice' | 'No Ice' | 'Hot Drink';
  extraShot: boolean;
  notes?: string;
}

export interface BeanCustomization {
  weight: '250g' | '500g' | '1000g (1kg)';
  grind: 'Whole Bean (Hạt nguyên bản)' | 'Espresso (Mịn)' | 'V60 / Pour Over (Vừa)' | 'French Press / Cold Brew (Thô)' | 'Phin Việt Nam (Vừa mịn)';
}

export interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  type: 'drink' | 'bean' | 'pastry';
  unitPrice: number;
  quantity: number;
  image: string;
  customizationSummary: string;
  drinkCustomization?: DrinkCustomization;
  beanCustomization?: BeanCustomization;
}

export interface TableReservation {
  name: string;
  phone: string;
  email: string;
  locationId: string;
  locationName: string;
  date: string;
  time: string;
  guestsCount: number;
  seatingArea: 'Courtyard Garden (Sân vườn giếng trời)' | 'Quiet Workspace (Bàn làm việc yên tĩnh)' | 'Bar Counter (Quầy bar ngắm Barista)' | 'Private Lounge (Phòng họp nhỏ)';
  specialRequests?: string;
}

export interface CafeLocation {
  id: string;
  name: string;
  district: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
  features: string[];
  googleMapsUrl: string;
  status: 'Open Now' | 'Closing Soon';
  openDays: string;
}

export interface SpaceGalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Coffee Bar' | 'Seating' | 'Workspace' | 'Exterior' | 'Night Café' | 'Barista Craft';
  image: string;
  caption: string;
}

export interface JournalPost {
  id: string;
  title: string;
  category: 'Brewing Guide' | 'Origin & Farm' | 'Lifestyle & Rituals' | 'Culture';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  favoriteOrder: string;
  verified: boolean;
  date: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'info' | 'warning';
}

export interface BrewGuide {
  id: string;
  name: string;
  ratio: string;
  waterTemp: string;
  grindSize: string;
  brewTime: string;
  steps: string[];
}
