'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1524] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="#hero" className="text-xl font-bold">
              <span className="gradient-text">Argan Portfolio</span>
            </Link>
          </div>

          <div className="text-gray-400 text-sm sm:text-base text-center sm:text-right">
            &copy; {currentYear} Argan. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
} 