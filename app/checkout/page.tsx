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
  const shipping = subtotal > 500 ? 0 : (subtotal > 0 ? 50 : 0);
  const total = subtotal + shipping;

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-black mb-2">Sepetim</h1>
            <p className="text-gray-600 font-body">{cart.length} ürün</p>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-200">
              <div className="max-w-md mx-auto">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h2 className="font-heading text-2xl text-gray-900 mb-3">Sepetiniz Boş</h2>
                <p className="font-body text-gray-600 mb-8">Alışverişe başlamak için ürünlerimize göz atın</p>
                <button
                  onClick={() => router.push('/catalog')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Alışverişe Başla
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex gap-6">
                      {/* Image */}
                      <div
                        className="relative w-32 h-32 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => handleViewProduct(item)}
                      >
                        <Image
                          src={item.imageUrls[0]}
                          alt={item.name}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          sizes="128px"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h2
                              className="font-heading text-xl text-gray-900 hover:text-brand-orange transition-colors cursor-pointer mb-1"
                              onClick={() => handleViewProduct(item)}
                            >
                              {item.name}
                            </h2>
                            <p className="text-sm text-gray-500 font-body">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
                            aria-label="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors text-gray-700 hover:text-black"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="font-semibold text-gray-900 w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors text-gray-700 hover:text-black"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-heading text-2xl font-bold text-black">
                            {(item.price * item.quantity).toFixed(0)} TL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sticky top-24">
                  <h2 className="font-heading text-2xl text-black mb-6">Sipariş Özeti</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600 font-body">
                      <span>Ara Toplam</span>
                      <span className="font-semibold text-black">{subtotal.toFixed(0)} TL</span>
                    </div>
                    <div className="flex justify-between text-gray-600 font-body">
                      <span>Kargo</span>
                      <span className="font-semibold text-black">
                        {shipping === 0 ? <span className="text-green-600">Ücretsiz</span> : `${shipping.toFixed(0)} TL`}
                      </span>
                    </div>
                    {shipping > 0 && subtotal < 500 && (
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <p className="text-xs text-orange-800 font-body">
                          <span className="font-semibold">{(500 - subtotal).toFixed(0)} TL</span> daha alışveriş yapın, kargo bedava!
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-lg text-gray-900">Toplam</span>
                      <span className="font-heading text-3xl font-bold text-brand-orange">{total.toFixed(0)} TL</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-brand-orange text-white font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-4">
                    Siparişi Tamamla
                  </button>

                  <button
                    onClick={() => router.push('/catalog')}
                    className="w-full py-3 bg-white text-gray-700 font-medium text-sm border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-all duration-300"
                  >
                    Alışverişe Devam Et
                  </button>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-body">Güvenli ödeme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
