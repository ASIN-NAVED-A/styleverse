const products = [
  // 🟣 Featured Dresses
  {
    id: 1,
    name: "Velvet Gown",
    category: "Featured Dresses",
    description: "Elegant velvet evening gown with deep neckline.",
    price: 4999,
    rating: 4.8,
    image: "/images/velvet-gown.jpg"
  },
  {
    id: 31,
    name: "Sequin Dress",
    category: "Featured Dresses",
    description: "Sparkling sequin mini dress for night outs.",
    price: 3999,
    rating: 4.3,
    image: "/images/sequin.jpg"
  },
  {
    id: 2,
    name: "Sequin Party Dress",
    category: "Featured Dresses",
    description: "Sparkling sequin mini dress for night outs.",
    price: 3999,
    rating: 4.3,
    image: "/images/sequin-dress.jpg"
  },
  {
    id: 3,
    name: "Floral Maxi Dress",
    category: "Featured Dresses",
    description: "Flowy maxi dress with pastel floral prints.",
    price: 3499,
    rating: 4.6,
    image: "/images/floral-maxi.jpg"
  },
  {
    id: 4,
    name: "Satin Slip Dress",
    category: "Featured Dresses",
    description: "Minimalist satin slip dress with adjustable straps.",
    price: 2899,
    rating: 4.4,
    image: "/images/satin-slip.jpg"
  },
  {
    id: 5,
    name: "Ruffled Midi Dress",
    category: "Featured Dresses",
    description: "Romantic midi dress with ruffled hem and sleeves.",
    price: 3199,
    rating: 4.5,
    image: "/images/ruffled-midi.jpg"
  },

  // 🔵 Pants
  {
    id: 6,
    name: "Denim Joggers",
    category: "Pants",
    description: "Relaxed-fit joggers with stretch denim.",
    price: 1999,
    rating: 4.2,
    image: "/images/denim-joggers.jpg"
  },
  {
    id: 7,
    name: "Cargo Utility Pants",
    category: "Pants",
    description: "Multi-pocket cargo pants with ankle cuffs.",
    price: 1799,
    rating: 4.1,
    image: "/images/cargo-pants.jpg"
  },
  {
    id: 8,
    name: "High-Waisted Trousers",
    category: "Pants",
    description: "Tailored trousers with pleated front.",
    price: 2499,
    rating: 4.3,
    image: "/images/high-waist-trousers.jpg"
  },
  {
    id: 9,
    name: "Wide-Leg Linen Pants",
    category: "Pants",
    description: "Breathable linen pants with relaxed fit.",
    price: 2299,
    rating: 4.5,
    image: "/images/linen-pants.jpg"
  },
  {
    id: 10,
    name: "Slim Fit Chinos",
    category: "Pants",
    description: "Classic chinos with stretch and tapered leg.",
    price: 1999,
    rating: 4.4,
    image: "/images/slim-chinos.jpg"
  },

  // 🟢 Shirts
  {
    id: 11,
    name: "Cotton Oversized Shirt",
    category: "Shirts",
    description: "Breathable cotton shirt with oversized silhouette.",
    price: 1499,
    rating: 4.5,
    image: "/images/oversized-shirt.jpg"
  },
  {
    id: 12,
    name: "Printed Button-Up",
    category: "Shirts",
    description: "Bold printed shirt with short sleeves.",
    price: 1699,
    rating: 4.2,
    image: "/images/printed-shirt.jpg"
  },
  {
    id: 13,
    name: "Silk Shirt",
    category: "Shirts",
    description: "Luxurious silk  with subtle shine.",
    price: 2799,
    rating: 4.6,
    image: "/images/silk.jpg"
  },
  {
    id: 14,
    name: "Plaid Flannel Shirt",
    category: "Shirts",
    description: "Soft flannel shirt with classic plaid pattern.",
    price: 1599,
    rating: 4.3,
    image: "/images/plaid-flannel.jpg"
  },
  {
    id: 15,
    name: "Lace Detail Top",
    category: "Shirts",
    description: " top with lace inserts and puff sleeves.",
    price: 1899,
    rating: 4.4,
    image: "/images/lace-top.jpg"
  },

  // 🟡 Shoes
  {
    id: 16,
    name: "Chunky Sneakers",
    category: "Shoes",
    description: "Bold sneakers with layered sole and mesh upper.",
    price: 3499,
    rating: 4.6,
    image: "/images/chunky-sneakers.jpg"
  },
  {
    id: 17,
    name: "Strappy Heels",
    category: "Shoes",
    description: "Elegant heels with metallic straps.",
    price: 2999,
    rating: 4.5,
    image: "/images/strappy-heels.jpg"
  },
  {
    id: 18,
    name: "Platform Loafers",
    category: "Shoes",
    description: "Trendy loafers with thick platform sole.",
    price: 3199,
    rating: 4.4,
    image: "/images/platform-loafers.jpg"
  },
  {
    id: 19,
    name: "Ankle Boots",
    category: "Shoes",
    description: "Leather boots with side zip and block heel.",
    price: 3799,
    rating: 4.7,
    image: "/images/ankle-boots.jpg"
  },
  {
    id: 20,
    name: "Slip-On Mules",
    category: "Shoes",
    description: "Minimalist mules with cushioned sole.",
    price: 2699,
    rating: 4.3,
    image: "/images/slipon-mules.jpg"
  },

  // 🧡 Accessories
  {
    id: 21,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    description: "Compact leather bag with gold hardware.",
    price: 2599,
    rating: 4.4,
    image: "/images/crossbody-bag.jpg"
  },
  {
    id: 22,
    name: "Statement Earrings",
    category: "Accessories",
    description: "Bold geometric earrings in gold finish.",
    price: 899,
    rating: 4.6,
    image: "/images/statement-earrings.jpg"
  },
  {
    id: 23,
    name: "Silk Scarf",
    category: "Accessories",
    description: "Printed silk scarf for neck or hair styling.",
    price: 1299,
    rating: 4.5,
    image: "/images/silk-scarf.jpg"
  },
  {
    id: 24,
    name: "Studded Belt",
    category: "Accessories",
    description: "Leather belt with metallic studs and buckle.",
    price: 1499,
    rating: 4.3,
    image: "/images/studded-belt.jpg"
  },
  {
    id: 25,
    name: "Tote Bag",
    category: "Accessories",
    description: "Spacious canvas tote with printed design.",
    price: 1799,
    rating: 4.2,
    image: "/images/tote-bag.jpg"
  },

  // 🔴 Watches
  {
    id: 26,
    name: "Minimalist Watch",
    category: "Watches",
    description: "Sleek analog watch with matte black dial.",
    price: 2999,
    rating: 4.7,
    image: "/images/minimalist-watch.jpg"
  },
  {
    id: 27,
    name: "Rose Gold Watch",
    category: "Watches",
    description: "Elegant rose gold watch with mesh strap.",
    price: 3499,
    rating: 4.6,
    image: "/images/rose-gold-watch.jpg"
  },
  {
    id: 28,
    name: "Chronograph Sport Watch",
    category: "Watches",
    description: "Multi-dial sport watch with water resistance.",
    price: 3999,
    rating: 4.5,
    image: "/images/sport-watch.jpg"
  },
  {
    id: 29,
    name: "Leather Strap Watch",
    category: "Watches",
    description: "Classic watch with brown leather strap.",
    price: 2799,
    rating: 4.4,
    image: "/images/leather-watch.jpg"
  },
  {
    id: 30,
    name: "Digital LED Watch",
    category: "Watches",
    description: "Modern digital watch with LED display.",
    price: 1999,
    rating: 4.3,
    image: "/images/digital-watch.jpg"
  }
];

export default products;