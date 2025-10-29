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

          {/* By Category */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Kategoriye Göre</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Canvas Çantalar</Link></li>
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Deri Çantalar</Link></li>
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Pamuklu Çantalar</Link></li>
              <li><Link href="/catalog" className="font-body text-base font-medium text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out">Tümünü Gör →</Link></li>
            </ul>
          </div>

          {/* By Style */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Stile Göre</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">50'ler Dönemi</Link></li>
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">60'lar Dönemi</Link></li>
              <li><Link href="/catalog" className="font-body text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">70'ler Dönemi</Link></li>
            </ul>
          </div>

          {/* Featured Product */}
          {featuredProduct && (
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-bold tracking-wider text-gray-900 uppercase mb-4">Öne Çıkan Ürün</h3>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out cursor-pointer mb-4" onClick={() => onViewProduct(featuredProduct)}>
                    {featuredProduct.name}
                  </h4>
                  <p className="font-body text-sm text-gray-600 leading-relaxed line-clamp-3 font-light">
                    {featuredProduct.story}
                  </p>
                </div>
                <button
                  onClick={() => onViewProduct(featuredProduct)}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-gray-900 hover:text-[#F9A822] transition-colors duration-700 ease-in-out group"
                >
                  Detayları Gör
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-700 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="cursor-pointer relative h-64 md:h-full rounded-xl overflow-hidden group" onClick={() => onViewProduct(featuredProduct)}>
                <Image
                  src={featuredProduct.imageUrls[0]}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
