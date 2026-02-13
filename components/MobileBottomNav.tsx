
import React from 'react';
import { useShop } from '../ShopContext';

const MobileBottomNav: React.FC = () => {
  const { cart, setIsCartOpen, isAmbassador } = useShop();

  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-beige-200 px-6 py-3 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <a href="#" className="flex flex-col items-center gap-1 group">
          <svg className="w-5 h-5 text-charcoal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-charcoal-800">Home</span>
        </a>

        <button onClick={() => window.scrollTo({ top: document.getElementById('new')?.offsetTop ? document.getElementById('new')!.offsetTop - 100 : 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 group">
          <svg className="w-5 h-5 text-charcoal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-charcoal-800">Shop</span>
        </button>

        <button onClick={() => setIsCartOpen(true)} className="flex flex-col items-center gap-1 group relative">
          <svg className="w-5 h-5 text-charcoal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-charcoal-900 text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-charcoal-800">Bag</span>
        </button>

        <a href="#ambassador" className="flex flex-col items-center gap-1 group">
          <svg className={`w-5 h-5 ${isAmbassador ? 'text-beige-800' : 'text-charcoal-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className={`text-[8px] font-bold uppercase tracking-[0.2em] ${isAmbassador ? 'text-beige-800' : 'text-gray-400'} group-hover:text-charcoal-800`}>
            {isAmbassador ? 'Studio' : 'Join'}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
