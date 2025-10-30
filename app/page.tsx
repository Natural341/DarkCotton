'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/types';
import { PRODUCTS } from '@/constants';
import InteractiveProductCard from '@/components/InteractiveProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TurkeyStoreMap from '@/components/TurkeyStoreMap';

export default function HomePage() {
  const router = useRouter();
  const featuredProducts = PRODUCTS.slice(0, 12);

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1622260614153-03223fb72052?q=95&w=2400&h=1600&auto=format&fit=crop"
              alt="Dark Cotton Hero - Premium Handmade Backpacks"
              fill
              className="object-cover object-center scale-125 transition-transform duration-[8000ms] ease-out hover:scale-110"
              priority
              quality={95}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-10 flex justify-center animate-fadeIn">
                <span className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-[0.3em] uppercase rounded-full shadow-lg">
                  Yeni Sezon 2025
                </span>
              </div>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-10 leading-[1.05] animate-fadeIn">
                Zarafet ve<br />Fonksiyonellik
              </h1>
              <p className="text-lg md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed font-light animate-fadeIn">
                Premium malzemeler ve modern tasarım anlayışıyla üretilmiş, tarzınızı yansıtan çantalar.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn">
                <button
                  onClick={() => router.push('/catalog')}
                  className="group relative px-12 py-5 bg-white text-black font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-700 ease-in-out hover:text-white shadow-2xl hover:shadow-3xl"
                >
                  <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></span>
                  <span className="relative z-10">Koleksiyonu Keşfet</span>
                </button>
                <button
                  onClick={() => router.push('/our-story')}
                  className="group relative px-12 py-5 bg-transparent text-white font-semibold text-sm tracking-wider uppercase border-2 border-white/80 overflow-hidden transition-all duration-700 ease-in-out hover:border-white shadow-2xl hover:shadow-3xl"
                >
                  <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-700">Hakkımızda</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-base md:text-lg text-gray-600 font-light">En çok tercih edilen modeller</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {featuredProducts.map(product => (
              <InteractiveProductCard key={product.id} product={product} onViewProduct={handleViewProduct} />
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Kategoriler</h2>
              <p className="text-base md:text-lg text-gray-600 font-light">İhtiyacınıza uygun çantayı bulun</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-[450px] overflow-hidden group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out" onClick={() => router.push('/catalog')}>
                <Image
                  src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Canvas Çantalar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-700 ease-in-out flex items-end">
                  <div className="p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-700 ease-in-out">
                    <h3 className="font-heading text-3xl font-bold tracking-tight mb-3">Canvas</h3>
                    <p className="text-sm text-white/90 mb-4 font-light">Dayanıklı ve şık tasarımlar</p>
                    <div className="w-12 h-1 bg-white/50 group-hover:w-24 group-hover:bg-white transition-all duration-700 ease-in-out"></div>
                  </div>
                </div>
              </div>
              <div className="relative h-[450px] overflow-hidden group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out" onClick={() => router.push('/catalog')}>
                <Image
                  src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Deri Çantalar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-700 ease-in-out flex items-end">
                  <div className="p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-700 ease-in-out">
                    <h3 className="font-heading text-3xl font-bold tracking-tight mb-3">Leather</h3>
                    <p className="text-sm text-white/90 mb-4 font-light">Lüks ve zarafet</p>
                    <div className="w-12 h-1 bg-white/50 group-hover:w-24 group-hover:bg-white transition-all duration-700 ease-in-out"></div>
                  </div>
                </div>
              </div>
              <div className="relative h-[450px] overflow-hidden group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out" onClick={() => router.push('/catalog')}>
                <Image
                  src="https://images.pexels.com/photos/1034921/pexels-photo-1034921.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cotton Çantalar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-700 ease-in-out flex items-end">
                  <div className="p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-700 ease-in-out">
                    <h3 className="font-heading text-3xl font-bold tracking-tight mb-3">Cotton</h3>
                    <p className="text-sm text-white/90 mb-4 font-light">Konforlu ve doğal</p>
                    <div className="w-12 h-1 bg-white/50 group-hover:w-24 group-hover:bg-white transition-all duration-700 ease-in-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Banner */}
        <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,168,34,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Ücretsiz Kargo Fırsatı</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              500 TL ve üzeri tüm alışverişlerinizde kargo bizden!
            </p>
            <button
              onClick={() => router.push('/catalog')}
              className="group relative px-10 py-4 bg-white text-black font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-700 ease-in-out hover:text-white"
            >
              <span className="absolute inset-0 bg-[#F9A822] transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
              <span className="relative z-10">Alışverişe Başla</span>
            </button>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Neden Biz?</h2>
              <p className="text-base md:text-lg text-gray-600 font-light">Müşteri memnuniyetini ön planda tutan hizmet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-black text-white rounded-2xl group-hover:bg-[#F9A822] transition-all duration-700 ease-in-out group-hover:scale-110 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-gray-900 mb-4">Premium Kalite</h3>
                <p className="text-base text-gray-600 leading-relaxed font-light max-w-xs mx-auto">
                  En kaliteli malzemeler ve titiz işçilikle üretilmiş, uzun ömürlü ürünler
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-black text-white rounded-2xl group-hover:bg-[#F9A822] transition-all duration-700 ease-in-out group-hover:scale-110 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-gray-900 mb-4">Hızlı Teslimat</h3>
                <p className="text-base text-gray-600 leading-relaxed font-light max-w-xs mx-auto">
                  Siparişiniz 1-3 iş günü içinde özenle paketlenip kapınıza ulaştırılır
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-black text-white rounded-2xl group-hover:bg-[#F9A822] transition-all duration-700 ease-in-out group-hover:scale-110 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-gray-900 mb-4">Güvenli Ödeme</h3>
                <p className="text-base text-gray-600 leading-relaxed font-light max-w-xs mx-auto">
                  256-bit SSL şifreleme ile korumalı, güvenli ödeme sistemi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Turkey Store Map */}
        <TurkeyStoreMap />
      </main>
      <Footer />
    </div>
  );
}
