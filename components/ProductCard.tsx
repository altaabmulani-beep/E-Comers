
import React from 'react';
import { Product } from '../types';
import { useShop } from '../ShopContext';
import { REVIEWS } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const isWishlisted = wishlist.includes(product.id);

  // In a real app, we would fetch reviews specifically for this product.
  // Here we display the first 3 global reviews as placeholders for the luxury aesthetic.
  const productReviews = REVIEWS.slice(0, 3);

  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <div className="group bg-white luxury-shadow transition-all duration-500 hover:-translate-y-2 border border-beige-100 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-beige-50 flex-shrink-0">
        {/* Subtle Background for transparent images */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110" 
        />
        
        {/* Cinematic darken overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {discountPercentage > 0 && (
            <span className="bg-beige-900 text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase shadow-sm">
              -{discountPercentage}% Off
            </span>
          )}
          {product.isFlashDeal && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase shadow-sm">Flash Sale</span>}
          {product.isBestSeller && <span className="bg-charcoal-800 text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase shadow-sm">Best Seller</span>}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 hover:bg-white ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-charcoal-800'}`}
        >
          <svg className={`w-4 h-4 ${isWishlisted ? 'fill-current' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full py-4 bg-charcoal-900/95 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-charcoal-800 transition-colors shadow-xl"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[9px] text-beige-800 font-bold tracking-[0.2em] uppercase">{product.category}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-[10px]">★</span>
            <span className="text-gray-400 text-[9px] ml-1 tracking-tighter">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-charcoal-900 font-serif text-lg mb-2 truncate group-hover:text-beige-900 transition-colors">{product.name}</h3>
        
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-charcoal-900 font-medium text-base">₹{product.price.toLocaleString('en-IN')}</span>
          {product.oldPrice && (
            <span className="text-gray-400 text-xs line-through tracking-tighter">₹{product.oldPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        {/* Enhanced Reviews Section */}
        <div className="mt-auto pt-6 border-t border-beige-50">
          <div className="flex items-center justify-between mb-4">
             <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Client Reviews</h4>
             <span className="text-[9px] text-gray-400">({product.reviewsCount})</span>
          </div>
          
          <div className="space-y-4">
            {productReviews.map((review) => (
              <div key={review.id} className="group/review">
                <div className="flex items-start gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.user} 
                    className="w-6 h-6 rounded-full grayscale group-hover/review:grayscale-0 transition-all duration-500 border border-beige-100" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-bold text-charcoal-800 truncate">{review.user}</span>
                      <div className="flex text-yellow-500 text-[7px]">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 font-serif italic line-clamp-2 leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
