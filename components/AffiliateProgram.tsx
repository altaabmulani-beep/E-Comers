
import React, { useState } from 'react';
import { useShop } from '../ShopContext';

const AffiliateProgram: React.FC = () => {
  const { isAmbassador, joinAmbassador, ambassadorStats } = useShop();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://luxemall.com?ref=${ambassadorStats.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ambassador" className="py-20 md:py-32 bg-beige-50 border-y border-beige-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {!isAmbassador ? (
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-beige-800 font-bold">The Elite Circle</span>
                <h2 className="text-4xl md:text-6xl font-serif text-charcoal-900 leading-tight">
                  Become a <br />
                  <span className="italic">Luxe Ambassador</span>
                </h2>
                <p className="text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed text-sm">
                  Partner with the world's most exclusive marketplace. Share your refined taste with your audience and earn premium commissions on every curated sale.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
                <div className="p-6 bg-white luxury-shadow rounded-sm border border-beige-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-800 mb-2">10% Commission</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] leading-loose">On all fashion and jewelry collections.</p>
                </div>
                <div className="p-6 bg-white luxury-shadow rounded-sm border border-beige-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-800 mb-2">Private Access</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] leading-loose">Early previews of limited season drops.</p>
                </div>
              </div>

              <button 
                onClick={joinAmbassador}
                className="w-full sm:w-auto px-12 py-5 bg-charcoal-900 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-charcoal-800 transition-all shadow-xl"
              >
                Apply for Partnership
              </button>
            </div>
            <div className="flex-1 relative w-full mt-12 lg:mt-0">
              <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-sm luxury-shadow rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ambassador lifestyle" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white p-8 luxury-shadow max-w-xs -rotate-2">
                <p className="font-serif italic text-charcoal-800 text-lg">"The partnership has redefined how I share elegance with my community."</p>
                <p className="text-[9px] uppercase tracking-widest text-beige-800 mt-4 font-bold">— Elena Rossi, Elite Member</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <span className="text-[10px] tracking-[0.5em] uppercase text-beige-800 font-bold">Your Ambassador Studio</span>
              <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 italic">Welcome Back to the Circle</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 border-t border-beige-200">
              {[
                { label: 'Clicks', value: ambassadorStats.clicks, unit: '' },
                { label: 'Referrals', value: ambassadorStats.conversions, unit: '' },
                { label: 'Earnings', value: `₹${ambassadorStats.earnings.toLocaleString('en-IN')}`, unit: '' },
                { label: 'Tier', value: 'Gold', unit: 'Member' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 md:p-10 text-center border-x border-beige-50">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 md:mb-4">{stat.label}</p>
                  <p className="text-xl md:text-3xl font-serif text-charcoal-800 truncate">{stat.value}</p>
                  {stat.unit && <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-beige-600 mt-1 font-bold">{stat.unit}</p>}
                </div>
              ))}
            </div>

            <div className="bg-charcoal-900 p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 rounded-sm">
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="text-lg md:text-xl font-serif italic">Your Signature Tracking Link</h4>
                <p className="text-[10px] text-gray-400 tracking-wider">Share this unique gateway with your network.</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                <div className="bg-white/10 px-6 py-4 rounded-sm font-mono text-[10px] sm:text-sm tracking-widest border border-white/20 break-all text-center">
                  {`luxemall.com?ref=${ambassadorStats.referralCode}`}
                </div>
                <button 
                  onClick={copyLink}
                  className="px-8 py-4 bg-white text-charcoal-900 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-beige-50 transition-all active:scale-95"
                >
                  {copied ? 'Copied' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AffiliateProgram;
