'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-1 bg-[#1e293b] rounded-full border border-gray-700 text-gray-300 hover:bg-[#2d3a4f] transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Indonesian' : 'English'} language`}
    >
      <span className={`mr-2 ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}>EN</span>
      <div className="w-8 h-4 bg-gray-700 rounded-full p-0.5 flex items-center">
        <div 
          className={`w-3 h-3 rounded-full bg-blue-400 transform transition-transform duration-300 ${
            language === 'id' ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </div>
      <span className={`ml-2 ${language === 'id' ? 'opacity-100' : 'opacity-50'}`}>ID</span>
    </button>
  );
} 