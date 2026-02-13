// Language Switcher Component

import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';
  const otherLang = currentLang === 'en' ? 'marathi' : 'english';
  const otherLangLabel = currentLang === 'en' ? 'मराठी' : 'English';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all"
      aria-label={t('language.switchTo', { language: otherLangLabel })}
      title={t('language.switchTo', { language: otherLangLabel })}
    >
      <Languages size={18} />
      <span className="text-sm font-medium">{otherLangLabel}</span>
    </button>
  );
}
