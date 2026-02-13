// i18next configuration for internationalization

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEN from './locales/en/common.json';
import questionsEN from './locales/en/questions.json';
import partiesEN from './locales/en/parties.json';
import leadersEN from './locales/en/leaders.json';
import scoringEN from './locales/en/scoring.json';
import aboutEN from './locales/en/about.json';

import commonMR from './locales/mr/common.json';
import questionsMR from './locales/mr/questions.json';
import partiesMR from './locales/mr/parties.json';
import leadersMR from './locales/mr/leaders.json';
import scoringMR from './locales/mr/scoring.json';
import aboutMR from './locales/mr/about.json';

const resources = {
  en: {
    common: commonEN,
    questions: questionsEN,
    parties: partiesEN,
    leaders: leadersEN,
    scoring: scoringEN,
    about: aboutEN
  },
  mr: {
    common: commonMR,
    questions: questionsMR,
    parties: partiesMR,
    leaders: leadersMR,
    scoring: scoringMR,
    about: aboutMR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'questions', 'parties', 'leaders', 'scoring', 'about'],

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'political_nakshatra_language',
    },

    interpolation: {
      escapeValue: false // React already escapes values
    },

    react: {
      useSuspense: true
    }
  });

export default i18n;
