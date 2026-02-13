// Home Page - Landing page for Political Nakshatra

import { Link } from 'react-router-dom';
import { Compass, Star, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useQuiz } from '../contexts/QuizContext';

export function Home() {
  const { t } = useTranslation('common');
  const { resetQuiz } = useQuiz();

  const handleStartQuiz = () => {
    // Optionally reset quiz on start
    // resetQuiz();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Star className="text-yellow-400 animate-pulse" size={64} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('site.name')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {t('home.hero.description')}
          </p>

          <Link
            to="/quiz"
            onClick={handleStartQuiz}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Compass size={24} />
            {t('buttons.takeQuiz')}
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            36 {t('quiz.title').toLowerCase()} • 5-10 minutes • {t('privacy.mainPoint')}
          </p>
        </div>
      </section>

      {/* Three Axes Explanation */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {t('home.features.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Statism */}
          <div className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-400" size={32} />
              <h3 className="text-xl font-bold text-blue-400">{t('quiz.category.statism')}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('home.features.items.0.description')}
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Economic: Government control vs market freedom</li>
              <li>• Social: State-led transformation vs traditional autonomy</li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-green-400" size={32} />
              <h3 className="text-xl font-bold text-green-400">{t('quiz.category.recognition')}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('home.features.items.1.description')}
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Affirmative action and reservations</li>
              <li>• Minority rights vs uniform national identity</li>
            </ul>
          </div>

          {/* SID */}
          <div className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-purple-400" size={32} />
              <h3 className="text-xl font-bold text-purple-400">{t('quiz.category.sid')}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('home.features.items.2.description')}
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Universalist: Rule-based, objective criteria</li>
              <li>• Particularist: Identity networks, patronage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-gray-300 mb-4">
            {t('home.hero.description')}
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✨ {t('home.features.items.0.title')}</li>
            <li>✨ {t('home.features.items.1.title')}</li>
            <li>✨ {t('home.features.items.2.title')}</li>
            <li>✨ {t('home.features.items.3.title')}</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t('home.hero.title')}
        </h2>
        <Link
          to="/quiz"
          onClick={handleStartQuiz}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <Compass size={24} />
          {t('buttons.takeQuiz')}
        </Link>
      </section>
    </div>
  );
}
