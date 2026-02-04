/* ============================================
   OBSIDIAN - Product Inventory Database
   ============================================ */

const productInventory = [
  // Living Room Collection
  {
    id: 'LIV-001',
    name: 'The Vanta Sectional',
    category: 'living',
    price: 4500000,
    image: '/images/sofa-vanta.jpg',
    status: 'In Stock',
    desc: 'Italian leather with memory foam seating and modular design.'
  },
  {
    id: 'LIV-002',
    name: 'Ethereal Low-Profile Sectional',
    category: 'living',
    price: 3200000,
    image: '/images/sofa-ethereal.jpg',
    status: 'In Stock',
    desc: 'Minimalist design with deep seating comfort.'
  },
  {
    id: 'LIV-003',
    name: 'Cloud 7 Lounge Chair',
    category: 'living',
    price: 1800000,
    image: '/images/chair-cloud.jpg',
    status: 'Pre-Order',
    desc: 'Luxurious Danish-inspired lounge with silk upholstery.'
  },
  {
    id: 'LIV-004',
    name: 'Obsidian Coffee Table',
    category: 'living',
    price: 950000,
    image: '/images/table-obsidian.jpg',
    status: 'In Stock',
    desc: 'Black marble top with brushed brass base.'
  },
  {
    id: 'LIV-005',
    name: 'The Sanctuary Sofa',
    category: 'living',
    price: 5200000,
    image: '/images/sofa-sanctuary.jpg',
    status: 'In Stock',
    desc: 'Premium down-filled sofa with Belgian linen.'
  },
  {
    id: 'LIV-006',
    name: 'Essence Side Table',
    category: 'living',
    price: 680000,
    image: '/images/table-essence.jpg',
    status: 'In Stock',
    desc: 'Walnut wood with metal accents.'
  },

  // Dining Collection
  {
    id: 'DIN-001',
    name: 'The Atrium Dining Table',
    category: 'dining',
    price: 2800000,
    image: '/images/table-atrium.jpg',
    status: 'In Stock',
    desc: 'Expandable oak table with seating for 8-12.'
  },
  {
    id: 'DIN-002',
    name: 'Noir Dining Chairs (Set of 4)',
    category: 'dining',
    price: 1600000,
    image: '/images/chair-noir.jpg',
    status: 'In Stock',
    desc: 'Upholstered in premium Italian fabric.'
  },
  {
    id: 'DIN-003',
    name: 'Gallery Pendant Light',
    category: 'dining',
    price: 420000,
    image: '/images/light-gallery.jpg',
    status: 'In Stock',
    desc: 'Brass and glass modern chandelier.'
  },
  {
    id: 'DIN-004',
    name: 'Marble Bar Counter',
    category: 'dining',
    price: 3200000,
    image: '/images/counter-marble.jpg',
    status: 'Pre-Order',
    desc: 'Luxury Calacatta marble with brass railing.'
  },
  {
    id: 'DIN-005',
    name: 'Windsor Credenza',
    category: 'dining',
    price: 2200000,
    image: '/images/credenza-windsor.jpg',
    status: 'In Stock',
    desc: 'Teak wood storage with sliding doors.'
  },
  {
    id: 'DIN-006',
    name: 'Crystal Glassware Set',
    category: 'dining',
    price: 480000,
    image: '/images/glasses-crystal.jpg',
    status: 'Sold Out',
    desc: 'Bohemian crystal glasses set of 6.'
  },

  // Bedroom Collection
  {
    id: 'BED-001',
    name: 'The Reverie King Bed',
    category: 'bedroom',
    price: 3800000,
    image: '/images/bed-reverie.jpg',
    status: 'In Stock',
    desc: 'Upholstered frame with integrated storage.'
  },
  {
    id: 'BED-002',
    name: 'Whisper Nightstand',
    category: 'bedroom',
    price: 580000,
    image: '/images/nightstand-whisper.jpg',
    status: 'In Stock',
    desc: 'Walnut wood with soft-close drawers.'
  },
  {
    id: 'BED-003',
    name: 'Luxury Bedding Collection',
    category: 'bedroom',
    price: 420000,
    image: '/images/bedding-luxury.jpg',
    status: 'In Stock',
    desc: '1000 thread count Egyptian cotton.'
  },
  {
    id: 'BED-004',
    name: 'Zen Meditation Lounge',
    category: 'bedroom',
    price: 1900000,
    image: '/images/lounge-zen.jpg',
    status: 'In Stock',
    desc: 'Low-profile bedroom seating.'
  },
  {
    id: 'BED-005',
    name: 'The Slumber Mattress',
    category: 'bedroom',
    price: 890000,
    image: '/images/mattress-slumber.jpg',
    status: 'In Stock',
    desc: 'Ergonomic memory foam with cooling gel.'
  },
  {
    id: 'BED-006',
    name: 'Wardrobe Cabinet (Walnut)',
    category: 'bedroom',
    price: 2600000,
    image: '/images/wardrobe-walnut.jpg',
    status: 'Pre-Order',
    desc: 'Handcrafted with mirrored sliding doors.'
  },

  // Office Collection
  {
    id: 'OFF-001',
    name: 'The Executive Desk',
    category: 'office',
    price: 2400000,
    image: '/images/desk-executive.jpg',
    status: 'In Stock',
    desc: 'Oak veneer with cable management.'
  },
  {
    id: 'OFF-002',
    name: 'Comfort Pro Chair',
    category: 'office',
    price: 1200000,
    image: '/images/chair-comfort.jpg',
    status: 'In Stock',
    desc: 'Ergonomic leather office chair with lumbar support.'
  },
  {
    id: 'OFF-003',
    name: 'Library Shelving Unit',
    category: 'office',
    price: 1800000,
    image: '/images/shelf-library.jpg',
    status: 'In Stock',
    desc: 'Modular walnut shelving system.'
  },
  {
    id: 'OFF-004',
    name: 'Task Lighting Desk Lamp',
    category: 'office',
    price: 280000,
    image: '/images/lamp-task.jpg',
    status: 'In Stock',
    desc: 'LED with adjustable brightness.'
  },
  {
    id: 'OFF-005',
    name: 'Filing Cabinet (4-Drawer)',
    category: 'office',
    price: 1100000,
    image: '/images/cabinet-filing.jpg',
    status: 'In Stock',
    desc: 'Steel and leather with soft-close drawers.'
  },
  {
    id: 'OFF-006',
    name: 'Noise-Canceling Bookshelf',
    category: 'office',
    price: 3200000,
    image: '/images/shelf-acoustic.jpg',
    status: 'Pre-Order',
    desc: 'Sound-dampening library with integrated speakers.'
  }
];

// Utility function to get products by category
function getProductsByCategory(category) {
  if (category === 'all') {
    return productInventory;
  }
  return productInventory.filter(product => product.category === category);
}

// Utility function to get product by ID
function getProductById(id) {
  return productInventory.find(product => product.id === id);
}

// Utility function to format price
function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
}
