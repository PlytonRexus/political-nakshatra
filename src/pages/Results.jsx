// Results Page - Shows 3D compass and analysis

import { useEffect, Suspense, lazy, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { getAxisLabel, getAxisDescription, calculateDistance } from '../utils/scoring';
import { getLeadersByDistance } from '../data/leaders';
import { parties } from '../data/parties';
import { Share2, RefreshCw, Eye, EyeOff, User } from 'lucide-react';
import { DetailedComparison } from '../components/results/DetailedComparison';
import { ShareModal } from '../components/results/ShareModal';

// Lazy load the 3D compass for better performance
const Compass3D = lazy(() => import('../components/visualization/Compass3D'));

export function Results() {
  const navigate = useNavigate();
  const { results, isComplete, resetQuiz, showParties, toggleParties, showLeaders, toggleLeaders, showCompass, toggleCompass } = useQuiz();
  const [activeSection, setActiveSection] = useState('overview');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    // Redirect to quiz if not complete
    if (!isComplete || !results) {
      navigate('/quiz');
    }
  }, [isComplete, results, navigate]);

  if (!results) {
    return null; // Will redirect
  }

  // Calculate closest leaders
  const closestLeaders = getLeadersByDistance(results, calculateDistance).slice(0, 5);

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart the quiz? Your current results will be lost.')) {
      resetQuiz();
      navigate('/');
    }
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Political Position</h1>
          <p className="text-gray-400">Explore your location in India's political constellation</p>
        </div>

        {/* Sticky Navigation Tabs */}
        <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 mb-8 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 pt-2">
            <button
              onClick={() => scrollToSection('overview')}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeSection === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('3d-view')}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeSection === '3d-view'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              3D View
            </button>
            <button
              onClick={() => scrollToSection('comparisons')}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeSection === 'comparisons'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Comparisons
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeSection === 'details'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Details
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-lg font-semibold whitespace-nowrap bg-green-600 hover:bg-green-700 text-white transition-all ml-auto"
            >
              Share Results
            </button>
          </div>
        </div>

        {/* Overview Section - Axis Breakdown */}
        <section id="overview" className="mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card border-l-4 border-blue-400">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Statism</h3>
              <p className="text-2xl font-bold text-white mb-2">
                {getAxisLabel(results.statism, 'statism')}
              </p>
              <p className="text-sm text-gray-400">
                Score: {results.statism.toFixed(2)}
              </p>
              <p className="text-sm text-gray-300 mt-4">
                {getAxisDescription(results.statism, 'statism')}
              </p>
            </div>

            <div className="card border-l-4 border-green-400">
              <h3 className="text-lg font-bold text-green-400 mb-2">Recognition</h3>
              <p className="text-2xl font-bold text-white mb-2">
                {getAxisLabel(results.recognition, 'recognition')}
              </p>
              <p className="text-sm text-gray-400">
                Score: {results.recognition.toFixed(2)}
              </p>
              <p className="text-sm text-gray-300 mt-4">
                {getAxisDescription(results.recognition, 'recognition')}
              </p>
            </div>

            <div className="card border-l-4 border-purple-400">
              <h3 className="text-lg font-bold text-purple-400 mb-2">SID</h3>
              <p className="text-2xl font-bold text-white mb-2">
                {getAxisLabel(results.sid, 'sid')}
              </p>
              <p className="text-sm text-gray-400">
                Score: {results.sid.toFixed(2)}
              </p>
              <p className="text-sm text-gray-300 mt-4">
                {getAxisDescription(results.sid, 'sid')}
              </p>
            </div>
          </div>
        </section>

        {/* 3D Visualization */}
        <section id="3d-view" className="mb-8">
          <div className="card bg-black/50 p-4 h-[600px] relative">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-400">Loading 3D visualization...</div>
              </div>
            }>
              <Compass3D userPosition={results} showParties={showParties} showLeaders={showLeaders} showCompass={showCompass} />
            </Suspense>

            {/* Toggle Buttons */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
              <button
                onClick={toggleParties}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all backdrop-blur-sm"
              >
                {showParties ? <EyeOff size={18} /> : <Eye size={18} />}
                {showParties ? 'Hide' : 'Show'} Parties
              </button>
              <button
                onClick={toggleLeaders}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all backdrop-blur-sm"
              >
                {showLeaders ? <EyeOff size={18} /> : <User size={18} />}
                {showLeaders ? 'Hide' : 'Show'} Leaders
              </button>
              <button
                onClick={toggleCompass}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all backdrop-blur-sm ${
                  showCompass
                    ? 'bg-yellow-600/80 hover:bg-yellow-500/80 text-white'
                    : 'bg-gray-800/80 hover:bg-gray-700/80 text-white'
                }`}
              >
                {showCompass ? <EyeOff size={18} /> : <Eye size={18} />}
                {showCompass ? 'Hide' : 'Show'} 2D Compass
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-2">
            Click and drag to rotate • Scroll to zoom • Your position is the glowing gold star
          </p>
        </section>

        {/* Comparisons Section */}
        <section id="comparisons" className="mb-8">
          <DetailedComparison userPosition={results} showLeaders={showLeaders} />
        </section>

        {/* Details Section - Closest Leaders */}
        <section id="details">
          {showLeaders && (
            <div className="card mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <User size={24} />
              Closest Political Leaders
            </h3>
            <p className="text-gray-400 mb-6">
              Based on your political position, here are the leaders closest to you in the 3D political space:
            </p>
            <div className="space-y-4">
              {closestLeaders.map((leader, index) => {
                const party = parties.find(p => p.id === leader.partyId);
                return (
                  <div
                    key={leader.id}
                    className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="text-3xl font-bold text-gray-500">#{index + 1}</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{leader.name}</h4>
                        <span
                          className="px-2 py-0.5 text-xs font-semibold rounded"
                          style={{ backgroundColor: `${leader.color}20`, color: leader.color }}
                        >
                          {party?.abbreviation || leader.partyId.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{leader.role}</p>
                      <div className="text-xs text-gray-500">
                        Distance: {leader.distance.toFixed(3)} • Region: {leader.region}
                      </div>
                      {leader.ideology && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {leader.ideology.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: Leader positions are estimates based on their policy records, public statements, and governance actions.
            </p>
            </div>
          )}
        </section>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            <Share2 size={20} />
            Share Results
          </button>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            <RefreshCw size={20} />
            Restart Quiz
          </button>

          <Link
            to="/about"
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        userPosition={results}
      />
    </div>
  );
}
