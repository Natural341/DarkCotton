'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TurkeyStoreMap from '@/components/TurkeyStoreMap';
import { Product } from '@/types';

interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
}

const STORES: Store[] = [
  { id: 1, name: 'Nişantaşı', city: 'İstanbul', address: 'Teşvikiye Caddesi No: 123, Şişli', phone: '+90 212 234 56 78', hours: '10:00 - 20:00' },
  { id: 2, name: 'Kadıköy', city: 'İstanbul', address: 'Bağdat Caddesi No: 456, Kadıköy', phone: '+90 216 345 67 89', hours: '10:00 - 20:00' },
  { id: 3, name: 'Bebek', city: 'İstanbul', address: 'Cevdetpaşa Caddesi No: 89, Beşiktaş', phone: '+90 212 263 74 85', hours: '10:00 - 20:00' },
  { id: 4, name: 'Etiler', city: 'İstanbul', address: 'Nispetiye Caddesi No: 45, Beşiktaş', phone: '+90 212 351 62 94', hours: '10:00 - 20:00' },
  { id: 5, name: 'Zorlu Center', city: 'İstanbul', address: 'Zorlu Center AVM, Beşiktaş', phone: '+90 212 924 03 61', hours: '10:00 - 22:00' },
  { id: 6, name: 'İstinye Park', city: 'İstanbul', address: 'İstinye Park AVM, Sarıyer', phone: '+90 212 345 12 34', hours: '10:00 - 22:00' },
  { id: 7, name: 'Kanyon', city: 'İstanbul', address: 'Kanyon AVM, Levent', phone: '+90 212 353 45 67', hours: '10:00 - 22:00' },
  { id: 8, name: 'Akasya', city: 'İstanbul', address: 'Akasya AVM, Acıbadem', phone: '+90 216 571 23 45', hours: '10:00 - 22:00' },
  { id: 9, name: 'Moda', city: 'İstanbul', address: 'Moda Caddesi No: 78, Kadıköy', phone: '+90 216 349 85 96', hours: '10:00 - 20:00' },
  { id: 10, name: 'Suadiye', city: 'İstanbul', address: 'Bağdat Caddesi No: 234, Kadıköy', phone: '+90 216 385 74 62', hours: '10:00 - 20:00' },

  { id: 11, name: 'Çankaya', city: 'Ankara', address: 'Tunalı Hilmi Caddesi No: 789, Çankaya', phone: '+90 312 456 78 90', hours: '10:00 - 20:00' },
  { id: 12, name: 'Kızılay', city: 'Ankara', address: 'Atatürk Bulvarı No: 123, Kızılay', phone: '+90 312 418 52 36', hours: '10:00 - 20:00' },
  { id: 13, name: 'Armada', city: 'Ankara', address: 'Armada AVM, Söğütözü', phone: '+90 312 457 89 01', hours: '10:00 - 22:00' },
  { id: 14, name: 'Ankamall', city: 'Ankara', address: 'Ankamall AVM, Akköprü', phone: '+90 312 218 76 54', hours: '10:00 - 22:00' },

  { id: 15, name: 'Alsancak', city: 'İzmir', address: 'Kıbrıs Şehitleri Caddesi No: 56, Alsancak', phone: '+90 232 464 23 45', hours: '10:00 - 20:00' },
  { id: 16, name: 'Bostanlı', city: 'İzmir', address: 'Bostanlı Mahallesi No: 89, Karşıyaka', phone: '+90 232 369 74 85', hours: '10:00 - 20:00' },
  { id: 17, name: 'Forum Bornova', city: 'İzmir', address: 'Forum Bornova AVM, Bornova', phone: '+90 232 462 91 23', hours: '10:00 - 22:00' },
  { id: 18, name: 'Optimum', city: 'İzmir', address: 'Optimum AVM, Gaziemir', phone: '+90 232 274 56 78', hours: '10:00 - 22:00' },

  { id: 19, name: 'Kordon', city: 'İzmir', address: 'Kordon Caddesi No: 123, Konak', phone: '+90 232 421 85 96', hours: '10:00 - 20:00' },
  { id: 20, name: 'Alaçatı', city: 'İzmir', address: 'Kemalpaşa Caddesi No: 45, Alaçatı', phone: '+90 232 716 32 47', hours: '10:00 - 20:00' },

  { id: 21, name: 'Konyaaltı', city: 'Antalya', address: 'Atatürk Bulvarı No: 234, Konyaaltı', phone: '+90 242 238 45 67', hours: '10:00 - 20:00' },
  { id: 22, name: 'Lara', city: 'Antalya', address: 'Lara Caddesi No: 567, Muratpaşa', phone: '+90 242 323 89 01', hours: '10:00 - 20:00' },
  { id: 23, name: 'MarkAntalya', city: 'Antalya', address: 'MarkAntalya AVM, Muratpaşa', phone: '+90 242 259 12 34', hours: '10:00 - 22:00' },

  { id: 24, name: 'Kültür Park', city: 'Bursa', address: 'Atatürk Caddesi No: 123, Osmangazi', phone: '+90 224 220 45 67', hours: '10:00 - 20:00' },
  { id: 25, name: 'Zafer Plaza', city: 'Bursa', address: 'Zafer Plaza AVM, Nilüfer', phone: '+90 224 441 78 90', hours: '10:00 - 22:00' },

  { id: 26, name: 'Konak Pier', city: 'İzmir', address: 'Konak Pier No: 1, Konak', phone: '+90 232 484 92 34', hours: '10:00 - 20:00' },
  { id: 27, name: 'Gaziantep', city: 'Gaziantep', address: 'İncilipınar Mahallesi, Şehitkamil', phone: '+90 342 220 56 78', hours: '10:00 - 20:00' },
  { id: 28, name: 'Adana', city: 'Adana', address: 'Ziyapaşa Bulvarı No: 45, Seyhan', phone: '+90 322 363 89 01', hours: '10:00 - 20:00' },
  { id: 29, name: 'Eskişehir', city: 'Eskişehir', address: 'Köprübaşı No: 78, Odunpazarı', phone: '+90 222 230 12 34', hours: '10:00 - 20:00' },
  { id: 30, name: 'Trabzon', city: 'Trabzon', address: 'Kunduracılar Caddesi No: 34, Ortahisar', phone: '+90 462 326 45 67', hours: '10:00 - 20:00' },
  { id: 31, name: 'Bodrum', city: 'Muğla', address: 'Neyzen Tevfik Caddesi No: 123, Bodrum', phone: '+90 252 316 78 90', hours: '10:00 - 22:00' },
  { id: 32, name: 'Marmaris', city: 'Muğla', address: 'Kordon Boyu No: 56, Marmaris', phone: '+90 252 412 23 45', hours: '10:00 - 22:00' },
];

