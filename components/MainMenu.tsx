'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CloseIcon from './icons/CloseIcon';
import { PRODUCTS } from '@/constants';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import PinterestIcon from './icons/PinterestIcon';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isOpen, onClose }) => {
  const featuredProduct = PRODUCTS.find(p => p.id === 3); // The Heritage Rucksack
  const router = useRouter();

  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-brand-charcoal/95 backdrop-blur-sm animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <div className="flex justify-end h-24 items-center">
          <button onClick={onClose} className="text-brand-vanilla hover:text-brand-orange transition-colors duration-300">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center md:items-start space-y-4">
            <button onClick={() => handleNavigate('/catalog')} className="font-heading text-5xl md:text-7xl tracking-wider uppercase text-brand-vanilla hover:text-brand-orange transition-colors duration-300">Shop</button>
            <button onClick={() => handleNavigate('/our-story')} className="font-heading text-5xl md:text-7xl tracking-wider uppercase text-brand-vanilla hover:text-brand-orange transition-colors duration-300">Our Story</button>
            <button onClick={() => handleNavigate('/journal')} className="font-heading text-5xl md:text-7xl tracking-wider uppercase text-brand-vanilla hover:text-brand-orange transition-colors duration-300">Journal</button>
          </nav>

          {/* Featured Content */}
          <div className="hidden md:flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-sm">
                <h3 className="font-heading text-lg tracking-widest text-brand-orange uppercase mb-4">Featured Collection</h3>
                {featuredProduct && (
                     <div className="group cursor-pointer" onClick={() => handleNavigate(`/product/${featuredProduct.id}`)}>
                        <div className="relative w-full h-80">
                          <Image
                            src={featuredProduct.imageUrls[2]}
                            alt={featuredProduct.name}
                            fill
                            className="object-cover border-4 border-brand-vanilla/20 group-hover:border-brand-orange transition-all duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <h4 className="font-heading text-2xl mt-4 text-brand-vanilla group-hover:text-brand-orange transition-colors">{featuredProduct.name}</h4>
                     </div>
                )}
            </div>
          </div>
        </div>

        <div className="text-center py-8">
            <p className="font-body text-brand-orange italic mb-4">&quot;Crafted for the Unconventional.&quot;</p>
            <div className="flex justify-center md:justify-center space-x-6">
              <a href="#" aria-label="Instagram" className="text-brand-vanilla/70 hover:text-brand-orange transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className="text-brand-vanilla/70 hover:text-brand-orange transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Pinterest" className="text-brand-vanilla/70 hover:text-brand-orange transition-colors"><PinterestIcon /></a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MainMenu;
