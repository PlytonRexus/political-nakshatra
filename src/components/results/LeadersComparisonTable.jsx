// Leaders Comparison Table - Shows detailed comparison with all leaders

import { useTranslation } from 'react-i18next';
import { getLeadersByDistance } from '../../data/leaders';
import { parties } from '../../data/parties';
import { calculateDistance, calculateMatchScore, getAxisAlignment, interpretDistance } from '../../utils/scoring';

export function LeadersComparisonTable({ userPosition }) {
  const { t } = useTranslation('scoring');
  const leadersWithDistance = getLeadersByDistance(userPosition, calculateDistance);

  const getSymbolColor = (symbol) => {
    if (symbol === '✓') return 'text-green-400';
    if (symbol === '~') return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold text-white mb-2">How You Compare to Political Leaders</h3>
      <p className="text-gray-400 mb-6">
        Detailed breakdown of your position relative to each leader
      </p>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">Leader</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Statism</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Recognition</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">SID</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Total Dist.</th>
              <th className="text-right py-3 px-4 text-gray-400 font-semibold">Match %</th>
            </tr>
          </thead>
          <tbody>
            {leadersWithDistance.map((leader, index) => {
              const matchScore = calculateMatchScore(userPosition, leader.position);
              const statismAlign = getAxisAlignment(userPosition.statism, leader.position.statism, t);
              const recognitionAlign = getAxisAlignment(userPosition.recognition, leader.position.recognition, t);
              const sidAlign = getAxisAlignment(userPosition.sid, leader.position.sid, t);
              const party = parties.find(p => p.id === leader.partyId);

              return (
                <tr
                  key={leader.id}
                  className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${
                    index === 0 ? 'bg-blue-900/20' : index === 1 ? 'bg-blue-800/10' : index === 2 ? 'bg-blue-700/5' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: leader.color }}
                      />
                      <div>
                        <div className="font-bold text-white">{leader.name}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          {leader.role}
                          {party && (
                            <span
                              className="ml-1 px-1.5 py-0.5 rounded text-xs font-semibold"
                              style={{ backgroundColor: `${party.color}20`, color: party.color }}
                            >
                              {party.abbreviation}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(statismAlign.symbol)}`}>
                      {Math.abs(userPosition.statism - leader.position.statism).toFixed(2)} {statismAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(recognitionAlign.symbol)}`}>
                      {Math.abs(userPosition.recognition - leader.position.recognition).toFixed(2)} {recognitionAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(sidAlign.symbol)}`}>
                      {Math.abs(userPosition.sid - leader.position.sid).toFixed(2)} {sidAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center group relative">
                    <span className="font-mono text-gray-300">{leader.distance.toFixed(3)}</span>
                    <div className="hidden group-hover:block absolute z-10 bg-gray-950 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 whitespace-nowrap -top-8 left-1/2 -translate-x-1/2">
                      {interpretDistance(leader.distance, 'leader', t)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                          style={{ width: `${matchScore}%` }}
                        />
                      </div>
                      <span className="font-bold text-white w-12">{matchScore}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {leadersWithDistance.map((leader, index) => {
          const matchScore = calculateMatchScore(userPosition, leader.position);
          const statismAlign = getAxisAlignment(userPosition.statism, leader.position.statism);
          const recognitionAlign = getAxisAlignment(userPosition.recognition, leader.position.recognition);
          const sidAlign = getAxisAlignment(userPosition.sid, leader.position.sid);
          const party = parties.find(p => p.id === leader.partyId);

          return (
            <div
              key={leader.id}
              className={`p-4 rounded-lg border ${
                index === 0
                  ? 'bg-blue-900/20 border-blue-700'
                  : index === 1
                  ? 'bg-blue-800/10 border-blue-600'
                  : index === 2
                  ? 'bg-blue-700/5 border-blue-500'
                  : 'bg-gray-800/50 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: leader.color }}
                  />
                  <div>
                    <div className="font-bold text-white">{leader.name}</div>
                    <div className="text-xs text-gray-500">{leader.role}</div>
                    {party && (
                      <span
                        className="inline-block mt-1 px-1.5 py-0.5 rounded text-xs font-semibold"
                        style={{ backgroundColor: `${party.color}20`, color: party.color }}
                      >
                        {party.abbreviation}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{matchScore}%</div>
                  <div className="text-xs text-gray-500">match</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-gray-500 mb-1">Statism</div>
                  <div className={`font-mono ${getSymbolColor(statismAlign.symbol)}`}>
                    {Math.abs(userPosition.statism - leader.position.statism).toFixed(2)} {statismAlign.symbol}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Recognition</div>
                  <div className={`font-mono ${getSymbolColor(recognitionAlign.symbol)}`}>
                    {Math.abs(userPosition.recognition - leader.position.recognition).toFixed(2)} {recognitionAlign.symbol}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">SID</div>
                  <div className={`font-mono ${getSymbolColor(sidAlign.symbol)}`}>
                    {Math.abs(userPosition.sid - leader.position.sid).toFixed(2)} {sidAlign.symbol}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Legend:</span>{' '}
          <span className="text-green-400">✓</span> = Very close (diff &lt; 0.15) •{' '}
          <span className="text-yellow-400">~</span> = Moderate (diff 0.15-0.40) •{' '}
          <span className="text-orange-400">✗</span> = Different (diff &gt; 0.40)
        </p>
      </div>
    </div>
  );
}
