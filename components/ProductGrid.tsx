
import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from './ProductCard';
import { Category, Product } from '../types';

type SortOption = 'Newest' | 'Price: Low to High' | 'Price: High to Low' | 'Rating';

const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('Newest');

  const processedProducts = useMemo(() => {
    let result = filter === 'All' 
      ? [...PRODUCTS] 
      : PRODUCTS.filter(p => p.category === filter);

    switch (sortBy) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'Newest':
      default:
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }
    return result;
  }, [filter, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-beige-200 pb-8 gap-6">
        <div className="flex-1 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal-800">Our Selection</h2>
          <p className="text-gray-500 mt-2 max-w-md text-sm">Meticulously curated from the world's finest artisans.</p>
          
          <div className="relative mt-8 group">
            <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar">
              <button 
                onClick={() => setFilter('All')}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all whitespace-nowrap rounded-full border ${filter === 'All' ? 'bg-charcoal-900 text-white border-charcoal-900 font-bold' : 'text-gray-400 border-beige-200 hover:border-charcoal-800 hover:text-charcoal-800'}`}
              >
                All
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => setFilter(cat.name as Category)}
                  className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all whitespace-nowrap rounded-full border ${filter === cat.name ? 'bg-charcoal-900 text-white border-charcoal-900 font-bold' : 'text-gray-400 border-beige-200 hover:border-charcoal-800 hover:text-charcoal-800'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            {/* Scroll Indicator Mask */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 min-w-[200px]">
          <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold px-1">Sort By</label>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none w-full bg-white border border-beige-200 text-charcoal-800 py-3 pl-4 pr-10 text-[10px] tracking-[0.2em] uppercase focus:outline-none focus:border-charcoal-800 transition-colors cursor-pointer rounded-sm"
            >
              <option value="Newest">Newest Pieces</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Rating">Highest Rated</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {processedProducts.map((product, idx) => (
          <div 
            key={`${product.id}-${filter}-${sortBy}`} 
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {processedProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-gray-400 italic font-serif text-lg">No pieces found in this collection.</p>
        </div>
      )}

      <div className="mt-16 text-center">
        <button className="w-full sm:w-auto px-12 py-5 border border-charcoal-200 text-charcoal-800 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-charcoal-800 hover:text-white transition-all duration-300 active:scale-95">
          Explore the Archive
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
