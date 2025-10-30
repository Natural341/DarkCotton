'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] top-1/3 right-1/4 bg-gray-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - Brand Info & Contact */}
          <div className="hidden lg:flex flex-col justify-center space-y-8 lg:col-span-2">
            <div>
              <Link href="/">
                <h1 className="font-heading text-5xl tracking-widest uppercase text-black mb-2">Dark Cotton</h1>
                <p className="font-body text-lg tracking-[0.3em] text-brand-orange uppercase">Authentic Handmade</p>
              </Link>
            </div>

            <div className="space-y-6">
              <p className="font-body text-gray-700 text-lg leading-relaxed">
                Premium el yapımı çantalar ile stilinizi tamamlayın. Her ürün özenle seçilmiş malzemelerden üretilir.
              </p>

              <div className="space-y-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="font-heading text-lg tracking-wider text-brand-orange uppercase">Üyelik Avantajları</h3>
                <ul className="space-y-3">
                  {['Özel indirimler ve kampanyalar', 'Hızlı ödeme seçenekleri', 'Sipariş takibi', 'Yeni ürünlerden ilk siz haberdar olun'].map((item, i) => (
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

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="font-heading text-lg tracking-wider text-brand-orange uppercase mb-4">İletişim</h3>
                <div className="space-y-3 font-body text-gray-700">
                  <p className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">info@darkcotton.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm">+90 (555) 123 45 67</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">İstanbul, Türkiye</span>
                  </p>
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
              {isLogin && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-800 font-body">
                    <span className="font-semibold">Demo Hesap:</span> okan10@gmail.com / 123
                  </p>
                </div>
              )}
            </div>

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

            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-gray-600 hover:text-brand-orange transition-colors duration-300 font-body inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Alışverişe Devam Et
              </Link>
            </div>

            {/* Mobile Logo */}
            <div className="lg:hidden mt-8 text-center border-t border-gray-200 pt-6">
              <Link href="/">
                <h2 className="font-heading text-2xl tracking-widest text-gray-900 uppercase">Dark Cotton</h2>
                <p className="font-body text-xs tracking-[0.2em] text-brand-orange uppercase mt-1">Authentic Handmade</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
