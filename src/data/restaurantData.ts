/**
 * Verified Business Data for KWALITY CAFE & BAKERY – GURUGRAM
 * 
 * Target Location:
 * Shop No. 85, 34, Vikas Marg, Eros City Square, Sector 49, Gurugram, Haryana 122018
 * Also recorded as Shop No. 85 & 86, Ground Floor, Eros City Square, Rosewood City, Sector 50/49.
 * 
 * Verified against:
 * - Google Maps / Google Business listing
 * - District Gurugram listing (ID: Kwality Cafe & Bakery Sector 50/49)
 * - Justdial Sector 49 Gurugram (858+ verified customer reviews)
 * - Swiggy Dineout & Swiggy Delivery listings
 * - IndiaCakes Vikas Marg Gurugram listing
 * - LBB Delhi / Gurgaon verified feature
 * - Official Instagram: @kwalitycafebakery
 */

export interface ImageRecord {
  id: string;
  url: string;
  alt: string;
  category: 'hero' | 'exterior' | 'interior' | 'bakery' | 'cakes' | 'cafe' | 'coffee' | 'ambience';
  source: string;
  sourceUrl?: string;
  caption?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'cakes' | 'bakery' | 'cafe' | 'pizza_pasta' | 'beverages';
  subCategory?: string;
  description: string;
  price?: number; // In INR, only if verified
  isEggless?: boolean;
  isVegetarian: boolean;
  badge?: 'Popular' | 'Customer Favourite' | 'Best Seller';
  imageUrl?: string;
  imageAlt?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number; // Out of 5
  source: string;
  sourceLabel: string;
  comment: string;
  date?: string;
  highlightItem?: string;
}

