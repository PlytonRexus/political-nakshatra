// Axis mapping table showing relationships between Western and Indian models

import { axisMappings } from '../../data/modelComparison';

export function AxisMappingTable() {
  const relationshipLabels = {
    partial: { text: 'Partial Overlap', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    limited: { text: 'Limited Overlap', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    unique: { text: 'India-Specific', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-white mb-6">Axis Relationships</h3>

      <div className="space-y-6">
        {axisMappings.map((mapping, index) => (
          <div
            key={index}
            className="card bg-gray-800/50 border-l-4"
            style={{ borderLeftColor: mapping.relationshipColor }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-lg font-bold text-white">{mapping.westernAxis}</h4>
                  <span className="text-gray-400">→</span>
                  <h4 className="text-lg font-bold text-white">{mapping.indianAxis}</h4>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded border ${
                  relationshipLabels[mapping.relationship].color
                }`}
              >
                {relationshipLabels[mapping.relationship].text}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{mapping.explanation}</p>

            {/* Examples */}
            {mapping.examples && mapping.examples.length > 0 && (
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Examples
                </h5>
                {mapping.examples.map((example, exIdx) => (
                  <div key={exIdx} className="bg-gray-900/50 p-4 rounded">
                    <div className="font-bold text-white mb-2">{example.party}</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Western View:</span>
                        <p className="text-gray-300">{example.westernView}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Indian View:</span>
                        <p className="text-gray-300">{example.indianView}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-800/30 rounded">
        <h5 className="text-sm font-semibold text-gray-400 mb-3">Legend</h5>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500/40 rounded border border-green-500"></div>
            <span className="text-gray-300">Partial Overlap - Both axes measure similar but not identical dimensions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500/40 rounded border border-yellow-500"></div>
            <span className="text-gray-300">Limited Overlap - Conceptually different dimensions with some tangential relationship</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500/40 rounded border border-blue-500"></div>
            <span className="text-gray-300">India-Specific - No equivalent in Western models</span>
          </div>
        </div>
      </div>
    </div>
  );
}
