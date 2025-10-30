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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] -bottom-64 -right-64 bg-orange-600/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500/5 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,168,34,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,168,34,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block group">
              <h1 className="font-heading text-4xl tracking-[0.3em] uppercase text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                Dark Cotton
              </h1>
              <p className="font-body text-xs tracking-[0.3em] text-brand-orange uppercase">
                Authentic Handmade
              </p>
            </Link>
          </div>

          {/* Main Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Tab Switcher */}
            <div className="flex gap-2 mb-8 bg-white/5 rounded-2xl p-1.5">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                }}
                className={`flex-1 py-3 px-6 font-heading text-sm tracking-wider uppercase transition-all duration-300 rounded-xl ${
                  isLogin
                    ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white shadow-lg shadow-brand-orange/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Giriş Yap
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                }}
                className={`flex-1 py-3 px-6 font-heading text-sm tracking-wider uppercase transition-all duration-300 rounded-xl ${
                  !isLogin
                    ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white shadow-lg shadow-brand-orange/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Üye Ol
              </button>
            </div>

            {/* Header Text */}
            <div className="mb-6">
              <h2 className="font-heading text-2xl tracking-wide text-white mb-2">
                {isLogin ? 'Tekrar Hoş Geldiniz' : 'Aramıza Katılın'}
              </h2>
              <p className="font-body text-sm text-gray-400">
                {isLogin ? 'Hesabınıza giriş yapın ve alışverişe devam edin' : 'Yeni bir hesap oluşturun ve ayrıcalıklardan yararlanın'}
              </p>
            </div>

            {/* Demo Account Info - Only for Login */}
            {isLogin && (
              <div className="mb-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-blue-300 mb-1">Demo Hesap</p>
                    <p className="text-xs text-blue-200 font-mono">okan10@gmail.com</p>
                    <p className="text-xs text-blue-200 font-mono">Portakal2004!</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block font-body text-sm text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all duration-300 font-body text-white placeholder-gray-500"
                    placeholder="Adınızı ve soyadınızı girin"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label className="block font-body text-sm text-gray-300 mb-2">
                  Email Adresi
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all duration-300 font-body text-white placeholder-gray-500"
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm text-gray-300 mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all duration-300 font-body text-white placeholder-gray-500"
                  placeholder="En az 6 karakter"
                  required
                  minLength={6}
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3.5 rounded-xl text-sm font-body backdrop-blur-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-orange to-orange-600 text-white font-heading text-sm tracking-wider uppercase py-4 rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
              </button>
            </form>

            {/* Forgot Password Link - Only for Login */}
            {isLogin && (
              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-gray-400 hover:text-brand-orange transition-colors duration-300 font-body">
                  Şifrenizi mi unuttunuz?
                </a>
              </div>
            )}

            {/* Back to Shopping */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 font-body inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>

          {/* Features - Below the card */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 font-body">Güvenli Ödeme</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 font-body">Hızlı Teslimat</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 font-body">Özel İndirimler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
