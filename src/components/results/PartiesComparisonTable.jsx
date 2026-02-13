// Parties Comparison Table - Shows detailed comparison with all parties

import { getPartiesByDistance } from '../../data/parties';
import { calculateDistance, calculateMatchScore, getAxisAlignment } from '../../utils/scoring';

export function PartiesComparisonTable({ userPosition }) {
  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);

  const getSymbolColor = (symbol) => {
    if (symbol === '✓') return 'text-green-400';
    if (symbol === '~') return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold text-white mb-2">How You Compare to All Major Parties</h3>
      <p className="text-gray-400 mb-6">
        Detailed breakdown of your position relative to each party
      </p>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-semibold">Party</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Statism</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Recognition</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">SID</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold">Total Dist.</th>
              <th className="text-right py-3 px-4 text-gray-400 font-semibold">Match %</th>
            </tr>
          </thead>
          <tbody>
            {partiesWithDistance.map((party, index) => {
              const matchScore = calculateMatchScore(userPosition, party.position);
              const statismAlign = getAxisAlignment(userPosition.statism, party.position.statism);
              const recognitionAlign = getAxisAlignment(userPosition.recognition, party.position.recognition);
              const sidAlign = getAxisAlignment(userPosition.sid, party.position.sid);

              return (
                <tr
                  key={party.id}
                  className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${
                    index === 0 ? 'bg-blue-900/20' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: party.color }}
                      />
                      <div>
                        <div className="font-bold text-white">{party.abbreviation}</div>
                        <div className="text-xs text-gray-500">{party.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(statismAlign.symbol)}`}>
                      {Math.abs(userPosition.statism - party.position.statism).toFixed(2)} {statismAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(recognitionAlign.symbol)}`}>
                      {Math.abs(userPosition.recognition - party.position.recognition).toFixed(2)} {recognitionAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-mono ${getSymbolColor(sidAlign.symbol)}`}>
                      {Math.abs(userPosition.sid - party.position.sid).toFixed(2)} {sidAlign.symbol}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-mono text-gray-300">{party.distance.toFixed(3)}</span>
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
        {partiesWithDistance.map((party, index) => {
          const matchScore = calculateMatchScore(userPosition, party.position);
          const statismAlign = getAxisAlignment(userPosition.statism, party.position.statism);
          const recognitionAlign = getAxisAlignment(userPosition.recognition, party.position.recognition);
          const sidAlign = getAxisAlignment(userPosition.sid, party.position.sid);

          return (
            <div
              key={party.id}
              className={`p-4 rounded-lg border ${
                index === 0
                  ? 'bg-blue-900/20 border-blue-700'
                  : 'bg-gray-800/50 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: party.color }}
                  />
                  <div>
                    <div className="font-bold text-white">{party.abbreviation}</div>
                    <div className="text-xs text-gray-500">{party.name}</div>
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
                    {Math.abs(userPosition.statism - party.position.statism).toFixed(2)} {statismAlign.symbol}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Recognition</div>
                  <div className={`font-mono ${getSymbolColor(recognitionAlign.symbol)}`}>
                    {Math.abs(userPosition.recognition - party.position.recognition).toFixed(2)} {recognitionAlign.symbol}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">SID</div>
                  <div className={`font-mono ${getSymbolColor(sidAlign.symbol)}`}>
                    {Math.abs(userPosition.sid - party.position.sid).toFixed(2)} {sidAlign.symbol}
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
