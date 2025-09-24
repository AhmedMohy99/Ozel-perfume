/* products.js
This file holds the product catalog for the Ozel Perfume Shop. It defines all perfumes as a JavaScript array.
Each product is an object with these fields:
- id: Unique integer (increment for new items; used for cart/wishlist).
- name: Product name (string, e.g., "Midnight Oud Reserve").
- price: Price in USD (number, e.g., 129.99).
- image: Image URL (string; perfume-related Unsplash placeholders—replace with your uploads for real product photos).
- category: Filter category (string; options: 'woody', 'floral', 'fresh', 'citrus', 'gourmand', 'spicy').
- description: Brief description (string, 1-2 sentences highlighting notes for engagement).
- rating: Star rating (number, 1-5; e.g., 4.7—display as stars in UI).
- stock: Available units (number, e.g., 50; for cart/out-of-stock checks).

To add a new product:
1. Copy an existing object (e.g., from Woody section).
2. Increment the id (e.g., 31).
3. Customize name, price, image (use perfume bottle photos), category, etc.
4. Add to the appropriate category group (or end of array).
5. Ensure category matches filter buttons in index.html.
6. Commit to GitHub—Vercel auto-deploys in ~1 min.

Tips:
- Images: All are related to perfumes (bottles, essences, luxury setups from Unsplash). Test URLs in browser.
- Total Products: 30 (diverse for a full shop; heavy woody focus).
- SEO/UI: Descriptions include scent notes for better search/filtering.
- Last Updated: 2023-10-02 (expand as needed).

Example new product (add to Spicy):
{
  id: 31,
  name: "Your Custom Spice",
  price: 105.00,
  image: "https://images.unsplash.com/photo-your-custom?auto=format&fit=crop&w=300&q=80",
  category: "spicy",
  description: "Custom spicy blend with ginger and pepper for bold energy.",
  rating: 4.6,
  stock: 40
}
*/

const products = [
  // Woody Category (10 items - deep, sophisticated scents; premium wood/amber/oud themes)
  {
    id: 1,
    name: "Ozel Noir",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1598515213698-248d7f0b9e0d?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Bold oud and amber in a sleek black bottle for mysterious evenings.",
    rating: 4.9,
    stock: 45
  },
  {
    id: 2,
    name: "Cedarwood Legacy",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Sandalwood and vetiver essence in a wooden-capped vial for timeless depth.",
    rating: 4.8,
    stock: 60
  },
  {
    id: 3,
    name: "Oak Moss Enigma",
    price: 115.00,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Earthy oakmoss and patchouli in a forest-green bottle for enigmatic allure.",
    rating: 4.7,
    stock: 55
  },
  {
    id: 4,
    name: "Sandalwood Whisper",
    price: 95.50,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Warm sandalwood with amber hints in a minimalist glass atomizer.",
    rating: 4.9,
    stock: 70
  },
  {
    id: 5,
    name: "Teakwood Reserve",
    price: 142.00,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Rich teakwood and leather in a leather-bound bottle for bold masculinity.",
    rating: 4.6,
    stock: 40
  },
  {
    id: 6,
    name: "Ebony Essence",
    price: 135.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Dark ebony infused with vanilla in an ebony-wood inspired design.",
    rating: 4.8,
    stock: 50
  },
  {
    id: 7,
    name: "Midnight Oud Reserve",
    price: 155.00,
    image: "https://images.unsplash.com/photo-1585386900547-7fa8a5c7a5d3?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Intense oud and rosewood in a midnight-blue crystal flacon.",
    rating: 4.9,
    stock: 35
  },
  {
    id: 8,
    name: "Birchwood Nocturne",
    price: 108.75,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Smoky birch with spices in a frosted glass bottle evoking fireside warmth.",
    rating: 4.7,
    stock: 65
  },
  {
    id: 9,
    name: "Vetiver Veil",
    price: 132.00,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Pure vetiver roots with earthy base in a textured earth-tone vial.",
    rating: 4.8,
    stock: 48
  },
  {
    id: 10,
    name: "Amberwood Signature",
    price: 148.50,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "woody",
    description: "Amber and rare woods in a gold-accented luxury atomizer.",
    rating: 5.0,
    stock: 30
  },

  // Floral Category (5 items - romantic, petal-inspired bottles and arrangements)
  {
    id: 11,
    name: "Ozel Bloom",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1615796156955-e6b3e4d5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Rose and jasmine bouquet in a pink-tinted glass spray bottle.",
    rating: 4.7,
    stock: 75
  },
  {
    id: 12,
    name: "Rose Eternal",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Timeless rose petals with lily in a vintage rose-gold flacon.",
    rating: 4.8,
    stock: 80
  },
  {
    id: 13,
    name: "Lily Bloom",
    price: 76.50,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Fresh lily and peony in a delicate white porcelain-inspired bottle.",
    rating: 4.5,
    stock: 90
  },
  {
    id: 14,
    name: "Jasmine Nocturne",
    price: 102.00,
    image: "https://images.unsplash.com/photo-1598515213698-248d7f0b9e0d?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Exotic jasmine with night-blooming flowers in a pearlized vial.",
    rating: 4.7,
    stock: 55
  },
  {
    id: 15,
    name: "Orchid Dream",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1615796156955-e6b3e4d5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "floral",
    description: "Tropical orchids and ylang-ylang in an iridescent orchid-shaped bottle.",
    rating: 4.8,
    stock: 60
  },

  // Fresh Category (5 items - clean, aquatic bottles with light, airy designs)
  {
    id: 16,
    name: "Fresh Morning",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1612460137520-9d5a1b2f3f1e?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Aquatic greens and mint in a clear, wave-patterned atomizer.",
    rating: 4.6,
    stock: 100
  },
  {
    id: 17,
    name: "Ocean Breeze",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Marine notes with sea salt in a blue-tinted oceanic bottle.",
    rating: 4.4,
    stock: 95
  },
  {
    id: 18,
    name: "Mint Horizon",
    price: 82.25,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Cool mint and green tea in a frosted mint-green vial.",
    rating: 4.5,
    stock: 85
  },
  {
    id: 19,
    name: "Dewdrop Dawn",
    price: 78.00,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Dewy cucumber and aloe in a dewdrop-embossed clear bottle.",
    rating: 4.6,
    stock: 70
  },
  {
    id: 20,
    name: "Breeze Elixir",
    price: 92.50,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=300&q=80",
    category: "fresh",
    description: "Light linen and fresh air in a airy, translucent sprayer.",
    rating: 4.7,
    stock: 65
  },

  // Citrus Category (4 items - vibrant, zesty bottles with fruit/orange motifs)
  {
    id: 21,
    name: "Citrus Splash",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1556228574-6b8e9b3b7c3e?auto=format&fit=crop&w=300&q=80",
    category: "citrus",
    description: "Zesty lemon and bergamot in a sunny yellow citrus-shaped bottle.",
    rating: 4.5,
    stock: 110
  },
  {
    id: 22,
    name: "Orange Grove",
    price: 71.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?auto=format&fit=crop&w=300&q=80",
    category: "citrus",
    description: "Juicy orange blossom and mandarin in an orange-hued glass flacon.",
    rating: 4.7,
    stock: 105
  },
  {
    id: 23,
    name: "Lemon Zest",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1587014616149-5d8410a5a5e5?auto=format&fit=crop&w=300&q=80",
    category: "citrus",
    description: "Bright lemon peel with grapefruit in a zesty, textured vial.",
    rating: 4.4,
    stock: 120
  },
  {
    id: 24,
    name: "Bergamot Burst",
    price: 88.00,
    image: "https://images.unsplash.com/photo-155
