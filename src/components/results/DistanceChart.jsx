// Distance Chart Component - Visual bar chart of distances to all parties

import { BarChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getPartiesByDistance } from '../../data/parties';
import { calculateDistance } from '../../utils/scoring';

export function DistanceChart({ userPosition }) {
  const { t } = useTranslation(['common', 'scoring']);
  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);
  const maxDistance = Math.max(...partiesWithDistance.map(p => p.distance));

  const getColorForDistance = (distance) => {
    const normalized = distance / maxDistance;
    if (normalized < 0.33) return 'from-green-500 to-green-600';
    if (normalized < 0.66) return 'from-yellow-500 to-yellow-600';
    return 'from-orange-500 to-red-600';
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-2">
        <BarChart className="text-blue-400" size={24} />
        <h3 className="text-2xl font-bold text-white">{t('common:results.partyDistance.title')}</h3>
      </div>
      <p className="text-gray-400 mb-6">
        {t('common:results.partyDistance.description')}
      </p>

      <div className="space-y-3">
        {partiesWithDistance.map((party, index) => {
          const percentage = (party.distance / maxDistance) * 100;

          return (
            <div key={party.id} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: party.color }}
                  />
                  <span className="font-semibold text-white">{party.abbreviation}</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">{party.name}</span>
                </div>
                <span className="font-mono text-sm text-gray-300">{party.distance.toFixed(3)}</span>
              </div>

              <div className="relative h-8 bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getColorForDistance(party.distance)} transition-all duration-500 ease-out`}
                  style={{ width: `${percentage}%` }}
                />
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white drop-shadow-md">
                      {t('common:results.labels.closestMatch')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
        <span>{t('common:results.labels.closer')}</span>
        <span>{t('common:results.labels.farther')}</span>
      </div>
    </div>
  );
}
