
export type Category = 'Clothing' | 'Jewelry' | 'Electronics' | 'Perfumes' | 'Shoes' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: Category;
  image: string;
  rating: number;
  reviewsCount: number;
  isFlashDeal?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface AmbassadorStats {
  clicks: number;
  conversions: number;
  earnings: number;
  referralCode: string;
}
