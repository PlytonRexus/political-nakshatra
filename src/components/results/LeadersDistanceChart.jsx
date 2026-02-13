// Leaders Distance Chart Component - Visual bar chart of distances to all leaders

import { useState } from 'react';
import { BarChart, User } from 'lucide-react';
import { getLeadersByDistance } from '../../data/leaders';
import { parties } from '../../data/parties';
import { calculateDistance, interpretDistance } from '../../utils/scoring';

export function LeadersDistanceChart({ userPosition }) {
  const [showAll, setShowAll] = useState(false);
  const leadersWithDistance = getLeadersByDistance(userPosition, calculateDistance);
  const maxDistance = Math.max(...leadersWithDistance.map(l => l.distance));

  const displayLimit = 15;
  const displayedLeaders = showAll ? leadersWithDistance : leadersWithDistance.slice(0, displayLimit);
  const hasMore = leadersWithDistance.length > displayLimit;

  const getColorForDistance = (distance) => {
    const normalized = distance / maxDistance;
    if (normalized < 0.33) return 'from-green-500 to-green-600';
    if (normalized < 0.66) return 'from-yellow-500 to-yellow-600';
    return 'from-orange-500 to-red-600';
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-2">
        <User className="text-purple-400" size={24} />
        <h3 className="text-2xl font-bold text-white">Distance from Political Leaders</h3>
      </div>
      <p className="text-gray-400 mb-6">
        Visual representation of how far each leader is from your political position
      </p>

      <div className="space-y-3">
        {displayedLeaders.map((leader, index) => {
          const percentage = (leader.distance / maxDistance) * 100;
          const party = parties.find(p => p.id === leader.partyId);

          return (
            <div key={leader.id} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: leader.color }}
                  />
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-semibold text-white truncate">{leader.name}</span>
                    {party && (
                      <span
                        className="hidden sm:inline px-1.5 py-0.5 rounded text-xs font-semibold flex-shrink-0"
                        style={{ backgroundColor: `${party.color}20`, color: party.color }}
                      >
                        {party.abbreviation}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 hidden md:inline flex-shrink-0">{leader.role}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  <span className="font-mono text-sm text-gray-300">{leader.distance.toFixed(3)}</span>
                  <div className="hidden group-hover:block relative">
                    <div className="absolute right-0 top-0 z-10 bg-gray-950 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 whitespace-nowrap -translate-y-full -mt-2">
                      {interpretDistance(leader.distance, 'leader')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-8 bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getColorForDistance(leader.distance)} transition-all duration-500 ease-out`}
                  style={{ width: `${percentage}%` }}
                />
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white drop-shadow-md">
                      Closest Match
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && !showAll && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
          >
            Show {leadersWithDistance.length - displayLimit} More Leaders
          </button>
        </div>
      )}

      {showAll && hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
          >
            Show Less
          </button>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
        <span>✓ Closer</span>
        <span>→ Farther →</span>
      </div>
    </div>
  );
}