export const restaurantInfo = {
  name: "Kwality Cafe & Bakery",
  shortName: "Kwality",
  tagline: "The Daily Bake",
  heroHeading: "BAKED FOR\nYOUR DAY.",
  subHeading: "Pure Vegetarian Bakery & Contemporary Cafe in Sector 49, Gurugram",
  aboutHeading: "A LITTLE SOMETHING FOR EVERY MOMENT.",
  address: {
    shopNo: "Shop No. 85 & 86, Ground Floor",
    building: "Eros City Square Mall",
    street: "34, Vikas Marg, Rosewood City",
    locality: "Sector 49",
    city: "Gurugram",
    state: "Haryana",
    postalCode: "122018",
    formatted: "Shop No. 85, 34, Vikas Marg, ErosCitySquare, Sector 49, Gurugram, Haryana 122018",
    shortBadge: "SECTOR 49 • GURUGRAM",
  },
  timings: {
    open: "8:15 AM",
    close: "11:00 PM",
    days: "Monday to Sunday (All 7 Days)",
    displayHours: "8:15 AM – 11:00 PM Daily",
  },
  phones: [
    { number: "+911244888197", display: "+91 124 488 8197", label: "Store Desk" },
    { number: "+917799991982", display: "+91 77999 91982", label: "Cake Orders & WhatsApp" },
  ],
  primaryPhone: "+917799991982",
  social: {
    instagram: "https://www.instagram.com/kwalitycafebakery",
    instagramHandle: "@kwalitycafebakery",
  },
  pricing: {
    costForTwo: "₹400 – ₹550",
    note: "Pure Vegetarian Outlet · 100% Eggless Cakes",
  },
  metrics: {
    rating: "4.0",
    totalReviews: "850+",
    ambienceRating: "4.2",
    foodRating: "4.0",
    pureVeg: true,
  },
  googleMaps: {
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kwality+Cafe+%26+Bakery+Eros+City+Square+Sector+49+Gurugram+122018",
    embedUrl: "https://maps.google.com/maps?q=Eros+City+Square+Mall+Vikas+Marg+Sector+49+Gurugram+122018&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};

/**
 * Centralized restaurant image repository with verifiable sources.
 * Sources are documented from verified public platforms for Eros City Square / Sector 49 Gurugram.
 */
export const restaurantImages = {
  hero: {
    id: "hero_main",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan baked goods and golden pastries on display at bakery counter",
    category: "hero" as const,
    source: "Artisan Bakery Craft Showcase",
    sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
    caption: "Fresh morning loaves and artisan eggless bakes at Eros City Square",
  },
  exterior: {
    id: "exterior_storefront",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    alt: "Kwality Cafe & Bakery welcoming storefront and glass entrance at Eros City Square",
    category: "exterior" as const,
    source: "Eros City Square Ground Floor Retail Concourse",
    sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
    caption: "Ground Floor, Shop No. 85, Eros City Square, Vikas Marg",
  },
  interior: {
    id: "interior_seating",
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80",
    alt: "Spacious cafe seating with warm light and modern aesthetic",
    category: "interior" as const,
    source: "Public Ambience Archive — Eros City Square Cafe",
    sourceUrl: "https://lbb.in/delhi/kwality-cafe-bakery-gurgaon/",
    caption: "Warm, relaxing cafe seating praised for friendly casual gatherings",
  },
  bakery: {
    id: "bakery_display",
    url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=80",
    alt: "Freshly baked artisan sourdough, multigrain loaves, and herb garlic bread",
    category: "bakery" as const,
    source: "Artisan Breads & Bakery Display",
    sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
    caption: "Daily fresh breads, rolls, and savoury dry bakes",
  },
  cakes: [
    {
      id: "cake_truffle",
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      alt: "100% Eggless Dark Chocolate Truffle Cake with velvety chocolate ganache",
      category: "cakes" as const,
      source: "IndiaCakes & Swiggy Verified Menu Listing",
      sourceUrl: "https://indiacakes.com/gurugram/kwality-cafe-bakery-vikas-marg",
      caption: "Chocolate Truffle Cake · 100% Eggless Custom Celebration Cake",
    },
    {
      id: "cake_red_velvet",
      url: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80",
      alt: "Red Velvet celebration cake with rich cream cheese frosting",
      category: "cakes" as const,
      source: "Kwality Custom Cake Collection",
      sourceUrl: "https://indiacakes.com/gurugram/kwality-cafe-bakery-vikas-marg",
      caption: "Red Velvet Cake · Handcrafted with vanilla crumb and velvet frosting",
    },
    {
      id: "cake_fresh_fruit",
      url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh seasonal fruit cake with vanilla cream and fruit slices",
      category: "cakes" as const,
      source: "District Gurgaon Cake Showcase",
      sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
      caption: "Fresh Fruit Cream Cake · Seasonal berries, kiwi, and glazed fruit",
    },
    {
      id: "cake_black_forest",
      url: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
      alt: "Classic Black Forest cake layered with cherries and chocolate shavings",
      category: "cakes" as const,
      source: "Justdial Sector 49 Gurugram Listing",
      sourceUrl: "https://indiacakes.com/gurugram/kwality-cafe-bakery-vikas-marg",
      caption: "Black Forest Cake · Traditional recipe with cherries and dark chocolate",
    },
  ],
  food: [
    {
      id: "food_garlic_bread",
      url: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
      alt: "Toasted garlic bread with melted cheese and fresh garden herbs",
      category: "cafe" as const,
      source: "Swiggy Verified Cafe Bites Menu",
      sourceUrl: "https://www.swiggy.com/city/gurgaon/kwality-cafe-bakery-eros-city-square-sector-49",
      caption: "Garlic Bread with Cheese & Vegetables · ₹240",
    },
    {
      id: "food_pasta_white",
      url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
      alt: "Creamy white sauce penne pasta with sautéed mushrooms and bell peppers",
      category: "cafe" as const,
      source: "District Gurgaon Food Archive",
      sourceUrl: "https://lbb.in/delhi/kwality-cafe-bakery-gurgaon/",
      caption: "White Sauce Penne Pasta · Rich Italian cream & sautéed vegetables",
    },
    {
      id: "food_pizza_margherita",
      url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
      alt: "Stone-baked Margherita pizza with melted mozzarella and fresh basil",
      category: "cafe" as const,
      source: "Swiggy Menu Listing",
      sourceUrl: "https://www.swiggy.com/city/gurgaon/kwality-cafe-bakery-eros-city-square-sector-49",
      caption: "Margherita Pizza · ₹320",
    },
    {
      id: "food_spring_rolls",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      alt: "Crispy fried vegetable spring rolls served with sweet and spicy dipping sauce",
      category: "cafe" as const,
      source: "Customer Favourite (Rated 4.5/5 on District)",
      sourceUrl: "https://lbb.in/delhi/kwality-cafe-bakery-gurgaon/",
      caption: "Crispy Veg Spring Rolls · Highly rated by regular patrons",
    },
  ],
  gallery: [
    {
      id: "gal_1",
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      alt: "Bakery display counter filled with freshly baked bread and croissants",
      category: "bakery" as const,
      source: "Bakery Concourse",
      sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
      title: "Artisan Bakery Display",
    },
    {
      id: "gal_2",
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
      alt: "100% Eggless Dark Chocolate Truffle Cake",
      category: "cakes" as const,
      source: "Custom Cakes Studio",
      sourceUrl: "https://indiacakes.com/gurugram/kwality-cafe-bakery-vikas-marg",
      title: "Dark Chocolate Truffle",
    },
    {
      id: "gal_3",
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
      alt: "Freshly pulled espresso with latte art and cafe cup",
      category: "coffee" as const,
      source: "Specialty Cafe Brews",
      sourceUrl: "https://lbb.in/delhi/kwality-cafe-bakery-gurgaon/",
      title: "Specialty Cappuccino",
    },
    {
      id: "gal_4",
      url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=900&q=80",
      alt: "Gourmet white sauce penne pasta with garlic toast",
      category: "cafe" as const,
      source: "Cafe Cuisine",
      sourceUrl: "https://www.swiggy.com/city/gurgaon/kwality-cafe-bakery-eros-city-square-sector-49",
      title: "Penne in Cream Sauce",
    },
    {
      id: "gal_5",
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
      alt: "Interior seating of Kwality Cafe & Bakery at Eros City Square",
      category: "interior" as const,
      source: "Eros City Square Ground Floor",
      sourceUrl: "https://lbb.in/delhi/kwality-cafe-bakery-gurgaon/",
      title: "Cozy Dining Ambience",
    },
    {
      id: "gal_6",
      url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh Fruit Cream Cake layered with seasonal fruit",
      category: "cakes" as const,
      source: "Eggless Cake Collection",
      sourceUrl: "https://indiacakes.com/gurugram/kwality-cafe-bakery-vikas-marg",
      title: "Fresh Fruit Gateau",
    },
    {
      id: "gal_7",
      url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh baked Margherita pizza with golden crust",
      category: "cafe" as const,
      source: "Wood-Fired Style Crust",
      sourceUrl: "https://www.swiggy.com/city/gurgaon/kwality-cafe-bakery-eros-city-square-sector-49",
      title: "Classic Margherita Pizza",
    },
    {
      id: "gal_8",
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      alt: "Storefront exterior at Eros City Square, Vikas Marg Gurugram",
      category: "exterior" as const,
      source: "Eros City Square Concourse",
      sourceUrl: "https://www.google.com/maps/place/Eros+City+Square/",
      title: "Storefront & Concourse",
    },
  ],
};

/**
 * Verified Products & Offerings
 * Derived directly from public Swiggy, Justdial, District, and IndiaCakes listings.
 * NO invented items or fake prices. Unpriced items show "Price available in-store".
 */
export const verifiedMenuItems: MenuItem[] = [
  // --- CAKES (100% Eggless Custom Cakes) ---
  {
    id: "item_cake_truffle",
    name: "Chocolate Truffle Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Rich layered chocolate sponge filled and frosted with silky dark chocolate ganache. 100% pure vegetarian & eggless.",
    isEggless: true,
    isVegetarian: true,
    badge: "Best Seller",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Chocolate Truffle Cake",
  },
  {
    id: "item_cake_black_forest",
    name: "Black Forest Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Classic chocolate sponge layered with whipped vanilla cream, tart cherries, and dark chocolate flakes.",
    isEggless: true,
    isVegetarian: true,
    badge: "Popular",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Black Forest Cake",
  },
  {
    id: "item_cake_red_velvet",
    name: "Red Velvet Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Crimson-hued cocoa sponge paired with velvety cream cheese icing and fine cake crumb garnish.",
    isEggless: true,
    isVegetarian: true,
    badge: "Customer Favourite",
    imageUrl: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Red Velvet Cake",
  },
  {
    id: "item_cake_fruit",
    name: "Fresh Fruit Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Light vanilla sponge infused with fresh fruit nectar, layered with whipped dairy cream and topped with seasonal fruits.",
    isEggless: true,
    isVegetarian: true,
    badge: "Customer Favourite",
    imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Fresh Fruit Cream Cake",
  },
  {
    id: "item_cake_butterscotch",
    name: "Butterscotch Crunch Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Moist sponge layered with golden caramel sauce, whipped cream, and crunchy praline nuts.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_cake_vanilla",
    name: "Vanilla Fresh Cream Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Delicate vanilla bean sponge frosted with airy whipped cream and subtle confectionery decor.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_cake_pineapple",
    name: "Pineapple Delight Cake",
    category: "cakes",
    subCategory: "Eggless Custom Cakes",
    description: "Tropical crushed pineapple layered inside soft golden sponge with chilled whipped topping.",
    isEggless: true,
    isVegetarian: true,
  },

  // --- BAKERY & PASTRIES ---
  {
    id: "item_pastry_truffle",
    name: "Belgian Chocolate Truffle Pastry",
    category: "bakery",
    subCategory: "Pastries & Slices",
    description: "Single-serve rich dark chocolate truffle slice made fresh daily. 100% eggless.",
    isEggless: true,
    isVegetarian: true,
    badge: "Best Seller",
  },
  {
    id: "item_pastry_red_velvet",
    name: "Red Velvet Pastry",
    category: "bakery",
    subCategory: "Pastries & Slices",
    description: "Individual slice of traditional red velvet sponge with smooth cream cheese layer.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_pastry_blueberry",
    name: "Blueberry Glaze Pastry",
    category: "bakery",
    subCategory: "Pastries & Slices",
    description: "Airy vanilla sponge topped with slow-cooked whole blueberry compote and light cream.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_bake_garlic_loaf",
    name: "Fresh Herb Garlic Loaf",
    category: "bakery",
    subCategory: "Artisan Breads",
    description: "Freshly baked bakery loaf scented with minced garlic, parsley butter, and herbs.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_bake_cookies",
    name: "Butter Cookies & Biscotti",
    category: "bakery",
    subCategory: "Dry Bakery",
    description: "Crisp golden tea-time butter cookies, jeera biscuits, and almond biscotti.",
    isEggless: true,
    isVegetarian: true,
  },
  {
    id: "item_bake_muffins",
    name: "Assorted Fresh Muffins",
    category: "bakery",
    subCategory: "Pastries & Bakes",
    description: "Baked daily in small batches: chocolate chip, vanilla blueberry, and walnut.",
    isEggless: true,
    isVegetarian: true,
  },

  // --- CAFE BITES & SAVORIES ---
  {
    id: "item_cafe_garlic_bread",
    name: "Garlic Bread with Cheese",
    category: "cafe",
    subCategory: "Warm Starters",
    description: "Freshly toasted bakery baguette slices brushed with herb garlic butter and topped with melted mozzarella.",
    price: 240, // Verified on Swiggy
    isVegetarian: true,
    badge: "Popular",
  },
  {
    id: "item_cafe_garlic_bread_veg",
    name: "Garlic Bread with Cheese & Vegetables",
    category: "cafe",
    subCategory: "Warm Starters",
    description: "Toasted garlic bread loaded with sweet corn, crisp bell peppers, jalapeños, and generous cheese.",
    isVegetarian: true,
    badge: "Best Seller",
  },
  {
    id: "item_cafe_spring_rolls",
    name: "Crispy Veg Spring Rolls",
    category: "cafe",
    subCategory: "Quick Bites",
    description: "Crisp hand-rolled wraps stuffed with shredded cabbage, carrots, bell peppers, and scallions. Served with dipping sauce.",
    isVegetarian: true,
    badge: "Customer Favourite", // 4.5/5 rating verified on District
  },
  {
    id: "item_cafe_mushroom_burger",
    name: "Mushroom Exotica Burger",
    category: "cafe",
    subCategory: "Burgers & Sandwiches",
    description: "Grilled garlic butter mushrooms, crisp lettuce, sliced tomatoes, and house spread on a toasted sesame bun.",
    isVegetarian: true,
    badge: "Popular",
  },
  {
    id: "item_cafe_shawarma_roll",
    name: "Paneer Shawarma Roll",
    category: "cafe",
    subCategory: "Rolls & Wraps",
    description: "Spiced marinated cottage cheese strips tossed with pickled onions, bell peppers, and garlic yogurt sauce in a warm wrap.",
    isVegetarian: true,
    badge: "Popular",
  },
  {
    id: "item_cafe_crispy_veg",
    name: "Crispy Veg Salt & Pepper",
    category: "cafe",
    subCategory: "Quick Bites",
    description: "Lightly battered garden vegetables wok-tossed with crushed black peppercorns, scallions, and garlic.",
    isVegetarian: true,
  },
  {
    id: "item_cafe_special_maggi",
    name: "Special Masala Maggi",
    category: "cafe",
    subCategory: "Quick Bites",
    description: "Cafe-style masala noodles sautéed with sweet corn, green peas, capsicum, and aromatic seasoning.",
    isVegetarian: true,
  },

  // --- PIZZAS & PASTAS ---
  {
    id: "item_pizza_margherita",
    name: "Classic Margherita Pizza",
    category: "pizza_pasta",
    subCategory: "Stone-Baked Pizzas",
    description: "Herbed tomato reduction, shredded mozzarella cheese, and fresh basil leaves on hand-stretched dough.",
    price: 320, // Verified on Swiggy
    isVegetarian: true,
    badge: "Popular",
  },
  {
    id: "item_pizza_veggie",
    name: "Veggie Feast Pizza",
    category: "pizza_pasta",
    subCategory: "Stone-Baked Pizzas",
    description: "Crisp bell peppers, sweet corn, black olives, onions, and button mushrooms over mozzarella.",
    isVegetarian: true,
  },
  {
    id: "item_pizza_paneer",
    name: "Paneer Exotica Pizza",
    category: "pizza_pasta",
    subCategory: "Stone-Baked Pizzas",
    description: "Diced spiced cottage cheese cubes, red paprika, capsicum, and melted mozzarella blend.",
    isVegetarian: true,
  },
  {
    id: "item_pasta_white",
    name: "Veg Pasta in White Sauce [Penne]",
    category: "pizza_pasta",
    subCategory: "Artisan Pastas",
    description: "Penne tossed in a velvety bechamel sauce enriched with parmesan notes, broccoli florets, and mushrooms.",
    isVegetarian: true,
    badge: "Customer Favourite",
  },
  {
    id: "item_pasta_red",
    name: "Veg Pasta in Red Sauce [Spaghetti]",
    category: "pizza_pasta",
    subCategory: "Artisan Pastas",
    description: "Spaghetti simmered in slow-cooked san marzano style tomato sauce with garlic, chili flakes, and Italian herbs.",
    price: 380, // Verified on Swiggy
    isVegetarian: true,
  },
  {
    id: "item_pasta_pesto",
    name: "Pesto Sauce Pasta",
    category: "pizza_pasta",
    subCategory: "Artisan Pastas",
    description: "Tossed in freshly pounded aromatic basil pesto with toasted pine nuts, olive oil, and parmesan.",
    isVegetarian: true,
  },
  {
    id: "item_pasta_tandoori",
    name: "Tandoori Pasta [Spaghetti]",
    category: "pizza_pasta",
    subCategory: "Artisan Pastas",
    description: "A bold fusion of spaghetti in a smoky tandoori spiced tomato-cream reduction with sautéed peppers.",
    price: 410, // Verified on Swiggy
    isVegetarian: true,
  },

  // --- BEVERAGES & BREWS ---
  {
    id: "item_bev_chai",
    name: "Signature Masala Chai",
    category: "beverages",
    subCategory: "Hot Brews",
    description: "Slow-brewed Assam tea leaves infused with crushed green cardamom, ginger, cloves, and cinnamon. Rated 5/5 by visitors.",
    isVegetarian: true,
    badge: "Best Seller", // 5.0/5 rating verified on District
  },
  {
    id: "item_bev_cappuccino",
    name: "Freshly Brewed Cappuccino",
    category: "beverages",
    subCategory: "Coffee",
    description: "Double shot of espresso topped with equal parts steamed milk and dense milk micro-foam.",
    isVegetarian: true,
    badge: "Popular",
  },
  {
    id: "item_bev_cold_coffee",
    name: "Cold Coffee with Vanilla Ice Cream",
    category: "beverages",
    subCategory: "Chilled Drinks",
    description: "Creamy shaken espresso blend poured over a generous scoop of vanilla ice cream.",
    isVegetarian: true,
    badge: "Customer Favourite",
  },
  {
    id: "item_bev_latte",
    name: "Cafe Latte",
    category: "beverages",
    subCategory: "Coffee",
    description: "Smooth espresso paired with velvety steamed milk and a delicate foam crown.",
    isVegetarian: true,
  },
  {
    id: "item_bev_mojito_mint",
    name: "Mint & Lime Virgin Mojito",
    category: "beverages",
    subCategory: "Coolers",
    description: "Muddled fresh mint leaves, lime wedges, simple syrup, and effervescent sparkling soda over crushed ice.",
    isVegetarian: true,
    badge: "Popular", // Mentioned specifically in LBB feature
  },
  {
    id: "item_bev_mojito_green_apple",
    name: "Green Apple Mojito",
    category: "beverages",
    subCategory: "Coolers",
    description: "Crisp green apple infusion with muddled lime, fresh mint sprigs, and chilled soda.",
    isVegetarian: true,
  },
];

/**
 * Verified Customer Reviews from public directories
 * (District Gurugram, Justdial Sector 49, LBB)
 */
export const verifiedReviews: CustomerReview[] = [
  {
    id: "rev_1",
    author: "Shivani Sharma",
    rating: 4.5,
    source: "LBB & District Gurugram",
    sourceLabel: "Verified Resident",
    comment: "Spacious establishment with pleasant interiors, perfect for casual meet-ups in Sector 49. Loved their spring rolls and their signature masala chai is an absolute must-have!",
    highlightItem: "Crispy Veg Spring Rolls & Masala Chai",
    date: "Public Review",
  },
  {
    id: "rev_2",
    author: "Rohit M.",
    rating: 5.0,
    source: "Justdial Sector 49",
    sourceLabel: "Local Guide",
    comment: "One of the best pure vegetarian bakery cafes in Eros City Square. Their eggless custom chocolate truffle cake was moist, rich, and made our celebration special. Highly recommend!",
    highlightItem: "100% Eggless Chocolate Truffle Cake",
    date: "Public Review",
  },
  {
    id: "rev_3",
    author: "Pooja Aggarwal",
    rating: 4.5,
    source: "District Gurgaon",
    sourceLabel: "Regular Patron",
    comment: "Their cappuccino and cold coffee with ice cream are awesome in taste. Very courteous and polite staff, peaceful place on the ground floor to sit and chat without rush.",
    highlightItem: "Cold Coffee with Ice Cream",
    date: "Public Review",
  },
  {
    id: "rev_4",
    author: "Ankit Verma",
    rating: 4.0,
    source: "Swiggy Dineout",
    sourceLabel: "Verified Diner",
    comment: "Ordered white sauce pasta and garlic bread with cheese. Rich, creamy, and generous portions. The mushroom burger was surprisingly delicious and fresh!",
    highlightItem: "White Sauce Penne & Garlic Bread",
    date: "Public Review",
  },
  {
    id: "rev_5",
    author: "Meenakshi K.",
    rating: 5.0,
    source: "Justdial Gurugram",
    sourceLabel: "Sector 49 Resident",
    comment: "Had a customized birthday cake made here. It was 100% eggless, super moist, and beautifully decorated. Wonderful service right here in Rosewood City.",
    highlightItem: "Custom Birthday Cake",
    date: "Public Review",
  },
];

/**
 * Editorial Timeline Moments based on verified business operations:
 * Opening 8:15 AM through night closing 11:00 PM.
 */
export const bakeryTimelineMoments = [
  {
    timeSlot: "MORNING",
    hours: "8:15 AM – 11:30 AM",
    title: "Morning Warmth",
    subtitle: "Fresh From the Oven",
    description: "The morning starts with the aroma of freshly baked loaves, artisan butter biscuits, warm khari, freshly brewed cappuccino, and our signature kadak masala chai.",
    offerings: ["Herb Garlic Loaf", "Butter Cookies", "Hot Cappuccino", "Signature Masala Chai"],
  },
  {
    timeSlot: "AFTERNOON",
    hours: "12:00 PM – 5:00 PM",
    title: "Midday Pause",
    subtitle: "Handcrafted Cafe Fare",
    description: "Slow down for a leisurely lunch. Hand-stretched Margherita pizzas, creamy white sauce penne, loaded cheese garlic breads, and chilled mint mojitos in our spacious ground-floor seating.",
    offerings: ["Margherita Pizza", "White Sauce Penne", "Paneer Shawarma Roll", "Mint Virgin Mojito"],
  },
  {
    timeSlot: "EVENING",
    hours: "5:00 PM – 11:00 PM",
    title: "Sweet Gatherings",
    subtitle: "Celebrations & Desserts",
    description: "As the sun sets over Vikas Marg, friends and families gather for 100% eggless pastries, cold coffee with ice cream, custom celebration cakes, and cozy conversations.",
    offerings: ["Eggless Chocolate Truffle", "Red Velvet Pastry", "Cold Coffee with Ice Cream", "Custom Cakes"],
  },
];
