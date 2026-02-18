// Test utilities for rendering components with i18n and other providers

import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import i18n from '../i18n/i18n'

/**
 * Render component with i18n provider
 * @param {React.ReactElement} ui - Component to render
 * @param {Object} options - Render options
 * @param {string} options.language - Language to use (default: 'en')
 * @returns {Object} Render result from @testing-library/react
 */
export function renderWithi18n(ui, { language = 'en', ...options } = {}) {
  if (language) {
    i18n.changeLanguage(language)
  }

  return render(
    <I18nextProvider i18n={i18n}>
      {ui}
    </I18nextProvider>,
    options
  )
}

/**
 * Render component with i18n and router providers
 * @param {React.ReactElement} ui - Component to render
 * @param {Object} options - Render options
 * @param {string} options.language - Language to use (default: 'en')
 * @param {string} options.route - Initial route (default: '/')
 * @returns {Object} Render result from @testing-library/react
 */
export function renderWithProviders(ui, {
  language = 'en',
  route = '/',
  ...options
} = {}) {
  if (language) {
    i18n.changeLanguage(language)
  }

  window.history.pushState({}, 'Test page', route)

  return render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        {ui}
      </I18nextProvider>
    </BrowserRouter>,
    options
  )
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
