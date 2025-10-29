
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Wayfarer's Satchel",
    price: 185.00,
    imageUrls: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Canvas',
    style: '50s',
    features: {
      material: '97% Heavy-Duty Cotton Canvas, 3% Full-Grain Leather Details',
      dimensions: '15" x 11" x 4"',
      note: 'This product features unique, hand-stitched details, making each piece one-of-a-kind.',
      authenticCode: 'DC-58-W4YF'
    },
    story: 'Inspired by the rugged individualism of the 50s, The Wayfarer is built for the open road. Each stitch tells a story of adventure, crafted from durable canvas that ages as gracefully as you do. The leather accents are sourced from small, family-run tanneries, ensuring a legacy of quality.',
    colorCombinations: ['Camel', 'Koyu Bej', 'Naturel']
  },
  {
    id: 2,
    name: "The Artisan Tote",
    price: 150.00,
    imageUrls: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Cotton',
    style: '60s',
    features: {
      material: '100% Organic Dark Cotton, Brass Fittings',
      dimensions: '18" x 14" x 6"',
      note: 'The natural dye process may result in slight color variations, enhancing its authentic charm.',
      authenticCode: 'DC-62-4RT1'
    },
    story: 'A tribute to the free-spirited creativity of the 60s. The Artisan Tote is simple, functional, and beautiful. Woven from pure, dark cotton, it carries the spirit of craft markets and folk songs. It\'s more than a bag; it\'s a canvas for your life.',
    colorCombinations: ['Mat Siyah', 'Antrasit', 'Füme']
  },
  {
    id: 3,
    name: "The Heritage Rucksack",
    price: 220.00,
    imageUrls: [
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Leather',
    style: '70s',
    features: {
      material: '80% Waxed Canvas, 20% Distressed Leather',
      dimensions: '17" x 12" x 7"',
      note: 'The waxed canvas is water-resistant and develops a unique patina over time.',
      authenticCode: 'DC-71-H3R1'
    },
    story: 'Echoing the earthy tones and back-to-nature movement of the 70s, the Heritage Rucksack is your trusted companion for any journey. Its combination of waxed canvas and distressed leather is built to withstand the elements and tell tales of your adventures for years to come.',
    colorCombinations: ['Vintage Kahve', 'Taba', 'Karamel']
  },
  {
    id: 4,
    name: "The Journeyman's Duffel",
    price: 250.00,
    imageUrls: [
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Canvas',
    style: '50s',
    features: {
      material: '100% Military-Grade Duck Canvas, Reinforced Leather Straps',
      dimensions: '22" x 10" x 10"',
      note: 'Features a reinforced bottom panel for extra durability on your travels.',
      authenticCode: 'DC-55-JRD4'
    },
    story: 'Built like they used to. The Journeyman\'s Duffel is a no-nonsense, reliable bag for weekends away or worldly travels. Its sturdy construction and timeless design harken back to an era of quality craftsmanship and enduring style.',
    colorCombinations: ['Haki Yeşil', 'Kum Beji', 'Toprak Tonu']
  },
  {
    id: 5,
    name: "The Scholar's Messenger",
    price: 175.00,
    imageUrls: [
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Cotton',
    style: '60s',
    features: {
      material: '95% Thick Cotton Weave, 5% Suede Accents',
      dimensions: '16" x 12" x 5"',
      note: 'Padded internal sleeve fits up to a 15-inch laptop, blending vintage style with modern needs.',
      authenticCode: 'DC-68-SCM3'
    },
    story: 'For the poets, the thinkers, and the dreamers. The Scholar\'s Messenger combines vintage academic style with practical design. Its soft, durable cotton and subtle suede details make it a sophisticated choice for carrying your ideas into the world.',
    colorCombinations: ['Oxford Gri', 'Lacivert', 'Siyah']
  },
  {
    id: 6,
    name: "The Pioneer's Pouch",
    price: 95.00,
    imageUrls: [
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Leather',
    style: '70s',
    features: {
      material: '100% Hand-Cut Suede Leather, Wooden Toggle',
      dimensions: '8" x 10" x 3"',
      note: 'Each pouch is hand-cut, so expect slight variations that make your bag truly unique.',
      authenticCode: 'DC-76-P10N'
    },
    story: 'Small but mighty, The Pioneer\'s Pouch is for essentials only. Inspired by 70s festival culture, this compact bag is perfect for keeping your valuables close while you explore. Crafted from supple suede, it\'s an ode to simplicity and freedom.',
    colorCombinations: ['Kestane', 'Süet Kahve', 'Bordo']
  },
  {
    id: 7,
    name: "The Nomad's Roll-Top",
    price: 235.00,
    imageUrls: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Canvas',
    style: '70s',
    features: {
      material: 'Water-Resistant Waxed Canvas, Nylon Straps',
      dimensions: '18" x 13" x 6" (rolled)',
      note: 'Adaptable roll-top closure for varying load sizes. Perfect for unpredictable adventures.',
      authenticCode: 'DC-78-NMRT'
    },
    story: 'For the modern nomad who roams from cityscapes to mountain tops. This roll-top pack adapts to your needs, combining 70s trail aesthetics with contemporary function. Its waxed canvas shell protects your gear from the elements, becoming a testament to your travels.',
    colorCombinations: ['Haki', 'Orman Yeşili', 'Vintage Kahve']
  },
  {
    id: 8,
    name: "The City Dweller's Brief",
    price: 195.00,
    imageUrls: [
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Leather',
    style: '50s',
    features: {
      material: '100% Full-Grain Cowhide Leather, Brass Hardware',
      dimensions: '16" x 11.5" x 3.5"',
      note: 'A sleek, minimalist design with a padded compartment for modern electronics.',
      authenticCode: 'DC-59-CDBR'
    },
    story: 'A nod to the sharp, sophisticated style of the 50s executive. The City Dweller\'s Brief is crafted from a single piece of full-grain leather, designed to develop a rich patina that tells the story of your professional journey. It\'s where classic style meets modern ambition.',
    colorCombinations: ['Klasik Siyah', 'Konjak Kahve', 'Cognac']
  },
  {
    id: 9,
    name: "The Rambler's Field Bag",
    price: 160.00,
    imageUrls: [
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Cotton',
    style: '60s',
    features: {
      material: 'Double-Layered Heavy Cotton Twill, Vegetable-Tanned Leather Straps',
      dimensions: '14" x 10" x 5"',
      note: 'Multiple exterior pockets for easy access to your field notes, camera, or tools.',
      authenticCode: 'DC-65-RFBG'
    },
    story: 'Inspired by the bags of 60s journalists and botanists, the Rambler is for the curious at heart. Its sturdy cotton twill and organized pockets make it the perfect companion for daily explorations, whether you\'re navigating city streets or country lanes.',
    colorCombinations: ['Naturel Bej', 'Safari Haki', 'Krem']
  },
  {
    id: 10,
    name: "The Weekender",
    price: 280.00,
    imageUrls: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Canvas',
    style: '50s',
    features: {
      material: '18oz Heavy-Duty Canvas, Reinforced Leather Base and Handles',
      dimensions: '20" x 12" x 9"',
      note: 'Spacious main compartment with an interior zip pocket for valuables. Meets most airline carry-on size requirements.',
      authenticCode: 'DC-52-WKND'
    },
    story: 'Designed for spontaneous getaways. The Weekender is a testament to 50s durability and classic style. Pack your essentials, throw it in the back of the car, and chase the horizon. This bag is built to be your reliable partner in adventure.',
    colorCombinations: ['Navy Blue', 'Naturel', 'Çikolata Kahve']
  },
  {
    id: 11,
    name: "The Scribe's Folio",
    price: 110.00,
    imageUrls: [
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Leather',
    style: '60s',
    features: {
      material: 'Soft, Full-Grain Leather, Waxed Thread Stitching',
      dimensions: '13" x 10"',
      note: 'Slim profile designed to carry a tablet, notebook, and pens. A modern classic for the discerning writer.',
      authenticCode: 'DC-69-SCRF'
    },
    story: 'For those who find beauty in the written word. The Scribe\'s Folio is a simple, elegant protector for your thoughts and tools. Its soft leather feels warm to the touch, inspiring you to capture the fleeting moments of genius, just as the beat poets of the 60s did.',
    colorCombinations: ['Vintage Kahve', 'Whiskey', 'Kestane']
  },
  {
    id: 12,
    name: "The Forester's Pack",
    price: 210.00,
    imageUrls: [
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Canvas',
    style: '70s',
    features: {
      material: 'Tin Cloth Canvas, Bridle Leather Straps, Wool-Padded Shoulder Straps',
      dimensions: '19" x 14" x 6"',
      note: 'Drawstring top closure with a storm flap for ultimate weather protection.',
      authenticCode: 'DC-74-FSTP'
    },
    story: 'A rugged pack born from the spirit of 70s forestry and conservation. Built with water-repellent Tin Cloth and durable Bridle Leather, the Forester\'s Pack is designed to haul gear deep into the woods. It\'s a tool, a companion, and a tribute to the untamed wild.',
    colorCombinations: ['Forest Green', 'Haki', 'Olive']
  }
];

export const SLOGANS = [
  "More Than a Bag. It's a Statement.",
  "Crafted for the Unconventional.",
  "Vintage Soul, Modern Edge."
];
