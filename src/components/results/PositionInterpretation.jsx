// Position Interpretation Component - Narrative interpretation of user's political position

import { getPoliticalLean, getAxisDescription, getAxisExamples } from '../../utils/scoring';

export function PositionInterpretation({ userPosition }) {
  const politicalLean = getPoliticalLean(userPosition);

  return (
    <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
      <h3 className="text-2xl font-bold text-white mb-4">Understanding Your Political Position</h3>

      <div className="space-y-4">
        {/* Overall lean */}
        <p className="text-gray-300">
          Based on your responses, you lean <span className="font-bold text-white">{politicalLean}</span>
          {' '}on the Indian political spectrum.
        </p>

        {/* Axis-by-axis narrative */}
        <div className="space-y-3">
          <p className="text-gray-300">
            <span className="font-semibold text-blue-400">On the role of the state</span>
            , {getAxisDescription(userPosition.statism, 'statism').charAt(0).toLowerCase() + getAxisDescription(userPosition.statism, 'statism').slice(1)}
          </p>

          <p className="text-gray-300">
            <span className="font-semibold text-green-400">Regarding group rights</span>
            , {getAxisDescription(userPosition.recognition, 'recognition').charAt(0).toLowerCase() + getAxisDescription(userPosition.recognition, 'recognition').slice(1)}
          </p>

          <p className="text-gray-300">
            <span className="font-semibold text-purple-400">For resource distribution</span>
            , {getAxisDescription(userPosition.sid, 'sid').charAt(0).toLowerCase() + getAxisDescription(userPosition.sid, 'sid').slice(1)}
          </p>
        </div>

        {/* Concrete policy positions */}
        <div className="mt-6 p-4 bg-black/30 rounded-lg">
          <p className="text-sm font-semibold text-gray-400 mb-3">
            You likely support policies such as:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ...getAxisExamples(userPosition.statism, 'statism').slice(0, 2),
              ...getAxisExamples(userPosition.recognition, 'recognition').slice(0, 2),
              ...getAxisExamples(userPosition.sid, 'sid').slice(0, 2)
            ].map((example, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
                <span>{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
