export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  category: 'Canvas' | 'Leather' | 'Cotton';
  style: '50s' | '60s' | '70s';
  features: {
    material: string;
    dimensions: string;
    note: string;
    authenticCode: string;
  };
  story: string;
  colorCombinations: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'home' | 'catalog' | 'pdp' | 'checkout' | 'ourStory' | 'journal';
