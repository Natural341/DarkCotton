'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function JournalPage() {
  const router = useRouter();

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 flex flex-col items-center justify-center text-center">
            <h1 className="font-heading text-5xl md:text-7xl tracking-wider uppercase text-brand-vanilla">The Journal</h1>
            <div className="w-24 h-px bg-brand-orange mx-auto mt-6 mb-8"></div>
            <p className="font-body text-2xl text-brand-vanilla/80 max-w-2xl">
                A space for stories from the road, artisan spotlights, and musings on a life well-crafted. Our journal is a look behind the curtain.
            </p>
            <p className="font-heading text-4xl text-brand-orange mt-12 animate-pulse">
                Coming Soon...
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
