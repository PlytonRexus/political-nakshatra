// Aspect Breakdown Component - Detailed axis-by-axis comparison with closest match

import { useTranslation } from 'react-i18next';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { parties } from '../../data/parties';
import { getAxisAlignment } from '../../utils/scoring';

const axisInfo = {
  statism: {
    name: 'Statism',
    color: '#4FC3F7',
    description: 'Role of the state in economy and society'
  },
  recognition: {
    name: 'Recognition',
    color: '#81C784',
    description: 'Support for group-based rights and protections'
  },
  sid: {
    name: 'SID (Distribution)',
    color: '#BA68C8',
    description: 'Universalist vs particularist resource distribution'
  }
};

export function AspectBreakdown({ userPosition, targetEntity }) {
  const { t } = useTranslation('scoring');
  const axes = ['statism', 'recognition', 'sid'];

  const getBarPosition = (value) => {
    // Convert from [-1, 1] to [0, 100] percentage
    return ((value + 1) / 2) * 100;
  };

  const getAlignmentMessage = (axis, alignment) => {
    const messages = {
      statism: {
        'Very similar': 'Nearly identical views on state role',
        'Similar': 'Aligned on state intervention levels',
        'Somewhat different': alignment.match > 50
          ? 'Some differences on state policy'
          : 'Different approaches to state role',
        'Different': userPosition[axis] > targetEntity.position[axis]
          ? 'You favor more state intervention'
          : 'You favor less state intervention'
      },
      recognition: {
        'Very similar': 'Nearly identical on identity politics',
        'Similar': 'Aligned on group rights approach',
        'Somewhat different': alignment.match > 50
          ? 'Some differences on recognition politics'
          : 'Different views on group rights',
        'Different': userPosition[axis] > targetEntity.position[axis]
          ? 'You favor more recognition politics'
          : 'You favor less recognition politics'
      },
      sid: {
        'Very similar': 'Nearly identical on resource distribution',
        'Similar': 'Aligned on distribution approach',
        'Somewhat different': alignment.match > 50
          ? 'Some differences on distribution'
          : 'Different distribution approaches',
        'Different': userPosition[axis] > targetEntity.position[axis]
          ? 'You favor more universalism'
          : 'You favor more particularism'
      }
    };

    return messages[axis][alignment.label] || 'Different approaches';
  };

  const isLeader = targetEntity.hasOwnProperty('partyId');
  const party = isLeader ? parties.find(p => p.id === targetEntity.partyId) : targetEntity;

  return (
    <div className="card bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/30">
      <div className="flex items-center gap-3 mb-2">
        <TrendingUp className="text-purple-400" size={24} />
        <h3 className="text-2xl font-bold text-white">
          Detailed Comparison: You vs {isLeader ? targetEntity.name : targetEntity.abbreviation}
        </h3>
      </div>
      <p className="text-gray-400 mb-6">
        Axis-by-axis breakdown showing where you align and where you differ
      </p>

      <div className="space-y-8">
        {axes.map(axis => {
          const userValue = userPosition[axis];
          const targetValue = targetEntity.position[axis];
          const alignment = getAxisAlignment(userValue, targetValue, t);
          const info = axisInfo[axis];

          return (
            <div key={axis} className="bg-black/30 rounded-lg p-5 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4
                    className="text-lg font-bold mb-1"
                    style={{ color: info.color }}
                  >
                    {info.name}
                  </h4>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold" style={{ color: info.color }}>
                    {alignment.match}% match
                  </div>
                  <div className="text-xs text-gray-500">{alignment.label}</div>
                </div>
              </div>

              {/* Visual comparison bars */}
              <div className="space-y-3 mb-4">
                {/* User bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-400">You</span>
                    <span className="font-mono text-blue-400 font-bold">
                      {userValue > 0 ? '+' : ''}{userValue.toFixed(2)}
                    </span>
                  </div>
                  <div className="relative h-8 bg-gray-800 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-px h-full bg-gray-600" style={{ marginLeft: '50%' }} />
                    </div>
                    <div
                      className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all"
                      style={{
                        left: userValue < 0 ? `${getBarPosition(userValue)}%` : '50%',
                        width: `${Math.abs(getBarPosition(userValue) - 50)}%`
                      }}
                    />
                    <div className="relative h-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-white drop-shadow-md">
                        {userValue > 0 ? '+' : ''}{userValue.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Target bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-400">
                      {isLeader ? targetEntity.name.split(' ')[0] : targetEntity.abbreviation}
                    </span>
                    <span className="font-mono text-purple-400 font-bold">
                      {targetValue > 0 ? '+' : ''}{targetValue.toFixed(2)}
                    </span>
                  </div>
                  <div className="relative h-8 bg-gray-800 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-px h-full bg-gray-600" style={{ marginLeft: '50%' }} />
                    </div>
                    <div
                      className="absolute h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all"
                      style={{
                        left: targetValue < 0 ? `${getBarPosition(targetValue)}%` : '50%',
                        width: `${Math.abs(getBarPosition(targetValue) - 50)}%`
                      }}
                    />
                    <div className="relative h-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-white drop-shadow-md">
                        {targetValue > 0 ? '+' : ''}{targetValue.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alignment message */}
              <div className="flex items-start gap-2 text-sm text-gray-300 bg-gray-900/50 rounded p-3">
                <ArrowRight className="text-gray-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{getAlignmentMessage(axis, alignment)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
