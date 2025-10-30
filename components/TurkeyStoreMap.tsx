'use client';

import React, { useState } from 'react';

interface Store {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  {
    id: 1,
    city: 'İstanbul',
    name: 'İstanbul - Nişantaşı',
    address: 'Teşvikiye Caddesi No: 123, Şişli, İstanbul 34365',
    phone: '+90 212 234 56 78',
    lat: 41.0082,
    lng: 28.9784,
  },
  {
    id: 2,
    city: 'İstanbul',
    name: 'İstanbul - Kadıköy',
    address: 'Bağdat Caddesi No: 456, Kadıköy, İstanbul 34730',
    phone: '+90 216 345 67 89',
    lat: 40.9833,
    lng: 29.0333,
  },
  {
    id: 3,
    city: 'Ankara',
    name: 'Ankara - Çankaya',
    address: 'Tunalı Hilmi Caddesi No: 789, Çankaya, Ankara 06700',
    phone: '+90 312 456 78 90',
    lat: 39.9334,
    lng: 32.8597,
  },
  {
    id: 4,
    city: 'İzmir',
    name: 'İzmir - Alsancak',
    address: 'Kıbrıs Şehitleri Caddesi No: 321, Konak, İzmir 35220',
    phone: '+90 232 567 89 01',
    lat: 38.4237,
    lng: 27.1428,
  },
  {
    id: 5,
    city: 'Antalya',
    name: 'Antalya - Kaleiçi',
    address: 'Atatürk Caddesi No: 654, Muratpaşa, Antalya 07100',
    phone: '+90 242 678 90 12',
    lat: 36.8969,
    lng: 30.7133,
  },
  {
    id: 6,
    city: 'Bursa',
    name: 'Bursa - Osmangazi',
    address: 'Altıparmak Caddesi No: 987, Osmangazi, Bursa 16040',
    phone: '+90 224 789 01 23',
    lat: 40.1826,
    lng: 29.0665,
  },
];

const TurkeyStoreMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [nearestStore, setNearestStore] = useState<Store | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>('');

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
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
        setSelectedCity(nearest.city);
        setIsLocating(false);
      },
      (error) => {
        console.error('Geolocation error:', error);
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
          default:
            errorMsg += 'Bilinmeyen bir hata oluştu.';
        }

        setLocationError(errorMsg);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const cityStores = selectedCity ? stores.filter((s) => s.city === selectedCity) : stores;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Satış Noktalarımız
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Türkiye genelinde 30+ mağazamız ile hizmetinizdeyiz
          </p>

          {/* Find Nearest Store Button */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Modern Turkey Map */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="font-heading text-2xl text-black mb-6 text-center">Türkiye Mağaza Haritası</h3>

            <svg viewBox="0 0 1000 500" className="w-full h-auto">
              {/* More realistic Turkey outline */}
              <path
                d="M 50 250
                   L 100 220 Q 150 200 200 205
                   L 280 195 Q 350 185 420 190
                   L 520 180 Q 600 175 680 185
                   L 780 195 Q 850 210 900 240
                   L 950 270 Q 960 290 950 310
                   L 920 340 Q 880 360 840 365
                   L 760 370 Q 680 365 600 360
                   L 500 355 Q 420 350 340 345
                   L 240 340 Q 160 335 100 320
                   L 60 300 Q 45 275 50 250 Z"
                fill="#fafafa"
                stroke="#e5e7eb"
                strokeWidth="3"
                className="transition-all duration-300"
              />

              {/* Subtle grid pattern */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" opacity="0.5"/>

              {/* City Markers with better positioning */}
              {/* İstanbul */}
              <g className="cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setSelectedCity('İstanbul')}>
                <circle
                  cx="420"
                  cy="220"
                  r="20"
                  fill={selectedCity === 'İstanbul' ? '#F9A822' : '#111827'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="420"
                  cy="220"
                  r="26"
                  fill="none"
                  stroke={selectedCity === 'İstanbul' ? '#F9A822' : '#111827'}
                  strokeWidth="2"
                  opacity="0.3"
                  className="transition-all duration-300"
                />
                <text x="420" y="180" textAnchor="middle" className="text-sm font-bold fill-gray-900 pointer-events-none">
                  İstanbul
                </text>
                <text x="420" y="197" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none">
                  2 Mağaza
                </text>
              </g>

              {/* Ankara */}
              <g className="cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setSelectedCity('Ankara')}>
                <circle
                  cx="560"
                  cy="260"
                  r="20"
                  fill={selectedCity === 'Ankara' ? '#F9A822' : '#111827'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="560"
                  cy="260"
                  r="26"
                  fill="none"
                  stroke={selectedCity === 'Ankara' ? '#F9A822' : '#111827'}
                  strokeWidth="2"
                  opacity="0.3"
                  className="transition-all duration-300"
                />
                <text x="560" y="220" textAnchor="middle" className="text-sm font-bold fill-gray-900 pointer-events-none">
                  Ankara
                </text>
                <text x="560" y="237" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none">
                  1 Mağaza
                </text>
              </g>

              {/* İzmir */}
              <g className="cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setSelectedCity('İzmir')}>
                <circle
                  cx="260"
                  cy="290"
                  r="20"
                  fill={selectedCity === 'İzmir' ? '#F9A822' : '#111827'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="260"
                  cy="290"
                  r="26"
                  fill="none"
                  stroke={selectedCity === 'İzmir' ? '#F9A822' : '#111827'}
                  strokeWidth="2"
                  opacity="0.3"
                  className="transition-all duration-300"
                />
                <text x="260" y="250" textAnchor="middle" className="text-sm font-bold fill-gray-900 pointer-events-none">
                  İzmir
                </text>
                <text x="260" y="267" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none">
                  1 Mağaza
                </text>
              </g>

              {/* Antalya */}
              <g className="cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setSelectedCity('Antalya')}>
                <circle
                  cx="480"
                  cy="350"
                  r="20"
                  fill={selectedCity === 'Antalya' ? '#F9A822' : '#111827'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="480"
                  cy="350"
                  r="26"
                  fill="none"
                  stroke={selectedCity === 'Antalya' ? '#F9A822' : '#111827'}
                  strokeWidth="2"
                  opacity="0.3"
                  className="transition-all duration-300"
                />
                <text x="480" y="310" textAnchor="middle" className="text-sm font-bold fill-gray-900 pointer-events-none">
                  Antalya
                </text>
                <text x="480" y="327" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none">
                  1 Mağaza
                </text>
              </g>

              {/* Bursa */}
              <g className="cursor-pointer transition-all duration-300 hover:scale-110" onClick={() => setSelectedCity('Bursa')}>
                <circle
                  cx="340"
                  cy="250"
                  r="20"
                  fill={selectedCity === 'Bursa' ? '#F9A822' : '#111827'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="340"
                  cy="250"
                  r="26"
                  fill="none"
                  stroke={selectedCity === 'Bursa' ? '#F9A822' : '#111827'}
                  strokeWidth="2"
                  opacity="0.3"
                  className="transition-all duration-300"
                />
                <text x="340" y="210" textAnchor="middle" className="text-sm font-bold fill-gray-900 pointer-events-none">
                  Bursa
                </text>
                <text x="340" y="227" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none">
                  1 Mağaza
                </text>
              </g>
            </svg>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Şehirlere tıklayarak mağazaları görüntüleyin
              </p>
              {selectedCity && (
                <button
                  onClick={() => setSelectedCity(null)}
                  className="text-sm text-brand-orange hover:underline font-medium"
                >
                  Tümünü Göster
                </button>
              )}
            </div>
          </div>

          {/* Store List */}
          <div className="space-y-4">
            {nearestStore && (
              <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-2xl p-6 mb-6 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className="font-heading text-xl font-bold">Size En Yakın Mağaza</h3>
                </div>
                <h4 className="font-heading text-lg font-semibold mb-2">{nearestStore.name}</h4>
                <p className="text-sm mb-2 text-white/90">{nearestStore.address}</p>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {nearestStore.phone}
                </div>
              </div>
            )}

            <h3 className="font-heading text-2xl text-black mb-4">
              {selectedCity ? `${selectedCity} Mağazaları (${cityStores.length})` : `Tüm Mağazalarımız (${stores.length})`}
            </h3>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {cityStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-orange"
                >
                  <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">{store.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{store.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.phone}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      10:00 - 20:00
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurkeyStoreMap;
