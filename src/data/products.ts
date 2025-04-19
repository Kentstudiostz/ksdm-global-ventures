
// Main product array that contains all products
export const products = [
  // Clothing Products
  {
    id: 'c1',
    name: 'Identity Oversized Tee',
    price: 79.99,
    description: 'The Identity Oversized Tee isn\'t just a shirt—it\'s a statement of your authentic self. Cut with a relaxed silhouette that gives you room to express yourself, this premium cotton tee features our signature subtle embroidery that captures attention without demanding it.',
    statement: 'When you wear the Identity Tee, you don\'t blend in—you stand out through deliberate understatement.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      'https://images.unsplash.com/photo-1552641156-93ea2a5f78e5'
    ],
    category: 'T-Shirts',
    categoryId: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#FFFFFF', '#D4D4D8', '#18181B'],
    details: [
      '100% organic cotton',
      'Relaxed fit',
      'Signature embroidery on left chest',
      'Sustainably manufactured',
      'Model wears size L and is 6\'1"'
    ],
    date: '2023-12-01',
    rating: 4.8,
    sales: 128,
    new: true
  },
  {
    id: 'c2',
    name: 'Presence Bomber Jacket',
    price: 249.99,
    salePrice: 189.99,
    description: 'The Presence Bomber commands attention without saying a word. Meticulously crafted from weather-resistant technical fabric with a satin finish, this jacket features our minimalist design philosophy while maximizing functionality with hidden pockets and ventilation.',
    statement: 'The Presence Bomber doesn\'t announce your arrival—it makes your departure memorable.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    gallery: [
      'https://images.unsplash.com/photo-1548126032-079a0fb0099d',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      'https://images.unsplash.com/photo-1551489186-cf8726f514f8'
    ],
    category: 'Jackets',
    categoryId: 'jackets',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#0F172A', '#334155'],
    details: [
      'Technical fabric with water-resistant coating',
      'Ribbed collar, cuffs, and hem',
      'Two-way YKK zipper',
      'Interior pocket system',
      'Relaxed fit with room for layering'
    ],
    date: '2023-11-15',
    rating: 4.9,
    sales: 89,
    sale: true
  },
  {
    id: 'c3',
    name: 'Essence Tailored Shirt',
    price: 139.99,
    description: 'The Essence Tailored Shirt redefines business attire for those who understand that true power lies in subtle distinction. Cut from Italian cotton with a structured yet comfortable fit, this shirt features a unique collar construction that frames your face in a way that demands focus.',
    statement: 'Wearing the Essence Shirt signals a confidence that doesn\'t need validation—it already knows its worth.',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93',
    gallery: [
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e',
      'https://images.unsplash.com/photo-1614251056216-d6795e49fa10',
      'https://images.unsplash.com/photo-1563630423918-b58f07336ac9'
    ],
    category: 'Shirts',
    categoryId: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FFFFFF', '#F8FAFC', '#E2E8F0', '#CBD5E1'],
    details: [
      'Italian 120s cotton',
      'Modern slim fit',
      'Mother-of-pearl buttons',
      'Single-needle stitching',
      'Signature collar construction'
    ],
    date: '2023-10-20',
    rating: 4.7,
    sales: 76
  },
  {
    id: 'c4',
    name: 'Perception Trousers',
    price: 169.99,
    description: 'The Perception Trousers alter how you move through the world—and how the world perceives your movement. Tailored with a tapered silhouette that elongates your frame, these trousers feature our proprietary fabric blend that maintains structure while allowing freedom.',
    statement: 'These aren\'t just pants—they\'re a foundation of presence that elevates your entire silhouette.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb'
    ],
    category: 'Pants',
    categoryId: 'pants',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['#000000', '#0F172A', '#334155', '#475569'],
    details: [
      'Proprietary cotton-elastane blend',
      'Tapered leg',
      'Interior grip waistband',
      'Hidden secure pocket',
      'Available in 30" and 32" inseam'
    ],
    date: '2023-09-10',
    rating: 4.6,
    sales: 62,
    new: true
  },
  {
    id: 'c5',
    name: 'Distinction Dress',
    price: 219.99,
    salePrice: 179.99,
    description: 'The Distinction Dress doesn\'t follow trends—it creates moments. Cut from fluid Japanese silk that responds to your movement with subtle luminosity, this dress features an asymmetrical hemline and minimal seam construction that lets the fabric—and your presence—speak volumes.',
    statement: 'This dress doesn\'t just accentuate your figure—it announces your intention to be remembered.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223',
      'https://images.unsplash.com/photo-1576185850770-312344cce1f0'
    ],
    category: 'Dresses',
    categoryId: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000000', '#0F172A', '#7F1D1D'],
    details: [
      'Japanese silk',
      'Asymmetrical hemline',
      'Minimal seam construction',
      'Falls to mid-calf',
      'Model wears size S and is 5\'9"'
    ],
    date: '2023-08-15',
    rating: 4.9,
    sales: 48,
    sale: true
  },
  {
    id: 'c6',
    name: 'Awareness Hoodie',
    price: 149.99,
    description: 'The Awareness Hoodie is engineered for those who understand that comfort and presence aren\'t mutually exclusive. Crafted from our heavyweight organic cotton with a brushed interior, this hoodie features subtle architectural details that elevate it beyond casual wear.',
    statement: 'This isn\'t loungewear—it\'s a deliberate choice to combine comfort with unmistakable identity.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    gallery: [
      'https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
      'https://images.unsplash.com/photo-1614975058789-41788ba71aea'
    ],
    category: 'T-Shirts',
    categoryId: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#334155', '#7F1D1D', '#1E3A8A'],
    details: [
      '400 GSM organic cotton',
      'Oversized fit',
      'Dropped shoulders',
      'Ribbed cuffs and hem',
      'Kangaroo pocket with hidden compartment'
    ],
    date: '2023-07-20',
    rating: 4.7,
    sales: 103
  },

  // Accessories Products
  {
    id: 'a1',
    name: 'Awareness Silk Scarf',
    price: 89.99,
    salePrice: 59.99,
    description: 'The Awareness Silk Scarf is a whisper that speaks volumes. Hand-printed on Italian silk using our exclusive pattern, this accessory drapes with intention and catches light in ways that draw attention to your presence without demanding it.',
    statement: 'This scarf doesn\'t merely accent an outfit—it transforms your silhouette into a deliberate statement.',
    image: 'https://images.unsplash.com/photo-1521319894908-a27537e2e4f1',
    gallery: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
      'https://images.unsplash.com/photo-1617552944335-b137178562c1',
      'https://images.unsplash.com/photo-1632149877166-f75d49000351'
    ],
    category: 'Scarves',
    categoryId: 'scarves',
    colors: ['#000000', '#0F172A', '#7F1D1D', '#1E3A8A'],
    details: [
      '100% Italian silk',
      'Hand-rolled edges',
      'Exclusive pattern',
      '35" x 35"',
      'Dry clean only'
    ],
    date: '2023-12-05',
    rating: 4.9,
    sales: 76,
    sale: true,
    new: true
  },
  {
    id: 'a2',
    name: 'Distinction Watch',
    price: 329.99,
    description: 'The Distinction Watch operates at the intersection of timepiece and identity statement. Featuring a Swiss movement housed in a minimalist case, this watch tells more than time—it communicates a deliberate approach to life where every second is noticed.',
    statement: 'This watch doesn\'t just mark time—it marks you as someone who values the weight of each moment.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    gallery: [
      'https://images.unsplash.com/photo-1636653410512-5f66daf69879',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6'
    ],
    category: 'Watches',
    categoryId: 'watches',
    colors: ['#000000', '#0F172A', '#64748B'],
    details: [
      'Swiss movement',
      'Sapphire crystal',
      'Italian leather strap',
      '38mm case diameter',
      'Water resistant to 5 ATM'
    ],
    date: '2023-11-10',
    rating: 4.8,
    sales: 42
  },
  {
    id: 'a3',
    name: 'Identity Tote',
    price: 179.99,
    description: 'The Identity Tote doesn\'t merely carry your essentials—it carries your presence. Crafted from vegetable-tanned leather that develops a unique patina with use, this tote features architectural proportions that stand out among conventional bags.',
    statement: 'This isn\'t just storage—it\'s a declaration that what you carry matters and deserves a worthy vessel.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    gallery: [
      'https://images.unsplash.com/photo-1601369850205-4bdc9c0b2738',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3'
    ],
    category: 'Bags',
    categoryId: 'bags',
    colors: ['#000000', '#44403C', '#78716C'],
    details: [
      'Full-grain vegetable-tanned leather',
      'Unlined interior',
      'Interior key leash',
      'Dimensions: 15" H x 17" W x 4" D',
      'Hand-stitched in small batches'
    ],
    date: '2023-10-15',
    rating: 4.7,
    sales: 57,
    new: true
  },
  {
    id: 'a4',
    name: 'Presence Sunglasses',
    price: 219.99,
    description: 'The Presence Sunglasses don\'t simply shield your eyes—they frame your face in a way that demands attention. Handcrafted from Italian acetate with polarized lenses, these sunglasses feature subtle architectural details that distinguish them from conventional eyewear.',
    statement: 'These aren\'t just sunglasses—they\'re the threshold through which you observe the world, and it observes you.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    gallery: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666',
      'https://images.unsplash.com/photo-1615468167398-054673650c6b',
      'https://images.unsplash.com/photo-1502767076871-86bf7ae05aff'
    ],
    category: 'Eyewear',
    categoryId: 'eyewear',
    colors: ['#000000', '#57534E', '#1E293B'],
    details: [
      'Italian acetate frame',
      'Polarized CR-39 lenses',
      'UV400 protection',
      'Stainless steel hinges',
      'Handcrafted in small batches'
    ],
    date: '2023-09-05',
    rating: 4.6,
    sales: 38
  },
  {
    id: 'a5',
    name: 'Essence Bracelet',
    price: 129.99,
    salePrice: 99.99,
    description: 'The Essence Bracelet is a subtle yet unmistakable statement of identity. Handcrafted from solid sterling silver with our proprietary clasp mechanism, this bracelet sits at the perfect tension on your wrist—visible without being ostentatious.',
    statement: 'This bracelet doesn\'t just adorn—it becomes an extension of your identity, a tactile reminder of your presence.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d',
    gallery: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0',
      'https://images.unsplash.com/photo-1611576490811-aac8aad4ba5c',
      'https://images.unsplash.com/photo-1630018548696-e1900d7172ba'
    ],
    category: 'Jewelry',
    categoryId: 'jewelry',
    colors: ['#D1D5DB', '#000000'],
    details: [
      'Sterling silver or blackened silver',
      'Proprietary clasp mechanism',
      'Adjustable sizing',
      'Hand-finished',
      'Comes in KSDM signature packaging'
    ],
    date: '2023-08-20',
    rating: 4.8,
    sales: 63,
    sale: true
  },
  {
    id: 'a6',
    name: 'Distinction Cap',
    price: 89.99,
    description: 'The Distinction Cap elevates casual headwear to a deliberate style choice. Crafted from premium cotton with an architectural brim and our minimal embroidery, this cap offers subtle recognition among those who value understatement.',
    statement: 'This isn\'t just a hat—it\'s a refined finish to any look, signaling awareness without shouting for attention.',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee',
    gallery: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3',
      'https://images.unsplash.com/photo-1649178232312-89cb14975d72',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34'
    ],
    category: 'Hats',
    categoryId: 'hats',
    colors: ['#000000', '#334155', '#7F1D1D', '#1E3A8A'],
    details: [
      'Premium cotton construction',
      'Structured 6-panel design',
      'Minimal embroidery',
      'Adjustable back closure',
      'One size fits most'
    ],
    date: '2023-07-15',
    rating: 4.5,
    sales: 92
  }
];

// Split products by type for easier access
export const clothingProducts = products.filter(p => p.id.startsWith('c'));
export const accessoriesProducts = products.filter(p => p.id.startsWith('a'));
