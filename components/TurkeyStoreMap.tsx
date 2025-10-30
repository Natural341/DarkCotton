'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Store {
  id: number;
  city: string;
  district: string;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  // İstanbul (8 mağaza)
  { id: 1, city: 'İstanbul', district: 'Nişantaşı', name: 'Dark Cotton Nişantaşı', address: 'Teşvikiye Caddesi No: 123', phone: '+90 212 234 56 78', lat: 41.0082, lng: 28.9784 },
  { id: 2, city: 'İstanbul', district: 'Kadıköy', name: 'Dark Cotton Kadıköy', address: 'Bağdat Caddesi No: 456', phone: '+90 216 345 67 89', lat: 40.9833, lng: 29.0333 },
  { id: 3, city: 'İstanbul', district: 'Beyoğlu', name: 'Dark Cotton İstiklal', address: 'İstiklal Caddesi No: 234', phone: '+90 212 456 78 90', lat: 41.0369, lng: 28.9784 },
  { id: 4, city: 'İstanbul', district: 'Etiler', name: 'Dark Cotton Etiler', address: 'Nispetiye Caddesi No: 567', phone: '+90 212 567 89 01', lat: 41.0769, lng: 29.0175 },
  { id: 5, city: 'İstanbul', district: 'Beşiktaş', name: 'Dark Cotton Beşiktaş', address: 'Barbaros Bulvarı No: 89', phone: '+90 212 678 90 12', lat: 41.0422, lng: 29.0069 },
  { id: 6, city: 'İstanbul', district: 'Bakırköy', name: 'Dark Cotton Bakırköy', address: 'Capacity AVM', phone: '+90 212 789 01 23', lat: 40.9789, lng: 28.8739 },
  { id: 7, city: 'İstanbul', district: 'Ataşehir', name: 'Dark Cotton Ataşehir', address: 'Watergarden AVM', phone: '+90 216 890 12 34', lat: 40.9833, lng: 29.1244 },
  { id: 8, city: 'İstanbul', district: 'Maslak', name: 'Dark Cotton Maslak', address: 'Vadi İstanbul AVM', phone: '+90 212 901 23 45', lat: 41.1094, lng: 28.9953 },

  // Ankara (5 mağaza)
  { id: 9, city: 'Ankara', district: 'Çankaya', name: 'Dark Cotton Çankaya', address: 'Tunalı Hilmi Caddesi No: 789', phone: '+90 312 456 78 90', lat: 39.9334, lng: 32.8597 },
  { id: 10, city: 'Ankara', district: 'Kızılay', name: 'Dark Cotton Kızılay', address: 'Atatürk Bulvarı No: 123', phone: '+90 312 567 89 01', lat: 39.9199, lng: 32.8543 },
  { id: 11, city: 'Ankara', district: 'Çayyolu', name: 'Dark Cotton Çayyolu', address: 'Nata Vega AVM', phone: '+90 312 678 90 12', lat: 39.9708, lng: 32.7369 },
  { id: 12, city: 'Ankara', district: 'Keçiören', name: 'Dark Cotton Keçiören', address: 'ANKAmall AVM', phone: '+90 312 789 01 23', lat: 39.9994, lng: 32.8597 },
  { id: 13, city: 'Ankara', district: 'Ümitköy', name: 'Dark Cotton Ümitköy', address: 'Armada AVM', phone: '+90 312 890 12 34', lat: 39.9219, lng: 32.7131 },

  // İzmir (4 mağaza)
  { id: 14, city: 'İzmir', district: 'Alsancak', name: 'Dark Cotton Alsancak', address: 'Kıbrıs Şehitleri Caddesi No: 321', phone: '+90 232 567 89 01', lat: 38.4237, lng: 27.1428 },
  { id: 15, city: 'İzmir', district: 'Karşıyaka', name: 'Dark Cotton Karşıyaka', address: 'Bostanlı Caddesi No: 654', phone: '+90 232 678 90 12', lat: 38.4602, lng: 27.1267 },
  { id: 16, city: 'İzmir', district: 'Bornova', name: 'Dark Cotton Bornova', address: 'Park Bornova AVM', phone: '+90 232 789 01 23', lat: 38.4698, lng: 27.2142 },
  { id: 17, city: 'İzmir', district: 'Gaziemir', name: 'Dark Cotton Gaziemir', address: 'Optimum AVM', phone: '+90 232 890 12 34', lat: 38.3244, lng: 27.1361 },

  // Antalya (3 mağaza)
  { id: 18, city: 'Antalya', district: 'Kaleiçi', name: 'Dark Cotton Kaleiçi', address: 'Atatürk Caddesi No: 654', phone: '+90 242 678 90 12', lat: 36.8969, lng: 30.7133 },
  { id: 19, city: 'Antalya', district: 'Lara', name: 'Dark Cotton Lara', address: 'TerraCity AVM', phone: '+90 242 789 01 23', lat: 36.8547, lng: 30.7483 },
  { id: 20, city: 'Antalya', district: 'Konyaaltı', name: 'Dark Cotton Konyaaltı', address: '5M Migros AVM', phone: '+90 242 890 12 34', lat: 36.8841, lng: 30.6719 },

  // Bursa (2 mağaza)
  { id: 21, city: 'Bursa', district: 'Osmangazi', name: 'Dark Cotton Osmangazi', address: 'Altıparmak Caddesi No: 987', phone: '+90 224 789 01 23', lat: 40.1826, lng: 29.0665 },
  { id: 22, city: 'Bursa', district: 'Nilüfer', name: 'Dark Cotton Nilüfer', address: 'Özlüce Caddesi No: 321', phone: '+90 224 890 12 34', lat: 40.1885, lng: 28.8981 },

  // Adana (2 mağaza)
  { id: 23, city: 'Adana', district: 'Seyhan', name: 'Dark Cotton Seyhan', address: 'İnönü Caddesi No: 456', phone: '+90 322 567 89 01', lat: 36.9910, lng: 35.3308 },
  { id: 24, city: 'Adana', district: 'Çukurova', name: 'Dark Cotton Optimum', address: 'Optimum AVM', phone: '+90 322 678 90 12', lat: 37.0011, lng: 35.3211 },

  // Konya (2 mağaza)
  { id: 25, city: 'Konya', district: 'Meram', name: 'Dark Cotton Meram', address: 'Mevlana Caddesi No: 789', phone: '+90 332 456 78 90', lat: 37.8667, lng: 32.4833 },
  { id: 26, city: 'Konya', district: 'Selçuklu', name: 'Dark Cotton Selçuklu', address: 'Kulesite AVM', phone: '+90 332 567 89 01', lat: 37.9194, lng: 32.5072 },

  // Gaziantep (2 mağaza)
  { id: 27, city: 'Gaziantep', district: 'Şahinbey', name: 'Dark Cotton Şahinbey', address: 'Suburcu Caddesi No: 234', phone: '+90 342 678 90 12', lat: 37.0662, lng: 37.3833 },
  { id: 28, city: 'Gaziantep', district: 'Şehitkamil', name: 'Dark Cotton Sanko Park', address: 'Sanko Park AVM', phone: '+90 342 789 01 23', lat: 37.0594, lng: 37.3825 },

  // Eskişehir (1 mağaza)
  { id: 29, city: 'Eskişehir', district: 'Odunpazarı', name: 'Dark Cotton Eskişehir', address: 'Espark AVM', phone: '+90 222 456 78 90', lat: 39.7667, lng: 30.5256 },

  // Kayseri (1 mağaza)
  { id: 30, city: 'Kayseri', district: 'Melikgazi', name: 'Dark Cotton Kayseri', address: 'Forum Kayseri AVM', phone: '+90 352 567 89 01', lat: 38.7205, lng: 35.4826 },

  // Mersin (1 mağaza)
  { id: 31, city: 'Mersin', district: 'Yenişehir', name: 'Dark Cotton Mersin', address: 'Forum Mersin AVM', phone: '+90 324 678 90 12', lat: 36.8000, lng: 34.6333 },

  // Trabzon (1 mağaza)
  { id: 32, city: 'Trabzon', district: 'Ortahisar', name: 'Dark Cotton Trabzon', address: 'Varlıbaş AVM', phone: '+90 462 789 01 23', lat: 41.0015, lng: 39.7178 },
];

const TurkeyStoreMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [nearestStore, setNearestStore] = useState<Store | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>('');
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  const findNearestStore = () => {
    setIsLocating(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Tarayıcınız konum servislerini desteklemiyor.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let nearest = stores[0];
        let minDistance = calculateDistance(userLat, userLng, stores[0].lat, stores[0].lng);

        stores.forEach((store) => {
          const distance = calculateDistance(userLat, userLng, store.lat, store.lng);
          if (distance < minDistance) {
            minDistance = distance;
            nearest = store;
          }
        });

        setNearestStore(nearest);
        setSelectedCity(null);
        setIsLocating(false);
      },
      (error) => {
        let errorMsg = 'Konum alınamadı. ';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMsg += 'Lütfen tarayıcınızın konum izinlerini aktif edin.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg += 'Konum bilgisi kullanılamıyor.';
            break;
          case error.TIMEOUT:
            errorMsg += 'Konum alma zaman aşımına uğradı.';
            break;
        }
        setLocationError(errorMsg);
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Get unique cities with store count
  const citiesWithCount = Array.from(new Set(stores.map(s => s.city))).map(city => ({
    name: city,
    count: stores.filter(s => s.city === city).length
  }));

  const cityStores = selectedCity ? stores.filter((s) => s.city === selectedCity) : stores;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-orange-400/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Satış Noktalarımız
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto mb-2">
            Türkiye genelinde <span className="font-bold text-brand-orange">{stores.length} mağazamız</span> ile hizmetinizdeyiz
          </p>
          <p className="text-sm text-gray-500 mb-8">
            {citiesWithCount.length} farklı şehirde premium hizmet
          </p>

          <button
            onClick={findNearestStore}
            disabled={isLocating}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-heading text-sm tracking-wider uppercase rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isLocating ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Konum Alınıyor...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yakınımdaki Mağazayı Bul
              </>
            )}
          </button>

          {locationError && (
            <div className="max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {locationError}
            </div>
          )}
        </div>

        {/* Turkey Map with Image */}
        <div className="mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-gray-50/30"></div>

            <div className="relative">
              <h3 className="font-heading text-2xl text-black mb-6 text-center">Türkiye Geneli Mağaza Dağılımı</h3>

              {/* Realistic Turkey Map */}
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Turkey_location_map.svg/2560px-Turkey_location_map.svg.png"
                  alt="Türkiye Haritası"
                  fill
                  className="object-contain"
                  priority
                />

                {/* City markers overlay */}
                <div className="absolute inset-0">
                  {citiesWithCount.map((cityData, index) => {
                    const city = cityData.name;
                    const isSelected = selectedCity === city;
                    const isHovered = hoveredCity === city;

                    // Approximate positions for major cities
                    const cityPositions: Record<string, { top: string; left: string }> = {
                      'İstanbul': { top: '35%', left: '32%' },
                      'Ankara': { top: '50%', left: '52%' },
                      'İzmir': { top: '58%', left: '18%' },
                      'Antalya': { top: '72%', left: '42%' },
                      'Bursa': { top: '47%', left: '26%' },
                      'Adana': { top: '68%', left: '68%' },
                      'Konya': { top: '60%', left: '57%' },
                      'Gaziantep': { top: '66%', left: '75%' },
                      'Eskişehir': { top: '52%', left: '42%' },
                      'Kayseri': { top: '58%', left: '68%' },
                      'Mersin': { top: '75%', left: '62%' },
                      'Trabzon': { top: '28%', left: '88%' },
                    };

                    const position = cityPositions[city];
                    if (!position) return null;

                    return (
                      <div
                        key={city}
                        className="absolute cursor-pointer group transition-all duration-300 animate-fadeIn"
                        style={{
                          top: position.top,
                          left: position.left,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${index * 100}ms`
                        }}
                        onClick={() => setSelectedCity(isSelected ? null : city)}
                        onMouseEnter={() => setHoveredCity(city)}
                        onMouseLeave={() => setHoveredCity(null)}
                      >
                        {/* Pulse effect */}
                        <div className={`absolute inset-0 rounded-full animate-ping ${isSelected || isHovered ? 'bg-brand-orange' : 'bg-gray-700'} opacity-20`}></div>

                        {/* Main marker */}
                        <div className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                          isSelected || isHovered
                            ? 'bg-gradient-to-br from-brand-orange to-orange-600 scale-125 shadow-lg shadow-brand-orange/50'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-md hover:scale-110'
                        }`}>
                          <div className="absolute inset-0 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {cityData.count}
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-800"></div>
                        </div>

                        {/* City label */}
                        <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                          isSelected || isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}>
                          <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-200">
                            <p className="font-heading text-sm font-bold text-gray-900">{city}</p>
                            <p className="text-xs text-gray-600">{cityData.count} Mağaza</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                Haritadaki noktalar tıklanabilir • {selectedCity ? `${selectedCity} mağazaları gösteriliyor` : 'Bir şehir seçin'}
              </p>
            </div>
          </div>
        </div>

        {/* Store List */}
        <div className="space-y-4">
          {nearestStore && (
            <div className="bg-gradient-to-br from-brand-orange via-orange-500 to-orange-600 text-white rounded-2xl p-8 mb-8 shadow-2xl border-2 border-orange-400 relative overflow-hidden animate-fadeIn">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">Size En Yakın Mağaza</h3>
                    <p className="text-white/80 text-sm">Konumunuza göre önerilen</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-heading text-2xl font-bold mb-2">{nearestStore.name}</h4>
                  <p className="text-white/90 mb-1">{nearestStore.address}</p>
                  <p className="text-white/90 mb-3">{nearestStore.district}, {nearestStore.city}</p>
                  <div className="flex items-center gap-2 text-white/95">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {nearestStore.phone}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-3xl text-black">
              {selectedCity ? `${selectedCity} Mağazaları (${cityStores.length})` : `Tüm Mağazalarımız (${stores.length})`}
            </h3>
            {selectedCity && (
              <button
                onClick={() => setSelectedCity(null)}
                className="px-4 py-2 text-brand-orange border-2 border-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 font-heading text-sm tracking-wider uppercase"
              >
                Tümünü Göster
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityStores.map((store, index) => (
              <div
                key={store.id}
                className={`bg-white rounded-2xl p-6 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn ${
                  nearestStore?.id === store.id
                    ? 'border-brand-orange bg-gradient-to-br from-orange-50 to-white'
                    : 'border-gray-200 hover:border-brand-orange'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {nearestStore?.id === store.id && (
                  <div className="mb-4">
                    <div className="px-3 py-1.5 bg-gradient-to-r from-brand-orange to-orange-600 text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      EN YAKIN MAĞAZA
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">{store.name}</h4>
                    <p className="text-sm text-brand-orange font-semibold">{store.district}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {store.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    10:00 - 20:00
                  </p>
                </div>

                <button className="w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-brand-orange transition-all duration-300 font-heading text-sm tracking-wider uppercase">
                  Haritada Göster
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurkeyStoreMap;
