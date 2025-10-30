'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function ContactPage() {
  const router = useRouter();

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,168,34,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-full mb-6">
              Bize Ulaşın
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              Size nasıl yardımcı olabiliriz? Aşağıdaki bölümlerden ihtiyacınız olan bilgiye ulaşabilirsiniz.
            </p>
          </div>
        </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* KATEGORİLER */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 tracking-tight border-b-2 border-[#F9A822] pb-3">
              KATEGORİLER
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/catalog?category=kucuk-sirt-cantasi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Küçük Sırt Çantası
                </a>
              </li>
              <li>
                <a href="/catalog?category=buyuk-omuz-cantasi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Büyük Omuz Çantası
                </a>
              </li>
              <li>
                <a href="/catalog?category=kucuk-omuz-cantasi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Küçük Omuz Çantası
                </a>
              </li>
              <li>
                <a href="/catalog?category=buyuk-sirt-cantasi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Büyük Sırt Çantası
                </a>
              </li>
              <li>
                <a href="/catalog?category=bez-canta" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Bez Çanta
                </a>
              </li>
              <li>
                <a href="/catalog?category=travel-seyehat" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Travel Seyehat
                </a>
              </li>
            </ul>
          </div>

          {/* KURUMSAL */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 tracking-tight border-b-2 border-[#F9A822] pb-3">
              KURUMSAL
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/our-story" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → İletişim
                </a>
              </li>
              <li>
                <a href="/stores" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Mağazamız
                </a>
              </li>
              <li>
                <a href="#kullanici-sozlesmesi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Kullanıcı Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#gizlilik-politikasi" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Gizlilik ve Güvenlik
                </a>
              </li>
              <li>
                <a href="#kvkk" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Kişisel Verilerin Korunması
                </a>
              </li>
              <li>
                <a href="#mesafeli-satis" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Mesafeli Satış Sözleşmesi
                </a>
              </li>
            </ul>
          </div>

          {/* YARDIM */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 tracking-tight border-b-2 border-[#F9A822] pb-3">
              YARDIM
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/order-tracking" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Sipariş Takip
                </a>
              </li>
              <li>
                <a href="/returns" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → İade ve Değişim
                </a>
              </li>
              <li>
                <a href="#teslimat" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Teslimat İşlemleri
                </a>
              </li>
              <li>
                <a href="#siparis-odeme" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Sipariş ve Ödeme
                </a>
              </li>
              <li>
                <a href="#musteri-destek" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Müşteri Destek
                </a>
              </li>
              <li>
                <a href="#sss" className="text-base text-gray-700 hover:text-[#F9A822] hover:translate-x-2 inline-block transition-all duration-700 ease-in-out font-light">
                  → Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* İLETİŞİM BİLGİLERİ */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 tracking-tight border-b-2 border-[#F9A822] pb-3">
              İLETİŞİM
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F9A822] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a href="tel:05070304401" className="text-lg text-[#F9A822] hover:underline font-medium">
                    0507 030 44 01
                  </a>
                  <p className="text-sm text-gray-600 font-light mt-1">
                    Haftaiçi 08:30 - 18:00 arası
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F9A822] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">E-posta</p>
                  <a href="mailto:info@darkcotton.com" className="text-base text-gray-700 hover:text-[#F9A822] transition-colors duration-700 ease-in-out">
                    info@darkcotton.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F9A822] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Adres</p>
                  <p className="text-base text-gray-700 font-light">
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kampanyalar Bölümü */}
        <div className="mt-16 bg-gradient-to-r from-[#F9A822] to-[#ff9500] rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                🎉 Özel Kampanyalar
              </h2>
              <p className="text-lg font-light mb-6 text-white/90">
                Yeni ürünler ve özel indirimlerden haberdar olmak için e-bültene abone olun!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>İlk alışverişte %15 indirim</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Özel gün indirimleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ücretsiz kargo fırsatları</span>
                </li>
              </ul>
            </div>

            <div>
              <form className="bg-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E-Bültene Abone Ol
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out"
                  />
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-700 ease-in-out transform hover:scale-105"
                  >
                    Abone Ol
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bize Ulaşın
          </h2>
          <form className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out"
                placeholder="Mesajınızın konusu"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-700 ease-in-out resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-700 ease-in-out transform hover:scale-105"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