const CITIES = ['Tümü', ...Array.from(new Set(STORES.map(s => s.city)))].sort();

export default function StoresPage() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewProduct = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  const filteredStores = STORES.filter(store => {
    const matchesCity = selectedCity === 'Tümü' || store.city === selectedCity;
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <Header onViewProduct={handleViewProduct} />
      <main className="flex-grow">
        {/* Turkey Store Map */}
        <TurkeyStoreMap />

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Tüm Mağazalarımız
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Türkiye genelindeki {STORES.length} mağazamızdan size en yakın olanı bulun
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-grow">
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Mağaza veya şehir ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-300 focus:border-black focus:ring-0 text-gray-900 rounded-lg transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>

                {/* City Filter Dropdown */}
                <div className="md:w-64">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-300 focus:border-black focus:ring-0 text-gray-900 rounded-lg transition-all duration-700 ease-in-out font-medium"
                  >
                    {CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-sm text-gray-600 font-light">
                {filteredStores.length} mağaza bulundu
              </p>
            </div>

            {/* Stores Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores.map(store => (
                <div
                  key={store.id}
                  className="group bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out border-2 border-gray-100 hover:border-[#F9A822]"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-black group-hover:bg-[#F9A822] rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{store.city} - {store.name}</h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {store.address}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-light">{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-light">{store.hours}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 bg-gray-900 text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-[#F9A822] transition-all duration-700 ease-in-out">
                    Haritada Göster
                  </button>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredStores.length === 0 && (
              <div className="text-center py-20">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Sonuç Bulunamadı</h3>
                <p className="text-gray-600 font-light mb-8">Arama kriterlerinize uygun mağaza bulunamadı</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCity('Tümü');
                  }}
                  className="px-8 py-3 bg-black text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-[#F9A822] transition-all duration-700 ease-in-out"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
