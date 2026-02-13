
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const FlashDeals: React.FC = () => {
  const flashProducts = PRODUCTS.filter(p => p.isFlashDeal);

  return (
    <section id="sale" className="bg-charcoal-900 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-serif mb-4">Midnight Flash Sale</h2>
            <p className="text-gray-400">Exclusive luxury deals, only for a limited time.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif">12</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Hours</span>
            </div>
            <span className="text-3xl font-serif">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif">45</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Mins</span>
            </div>
            <span className="text-3xl font-serif">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif">08</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Secs</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flashProducts.slice(0, 3).map(product => (
            <div key={product.id} className="invert brightness-110 grayscale-[0.2]">
               <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
