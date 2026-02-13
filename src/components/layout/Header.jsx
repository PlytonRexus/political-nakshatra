// Header Component

import { Link } from 'react-router-dom';
import { Stars } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Stars className="text-yellow-400" size={32} />
            <div>
              <h1 className="text-xl font-bold text-white">{t('site.name')}</h1>
              <p className="text-xs text-gray-400">{t('site.tagline')}</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('nav.about')}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
