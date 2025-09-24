/* products.js
This file holds the product catalog for the Ozel Perfume Shop. It defines all perfumes as a JavaScript array.
Each product is an object with these required fields:
- id: Unique integer (increment for new items; used for cart/wishlist).
- name: Product name (string, e.g., "Cedarwood Legacy").
- price: Price in USD (number, e.g., 129.99).
- image: Image URL (string; use Unsplash for free placeholders or upload your own to ImgBB/GitHub).
- category: Filter category (string; options: 'woody', 'floral', 'fresh', 'citrus', 'gourmand', 'spicy').
- description: Brief description (string, 1-2 sentences for SEO/UI).
- rating: Star rating (number, 1-5; e.g., 4.7 for display as stars).

To add a new product:
1. Copy an existing object.
2. Increment the id.
3. Fill in details (keep category consistent with filters in index.html).
4. Add to the end of the array (before the closing ]).
5. Commit to GitHub—site updates automatically on Vercel.

Example new product:
{
  id: 16,
  name: "Custom Woody Scent",
  price: 110.00,
  image: "https://your-custom-image-url.jpg",
  category: "woody",
  description: "A personalized woody fragrance with custom notes.",
  rating: 4.8
}

Current total: 15 products (heavy focus on woody for variety).
Last updated: [Insert date, e.g., 2023-10-01]
*/

const products = [
  // Woody Category (6 items - premium, deep scents for sophistication)
  {
    id: 1,
    name: "Ozel Noir",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1598515213698-248d7f0b9e0d?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "A bold fragrance with deep notes of oud and amber for timeless elegance.",
    rating: 4.9
  },
  {
    id: 2,
    name: "Cedarwood Legacy",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Deep woody notes with sandalwood and vetiver, ideal for evening sophistication.",
    rating: 4.8
  },
  {
    id: 3,
    name: "Oak Moss Enigma",
    price: 115.00,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Earthy oakmoss blended with patchouli for a mysterious, forest-inspired aura.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Sandalwood Whisper",
    price: 95.50,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Warm sandalwood with subtle amber hints, perfect for intimate occasions.",
    rating: 4.9
  },
  {
    id: 5,
    name: "Teakwood Reserve",
    price: 142.00,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Rich teakwood and leather accords for a bold, masculine presence.",
    rating: 4.6
  },
  {
    id: 6,
    name: "Ebony Essence",
    price: 135.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Dark ebony wood infused with vanilla for an exotic, long-lasting depth.",
    rating: 4.8
  },

  // Floral Category (3 items - romantic and feminine scents)
  {
    id: 7,
    name: "Ozel Bloom",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1615796156955-e6b3e4d5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Floral and fresh bouquet of rose and jasmine, perfect for everyday allure.",
    rating: 4.7
  },
  {
    id: 8,
    name: "Rose Eternal",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Classic rose petals with jasmine for romantic, feminine elegance.",
    rating: 4.8
  },
  {
    id: 9,
    name: "Lily Bloom",
    price: 76.50,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Fresh lily of the valley with peony for a light, springtime charm.",
    rating: 4.5
  },

  // Fresh Category (2 items - clean and invigorating)
  {
    id: 10,
    name: "Fresh Morning",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1612460137520-9d5a1b2f3f1e?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Aquatic and airy notes with green tea for daily freshness and vitality.",
    rating: 4.6
  },
  {
    id: 11,
    name: "Ocean Breeze",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Crisp marine accords with citrus for a refreshing, clean escape.",
    rating: 4.4
  },

  // Citrus Category (2 items - uplifting and energetic)
  {
    id: 12,
    name: "Citrus Splash",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "citrus",
    description: "Bright lemon and bergamot top notes with a sparkling drydown.",
    rating: 4.5
  },
  {
    id: 13,
    name: "Orange Grove",
    price: 71.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "citrus",
    description: "Juicy orange blossom and mandarin for a sunny, Mediterranean vibe.",
    rating: 4.7
  },

  // Gourmand Category (1 item - sweet and indulgent)
  {
    id: 14,
    name: "Vanilla Indulgence",
    price: 98.50,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "gourmand",
    description: "Sweet vanilla and caramel layers for a dessert-like, comforting treat.",
    rating: 4.8
  },

  // Spicy Category (1 item - warm and bold)
  {
    id: 15,
    name: "Cinnamon Fire",
    price: 110.75,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    category: "spicy",
    description: "Warm cinnamon and clove with a spicy edge for confident personalities.",
    rating: 4.6
  }
  // 👉 Add more products here. Follow the format above. Ensure unique IDs and valid categories.
];

// Optional: Export for use in other JS files (e.g., if script.js uses modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}
