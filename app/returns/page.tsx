'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function ReturnsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'return' | 'exchange'>('return');

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
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
              Kolay İade & Değişim
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              İade ve Değişim
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              14 gün içinde ücretsiz iade ve değişim hakkınız var
            </p>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">14 Gün İade</h3>
                <p className="text-gray-700">
                  Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade hakkı
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Ücretsiz İade</h3>
                <p className="text-gray-700">
                  İade kargo ücreti tarafımızca karşılanır
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#F9A822] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Kolay Değişim</h3>
                <p className="text-gray-700">
                  Farklı model veya renk seçenekleriyle değişim yapabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab('return')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'return'
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                İade İşlemi
              </button>
              <button
                onClick={() => setActiveTab('exchange')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'exchange'
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Değişim İşlemi
              </button>
            </div>

            {/* Return Content */}
            {activeTab === 'return' && (
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  İade Nasıl Yapılır?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      1
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">İade Talebinizi Oluşturun</h3>
                      <p className="text-gray-700">
                        Hesabınıza giriş yaparak &quot;Siparişlerim&quot; bölümünden iade talebinde bulunun.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      2
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Ürünü Paketleyin</h3>
                      <p className="text-gray-700">
                        Ürünü orijinal ambalajı ile birlikte gönderin. Etiketler ve aksesuarlar eksiksiz olmalıdır.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      3
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Kargo İle Gönderin</h3>
                      <p className="text-gray-700">
                        İade kodu ile birlikte ücretsiz iade kargosu tarafınıza gönderilecektir.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      4
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Paranız İade Edilsin</h3>
                      <p className="text-gray-700">
                        Ürün depoya ulaştıktan sonra 3-5 iş günü içinde ödemeniz iade edilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <div className="flex gap-3">
                    <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">İade Koşulları</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Ürün kullanılmamış ve orijinal ambalajında olmalıdır</li>
                        <li>• Tüm etiketler ve aksesuarlar eksiksiz olmalıdır</li>
                        <li>• İade süresi 14 gündür</li>
                        <li>• Hijyen ürünleri açılmış ise iade edilemez</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/auth')}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-[#F9A822] to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  İade Talebinde Bulun
                </button>
              </div>
            )}

            {/* Exchange Content */}
            {activeTab === 'exchange' && (
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Değişim Nasıl Yapılır?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      1
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Değişim Talebinizi Oluşturun</h3>
                      <p className="text-gray-700">
                        Hesabınızdan veya müşteri hizmetlerimizden değişim talebinde bulunun.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      2
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Değişim Seçeneklerini Belirleyin</h3>
                      <p className="text-gray-700">
                        Farklı renk, model veya beden seçeneklerinden istediğinizi seçin.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      3
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Ürünü Geri Gönderin</h3>
                      <p className="text-gray-700">
                        Mevcut ürünü orijinal ambalajıyla birlikte ücretsiz kargo ile gönderin.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F9A822] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-xl">
                      4
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Yeni Ürününüzü Alın</h3>
                      <p className="text-gray-700">
                        Ürün depoya ulaştıktan sonra yeni ürününüz 2-3 iş günü içinde kargoya verilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Aynı Fiyat Değişim</h4>
                    <p className="text-sm text-gray-700">
                      Aynı fiyattaki ürünler için ek ödeme gerekmez
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Farklı Fiyat Değişim</h4>
                    <p className="text-sm text-gray-700">
                      Fark tutarı iade veya tahsil edilir
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/auth')}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-[#F9A822] to-orange-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Değişim Talebinde Bulun
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#F9A822]">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">İade süresi ne kadar?</h3>
                <p className="text-gray-700">
                  Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade hakkınız bulunmaktadır.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#F9A822]">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">İade kargo ücreti kim tarafından ödenir?</h3>
                <p className="text-gray-700">
                  İade kargo ücreti tamamen Dark Cotton tarafından karşılanır. Size ücretsiz iade kargo kodu gönderilir.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#F9A822]">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">İade param ne zaman hesabıma geçer?</h3>
                <p className="text-gray-700">
                  İade edilen ürün depoya ulaştıktan ve kontrolü tamamlandıktan sonra 3-5 iş günü içinde ödeme iadesi yapılır.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#F9A822]">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Kullanılmış ürün iade edilebilir mi?</h3>
                <p className="text-gray-700">
                  Hayır, ürünün kullanılmamış, orijinal ambalajında ve tüm etiketleri eksiksiz olması gerekmektedir.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#F9A822]">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Değişim süreci nasıl işler?</h3>
                <p className="text-gray-700">
                  Değişim talebiniz onaylandıktan sonra mevcut ürünü geri gönderirsiniz. Ürün depoya ulaştığında yeni seçtiğiniz ürün size kargolan edilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Başka Sorunuz mu Var?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Müşteri hizmetlerimiz size yardımcı olmak için burada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Bize Ulaşın
              </button>
              <a
                href="tel:05070304401"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                0507 030 44 01
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
