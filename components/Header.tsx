'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { useCart } from '@/app/context/CartContext';
import CartIcon from './icons/CartIcon';
import SearchIcon from './icons/SearchIcon';
import UserIcon from './icons/UserIcon';
import ShopMenu from './ShopMenu';
import MenuIcon from './icons/MenuIcon';
import MainMenu from './MainMenu';

interface HeaderProps {
  onViewProduct: (product: Product) => void;
}

const Header: React.FC<HeaderProps> = ({ onViewProduct }) => {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();

  return (
    <>
      <header
          className="sticky top-0 z-50 bg-white/60 backdrop-blur-3xl shadow-sm border-b border-black/10"
          onMouseLeave={() => setShopMenuOpen(false)}
          style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left Nav (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => setMainMenuOpen(true)} className="font-heading text-sm tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out">MENÜ</button>
              <Link href="/" className="font-heading text-sm tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out">ANASAYFA</Link>
              <div onMouseEnter={() => setShopMenuOpen(true)}>
                  <Link
                      href="/catalog"
                      className="font-heading text-sm tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out"
                  >
                      MAĞAZA
                  </Link>
              </div>
              <Link href="/our-story" className="font-heading text-sm tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out">HİKAYEMİZ</Link>
            </nav>

            {/* Left Nav (Mobile) */}
            <nav className="md:hidden">
              <button onClick={() => setMainMenuOpen(true)} className="text-black hover:text-brand-orange transition-all duration-700 ease-in-out">
                <MenuIcon />
              </button>
            </nav>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
               <Link href="/" className="text-center block">
                  <h1 className="font-heading text-3xl tracking-widest text-black uppercase">Dark Cotton</h1>
                  <p className="font-body text-xs tracking-[0.2em] text-brand-orange uppercase -mt-1">Premium Bags</p>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button className="hidden sm:block text-black hover:text-brand-orange transition-all duration-700 ease-in-out" aria-label="Search">
                  <SearchIcon />
              </button>
              <button className="hidden sm:block text-black hover:text-brand-orange transition-all duration-700 ease-in-out" aria-label="My Account">
                  <UserIcon />
              </button>
              <button onClick={() => router.push('/checkout')} className="relative text-black hover:text-brand-orange transition-all duration-700 ease-in-out" aria-label="Shopping Cart">
                  <CartIcon />
                  {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-brand-orange text-white text-xs font-bold rounded-full">
                          {cartCount}
                      </span>
                  )}
              </button>
            </div>
          </div>
        </div>

        <ShopMenu isOpen={isShopMenuOpen} onViewProduct={onViewProduct} />
      </header>
      <MainMenu isOpen={isMainMenuOpen} onClose={() => setMainMenuOpen(false)} />
    </>
  );
};

export default Header;
