// Quick Summary Component - Shows brief overview of results

import { Target } from 'lucide-react';
import { getPartiesByDistance } from '../../data/parties';
import { getLeadersByDistance } from '../../data/leaders';
import { calculateDistance, calculateMatchScore, getPoliticalLean, interpretMatchPercentage, interpretDistance } from '../../utils/scoring';

export function QuickSummary({ userPosition }) {
  // Get closest party and leader
  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);
  const leadersWithDistance = getLeadersByDistance(userPosition, calculateDistance);

  const closestParty = partiesWithDistance[0];
  const closestLeader = leadersWithDistance[0];

  const partyMatchScore = calculateMatchScore(userPosition, closestParty.position);
  const politicalLean = getPoliticalLean(userPosition);

  return (
    <div className="card bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30">
      <div className="flex items-center gap-3 mb-4">
        <Target className="text-blue-400" size={28} />
        <h3 className="text-2xl font-bold text-white">Quick Summary</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-black/30 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Closest Party</div>
          <div className="text-lg font-bold text-white">{closestParty.abbreviation}</div>
          <div className="text-xs text-gray-500 mt-1">{closestParty.name}</div>
        </div>

        <div className="bg-black/30 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Political Lean</div>
          <div className="text-lg font-bold text-white">{politicalLean}</div>
        </div>

        <div className="bg-black/30 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Match Score</div>
          <div className="text-lg font-bold text-green-400">{partyMatchScore}%</div>
          <div className="text-xs text-gray-500 mt-1">
            {interpretMatchPercentage(partyMatchScore)} with {closestParty.abbreviation}
          </div>
        </div>
      </div>

      {closestLeader && (
        <div className="mt-4 bg-black/30 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">Closest Leader</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-white">{closestLeader.name}</div>
              <div className="text-xs text-gray-500">{closestLeader.role}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-green-400">
                {calculateMatchScore(userPosition, closestLeader.position)}% match
              </div>
              <div className="text-xs text-gray-500">
                {interpretDistance(closestLeader.distance, 'leader')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
