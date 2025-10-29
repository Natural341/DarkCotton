'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/constants';
import { useCart } from '@/app/context/CartContext';
import InteractiveProductCard from '@/components/InteractiveProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollingImageIndex, setScrollingImageIndex] = useState(0);

  const productId = parseInt(params.id as string);
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onViewProduct={(p) => router.push(`/product/${p.id}`)} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl text-brand-vanilla">Product Not Found</h1>
            <button
              onClick={() => router.push('/catalog')}
              className="mt-8 px-8 py-3 bg-brand-orange text-brand-charcoal font-heading text-lg tracking-widest uppercase font-bold"
            >
              Back to Catalog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Auto-scroll images effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollingImageIndex((prev) => (prev + 1) % product.imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product.imageUrls.length]);

  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const handleViewProduct = (p: Product) => {
    router.push(`/product/${p.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/checkout');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f1eb]">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Hero Section - Scrolling Images with Info Panel */}
        <section className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            {product.imageUrls.map((url, index) => (
              <div
                key={url}
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                  index === scrollingImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={url}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Transparan Blurlu Info Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-white/70 backdrop-blur-2xl p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-black/10 backdrop-blur-sm text-black rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl tracking-tight text-black mb-3">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-black mb-6">
                  {product.price.toFixed(0)} TL
                </p>
              </div>

              {/* Renk Seçenekleri */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-black">Renk Seçenekleri</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colorCombinations.map((color, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 text-xs border border-black/20 hover:border-black bg-white/60 backdrop-blur-lg rounded-md transition-all duration-700 ease-in-out"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sepete Ekle Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-black text-white font-medium text-sm tracking-wide uppercase hover:bg-black/90 transition-all duration-700 ease-in-out"
              >
                Sepete Ekle
              </button>

              {/* Progress Indicators */}
              <div className="flex gap-1 justify-center pt-4">
                {product.imageUrls.map((_, index) => (
                  <div
                    key={index}
                    className={`h-px w-8 transition-all duration-700 ease-in-out ${
                      index === scrollingImageIndex ? 'bg-[#F9A822]/70' : 'bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detaylı Ürün Özellikleri */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Sol Taraf - Ürün Görseli */}
              <div className="relative aspect-square bg-[#f5f1eb] rounded-lg overflow-hidden">
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Sağ Taraf - Detaylı Özellikler */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl tracking-tight text-black mb-6">
                    Ürün Özellikleri
                  </h2>
                </div>

                {/* Model Adı */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Model Adı</h3>
                  <p className="text-base text-black">{product.name}</p>
                </div>

                {/* Materyaller */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Materyaller</h3>
                  <p className="text-base text-black">{product.features.material}</p>
                </div>

                {/* Beden/Ölçü */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Boyutlar</h3>
                  <p className="text-base text-black">{product.features.dimensions}</p>
                </div>

                {/* Su Geçirmezlik */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Su Geçirmezlik</h3>
                  <p className="text-base text-black">
                    {product.category === 'Canvas' || product.category === 'Leather'
                      ? 'Su tutmaz kaplamalı'
                      : 'Hafif su geçirir'}
                  </p>
                </div>

                {/* Sürdürülebilirlik */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Sürdürülebilirlik</h3>
                  <p className="text-base text-black">
                    Organik ve geri dönüştürülmüş malzemeler kullanılmıştır
                  </p>
                </div>

                {/* İade/Değişim */}
                <div className="pb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">İade & Değişim</h3>
                  <p className="text-base text-black">
                    14 gün içinde ücretsiz iade ve değişim hakkı
                  </p>
                </div>

                {/* Ürün Kodu */}
                <div className="pt-4">
                  <p className="text-xs text-gray-500">
                    Ürün Kodu: {product.features.authenticCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ürün Hikayesi */}
        <section className="py-16 md:py-20 bg-[#f5f1eb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl tracking-tight text-black mb-4">
                Ürün Hikayesi
              </h2>
              <div className="w-16 h-1 bg-black mx-auto"></div>
            </div>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center">
              {product.story}
            </p>
          </div>
        </section>

        {/* İlginizi Çekebilecek Ürünler */}
        {relatedProducts.length >= 4 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl md:text-3xl tracking-tight text-black mb-2">
                  İlginizi Çekebilecek Ürünler
                </h2>
                <p className="text-sm text-gray-600">Sizin için özenle seçtik</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {relatedProducts.slice(0, 4).map(relatedProduct => (
                  <InteractiveProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onViewProduct={handleViewProduct}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
