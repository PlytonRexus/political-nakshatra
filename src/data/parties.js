// Political Nakshatra - Indian Political Parties Positioning (New Framework: [-10, +10] coordinates)
// Based on policy analysis and the three-axis framework

export const parties = [
  {
    id: 'bjp',
    name: 'Bharatiya Janata Party',
    abbreviation: 'BJP',
    founded: 1980,
    color: '#FF9933', // Saffron
    position: {
      statism: 4.0,
      recognition: -7.0,
      sid: -3.0
    },
    ideology: ['Hindu Nationalism', 'Economic Nationalism', 'Cultural Conservatism'],
    keyPolicies: [
      'Uniform Civil Code advocacy',
      'Abrogation of Article 370',
      'PM-KISAN Direct Benefits',
      'Ram Mandir construction',
      'Infrastructure development focus'
    ],
    reasoning: 'BJP combines moderate-high economic statism through extensive welfare schemes (PM-KISAN, Ayushman Bharat) and infrastructure spending with low recognition politics (opposition to minority "appeasement", push for UCC, majoritarian Hindu identity). SID is moderately particularist due to focus on Hindu majority interests but tempered by technology-driven universal welfare delivery (DBT, Aadhaar).',
    electoralStrength: 'National, strong in North and West India'
  },
  {
    id: 'congress',
    name: 'Indian National Congress',
    abbreviation: 'INC',
    founded: 1885,
    color: '#19AAED', // Sky blue
    position: {
      statism: 5.0,
      recognition: 6.0,
      sid: -5.0
    },
    ideology: ['Social Democracy', 'Secularism', 'Welfare State'],
    keyPolicies: [
      'MGNREGA rural employment',
      'Right to Food and Education',
      'Minority welfare schemes',
      'OBC and SC/ST reservations',
      'Secularism protection'
    ],
    reasoning: 'Congress historically champions high statism (public sector, welfare state) and high recognition politics (minority rights, reservations, pluralism). However, organizational decline has led to increased reliance on identity-based patronage networks, making it moderately particularist in distribution.',
    electoralStrength: 'National, declining but present across India'
  },
  {
    id: 'aap',
    name: 'Aam Aadmi Party',
    abbreviation: 'AAP',
    founded: 2012,
    color: '#0066CC', // Blue
    position: {
      statism: 7.0,
      recognition: 3.0,
      sid: 4.0
    },
    ideology: ['Populism', 'Welfare State', 'Anti-Corruption'],
    keyPolicies: [
      'Free electricity and water',
      'Government schools and healthcare',
      'Mohalla clinics',
      'Technology in governance',
      'Direct democracy experiments'
    ],
    reasoning: 'AAP represents very high statism through extensive state-provided welfare (free water, electricity, education, healthcare). Moderate recognition (supports reservations but less focused on identity politics). Attempts more universalist delivery through technology, transparent criteria, and mohalla clinics, though still engages in some clientelism.',
    electoralStrength: 'Regional (Delhi, Punjab), expanding'
  },
  {
    id: 'bsp',
    name: 'Bahujan Samaj Party',
    abbreviation: 'BSP',
    founded: 1984,
    color: '#0000FF', // Blue
    position: {
      statism: 3.0,
      recognition: 9.0,
      sid: -8.0
    },
    ideology: ['Ambedkarite', 'Dalit Rights', 'Social Justice'],
    keyPolicies: [
      'SC/ST reservations expansion',
      'Dalit empowerment programs',
      'Anti-Brahminical politics',
      'Identity-based mobilization',
      'Symbolic politics (statues, memorials)'
    ],
    reasoning: 'BSP is the quintessential recognition party, focused almost exclusively on Dalit empowerment and SC/ST rights (very high recognition). Highly particularist in distribution, explicitly favoring SC/ST constituencies through ethnic headcount politics. Moderate statism as a tool for group advancement rather than broader economic ideology.',
    electoralStrength: 'Regional (Uttar Pradesh), declining'
  },
  {
    id: 'tmc',
    name: 'All India Trinamool Congress',
    abbreviation: 'TMC',
    founded: 1998,
    color: '#20C646', // Green
    position: {
      statism: 6.0,
      recognition: 5.0,
      sid: -6.0
    },
    ideology: ['Regional Populism', 'Welfare State', 'Minority Rights'],
    keyPolicies: [
      'Kanyashree girl child welfare',
      'Housing schemes (Bangla Awas)',
      'Minority outreach programs',
      'Strong local governance',
      'Anti-BJP positioning'
    ],
    reasoning: 'TMC under Mamata Banerjee runs an extensive welfare state (Kanyashree, housing, ration). Moderate-high recognition through strong minority (especially Muslim) outreach and protection. Heavily relies on local patronage networks and clientelism (particularist SID), with strong grassroots organization.',
    electoralStrength: 'Regional (West Bengal), dominant'
  },
  {
    id: 'cpim',
    name: 'Communist Party of India (Marxist)',
    abbreviation: 'CPI(M)',
    founded: 1964,
    color: '#FF0000', // Red
    position: {
      statism: 9.0,
      recognition: 4.0,
      sid: 2.0
    },
    ideology: ['Marxism-Leninism', 'Socialism', 'Class Politics'],
    keyPolicies: [
      'Land reforms',
      'Public sector expansion',
      'Worker and peasant rights',
      'Secular governance',
      'Class-based mobilization'
    ],
    reasoning: 'CPI(M) represents traditional left statism (very high - public sector, planning, redistribution). Moderate recognition: supports reservations but emphasizes class over caste/religion. Leans slightly universalist through class-based rather than identity-based politics, though local governance can be clientelistic.',
    electoralStrength: 'Regional (Kerala, declining in West Bengal)'
  },
  {
    id: 'sp',
    name: 'Samajwadi Party',
    abbreviation: 'SP',
    founded: 1992,
    color: '#FF2222', // Red
    position: {
      statism: 5.0,
      recognition: 7.0,
      sid: -7.0
    },
    ideology: ['Socialist', 'OBC Politics', 'Secularism'],
    keyPolicies: [
      'OBC reservations',
      'Minority welfare (esp. Muslims)',
      'Rural development',
      'Anti-upper caste rhetoric',
      'Yadav community mobilization'
    ],
    reasoning: 'SP champions OBC and minority recognition (high). Highly particularist distribution explicitly favoring Yadav community and Muslim voters through targeted patronage. Moderate-high statism through welfare schemes and rural development programs targeting core constituencies.',
    electoralStrength: 'Regional (Uttar Pradesh), competitive'
  },
  {
    id: 'dmk',
    name: 'Dravida Munnetra Kazhagam',
    abbreviation: 'DMK',
    founded: 1949,
    color: '#FF0000', // Red and black
    position: {
      statism: 7.0,
      recognition: 8.0,
      sid: -4.0
    },
    ideology: ['Dravidian Nationalism', 'Social Justice', 'Anti-Hindi'],
    keyPolicies: [
      'Free rice and welfare schemes',
      'Dravidian identity politics',
      'Anti-Brahmin reservations',
      'Tamil language promotion',
      'Efficient state governance'
    ],
    reasoning: 'DMK combines high statism (Tamil Nadu welfare model - free rice, bicycles, laptops, education) with strong Dravidian identity and recognition politics (anti-Brahminism, Tamil pride, OBC reservations). Moderately particularist but effective state capacity in Tamil Nadu balances clientelism with delivery.',
    electoralStrength: 'Regional (Tamil Nadu), alternates with AIADMK'
  },
];

