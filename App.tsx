
import React from 'react';
import { ShopProvider } from './ShopContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import FlashDeals from './components/FlashDeals';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import BespokeStudio from './components/BespokeStudio';
import AffiliateProgram from './components/AffiliateProgram';
import MobileBottomNav from './components/MobileBottomNav';


const App: React.FC = () => {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col selection:bg-beige-200 selection:text-charcoal-900 pb-20 md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          <div className="bg-white">
            <CategoryGrid />
          </div>

          <div id="new">
            <ProductGrid />
          </div>

          <BespokeStudio />

          <AffiliateProgram />

          <FlashDeals />

          <Reviews />

          <Newsletter />
        </main>
        <Footer />
        
        {/* Overlays & Mobile Nav */}
        <CartDrawer />
        <MobileBottomNav />
        <EliteConcierge />
      </div>
    </ShopProvider>
  );
};

export default App;
