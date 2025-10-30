'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import CloseIcon from './icons/CloseIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import PinterestIcon from './icons/PinterestIcon';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();
      router.push(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const getIcon = (itemName: string) => {
    const iconClass = "w-5 h-5 stroke-current";

    switch(itemName) {
      case 'Bacak Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v6a2 2 0 002 2h4a2 2 0 002-2V2M6 8l-2 12h16l-2-12" />
          </svg>
        );
      case 'Makyaj Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zM9 14h6" />
          </svg>
        );
      case 'Bel Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 8c0-1.5.5-2 2-2h12c1.5 0 2 .5 2 2M4 8v1c0 2 1 3 3 3h10c2 0 3-1 3-3V8m-7 8v6" />
          </svg>
        );
      case 'Boyun Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7 2 5 4 5 4v6c0 3 2 5 7 5s7-2 7-5V4s-2-2-7-2zM9 15l-3 7M15 15l3 7" />
          </svg>
        );
      case 'Küçük Çanta':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12M6 9a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2M6 9V6a6 6 0 1112 0v3" />
          </svg>
        );
      case 'Freeback':
      case 'Klasik Sırt Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v2m8-2v2M5 8h14a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1zm7-4v20M8 14h2m4 0h2" />
          </svg>
        );
      case 'Mini Sırt Çantası':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5v2m6-2v2M7 9h10a1 1 0 011 1v9a1 1 0 01-1 1H7a1 1 0 01-1-1v-9a1 1 0 011-1zm5-4v18M10 15h4" />
          </svg>
        );
      case 'Crossbody':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9-6 9 6M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10M9 21V14h6v7" />
          </svg>
        );
      case 'Messenger':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 7a2 2 0 012-2h14a2 2 0 012 2M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M9 12h6" />
          </svg>
        );
      case 'Tote Bag':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 012-2h10a2 2 0 012 2M5 8v11a2 2 0 002 2h10a2 2 0 002-2V8M9 3v5m6-5v5" />
          </svg>
        );
      case '2\'si 1 Arada':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2M12 7v10" />
          </svg>
        );
      case 'Suya Dayanıklı':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 7.05L5.636 5.636m12.728 12.728l-1.414-1.414M7.05 16.95l-1.414 1.414M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
          </svg>
        );
      case 'Deri Koleksiyon':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l7-5 7 5V3H5zm0 0h14a1 1 0 011 1v16" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  const categories = [
    {
      title: 'ÇANTA',
      items: ['Bacak Çantası', 'Makyaj Çantası', 'Bel Çantası', 'Boyun Çantası', 'Küçük Çanta']
    },
    {
      title: 'SIRT ÇANTASI',
      items: ['Freeback', 'Klasik Sırt Çantası', 'Mini Sırt Çantası']
    },
    {
      title: 'OMUZ ÇANTASI',
      items: ['Crossbody', 'Messenger', 'Tote Bag']
    },
    {
      title: 'ÖZEL KOLEKSİYONLAR',
      items: ['2\'si 1 Arada', 'Suya Dayanıklı', 'Deri Koleksiyon']
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-[340px] lg:w-[420px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-white to-orange-50/30">
            <div className="flex justify-between items-center px-6 py-6">
              <div>
                <h2 className="font-heading text-xl tracking-wider text-black uppercase">Menu</h2>
                <p className="text-xs text-gray-500 font-body mt-0.5">Kategorilere göz atın</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg text-gray-600 hover:text-brand-orange hover:bg-orange-50 transition-all duration-300">
                <CloseIcon />
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 pb-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ürün ara..."
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-brand-orange focus:ring-0 transition-all duration-300 font-body text-sm bg-white"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-orange hover:text-orange-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* User Section */}
            <div className="px-6 pb-4">
              {isAuthenticated ? (
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-900 text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleNavigate('/profile')}
                      className="px-3 py-2 bg-gray-100 hover:bg-brand-orange/10 text-gray-700 hover:text-brand-orange text-xs font-semibold rounded-lg transition-all duration-300"
                    >
                      Profilim
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        onClose();
                      }}
                      className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-lg transition-all duration-300"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigate('/auth')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-black to-gray-900 hover:from-brand-orange hover:to-orange-600 text-white font-bold text-sm tracking-wider uppercase rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Üye Ol / Giriş Yap
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="flex-grow overflow-y-auto px-6 py-6">
            <div className="space-y-8">
              {categories.map((category, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="mb-4">
                    <h3 className="font-heading text-[11px] tracking-[0.2em] text-brand-orange uppercase mb-2 px-3">
                      {category.title}
                    </h3>
                    <div className="h-[1px] bg-gradient-to-r from-brand-orange/30 via-brand-orange/10 to-transparent"></div>
                  </div>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <button
                          onClick={() => handleNavigate(`/catalog?category=${encodeURIComponent(item)}`)}
                          className="group font-body text-sm text-gray-700 hover:text-brand-orange transition-all duration-300 text-left w-full flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-orange-50/50"
                        >
                          <div className="text-gray-400 group-hover:text-brand-orange transition-colors duration-300">
                            {getIcon(item)}
                          </div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 pt-6 mt-6 border-t border-gray-200">
              <button onClick={() => handleNavigate('/')} className="group font-heading text-sm tracking-wider uppercase text-gray-700 hover:text-brand-orange transition-all duration-300 text-left w-full py-3 px-3 rounded-lg hover:bg-orange-50/50 flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Ana Sayfa</span>
              </button>
              <button onClick={() => handleNavigate('/catalog')} className="group font-heading text-sm tracking-wider uppercase text-gray-700 hover:text-brand-orange transition-all duration-300 text-left w-full py-3 px-3 rounded-lg hover:bg-orange-50/50 flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Tüm Ürünler</span>
              </button>
              <button onClick={() => handleNavigate('/our-story')} className="group font-heading text-sm tracking-wider uppercase text-gray-700 hover:text-brand-orange transition-all duration-300 text-left w-full py-3 px-3 rounded-lg hover:bg-orange-50/50 flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Hikayemiz</span>
              </button>
              <button onClick={() => handleNavigate('/contact')} className="group font-heading text-sm tracking-wider uppercase text-gray-700 hover:text-brand-orange transition-all duration-300 text-left w-full py-3 px-3 rounded-lg hover:bg-orange-50/50 flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform duration-300">İletişim</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-6 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <p className="font-body text-brand-orange text-xs italic text-center mb-4 tracking-wide">&quot;Crafted for the Unconventional.&quot;</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white text-gray-600 hover:text-brand-orange hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white text-gray-600 hover:text-brand-orange hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="p-2 rounded-lg bg-white text-gray-600 hover:text-brand-orange hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow">
                <PinterestIcon />
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 font-body">© 2024 Dark Cotton</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
