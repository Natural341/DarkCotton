'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export default function OurStoryPage() {
  const router = useRouter();

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f1eb]">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
            alt="Dark Cotton Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-heading text-5xl md:text-7xl tracking-tight mb-4">Hikayemiz</h1>
              <div className="w-24 h-px bg-white mx-auto mb-6"></div>
              <p className="font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Her çanta, bir hikaye anlatır. Bizimki ise tutkuyla başlayan ve zamanla olgunlaşan bir yolculuktur.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] bg-[#f5f1eb] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-black">
                  Başlangıç
                </h2>
                <div className="w-16 h-1 bg-black"></div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Dark Cotton, 2018 yılında İstanbul&apos;da küçük bir atölyede kuruldu. Kurucumuz Ahmet Yılmaz,
                  tekstil endüstrisinde yıllarca çalıştıktan sonra, kendi tarzını ve kalite anlayışını
                  yansıtan bir marka yaratma hayalini gerçekleştirdi.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  İlk çantamız, geri dönüştürülmüş kanvas kumaştan elle üretildi. O günden bugüne,
                  sürdürülebilirlik ve el işçiliği felsefemizin temel taşları olmaya devam ediyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-[#f5f1eb]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-black mb-4">
                Değerlerimiz
              </h2>
              <div className="w-16 h-1 bg-black mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-lg transition-all duration-700 ease-in-out hover:shadow-xl">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">♻</span>
                </div>
                <h3 className="font-heading text-xl tracking-tight text-black mb-4 text-center">
                  Sürdürülebilirlik
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Doğaya saygılı üretim yöntemleri ve geri dönüştürülmüş malzemelerle
                  geleceğe yatırım yapıyoruz.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-lg transition-all duration-700 ease-in-out hover:shadow-xl">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">✋</span>
                </div>
                <h3 className="font-heading text-xl tracking-tight text-black mb-4 text-center">
                  El İşçiliği
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Her ürün, deneyimli ustalarımız tarafından özenle ve sabırla
                  üretiliyor.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-lg transition-all duration-700 ease-in-out hover:shadow-xl">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="font-heading text-xl tracking-tight text-black mb-4 text-center">
                  Kalite
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Zamana meydan okuyan, yıllar boyunca kullanılabilecek
                  dayanıklı ürünler üretiyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-black">
                  Zanaat ve Ustalık
                </h2>
                <div className="w-16 h-1 bg-black"></div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Her çantamız, titizlikle seçilmiş malzemelerden başlayarak,
                  deneyimli ustalarımızın elinde şekilleniyor. Dikiş, kesim ve montaj
                  aşamalarında hiçbir detay gözden kaçmıyor.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Kullandığımız kanvas, deri ve organik pamuklu kumaşlar, hem dayanıklılığı
                  hem de estetiği bir araya getiriyor. Her ürün, kendi benzersiz karakterini
                  taşıyor ve zamanla daha da güzelleşiyor.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="border-l-2 border-black pl-4">
                    <p className="text-3xl font-bold text-black">50+</p>
                    <p className="text-sm text-gray-600">Farklı Model</p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <p className="text-3xl font-bold text-black">10,000+</p>
                    <p className="text-sm text-gray-600">Mutlu Müşteri</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-[#f5f1eb] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/2081125/pexels-photo-2081125.jpeg"
                  alt="Our Products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-32 bg-[#f5f1eb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-black mb-6">
              Misyonumuz
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Dark Cotton olarak, sadece çanta üretmiyoruz. Her ürünümüz ile bir yaşam tarzı,
              bir felsefe sunuyoruz. Sürdürülebilir moda anlayışımızla, hem gezegene hem de
              gelecek nesillere karşı sorumluluğumuzu yerine getiriyoruz.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Hedefimiz, her müşterimizin yıllarca kullanabileceği, zamanla daha değerli hale
              gelen ve kendilerine eşlik eden ürünler yaratmak.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-black mb-6">
              Koleksiyonumuzu Keşfedin
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Her biri özel olarak tasarlanmış çantalarımızı inceleyin ve size en uygun olanı bulun.
            </p>
            <button
              onClick={() => router.push('/catalog')}
              className="px-12 py-4 bg-black text-white font-medium text-sm tracking-wide uppercase hover:bg-black/90 transition-all duration-700 ease-in-out"
            >
              Mağazayı Görüntüle
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
