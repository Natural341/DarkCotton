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
    console.log('Finding nearest store...');
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
        console.log('User location:', userLat, userLng);

        let nearest = stores[0];
        let minDistance = calculateDistance(userLat, userLng, stores[0].lat, stores[0].lng);

        stores.forEach((store) => {
          const distance = calculateDistance(userLat, userLng, store.lat, store.lng);
          console.log(`Distance to ${store.name}: ${distance.toFixed(2)} km`);
          if (distance < minDistance) {
            minDistance = distance;
            nearest = store;
          }
        });

        console.log('Nearest store:', nearest.name, 'Distance:', minDistance.toFixed(2), 'km');
        setNearestStore(nearest);
        setSelectedCity(null); // Show all stores but highlight nearest
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
          {/* Modern 3D Turkey Map */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-200">
            <h3 className="font-heading text-2xl text-black mb-6 text-center">Türkiye Mağaza Haritası</h3>

            <svg viewBox="0 0 1000 600" className="w-full h-auto drop-shadow-lg">
              <defs>
                {/* Gradient for 3D effect */}
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#e2e8f0', stopOpacity: 1}} />
                </linearGradient>

                {/* Shadow filter */}
                <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="2" dy="4" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Inner shadow effect */}
                <filter id="innerShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                  <feOffset in="blur" dx="1" dy="2" result="offsetBlur"/>
                  <feFlood floodColor="#94a3b8" floodOpacity="0.4" result="offsetColor"/>
                  <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur"/>
                  <feMerge>
                    <feMergeNode in="SourceGraphic"/>
                    <feMergeNode in="offsetBlur"/>
                  </feMerge>
                </filter>

                {/* Marker glow */}
                <filter id="markerGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Detailed Turkey outline with provinces */}
              <g filter="url(#dropShadow)">
                <path
                  d="M 80 300
                     C 120 280, 160 270, 200 275
                     C 240 280, 280 270, 320 268
                     C 360 266, 400 264, 440 260
                     C 480 256, 520 254, 560 256
                     C 600 258, 640 262, 680 270
                     C 720 278, 760 290, 800 305
                     C 840 320, 880 340, 910 365
                     C 930 380, 945 400, 950 420
                     C 952 440, 945 460, 935 475
                     C 920 495, 900 510, 875 520
                     C 850 530, 820 535, 790 538
                     C 760 540, 730 540, 700 538
                     C 670 536, 640 532, 610 528
                     C 580 524, 550 520, 520 516
                     C 490 512, 460 508, 430 504
                     C 400 500, 370 496, 340 492
                     C 310 488, 280 484, 250 480
                     C 220 476, 190 472, 160 465
                     C 130 458, 100 445, 85 425
                     C 70 405, 65 380, 68 355
                     C 70 330, 75 315, 80 300 Z"
                  fill="url(#mapGradient)"
                  stroke="#cbd5e1"
                  strokeWidth="4"
                  filter="url(#innerShadow)"
                  className="transition-all duration-500"
                />

                {/* Region dividers for detail */}
                <path d="M 320 268 Q 340 350 360 420" stroke="#e2e8f0" strokeWidth="1.5" opacity="0.6" fill="none"/>
                <path d="M 560 256 Q 580 340 600 410" stroke="#e2e8f0" strokeWidth="1.5" opacity="0.6" fill="none"/>
                <path d="M 200 350 Q 500 340 800 360" stroke="#e2e8f0" strokeWidth="1.5" opacity="0.6" fill="none"/>
              </g>

              {/* City Markers with 3D effect */}
              {/* İstanbul */}
              <g className="cursor-pointer transition-all duration-300" onClick={() => setSelectedCity('İstanbul')}>
                <circle cx="420" cy="295" r="28" fill={selectedCity === 'İstanbul' ? '#F9A822' : '#1f2937'} opacity="0.2" filter="url(#markerGlow)"/>
                <circle cx="420" cy="290" r="24" fill={selectedCity === 'İstanbul' ? '#F9A822' : '#1f2937'} className="transition-all duration-300"/>
                <circle cx="420" cy="290" r="32" fill="none" stroke={selectedCity === 'İstanbul' ? '#F9A822' : '#1f2937'} strokeWidth="2.5" opacity="0.4"/>
                <circle cx="418" cy="287" r="4" fill="white" opacity="0.7"/>
                <text x="420" y="250" textAnchor="middle" className="text-base font-bold fill-gray-900 pointer-events-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  İstanbul
                </text>
                <text x="420" y="268" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none font-semibold">
                  2 Mağaza
                </text>
              </g>

              {/* Ankara */}
              <g className="cursor-pointer transition-all duration-300" onClick={() => setSelectedCity('Ankara')}>
                <circle cx="560" cy="335" r="28" fill={selectedCity === 'Ankara' ? '#F9A822' : '#1f2937'} opacity="0.2" filter="url(#markerGlow)"/>
                <circle cx="560" cy="330" r="24" fill={selectedCity === 'Ankara' ? '#F9A822' : '#1f2937'} className="transition-all duration-300"/>
                <circle cx="560" cy="330" r="32" fill="none" stroke={selectedCity === 'Ankara' ? '#F9A822' : '#1f2937'} strokeWidth="2.5" opacity="0.4"/>
                <circle cx="558" cy="327" r="4" fill="white" opacity="0.7"/>
                <text x="560" y="290" textAnchor="middle" className="text-base font-bold fill-gray-900 pointer-events-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  Ankara
                </text>
                <text x="560" y="308" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none font-semibold">
                  1 Mağaza
                </text>
              </g>

              {/* İzmir */}
              <g className="cursor-pointer transition-all duration-300" onClick={() => setSelectedCity('İzmir')}>
                <circle cx="260" cy="370" r="28" fill={selectedCity === 'İzmir' ? '#F9A822' : '#1f2937'} opacity="0.2" filter="url(#markerGlow)"/>
                <circle cx="260" cy="365" r="24" fill={selectedCity === 'İzmir' ? '#F9A822' : '#1f2937'} className="transition-all duration-300"/>
                <circle cx="260" cy="365" r="32" fill="none" stroke={selectedCity === 'İzmir' ? '#F9A822' : '#1f2937'} strokeWidth="2.5" opacity="0.4"/>
                <circle cx="258" cy="362" r="4" fill="white" opacity="0.7"/>
                <text x="260" y="325" textAnchor="middle" className="text-base font-bold fill-gray-900 pointer-events-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  İzmir
                </text>
                <text x="260" y="343" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none font-semibold">
                  1 Mağaza
                </text>
              </g>

              {/* Antalya */}
              <g className="cursor-pointer transition-all duration-300" onClick={() => setSelectedCity('Antalya')}>
                <circle cx="480" cy="465" r="28" fill={selectedCity === 'Antalya' ? '#F9A822' : '#1f2937'} opacity="0.2" filter="url(#markerGlow)"/>
                <circle cx="480" cy="460" r="24" fill={selectedCity === 'Antalya' ? '#F9A822' : '#1f2937'} className="transition-all duration-300"/>
                <circle cx="480" cy="460" r="32" fill="none" stroke={selectedCity === 'Antalya' ? '#F9A822' : '#1f2937'} strokeWidth="2.5" opacity="0.4"/>
                <circle cx="478" cy="457" r="4" fill="white" opacity="0.7"/>
                <text x="480" y="420" textAnchor="middle" className="text-base font-bold fill-gray-900 pointer-events-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  Antalya
                </text>
                <text x="480" y="438" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none font-semibold">
                  1 Mağaza
                </text>
              </g>

              {/* Bursa */}
              <g className="cursor-pointer transition-all duration-300" onClick={() => setSelectedCity('Bursa')}>
                <circle cx="340" cy="310" r="28" fill={selectedCity === 'Bursa' ? '#F9A822' : '#1f2937'} opacity="0.2" filter="url(#markerGlow)"/>
                <circle cx="340" cy="305" r="24" fill={selectedCity === 'Bursa' ? '#F9A822' : '#1f2937'} className="transition-all duration-300"/>
                <circle cx="340" cy="305" r="32" fill="none" stroke={selectedCity === 'Bursa' ? '#F9A822' : '#1f2937'} strokeWidth="2.5" opacity="0.4"/>
                <circle cx="338" cy="302" r="4" fill="white" opacity="0.7"/>
                <text x="340" y="265" textAnchor="middle" className="text-base font-bold fill-gray-900 pointer-events-none" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  Bursa
                </text>
                <text x="340" y="283" textAnchor="middle" className="text-xs fill-gray-600 pointer-events-none font-semibold">
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
              <div className="bg-gradient-to-br from-brand-orange via-orange-500 to-orange-600 text-white rounded-2xl p-6 mb-6 shadow-2xl border-2 border-orange-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-bold">Size En Yakın Mağaza</h3>
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-3">{nearestStore.name}</h4>
                  <p className="text-sm mb-3 text-white/95 leading-relaxed">{nearestStore.address}</p>
                  <div className="flex items-center gap-2 text-sm text-white/95 bg-white/10 rounded-lg px-3 py-2 inline-flex">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {nearestStore.phone}
                  </div>
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
                  className={`bg-white rounded-xl p-6 border-2 shadow-md hover:shadow-xl transition-all duration-300 ${
                    nearestStore?.id === store.id
                      ? 'border-brand-orange bg-orange-50'
                      : 'border-gray-200 hover:border-brand-orange'
                  }`}
                >
                  {nearestStore?.id === store.id && (
                    <div className="mb-3 flex items-center gap-2">
                      <div className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full inline-flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        EN YAKIN
                      </div>
                    </div>
                  )}
                  <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">{store.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{store.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {store.phone}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    10:00 - 20:00
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
