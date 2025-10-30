'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const success = login(email, password);
      if (success) {
        router.push('/');
      } else {
        setError('Email veya şifre hatalı!');
      }
    } else {
      if (!name.trim()) {
        setError('Lütfen adınızı girin!');
        return;
      }
      const success = register(name, email, password);
      if (success) {
        router.push('/');
      } else {
        setError('Bu email adresi zaten kayıtlı!');
      }
    }
  };

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onViewProduct={handleViewProduct} />

      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

              {/* Left Side - Brand Info & Contact */}
              <div className="hidden lg:flex flex-col justify-start space-y-8 lg:col-span-2">
                <div>
                  <h1 className="font-heading text-5xl tracking-widest uppercase text-black mb-2">Dark Cotton</h1>
                  <p className="font-body text-lg tracking-[0.3em] text-brand-orange uppercase">Authentic Handmade</p>
                </div>

                <div className="space-y-6">
                  <p className="font-body text-gray-700 text-lg leading-relaxed">
                    Premium el yapımı çantalar ile stilinizi tamamlayın. Her ürün özenle seçilmiş malzemelerden üretilir.
                  </p>

                  {/* Membership Benefits */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-heading text-lg tracking-wider text-brand-orange uppercase mb-4">Üyelik Avantajları</h3>
                    <ul className="space-y-3">
                      {[
                        'Özel indirimler ve kampanyalar',
                        'Hızlı ödeme seçenekleri',
                        'Sipariş takibi',
                        'Yeni ürünlerden ilk siz haberdar olun'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-body text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-heading text-lg tracking-wider text-brand-orange uppercase mb-4">İletişim</h3>
                    <div className="space-y-3 font-body text-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm">info@darkcotton.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-sm">+90 (555) 123 45 67</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm">İstanbul, Türkiye</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="font-heading text-lg tracking-wider text-brand-orange uppercase mb-4">Bizi Takip Edin</h3>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form Container */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-200 lg:col-span-3">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="font-heading text-3xl tracking-wider text-black mb-2">
                    {isLogin ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
                  </h2>
                  <p className="font-body text-gray-600 text-sm">
                    {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni bir hesap oluşturun'}
                  </p>
                </div>

                {/* Demo Account Info - Only for Login */}
                {isLogin && (
                  <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-blue-900 mb-2">Demo Hesap ile Giriş Yapın</p>
                        <div className="space-y-1">
                          <p className="text-xs text-blue-800 font-mono bg-blue-100 px-2 py-1 rounded inline-block">okan10@gmail.com</p>
                          <p className="text-xs text-blue-800 font-mono bg-blue-100 px-2 py-1 rounded inline-block ml-2">Portakal2004!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tabs */}
                <div className="flex gap-2 mb-8 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => {
                      setIsLogin(true);
                      setError('');
                    }}
                    className={`flex-1 py-3 px-4 font-heading text-sm tracking-wider uppercase transition-all duration-300 rounded-lg ${
                      isLogin
                        ? 'bg-white text-brand-orange shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => {
                      setIsLogin(false);
                      setError('');
                    }}
                    className={`flex-1 py-3 px-4 font-heading text-sm tracking-wider uppercase transition-all duration-300 rounded-lg ${
                      !isLogin
                        ? 'bg-white text-brand-orange shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Üye Ol
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div>
                      <label className="block font-heading text-sm tracking-wider text-gray-700 mb-2">
                        AD SOYAD
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 font-body"
                        placeholder="Adınızı girin"
                        required={!isLogin}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-heading text-sm tracking-wider text-gray-700 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 font-body"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-sm tracking-wider text-gray-700 mb-2">
                      ŞİFRE
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 font-body"
                      placeholder="Şifrenizi girin"
                      required
                      minLength={6}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-body">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-brand-orange text-white font-heading text-sm tracking-wider uppercase py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isLogin ? 'Giriş Yap' : 'Üye Ol'}
                  </button>
                </form>

                {/* Additional Links */}
                {isLogin && (
                  <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-gray-600 hover:text-brand-orange transition-colors duration-300 font-body">
                      Şifremi Unuttum
                    </a>
                  </div>
                )}

                {/* Mobile Logo & Contact */}
                <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center mb-6">
                    <h2 className="font-heading text-2xl tracking-widest text-gray-900 uppercase">Dark Cotton</h2>
                    <p className="font-body text-xs tracking-[0.2em] text-brand-orange uppercase mt-1">Authentic Handmade</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-heading text-sm tracking-wider text-brand-orange uppercase mb-3">İletişim</h3>
                    <div className="space-y-2 text-xs text-gray-600">
                      <p>📧 info@darkcotton.com</p>
                      <p>📞 +90 (555) 123 45 67</p>
                      <p>📍 İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
