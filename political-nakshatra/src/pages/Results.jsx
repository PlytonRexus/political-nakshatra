// Results Page - Shows 3D compass and analysis

import { useEffect, Suspense, lazy } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { getAxisLabel, getAxisDescription } from '../utils/scoring';
import { Share2, RefreshCw, Eye, EyeOff } from 'lucide-react';

// Lazy load the 3D compass for better performance
const Compass3D = lazy(() => import('../components/visualization/Compass3D'));

export function Results() {
  const navigate = useNavigate();
  const { results, isComplete, resetQuiz, showParties, toggleParties } = useQuiz();

  useEffect(() => {
    // Redirect to quiz if not complete
    if (!isComplete || !results) {
      navigate('/quiz');
    }
  }, [isComplete, results, navigate]);

  if (!results) {
    return null; // Will redirect
  }

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart the quiz? Your current results will be lost.')) {
      resetQuiz();
      navigate('/');
    }
  };

  const handleShare = async () => {
    const shareText = `My Political Nakshatra position:\n\nStatism: ${getAxisLabel(results.statism, 'statism')}\nRecognition: ${getAxisLabel(results.recognition, 'recognition')}\nSID: ${getAxisLabel(results.sid, 'sid')}\n\nTake the quiz: ${window.location.origin}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Political Nakshatra Results',
          text: shareText,
        });
      } catch (err) {
        // User cancelled or share failed
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Political Position</h1>
          <p className="text-gray-400">Explore your location in India's political constellation</p>
        </div>

        {/* 3D Visualization */}
        <div className="mb-8">
          <div className="card bg-black/50 p-4 h-[600px] relative">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-400">Loading 3D visualization...</div>
              </div>
            }>
              <Compass3D userPosition={results} showParties={showParties} />
            </Suspense>

            {/* Toggle Party Positions Button */}
            <button
              onClick={toggleParties}
              className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all backdrop-blur-sm"
            >
              {showParties ? <EyeOff size={18} /> : <Eye size={18} />}
              {showParties ? 'Hide' : 'Show'} Party Positions
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-2">
            Click and drag to rotate • Scroll to zoom • Your position is the glowing gold star
          </p>
        </div>

        {/* Axis Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
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
    </div>
  );
}
