'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { PRODUCTS } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveProductCard from '@/components/InteractiveProductCard';

export default function CatalogPage() {
    const router = useRouter();
    const [filter, setFilter] = useState<'All' | Product['category']>('All');

    const filteredProducts = PRODUCTS.filter(p => filter === 'All' || p.category === filter);

    const filterOptions: ('All' | Product['category'])[] = ['All', 'Canvas', 'Cotton', 'Leather'];

    const handleViewProduct = (product: Product) => {
      router.push(`/product/${product.id}`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50/50">
          <Header onViewProduct={handleViewProduct} />
          <main className="flex-grow">
            <div className="py-20 md:py-28">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
                        Koleksiyonumuz
                    </h1>
                    <p className="font-body text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Tutku ile üretilmiş, ömür boyu dayanacak şekilde tasarlanmış çantalar
                    </p>
                    <div className="w-20 h-1 bg-[#F9A822] mx-auto mt-6"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 px-4">
                    {filterOptions.map(option => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            className={`font-heading font-semibold tracking-wide text-sm md:text-base px-6 py-3 rounded-full transition-all duration-700 ease-in-out
                            ${filter === option
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105'}`}
                        >
                            {option === 'All' ? 'Tümü' : option}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 px-0">
                    {filteredProducts.map((product) => (
                        <InteractiveProductCard key={product.id} product={product} onViewProduct={handleViewProduct} />
                    ))}
                </div>
            </div>
          </main>
          <Footer />
        </div>
    );
}
