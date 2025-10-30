'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { useCart } from '@/app/context/CartContext';
import { useAuth } from '@/app/context/AuthContext';
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
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Kullanıcı menüsü ve arama dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    if (isUserMenuOpen || isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen, isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
          className="sticky top-0 z-50 bg-white/30 backdrop-blur-3xl shadow-lg border-b border-black/10"
          onMouseLeave={() => setShopMenuOpen(false)}
          style={{
            backdropFilter: 'blur(50px) saturate(180%)',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
          }}
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
                      ÜRÜNLER
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
                  <p className="font-body text-xs tracking-[0.2em] text-brand-orange uppercase -mt-1">Authentic Handmade</p>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div ref={searchRef} className="relative hidden sm:block">
                <button
                  onClick={() => setSearchOpen(!isSearchOpen)}
                  className="text-black hover:text-brand-orange transition-all duration-700 ease-in-out"
                  aria-label="Search"
                >
                  <SearchIcon />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-4 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-lg border border-gray-200 p-4 z-50 animate-fadeIn">
                    <form onSubmit={handleSearch}>
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Ürün ara..."
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 font-body text-sm"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-orange hover:text-orange-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 font-body">Popüler aramalar:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['Sırt Çantası', 'Omuz Çantası', 'Bel Çantası'].map((term) => (
                          <button
                            key={term}
                            onClick={() => {
                              setSearchQuery(term);
                              router.push(`/catalog?search=${encodeURIComponent(term)}`);
                              setSearchOpen(false);
                            }}
                            className="text-xs px-3 py-1 bg-gray-100 hover:bg-brand-orange hover:text-white rounded-full transition-colors font-body"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              {isAuthenticated ? (
                <div ref={userMenuRef} className="relative hidden sm:block">
                  <button
                    onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-heading tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out border border-black/20 hover:border-brand-orange rounded"
                  >
                    <UserIcon />
                    <span>{user?.name}</span>
                  </button>

                  {/* Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl shadow-2xl rounded-lg border border-gray-200 py-2 z-50 animate-fadeIn">
                      <button
                        onClick={() => {
                          router.push('/profile');
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm font-body text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                      >
                        Profilim
                      </button>
                      <button
                        onClick={() => {
                          router.push('/orders');
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm font-body text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                      >
                        Siparişlerim
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button
                        onClick={() => {
                          logout();
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm font-body text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => router.push('/auth')}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-heading tracking-wider text-black hover:text-brand-orange transition-all duration-700 ease-in-out border border-black/20 hover:border-brand-orange rounded"
                  aria-label="Üye Ol"
                >
                  <UserIcon />
                  <span>ÜYE OL</span>
                </button>
              )}

              <button
                onClick={() => router.push('/checkout')}
                className="relative text-black hover:text-brand-orange transition-all duration-700 ease-in-out group"
                aria-label="Shopping Cart"
              >
                  <div className="relative">
                    <CartIcon />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-brand-orange text-white text-xs font-bold rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform">
                            {cartCount}
                        </span>
                    )}
                  </div>
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
