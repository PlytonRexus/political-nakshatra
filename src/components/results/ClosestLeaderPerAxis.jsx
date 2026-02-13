// Closest Leader Per Axis Component - Shows who's closest on each dimension

import { BarChart3, User, Scale } from 'lucide-react';
import { leaders } from '../../data/leaders';
import { parties } from '../../data/parties';
import { getClosestPerAxis, getComparativeDescription } from '../../utils/scoring';

const axisIcons = {
  statism: <BarChart3 size={20} />,
  recognition: <User size={20} />,
  sid: <Scale size={20} />
};

const axisLabels = {
  statism: 'Statism',
  recognition: 'Recognition',
  sid: 'SID (Distribution)'
};

const axisEmojis = {
  statism: '📊',
  recognition: '🤝',
  sid: '⚖️'
};

export function ClosestLeaderPerAxis({ userPosition }) {
  const closestPerAxis = getClosestPerAxis(userPosition, leaders);

  const getDifferenceLabel = (diff) => {
    if (diff < 0.05) return 'Very Close!';
    if (diff < 0.15) return 'Close';
    if (diff < 0.3) return 'Moderate';
    return 'Different';
  };

  const getDifferenceColor = (diff) => {
    if (diff < 0.05) return 'text-green-400';
    if (diff < 0.15) return 'text-blue-400';
    if (diff < 0.3) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold text-white mb-2">Who's Closest to You on Each Dimension?</h3>
      <p className="text-gray-400 mb-6">
        Leaders who align most closely with you on each individual axis
      </p>

      <div className="space-y-6">
        {closestPerAxis.map(({ axis, entity, difference, value }) => {
          const leader = entity;
          const party = parties.find(p => p.id === leader.partyId);
          const userValue = userPosition[axis];

          return (
            <div key={axis} className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{axisEmojis[axis]}</span>
                <h4 className="text-lg font-bold text-white">{axisLabels[axis]}</h4>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-white">{leader.name}</span>
                    {party && (
                      <span
                        className="px-2 py-0.5 text-xs font-semibold rounded"
                        style={{ backgroundColor: `${party.color}20`, color: party.color }}
                      >
                        {party.abbreviation}
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-gray-400 mb-3">{leader.role}</div>

                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <div className="text-xs text-gray-500">Your score</div>
                      <div className="text-lg font-bold text-blue-400">{userValue.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{leader.name.split(' ')[0]}</div>
                      <div className="text-lg font-bold text-purple-400">{value.toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Difference:</span>
                    <span className={`text-sm font-bold ${getDifferenceColor(difference)}`}>
                      {difference.toFixed(3)} ({getDifferenceLabel(difference)})
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-2 italic">
                    {getComparativeDescription(userValue, value, axis)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
