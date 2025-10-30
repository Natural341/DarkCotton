'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { PRODUCTS } from '@/constants';

interface ShopMenuProps {
  isOpen: boolean;
  onViewProduct: (product: Product) => void;
}

const ShopMenu: React.FC<ShopMenuProps> = ({ isOpen, onViewProduct }) => {
  const featuredProduct = PRODUCTS.find(p => p.id === 3); // The Heritage Rucksack

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-200 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ÇANTA Kategorisi */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">ÇANTA</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog?category=bacak-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Bacak Çantası</Link></li>
              <li><Link href="/catalog?category=makyaj-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Makyaj Çantası</Link></li>
              <li><Link href="/catalog?category=bel-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Bel Çantası</Link></li>
              <li><Link href="/catalog?category=boyun-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Boyun Çantası</Link></li>
            </ul>
          </div>

          {/* Diğer Ana Kategoriler */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Ana Kategoriler</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog?category=kucuk-canta" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Küçük Çanta</Link></li>
              <li><Link href="/catalog?category=omuz-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Omuz Çantası</Link></li>
              <li><Link href="/catalog?category=2si-1-arada" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">2&apos;si 1 Arada</Link></li>
              <li><Link href="/catalog?category=suya-dayanikli" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Suya Dayanıklı</Link></li>
            </ul>
          </div>

          {/* SIRT ÇANTASI */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Sırt Çantası</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog?category=freeback" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Freeback</Link></li>
              <li><Link href="/catalog?category=sirt-cantasi" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Tüm Sırt Çantaları</Link></li>
              <li><Link href="/catalog" className="font-body text-base font-medium text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out mt-4">Tüm Ürünler →</Link></li>
            </ul>
          </div>

          {/* Featured Product */}
          {featuredProduct && (
            <div className="md:col-span-1 flex flex-col bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-heading text-xs font-bold tracking-wider text-gray-900 uppercase mb-3">Öne Çıkan</h3>
                  <div className="cursor-pointer relative h-48 rounded-lg overflow-hidden group mb-4" onClick={() => onViewProduct(featuredProduct)}>
                    <Image
                      src={featuredProduct.imageUrls[0]}
                      alt={featuredProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out cursor-pointer mb-2" onClick={() => onViewProduct(featuredProduct)}>
                    {featuredProduct.name}
                  </h4>
                </div>
                <button
                  onClick={() => onViewProduct(featuredProduct)}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out group"
                >
                  Detayları Gör
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-700 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
