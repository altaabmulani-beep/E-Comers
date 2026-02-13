
import React from 'react';
import { useShop } from '../ShopContext';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-2xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-serif text-gray-900">Your Basket</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-charcoal-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="mt-8">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-500 italic">Your basket is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-8 py-3 bg-charcoal-800 text-white text-xs tracking-widest uppercase"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-100">
                    {cart.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-32 overflow-hidden rounded-sm">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-serif text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 uppercase tracking-widest text-[10px]">{item.category}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border border-gray-200 rounded-sm">
                              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50">-</button>
                              <span className="px-3 py-1 font-medium">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="font-medium text-red-600 hover:text-red-500 uppercase text-[10px] tracking-widest">Remove</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-100 py-6 px-4 sm:px-6 bg-beige-50">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p className="uppercase tracking-widest text-sm">Subtotal</p>
                  <p className="text-xl font-serif">₹{cartTotal.toLocaleString('en-IN')}</p>
                </div>
                <p className="mt-0.5 text-xs text-gray-500 italic">Shipping and luxury taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-xs font-bold tracking-widest uppercase text-white bg-charcoal-800 hover:bg-charcoal-900 shadow-sm transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
                <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button onClick={() => setIsCartOpen(false)} className="text-charcoal-600 font-medium hover:text-charcoal-500">
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
