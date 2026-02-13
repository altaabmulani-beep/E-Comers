
import React, { useState } from 'react';
import { useShop } from '../ShopContext';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const { cart, wishlist, setIsCartOpen, isAmbassador } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-charcoal-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-widest text-charcoal-800 cursor-pointer">LUXEMALL</h1>
          </div>

          {/* Desktop Categories */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-charcoal-900 transition-colors py-8">
                CATEGORIES
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {CATEGORIES.map(cat => (
                  <a key={cat.name} href={`#${cat.name}`} className="block px-6 py-3 text-sm text-gray-700 hover:bg-beige-50 hover:text-charcoal-900">
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#new" className="text-sm font-medium text-gray-700 hover:text-charcoal-900 transition-colors">NEW ARRIVALS</a>
            <a href="#ambassador" className={`text-sm font-medium transition-colors ${isAmbassador ? 'text-beige-800 font-bold' : 'text-gray-700 hover:text-charcoal-900'}`}>
              {isAmbassador ? 'AMBASSADOR HUB' : 'AMBASSADOR PROGRAM'}
            </a>
            <a href="#sale" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">FLASH DEALS</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="p-2 text-gray-600 hover:text-charcoal-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="hidden sm:block p-2 text-gray-600 hover:text-charcoal-900 transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              {wishlist.length > 0 && <span className="absolute top-0 right-0 h-4 w-4 bg-beige-800 text-white text-[10px] flex items-center justify-center rounded-full">{wishlist.length}</span>}
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-600 hover:text-charcoal-900 transition-colors relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {cart.length > 0 && <span className="absolute top-0 right-0 h-4 w-4 bg-charcoal-800 text-white text-[10px] flex items-center justify-center rounded-full">{cart.reduce((a, b) => a + b.quantity, 0)}</span>}
            </button>
            <button className="p-2 text-gray-600 hover:text-charcoal-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {isSearchVisible && (
        <div className="bg-white border-b border-gray-100 p-4 absolute w-full animate-slide-down">
          <div className="max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for diamonds, silk, perfumes..." 
              className="w-full border-b border-gray-300 focus:border-charcoal-800 outline-none py-2 px-4 text-lg font-serif italic"
              autoFocus
            />
            <button className="absolute right-0 top-2 text-gray-400 hover:text-charcoal-800" onClick={() => setIsSearchVisible(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {CATEGORIES.map(cat => (
              <a key={cat.name} href={`#${cat.name}`} className="text-lg font-serif text-gray-800 border-b border-gray-50 pb-2">{cat.name}</a>
            ))}
            <a href="#new" className="text-lg font-serif text-gray-800 border-b border-gray-50 pb-2">New Arrivals</a>
            <a href="#ambassador" className="text-lg font-serif text-gray-800 border-b border-gray-50 pb-2">Ambassador Program</a>
            <a href="#sale" className="text-lg font-serif text-red-600 border-b border-gray-50 pb-2">Flash Deals</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
