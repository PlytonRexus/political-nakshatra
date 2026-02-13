// Visual comparison of Western vs Indian political models

export function ComparisonDiagram() {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-8">
      {/* Western Political Compass */}
      <div className="card bg-gray-800/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Political Compass (2D)</h3>
        <p className="text-sm text-gray-400 mb-4 text-center">Western Model</p>

        <svg viewBox="0 0 400 400" className="w-full h-auto">
          {/* Background */}
          <rect width="400" height="400" fill="#1a1a2e" />

          {/* Grid lines */}
          <line x1="0" y1="200" x2="400" y2="200" stroke="#333" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#333" strokeWidth="1" />

          {/* Main axes */}
          <line x1="0" y1="200" x2="400" y2="200" stroke="#4FC3F7" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#81C784" strokeWidth="2" />

          {/* Axis labels */}
          <text x="350" y="190" fill="#4FC3F7" fontSize="14" fontWeight="bold">Right</text>
          <text x="30" y="190" fill="#4FC3F7" fontSize="14" fontWeight="bold">Left</text>
          <text x="160" y="30" fill="#81C784" fontSize="14" fontWeight="bold">Libertarian</text>
          <text x="155" y="390" fill="#81C784" fontSize="14" fontWeight="bold">Authoritarian</text>

          {/* Quadrant labels */}
          <text x="100" y="100" fill="#666" fontSize="12" textAnchor="middle">
            Left
          </text>
          <text x="100" y="115" fill="#666" fontSize="12" textAnchor="middle">
            Libertarian
          </text>

          <text x="300" y="100" fill="#666" fontSize="12" textAnchor="middle">
            Right
          </text>
          <text x="300" y="115" fill="#666" fontSize="12" textAnchor="middle">
            Libertarian
          </text>

          <text x="100" y="300" fill="#666" fontSize="12" textAnchor="middle">
            Left
          </text>
          <text x="100" y="315" fill="#666" fontSize="12" textAnchor="middle">
            Authoritarian
          </text>

          <text x="300" y="300" fill="#666" fontSize="12" textAnchor="middle">
            Right
          </text>
          <text x="300" y="315" fill="#666" fontSize="12" textAnchor="middle">
            Authoritarian
          </text>

          {/* Center point */}
          <circle cx="200" cy="200" r="4" fill="#ffffff" />
        </svg>

        <div className="mt-4 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <span>Economic Left-Right axis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-400 rounded"></div>
            <span>Authoritarian-Libertarian axis</span>
          </div>
        </div>
      </div>

      {/* Indian 3D Model */}
      <div className="card bg-gray-800/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Political Nakshatra (3D)</h3>
        <p className="text-sm text-gray-400 mb-4 text-center">Indian Model</p>

        <svg viewBox="0 0 400 400" className="w-full h-auto">
          {/* Background */}
          <rect width="400" height="400" fill="#1a1a2e" />

          {/* 3D axes representation (isometric-ish view) */}
          {/* Statism axis (X - horizontal) */}
          <line x1="100" y1="200" x2="300" y2="200" stroke="#4FC3F7" strokeWidth="2" />
          <text x="310" y="205" fill="#4FC3F7" fontSize="12" fontWeight="bold">Statism</text>

          {/* Recognition axis (Y - vertical) */}
          <line x1="200" y1="100" x2="200" y2="300" stroke="#81C784" strokeWidth="2" />
          <text x="150" y="95" fill="#81C784" fontSize="12" fontWeight="bold">Recognition</text>

          {/* SID axis (Z - diagonal) */}
          <line x1="250" y1="250" x2="150" y2="150" stroke="#BA68C8" strokeWidth="2" />
          <text x="260" y="270" fill="#BA68C8" fontSize="12" fontWeight="bold">SID</text>

          {/* Grid plane */}
          <line x1="100" y1="100" x2="300" y2="100" stroke="#333" strokeWidth="1" strokeDasharray="4" />
          <line x1="100" y1="300" x2="300" y2="300" stroke="#333" strokeWidth="1" strokeDasharray="4" />
          <line x1="100" y1="100" x2="100" y2="300" stroke="#333" strokeWidth="1" strokeDasharray="4" />
          <line x1="300" y1="100" x2="300" y2="300" stroke="#333" strokeWidth="1" strokeDasharray="4" />

          {/* Connecting lines for 3D effect */}
          <line x1="150" y1="150" x2="200" y2="100" stroke="#333" strokeWidth="1" strokeDasharray="2" />
          <line x1="150" y1="150" x2="100" y2="200" stroke="#333" strokeWidth="1" strokeDasharray="2" />
          <line x1="250" y1="250" x2="300" y2="200" stroke="#333" strokeWidth="1" strokeDasharray="2" />
          <line x1="250" y1="250" x2="200" y2="300" stroke="#333" strokeWidth="1" strokeDasharray="2" />

          {/* Center point */}
          <circle cx="200" cy="200" r="4" fill="#ffffff" />

          {/* Star/constellation metaphor - small stars */}
          <circle cx="220" cy="180" r="2" fill="#FFD700" opacity="0.6" />
          <circle cx="180" cy="220" r="2" fill="#FFD700" opacity="0.6" />
          <circle cx="240" cy="210" r="2" fill="#FFD700" opacity="0.6" />
          <circle cx="160" cy="190" r="2" fill="#FFD700" opacity="0.6" />
        </svg>

        <div className="mt-4 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <span>Statism axis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-400 rounded"></div>
            <span>Recognition axis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-400 rounded"></div>
            <span>SID axis (India-specific)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
