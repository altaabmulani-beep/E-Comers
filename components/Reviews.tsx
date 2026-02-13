
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal-800 italic">Voice of Excellence</h2>
          <div className="w-16 h-0.5 bg-beige-300 mx-auto mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {REVIEWS.map(review => (
            <div key={review.id} className="text-center group">
              <img src={review.avatar} alt={review.user} className="w-16 h-16 rounded-full mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-beige-100" />
              <div className="flex justify-center text-yellow-500 mb-4 text-xs">
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-gray-600 italic font-serif leading-relaxed mb-6">"{review.comment}"</p>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal-900">{review.user}</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
