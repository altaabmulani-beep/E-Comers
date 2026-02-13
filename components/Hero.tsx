
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    title: "Timeless Elegance",
    subtitle: "New High-Fashion Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68624d5517?auto=format&fit=crop&q=80&w=2000",
    cta: "Explore Apparel"
  },
  {
    title: "Radiant Luxury",
    subtitle: "Fine Jewelry & Accessories",
    image: "https://images.unsplash.com/photo-1515562141207-7a18b5ce3377?auto=format&fit=crop&q=80&w=2000",
    cta: "Shop Jewelry"
  },
  {
    title: "Sensory Bliss",
    subtitle: "Designer Perfumes & Scents",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000",
    cta: "Discover Fragrance"
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-[85vh] overflow-hidden bg-beige-100">
      {SLIDES.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover scale-105 animate-[slow-zoom_25s_infinite]" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl space-y-4 md:space-y-8">
              <p className="text-white text-[10px] md:text-sm tracking-[0.4em] uppercase opacity-90">{slide.subtitle}</p>
              <h2 className="text-4xl md:text-8xl text-white font-serif leading-tight drop-shadow-sm">{slide.title}</h2>
              <div className="pt-4 md:pt-10">
                <button className="px-10 py-4 bg-white text-charcoal-900 font-bold tracking-[0.3em] hover:bg-beige-50 transition-all duration-300 uppercase text-[10px] active:scale-95 shadow-xl">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-700 rounded-full ${idx === current ? 'bg-white w-12' : 'bg-white/30 w-6'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
