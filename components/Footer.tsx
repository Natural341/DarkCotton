'use client';

import React, { useState } from 'react';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import PinterestIcon from './icons/PinterestIcon';

const Footer: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Türkiye');

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50/50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Newsletter Section - Left Side */}
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Yeniliklerden ilk senin haberin olsun
            </h2>
            <p className="text-base text-gray-600 font-light mb-8 leading-relaxed">
              Yeni ürünler, özel kampanyalar ve etkinliklerden haberdar olmak için e-bültene abone ol.
            </p>

            {/* Email Input */}
            <form className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="w-full bg-white border-2 border-gray-300 focus:border-black focus:ring-0 text-gray-900 px-4 py-4 font-body text-base transition-all duration-700 ease-in-out rounded-lg"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-black text-white font-semibold text-sm tracking-wide uppercase hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-md"
                >
                  Abone Ol
                </button>
              </div>
            </form>

            {/* Country Selector */}
            <div className="relative inline-block">
              <button className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-all duration-700 ease-in-out">
                <span className="text-2xl">🇹🇷</span>
                <span className="font-medium text-gray-900">{selectedCountry}</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Links - Right Side (3 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">

            {/* Bilgi Column */}
            <div>
              <h3 className="font-heading text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">Bilgi</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Sipariş Takibi</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">İade ve Değişim</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Sipariş ve Ödeme</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Satış Noktaları</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Ekibe Katıl</a></li>
              </ul>
            </div>

            {/* Yardım Column */}
            <div>
              <h3 className="font-heading text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">Yardım</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">İşlem Rehberi</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">KVK Politikası</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Çerez Ayarları</a></li>
                <li><a href="#" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">İletişim</a></li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 className="font-heading text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">Bizi Takip Edin</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Spotify"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Behance"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-700 ease-in-out"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 font-light">&copy; {new Date().getFullYear()} Dark Cotton. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Gizlilik Politikası</a>
            <a href="#" className="hover:text-[#F9A822] transition-colors duration-700 ease-in-out font-light">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
