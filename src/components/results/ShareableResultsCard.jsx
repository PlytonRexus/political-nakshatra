// Shareable Results Card - Optimized for image export and social media sharing

import { Star } from 'lucide-react';
import { getPartiesByDistance } from '../../data/parties';
import { calculateDistance, getAxisLabel, calculateMatchScore } from '../../utils/scoring';

export function ShareableResultsCard({ userPosition, cardRef }) {
  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);
  const closestParty = partiesWithDistance[0];
  const matchScore = calculateMatchScore(userPosition, closestParty.position);

  const getBarWidth = (value) => {
    // Convert from [-1, 1] to [0, 100] percentage
    return ((value + 1) / 2) * 100;
  };

  return (
    <div
      ref={cardRef}
      className="w-[600px] bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 p-8 rounded-xl"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="text-yellow-400" size={28} fill="#FBBF24" />
          <h1 className="text-3xl font-bold text-white">Political Nakshatra</h1>
        </div>
        <p className="text-lg text-gray-300">My Political Position</p>
      </div>

      {/* 2D Compass Grid */}
      <div className="bg-black/40 rounded-lg p-6 mb-6">
        <div className="relative w-full h-64 bg-gray-900 rounded">
          {/* Grid lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600" />
          </div>

          {/* Quadrant labels */}
          <div className="absolute top-4 left-4 text-xs text-blue-400">Auth Left</div>
          <div className="absolute top-4 right-4 text-xs text-green-400">Auth Right</div>
          <div className="absolute bottom-4 left-4 text-xs text-red-400">Lib Left</div>
          <div className="absolute bottom-4 right-4 text-xs text-yellow-400">Lib Right</div>

          {/* Axis labels */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 -rotate-90">
            Auth ← → Lib
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-500">
            Left ← → Right
          </div>

          {/* User dot */}
          <div
            className="absolute w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow-lg"
            style={{
              left: `${getBarWidth(userPosition.statism)}%`,
              top: `${100 - getBarWidth(userPosition.recognition)}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>

      {/* Axis scores */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-blue-400">Statism</span>
            <span className="text-sm font-mono text-white">{userPosition.statism.toFixed(2)}</span>
          </div>
          <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600"
              style={{
                left: userPosition.statism < 0 ? `${getBarWidth(userPosition.statism)}%` : '50%',
                width: `${Math.abs(getBarWidth(userPosition.statism) - 50)}%`
              }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">{getAxisLabel(userPosition.statism, 'statism')}</div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-green-400">Recognition</span>
            <span className="text-sm font-mono text-white">{userPosition.recognition.toFixed(2)}</span>
          </div>
          <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-green-500 to-green-600"
              style={{
                left: userPosition.recognition < 0 ? `${getBarWidth(userPosition.recognition)}%` : '50%',
                width: `${Math.abs(getBarWidth(userPosition.recognition) - 50)}%`
              }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">{getAxisLabel(userPosition.recognition, 'recognition')}</div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-purple-400">SID</span>
            <span className="text-sm font-mono text-white">{userPosition.sid.toFixed(2)}</span>
          </div>
          <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-purple-500 to-purple-600"
              style={{
                left: userPosition.sid < 0 ? `${getBarWidth(userPosition.sid)}%` : '50%',
                width: `${Math.abs(getBarWidth(userPosition.sid) - 50)}%`
              }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">{getAxisLabel(userPosition.sid, 'sid')}</div>
        </div>
      </div>

      {/* Closest match */}
      <div className="bg-black/40 rounded-lg p-4 mb-6">
        <div className="text-sm text-gray-400 mb-1">Closest Party:</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-bold text-white">{closestParty.abbreviation}</div>
            <div className="text-xs text-gray-500">{closestParty.name}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">{matchScore}%</div>
            <div className="text-xs text-gray-500">match</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500">
        Take the quiz: politicalnakshatra.com
      </div>
    </div>
  );
}
