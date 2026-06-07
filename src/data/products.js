/**
 * Rated — Local Product Catalog
 * Streetwear, graphic tees, outerwear & accessories.
 * All images: Unsplash product/flat-lay shots with clean backgrounds.
 */

export const PRODUCTS = [
  // ── GRAPHIC TEES ──────────────────────────────────────────
  {
    id: 1,
    title: "Oversized Chaos Tee",
    price: 34.99,
    category: "graphic tees",
    description: "Heavy 280gsm cotton drop-shoulder fit. Screen-printed front graphic. Washed once for that lived-in feel. Pre-washed so it won't shrink on you.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.8, count: 312 },
  },
  {
    id: 2,
    title: "Retro Block Print Tee",
    price: 29.99,
    category: "graphic tees",
    description: "Vintage-feel block print on a boxy fit. 100% organic cotton. Garment-dyed in sunset orange. Size up for a true oversized look.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.6, count: 218 },
  },
  {
    id: 3,
    title: "Drop Shoulder Street Tee",
    price: 27.00,
    category: "graphic tees",
    description: "Extended hem, boxy silhouette, heavyweight jersey. The tee you reach for when nothing else feels right.",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.5, count: 185 },
  },
  {
    id: 4,
    title: "Bold Typography Tee",
    price: 32.00,
    category: "graphic tees",
    description: "Chest-hit slogan print in cracked ink for that worn look. Relaxed fit, ribbed collar, double-stitched hem.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.7, count: 267 },
  },

  // ── HOODIES & OUTERWEAR ────────────────────────────────────
  {
    id: 5,
    title: "Heavyweight Pullover Hoodie",
    price: 74.99,
    category: "hoodies",
    description: "500gsm French terry. Kangaroo pocket with hidden zip. Brushed fleece interior. The hoodie that outlasts every trend.",
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.9, count: 524 },
  },
  {
    id: 6,
    title: "Acid Wash Zip-Up Hoodie",
    price: 79.00,
    category: "hoodies",
    description: "Garment-dyed acid wash. Full-length metal zip. Drawstring hood. No two are exactly alike — yours is one of a kind.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.7, count: 389 },
  },
  {
    id: 7,
    title: "Coach Jacket — Cream",
    price: 89.00,
    category: "hoodies",
    description: "Lightweight nylon shell, snap buttons, elastic cuffs. Camp collar. That clean, understated flex.",
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.6, count: 201 },
  },
  {
    id: 8,
    title: "Fleece Quarter-Zip",
    price: 64.00,
    category: "hoodies",
    description: "Polar fleece in a relaxed boxy cut. Quarter-zip collar, dropped shoulders, rib-knit cuffs. Soft. Very soft.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.5, count: 156 },
  },

  // ── BOTTOMS ────────────────────────────────────────────────
  {
    id: 9,
    title: "Baggy Cargo Pants",
    price: 69.00,
    category: "bottoms",
    description: "Six-pocket cargo silhouette. Relaxed tapered leg. Ripstop nylon fabric. Elastic waistband with drawstring. Functional.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.8, count: 431 },
  },
  {
    id: 10,
    title: "Wide Leg Track Pants",
    price: 54.99,
    category: "bottoms",
    description: "Tricot weave, contrast side stripe, elastic waistband. That 90s energy done right. Runs wide — take your usual size.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.6, count: 298 },
  },
  {
    id: 11,
    title: "Painter Shorts — Washed Black",
    price: 45.00,
    category: "bottoms",
    description: "Mid-thigh length. Hammer loop, patch pockets, painter-style leg pocket. Garment-washed for instant feel.",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.4, count: 172 },
  },

  // ── ACCESSORIES ────────────────────────────────────────────
  {
    id: 12,
    title: "5-Panel Snap-Back Cap",
    price: 32.00,
    category: "accessories",
    description: "Structured 5-panel, flat brim, adjustable snap-back. Woven patch logo. One size fits most. Wear it forward, wear it back.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.7, count: 347 },
  },
  {
    id: 13,
    title: "Logo Bucket Hat",
    price: 28.00,
    category: "accessories",
    description: "Reversible 100% cotton twill. Embroidered eyelet. Worn in or fresh, it goes with everything.",
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.5, count: 289 },
  },
  {
    id: 14,
    title: "Utility Tote — Canvas",
    price: 36.00,
    category: "accessories",
    description: "14oz heavyweight canvas. Interior zip pocket, external slip pocket. Reinforced bottom. Printed slogan. Carry everything.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.6, count: 203 },
  },
  {
    id: 15,
    title: "Braided Cord Bracelet Set",
    price: 18.00,
    category: "accessories",
    description: "Set of 3 adjustable cord bracelets. Wax-coated cotton. Mix and stack. Add the texture your fit needs.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.3, count: 164 },
  },
  {
    id: 16,
    title: "Sling Crossbody Bag",
    price: 48.00,
    category: "accessories",
    description: "Adjustable strap, two-way zip, padded back panel. 7L capacity. Takes a beating and still looks clean.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    rating: { rate: 4.7, count: 312 },
  },
];

export const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

export const getProductById = (id) =>
  PRODUCTS.find(p => p.id === parseInt(id, 10)) || null;

export const getProducts = (category = null) =>
  category ? PRODUCTS.filter(p => p.category === category) : PRODUCTS;
