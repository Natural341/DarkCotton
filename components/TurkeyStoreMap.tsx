'use client';

import React, { useState, useEffect } from 'react';

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
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });

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
          console.error('Error getting location:', error);
          alert('Konum alınamadı. Lütfen tarayıcınızın konum izinlerini kontrol edin.');
          setIsLocating(false);
        }
      );
    } else {
      alert('Tarayıcınız konum servislerini desteklemiyor.');
      setIsLocating(false);
    }
  };

  const cityStores = selectedCity ? stores.filter((s) => s.city === selectedCity) : [];

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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-heading text-sm tracking-wider uppercase rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Turkey Map */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="font-heading text-2xl text-black mb-6 text-center">Türkiye Haritası</h3>

            <svg viewBox="0 0 800 400" className="w-full h-auto">
              {/* Simplified Turkey Map */}
              <path
                d="M 100 200 L 150 180 L 200 190 L 250 185 L 300 180 L 350 175 L 400 170 L 450 175 L 500 180 L 550 190 L 600 200 L 650 220 L 680 240 L 700 260 L 690 280 L 670 290 L 650 295 L 600 290 L 550 285 L 500 280 L 450 275 L 400 270 L 350 265 L 300 260 L 250 255 L 200 250 L 150 245 L 120 230 L 100 200 Z"
                fill="#f3f4f6"
                stroke="#d1d5db"
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* City Markers */}
              {/* İstanbul */}
              <circle
                cx="350"
                cy="185"
                r="12"
                fill={selectedCity === 'İstanbul' ? '#F9A822' : '#000000'}
                className="cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => setSelectedCity('İstanbul')}
              />
              <text x="350" y="165" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                İstanbul
              </text>

              {/* Ankara */}
              <circle
                cx="450"
                cy="220"
                r="12"
                fill={selectedCity === 'Ankara' ? '#F9A822' : '#000000'}
                className="cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => setSelectedCity('Ankara')}
              />
              <text x="450" y="200" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                Ankara
              </text>

              {/* İzmir */}
              <circle
                cx="250"
                cy="240"
                r="12"
                fill={selectedCity === 'İzmir' ? '#F9A822' : '#000000'}
                className="cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => setSelectedCity('İzmir')}
              />
              <text x="250" y="220" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                İzmir
              </text>

              {/* Antalya */}
              <circle
                cx="400"
                cy="290"
                r="12"
                fill={selectedCity === 'Antalya' ? '#F9A822' : '#000000'}
                className="cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => setSelectedCity('Antalya')}
              />
              <text x="400" y="270" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                Antalya
              </text>

              {/* Bursa */}
              <circle
                cx="300"
                cy="210"
                r="12"
                fill={selectedCity === 'Bursa' ? '#F9A822' : '#000000'}
                className="cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => setSelectedCity('Bursa')}
              />
              <text x="300" y="190" textAnchor="middle" className="text-xs font-semibold fill-gray-900">
                Bursa
              </text>
            </svg>

            <p className="text-center text-sm text-gray-600 mt-6">
              Haritada şehirlere tıklayarak mağazaları görüntüleyin
            </p>
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
                <p className="text-sm text-white/90">{nearestStore.phone}</p>
              </div>
            )}

            <h3 className="font-heading text-2xl text-black mb-4">
              {selectedCity ? `${selectedCity} Mağazaları` : 'Tüm Mağazalar'}
            </h3>

            {selectedCity ? (
              cityStores.length > 0 ? (
                cityStores.map((store) => (
                  <div
                    key={store.id}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">{store.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{store.address}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {store.phone}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center py-8">Bu şehirde mağazamız bulunmamaktadır.</p>
              )
            ) : (
              <div className="space-y-4">
                {stores.slice(0, 3).map((store) => (
                  <div
                    key={store.id}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">{store.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{store.address}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {store.phone}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setSelectedCity(null)}
                  className="w-full py-3 text-brand-orange border-2 border-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 font-heading text-sm tracking-wider uppercase"
                >
                  Tüm Şehirleri Göster
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurkeyStoreMap;
