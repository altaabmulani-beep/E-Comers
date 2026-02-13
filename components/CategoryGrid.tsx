
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-charcoal-800">Curated Collections</h2>
        <div className="w-20 h-0.5 bg-beige-300 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map(cat => (
          <div key={cat.name} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl transform group-hover:scale-125 transition-transform">{cat.icon}</span>
              </div>
            </div>
            <h3 className="text-center text-sm font-medium tracking-widest text-gray-700 group-hover:text-charcoal-900 uppercase">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
