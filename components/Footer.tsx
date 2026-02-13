
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-xl font-serif font-bold tracking-[0.3em]">LUXEMALL</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Curating the finest selection of premium lifestyle products since 2024. Elegance is not being noticed, it's being remembered.
          </p>
          <div className="flex space-x-4">
            {['Instagram', 'Pinterest', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-charcoal-800 transition-colors text-xs uppercase tracking-widest font-medium">{social}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal-800 mb-8">Client Services</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal-800 mb-8">The Brand</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-charcoal-800 transition-colors">Boutique Locations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal-800 mb-8">Connect</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li>123 Luxury Avenue, Beverly Hills, CA</li>
            <li>service@luxemall.com</li>
            <li>+1 (800) LUXE-CALL</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-50 pt-10 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 LuxeMall International. All Rights Reserved. Designed for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
