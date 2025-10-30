'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function OrderTrackingPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulated tracking result
    setTimeout(() => {
      setTrackingResult({
        orderNumber: orderNumber,
        status: 'Kargoya Verildi',
        date: '28 Ekim 2025',
        estimatedDelivery: '31 Ekim 2025',
        carrier: 'Aras Kargo',
        trackingCode: 'ARS123456789TR',
        timeline: [
          { status: 'Sipariş Alındı', date: '26 Ekim 2025, 14:30', completed: true },
          { status: 'Hazırlanıyor', date: '27 Ekim 2025, 09:15', completed: true },
          { status: 'Kargoya Verildi', date: '28 Ekim 2025, 11:45', completed: true },
          { status: 'Dağıtımda', date: '30 Ekim 2025 (Tahmini)', completed: false },
          { status: 'Teslim Edildi', date: '31 Ekim 2025 (Tahmini)', completed: false },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,168,34,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-full mb-6">
              Sipariş Takibi
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Siparişinizi Takip Edin
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              Sipariş numaranız ve e-posta adresinizle kolayca kargo durumunuzu görüntüleyin
            </p>
          </div>
        </section>

        {/* Tracking Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <form onSubmit={handleTrackOrder} className="space-y-6">
                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                    Sipariş Numarası
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-300"
                    placeholder="Örn: DC-2025-001234"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-600">
                    Sipariş numaranızı e-posta onayınızda bulabilirsiniz
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#F9A822] focus:ring-0 text-gray-900 transition-all duration-300"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full py-4 bg-gradient-to-r from-[#F9A822] to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSearching ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Aranıyor...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Sipariş Sorgula
                    </>
                  )}
                </button>
              </form>

              {/* Info Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Teslimat Süresi</p>
                      <p className="text-sm text-gray-600 mt-1">1-3 iş günü içinde</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Ücretsiz Kargo</p>
                      <p className="text-sm text-gray-600 mt-1">500 TL üzeri siparişlerde</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Result */}
        {trackingResult && (
          <section className="pb-16 md:pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Status Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {trackingResult.status}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Sipariş Numarası: <span className="font-semibold">{trackingResult.orderNumber}</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Kargo Firması</p>
                        <p className="font-semibold text-gray-900">{trackingResult.carrier}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Takip Kodu</p>
                        <p className="font-semibold text-gray-900">{trackingResult.trackingCode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tahmini Teslimat</p>
                        <p className="font-semibold text-green-600">{trackingResult.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">Sipariş Durumu</h3>
                <div className="space-y-6">
                  {trackingResult.timeline.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.completed ? 'bg-[#F9A822]' : 'bg-gray-200'
                        }`}>
                          {item.completed ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        {index < trackingResult.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${item.completed ? 'bg-[#F9A822]' : 'bg-gray-200'}`}></div>
                        )}
                      </div>
                      <div className="flex-grow pb-6">
                        <h4 className={`font-semibold text-lg ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {item.status}
                        </h4>
                        <p className={`text-sm ${item.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Yardıma mı ihtiyacınız var?</h3>
                <p className="text-gray-700 mb-6">
                  Siparişinizle ilgili herhangi bir sorunuz varsa müşteri hizmetlerimizle iletişime geçebilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push('/contact')}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    Bize Ulaşın
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#F9A822] transition-all duration-300">
                    <a href="tel:05070304401">0507 030 44 01</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Siparişim ne zaman kargoya verilecek?</h3>
                <p className="text-gray-700">
                  Siparişler aynı gün içinde hazırlanır ve 1 iş günü içinde kargoya verilir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Kargo ücreti ne kadar?</h3>
                <p className="text-gray-700">
                  500 TL ve üzeri alışverişlerde kargo ücretsizdir. Altında 29.90 TL kargo ücreti uygulanır.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Teslimat süresi ne kadar?</h3>
                <p className="text-gray-700">
                  Kargoya verildikten sonra 1-3 iş günü içinde adresinize teslim edilir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
