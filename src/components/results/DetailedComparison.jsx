// Detailed Comparison Component - Wrapper for all comparison sections

import { QuickSummary } from './QuickSummary';
import { ClosestLeaderPerAxis } from './ClosestLeaderPerAxis';
import { PartiesComparisonTable } from './PartiesComparisonTable';
import { DistanceChart } from './DistanceChart';
import { AspectBreakdown } from './AspectBreakdown';
import { getPartiesByDistance } from '../../data/parties';
import { getLeadersByDistance } from '../../data/leaders';
import { calculateDistance } from '../../utils/scoring';

export function DetailedComparison({ userPosition, showLeaders = false }) {
  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);
  const leadersWithDistance = getLeadersByDistance(userPosition, calculateDistance);

  const closestParty = partiesWithDistance[0];
  const closestLeader = leadersWithDistance[0];

  return (
    <div className="space-y-8">
      {/* Quick Summary */}
      <QuickSummary userPosition={userPosition} />

      {/* Closest Leader Per Axis */}
      {showLeaders && (
        <ClosestLeaderPerAxis userPosition={userPosition} />
      )}

      {/* Distance Chart */}
      <DistanceChart userPosition={userPosition} />

      {/* Parties Comparison Table */}
      <PartiesComparisonTable userPosition={userPosition} />

      {/* Aspect Breakdown for Closest Match */}
      {closestParty && (
        <AspectBreakdown userPosition={userPosition} targetEntity={closestParty} />
      )}
    </div>
  );
}