// Helper functions for party data

/**
 * Get party by ID
 * @param {string} id - Party ID
 * @returns {Object|null} Party object or null if not found
 */
export function getPartyById(id) {
  return parties.find(party => party.id === id) || null;
}

/**
 * Get party by abbreviation
 * @param {string} abbreviation - Party abbreviation (e.g., 'BJP')
 * @returns {Object|null} Party object or null if not found
 */
export function getPartyByAbbreviation(abbreviation) {
  return parties.find(party => party.abbreviation === abbreviation) || null;
}

/**
 * Get parties sorted by distance from user position
 * @param {Object} userPosition - User's 3D coordinates
 * @returns {Array} Sorted array of parties with distances
 */
export function getPartiesByDistance(userPosition, calculateDistance) {
  return parties
    .map(party => ({
      ...party,
      distance: calculateDistance(userPosition, party.position)
    }))
    .sort((a, b) => a.distance - b.distance);
}

/**
 * Get axis extremes among parties
 * @param {string} axis - Axis name ('statism', 'recognition', 'sid')
 * @returns {Object} Min and max parties on axis
 */
export function getAxisExtremes(axis) {
  const sorted = [...parties].sort((a, b) =>
    a.position[axis] - b.position[axis]
  );

  return {
    min: sorted[0],
    max: sorted[sorted.length - 1],
    range: sorted[sorted.length - 1].position[axis] - sorted[0].position[axis]
  };
}

// Export party count for validation
export const partyCount = parties.length;
