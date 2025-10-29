'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl tracking-wider uppercase text-brand-vanilla">Your Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16 border border-brand-vanilla/20 bg-brand-charcoal/50">
              <p className="font-body text-xl text-brand-vanilla/80 mb-6">Your cart is currently empty.</p>
              <button
                onClick={() => router.push('/catalog')}
                className="px-10 py-3 bg-brand-orange text-brand-charcoal font-heading text-lg tracking-widest uppercase hover:bg-brand-burgundy hover:text-brand-vanilla transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-span-2">
                <ul className="divide-y divide-brand-vanilla/20">
                  {cart.map(item => (
                    <li key={item.id} className="flex items-center py-6">
                      <div className="relative w-24 h-24 mr-6">
                        <Image
                          src={item.imageUrls[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-grow">
                        <h2 className="font-heading text-xl tracking-wide text-brand-vanilla">{item.name}</h2>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-brand-vanilla/20 hover:bg-brand-vanilla/30 text-brand-vanilla"
                          >
                            -
                          </button>
                          <span className="font-body text-brand-vanilla/70 px-3">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-brand-vanilla/20 hover:bg-brand-vanilla/30 text-brand-vanilla"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-brand-orange hover:text-brand-burgundy"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="font-heading text-xl text-brand-orange">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-charcoal/80 border border-brand-vanilla/10 p-8 shadow-lg h-fit">
                <h2 className="font-heading text-3xl tracking-wider text-brand-vanilla border-b-2 border-brand-vanilla/20 pb-4">Order Summary</h2>
                <div className="space-y-4 mt-6 font-body text-lg">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-4 border-t border-brand-vanilla/10">
                    <span className="font-heading tracking-wider">Total</span>
                    <span className="font-heading text-brand-orange">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="mt-8 w-full px-10 py-4 bg-brand-orange text-brand-charcoal font-heading font-bold text-xl tracking-widest uppercase hover:bg-brand-burgundy hover:text-brand-vanilla transition-all duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
