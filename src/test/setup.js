import { expect, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import commonEN from '../i18n/locales/en/common.json'
import questionsEN from '../i18n/locales/en/questions.json'
import scoringEN from '../i18n/locales/en/scoring.json'
import partiesEN from '../i18n/locales/en/parties.json'
import leadersEN from '../i18n/locales/en/leaders.json'
import aboutEN from '../i18n/locales/en/about.json'

import commonMR from '../i18n/locales/mr/common.json'
import questionsMR from '../i18n/locales/mr/questions.json'
import scoringMR from '../i18n/locales/mr/scoring.json'
import partiesMR from '../i18n/locales/mr/parties.json'
import leadersMR from '../i18n/locales/mr/leaders.json'
import aboutMR from '../i18n/locales/mr/about.json'

// Initialize i18n for tests
beforeAll(async () => {
  await i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      ns: ['common', 'questions', 'parties', 'leaders', 'scoring', 'about'],
      defaultNS: 'common',
      resources: {
        en: {
          common: commonEN,
          questions: questionsEN,
          scoring: scoringEN,
          parties: partiesEN,
          leaders: leadersEN,
          about: aboutEN
        },
        mr: {
          common: commonMR,
          questions: questionsMR,
          scoring: scoringMR,
          parties: partiesMR,
          leaders: leadersMR,
          about: aboutMR
        }
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false // CRITICAL for tests!
      }
    })
})

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Cleanup after each test and reset language
afterEach(() => {
  cleanup()
  i18n.changeLanguage('en') // Reset to English for test isolation
})
