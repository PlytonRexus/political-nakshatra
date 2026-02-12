// Home Page - Landing page for Political Nakshatra

import { Link } from 'react-router-dom';
import { Compass, Star, TrendingUp, Users } from 'lucide-react';
import { useQuiz } from '../contexts/QuizContext';

export function Home() {
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
            Political Nakshatra
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            राजनीति नक्षत्र
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Discover your position in India's political constellation.
            A 3D compass designed for Indian political realities.
          </p>

          <Link
            to="/quiz"
            onClick={handleStartQuiz}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Compass size={24} />
            Take the Quiz
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            36 questions • 5-10 minutes • Your data stays private
          </p>
        </div>
      </section>

      {/* Three Axes Explanation */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          The Three Axes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Statism */}
          <div className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-400" size={32} />
              <h3 className="text-xl font-bold text-blue-400">Statism</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Measures your views on state intervention in economy and society.
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
              <h3 className="text-xl font-bold text-green-400">Recognition</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Measures support for group-based rights and protections.
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
              <h3 className="text-xl font-bold text-purple-400">SID</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Structural Incentive Distribution: How should resources be allocated?
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
            Why This Is Different
          </h2>
          <p className="text-gray-300 mb-4">
            The traditional Left-Right political compass fails to capture Indian political realities.
            Political Nakshatra uses a 3D framework specifically designed for India's multi-ethnic,
            post-colonial democracy:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✨ Accounts for caste politics and reservations</li>
            <li>✨ Recognizes the statist consensus across parties</li>
            <li>✨ Measures particularism vs universalism in governance</li>
            <li>✨ Based on academic research on Indian politics</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Find Your Political Position?
        </h2>
        <Link
          to="/quiz"
          onClick={handleStartQuiz}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <Compass size={24} />
          Start the Quiz
        </Link>
      </section>
    </div>
  );
}
