
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-beige-50 py-24 border-t border-beige-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-4 text-charcoal-800">The Luxe Insider</h2>
        <p className="text-gray-500 mb-10 tracking-wide">Subscribe to receive exclusive access to private sales, new collections, and limited editions.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 px-6 py-4 bg-white border border-beige-200 outline-none focus:border-charcoal-800 transition-colors tracking-widest text-sm"
          />
          <button className="px-10 py-4 bg-charcoal-800 text-white text-xs font-bold tracking-widest uppercase hover:bg-charcoal-900 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest">By subscribing, you agree to our privacy policy & terms of service.</p>
      </div>
    </section>
  );
};

export default Newsletter;
