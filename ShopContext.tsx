
import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem, AmbassadorStats } from './types';

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  toggleWishlist: (productId: string) => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  // Ambassador State
  isAmbassador: boolean;
  ambassadorStats: AmbassadorStats;
  joinAmbassador: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Ambassador State
  const [isAmbassador, setIsAmbassador] = useState(false);
  const [ambassadorStats, setAmbassadorStats] = useState<AmbassadorStats>({
    clicks: 124,
    conversions: 8,
    earnings: 12450,
    referralCode: 'LUXE-USER-2024'
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const joinAmbassador = () => {
    setIsAmbassador(true);
    // In a real app, generate a unique code
    setAmbassadorStats(prev => ({ ...prev, referralCode: `LUXE-${Math.random().toString(36).substring(7).toUpperCase()}` }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <ShopContext.Provider value={{ 
      cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist, 
      cartTotal, isCartOpen, setIsCartOpen,
      isAmbassador, ambassadorStats, joinAmbassador
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};
