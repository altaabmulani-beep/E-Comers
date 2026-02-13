
import { Product, Review } from './types';

export const CATEGORIES = [
  { name: 'Clothing', icon: '👕', image: 'https://picsum.photos/seed/clothes/600/800' },
  { name: 'Jewelry', icon: '💍', image: 'https://picsum.photos/seed/jewelry/600/800' },
  { name: 'Electronics', icon: '💻', image: 'https://picsum.photos/seed/tech/600/800' },
  { name: 'Perfumes', icon: '🧴', image: 'https://picsum.photos/seed/perfume/600/800' },
  { name: 'Shoes', icon: '👟', image: 'https://picsum.photos/seed/shoes/600/800' },
  { name: 'Accessories', icon: '⌚', image: 'https://picsum.photos/seed/watch/600/800' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    price: 68000,
    oldPrice: 95000,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviewsCount: 24,
    isFlashDeal: true,
  },
  {
    id: '2',
    name: 'Diamond Solitaire Ring',
    price: 280000,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    reviewsCount: 12,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Midnight Oud Parfum',
    price: 18500,
    category: 'Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviewsCount: 89,
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Wireless Noise-Canceling Headphones',
    price: 32900,
    oldPrice: 38000,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviewsCount: 156,
    isFlashDeal: true,
  },
  {
    id: '5',
    name: 'Leather Oxford Shoes',
    price: 36000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviewsCount: 43,
  },
  {
    id: '6',
    name: 'Gold Plated Watch',
    price: 72000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviewsCount: 67,
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Cashmere Wool Coat',
    price: 98000,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviewsCount: 31,
  },
  {
    id: '8',
    name: 'Pro Tech Smartphone Case',
    price: 6500,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    reviewsCount: 120,
    isFlashDeal: true,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Ananya Sharma',
    rating: 5,
    comment: 'The quality of the silk gown is unmatched. Truly a premium experience from packaging to the product.',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: 'r2',
    user: 'Vikram Malhotra',
    rating: 5,
    comment: 'Found exactly what I needed. The delivery was incredibly fast and the customer support was top-tier.',
    avatar: 'https://i.pravatar.cc/150?u=vikram'
  },
  {
    id: 'r3',
    user: 'Priya Iyer',
    rating: 4,
    comment: 'Beautiful perfume selection. The Midnight Oud is my new favorite signature scent.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  }
];
