// Political Nakshatra - Political Leaders Data
// Individual political leaders with their positions on the 3D political compass

export const leaders = [
  // National Leaders
  {
    id: 'modi',
    name: 'Narendra Modi',
    partyId: 'bjp',
    role: 'Prime Minister of India',
    tenure: '2014-present',
    color: '#FF7700', // Slightly brighter saffron than BJP
    position: {
      statism: 0.45, // High welfare spending but also privatization
      recognition: -0.75, // Strongly majoritarian (CAA, Article 370)
      sid: -0.25, // Mixed: Digital governance but also personalistic
    },
    ideology: ['Hindu Nationalism', 'Development Focus', 'Strong State'],
    keyPolicies: [
      'Abrogation of Article 370 (Kashmir)',
      'Citizenship Amendment Act (CAA)',
      'Digital India and Direct Benefit Transfer expansion',
      'Make in India initiative',
      'Infrastructure mega-projects (highways, railways)',
      'PM-KISAN and Ayushman Bharat welfare schemes',
    ],
    reasoning: 'Modi represents a strong statist approach with massive infrastructure spending and welfare expansion (PM-KISAN, Ayushman Bharat), combined with very low recognition (hostile to minority rights, Article 370 abrogation). His governance shows moderate particularism tempered by digital universalism (Aadhaar, DBT).',
    region: 'National',
  },
  {
    id: 'rahul-gandhi',
    name: 'Rahul Gandhi',
    partyId: 'congress',
    role: 'Leader of Opposition (Lok Sabha)',
    tenure: '2024-present',
    color: '#0088FF', // Brighter blue than Congress
    position: {
      statism: 0.6, // High welfare state advocacy
      recognition: 0.7, // Strong support for group rights
      sid: -0.3, // Some particularism in practice
    },
    ideology: ['Social Democracy', 'Group Rights', 'Welfare State'],
    keyPolicies: [
      'NYAY (minimum income guarantee proposal)',
      'Caste census advocacy',
      'Protection of reservations and minority rights',
      'Strong welfare state expansion',
      'Opposition to privatization',
    ],
    reasoning: 'Rahul Gandhi advocates for high statism through extensive welfare proposals (NYAY), strong recognition politics (caste census, minority rights), with moderate particularism despite Congress\'s universalist rhetoric.',
    region: 'National',
  },
  {
    id: 'kejriwal',
    name: 'Arvind Kejriwal',
    partyId: 'aap',
    role: 'AAP National Convener',
    tenure: '2012-present',
    color: '#00AAFF', // Light blue
    position: {
      statism: 0.75, // Very high state intervention (education, health, utilities)
      recognition: 0.3, // Moderate recognition (avoids strong identity politics)
      sid: 0.4, // Relatively universalist (DBT, transparent subsidies)
    },
    ideology: ['Welfare Populism', 'Anti-Corruption', 'Direct Democracy'],
    keyPolicies: [
      'Free electricity and water subsidies',
      'Mohalla Clinics and free healthcare',
      'Government school revolution',
      'Direct Benefit Transfer for services',
      'Jan Lokpal and anti-corruption measures',
    ],
    reasoning: 'Kejriwal shows very high statism through extensive welfare delivery (free utilities, education, health), moderate recognition (avoids strong caste/religion focus), and moderate universalism through DBT-based delivery.',
    region: 'Delhi / National',
  },

  // Regional Leaders
  {
    id: 'mamata',
    name: 'Mamata Banerjee',
    partyId: 'tmc',
    role: 'Chief Minister of West Bengal',
    tenure: '2011-present',
    color: '#00CC66', // Green
    position: {
      statism: 0.55, // High welfare and state intervention
      recognition: 0.5, // Moderate-high (minority appeasement criticism)
      sid: -0.6, // Highly particularist governance style
    },
    ideology: ['Bengali Nationalism', 'Minority Rights', 'Welfare Populism'],
    keyPolicies: [
      'Kanyashree and other welfare schemes',
      'Opposition to NRC/CAA',
      'Minority welfare programs',
      'Patronage-based development',
      'Anti-BJP identity politics',
    ],
    reasoning: 'Mamata combines high statism (extensive welfare schemes) with moderate recognition (minority focus) and highly particularist governance characterized by patronage networks and personalistic rule.',
    region: 'West Bengal',
  },
  {
    id: 'stalin',
    name: 'M.K. Stalin',
    partyId: 'dmk',
    role: 'Chief Minister of Tamil Nadu',
    tenure: '2021-present',
    color: '#DD0000', // Red
    position: {
      statism: 0.65, // High welfare state (Dravidian model)
      recognition: 0.6, // High (OBC/Dalit focus, anti-Brahmin)
      sid: -0.4, // Moderate particularism
    },
    ideology: ['Dravidian Ideology', 'Social Justice', 'Rationalism'],
    keyPolicies: [
      'Free bus travel for women',
      'Breakfast scheme for school children',
      'Strong OBC/SC welfare focus',
      'Opposition to NEET and Hindi imposition',
      'Anti-caste and rationalist policies',
    ],
    reasoning: 'Stalin represents the Dravidian model of high statism (extensive welfare), high recognition (OBC/Dalit focus), and moderate particularism balanced by institutionalized welfare delivery.',
    region: 'Tamil Nadu',
  },
  {
    id: 'akhilesh',
    name: 'Akhilesh Yadav',
    partyId: 'sp',
    role: 'President of Samajwadi Party',
    tenure: '2017-present',
    color: '#CC0000', // Dark red
    position: {
      statism: 0.4, // Moderate statism (development focus)
      recognition: 0.55, // Moderate-high (OBC/minority coalition)
      sid: -0.7, // Highly particularist (Yadav-Muslim focus)
    },
    ideology: ['Socialist', 'OBC Politics', 'Muslim Alliance'],
    keyPolicies: [
      'Samajwadi Pension Scheme',
      'Laptop and ambulance distribution',
      'OBC and minority welfare',
      'Infrastructure development (Agra-Lucknow Expressway)',
      'Yadav-Muslim coalition building',
    ],
    reasoning: 'Akhilesh shows moderate statism balanced with development, moderate-high recognition through OBC/minority focus, and high particularism centered on Yadav community patronage and Muslim alliance.',
    region: 'Uttar Pradesh',
  },
  {
    id: 'mayawati',
    name: 'Mayawati',
    partyId: 'bsp',
    role: 'BSP Supremo',
    tenure: '2003-present (party chief)',
    color: '#0044AA', // Blue
    position: {
      statism: 0.3, // Moderate statism (selective intervention)
      recognition: 0.9, // Very high (Dalit assertion)
      sid: -0.85, // Extremely particularist (Dalit focus)
    },
    ideology: ['Ambedkarite', 'Dalit Assertion', 'Bahujan Politics'],
    keyPolicies: [
      'Dalit memorialization projects',
      'SC/ST welfare schemes',
      'Bahujan identity politics',
      'Reservations protection',
      'Anti-upper caste rhetoric',
    ],
    reasoning: 'Mayawati represents extreme recognition politics (Dalit assertion) with very high particularism (Dalit community-focused governance) and moderate statism focused on symbolic and targeted interventions.',
    region: 'Uttar Pradesh',
  },

  // Current Cabinet Ministers
  {
    id: 'amit-shah',
    name: 'Amit Shah',
    partyId: 'bjp',
    role: 'Union Home Minister',
    tenure: '2019-present',
    color: '#FF6600', // Saffron
    position: {
      statism: 0.5, // Moderate-high (security state emphasis)
      recognition: -0.85, // Very low (hardline Hindutva)
      sid: -0.4, // Moderate particularism (organizational strength)
    },
    ideology: ['Hindutva', 'Strong State', 'Organizational Politics'],
    keyPolicies: [
      'Architect of Article 370 abrogation',
      'CAA-NRC push',
      'Internal security focus',
      'Electoral strategy and organization',
      'Hardline Hindu nationalist positions',
    ],
    reasoning: 'Amit Shah represents moderate-high statism with security emphasis, very low recognition (hardline majoritarian), and moderate particularism balanced by strong party organization.',
    region: 'National',
  },
  {
    id: 'rajnath-singh',
    name: 'Rajnath Singh',
    partyId: 'bjp',
    role: 'Union Defence Minister',
    tenure: '2019-present',
    color: '#FF8833', // Light saffron
    position: {
      statism: 0.45, // Moderate statism (security focus)
      recognition: -0.6, // Low (moderate Hindutva)
      sid: -0.2, // Slight particularism
    },
    ideology: ['Moderate Hindutva', 'National Security', 'RSS Background'],
    keyPolicies: [
      'Military modernization',
      'Balakot airstrike decision',
      'Defence procurement reforms',
      'Border infrastructure development',
    ],
    reasoning: 'Rajnath Singh shows moderate statism focused on security, low recognition (moderate Hindutva stance), and slight particularism tempered by institutional role.',
    region: 'National',
  },
  {
    id: 'nirmala-sitharaman',
    name: 'Nirmala Sitharaman',
    partyId: 'bjp',
    role: 'Union Finance Minister',
    tenure: '2019-present',
    color: '#FF9944', // Lighter saffron
    position: {
      statism: 0.35, // Moderate (mixed welfare and privatization)
      recognition: -0.5, // Low (economic focus over identity)
      sid: 0.1, // Slight universalism (policy-driven)
    },
    ideology: ['Fiscal Conservatism', 'Market Reforms', 'Development'],
    keyPolicies: [
      'Corporate tax cuts',
      'Privatization of PSUs',
      'Welfare scheme expansion (PM-KISAN)',
      'GST implementation',
      'Production-Linked Incentive schemes',
    ],
    reasoning: 'Nirmala Sitharaman represents moderate statism balanced between welfare and privatization, low recognition (economic focus), and slight universalism through policy-driven governance.',
    region: 'National',
  },

  // Historical/Veteran Figures
  {
    id: 'mulayam',
    name: 'Mulayam Singh Yadav',
    partyId: 'sp',
    role: 'SP Founder (Historical)',
    tenure: '1992-2017 (party chief)',
    color: '#AA0000', // Dark red
    position: {
      statism: 0.35, // Moderate statism
      recognition: 0.5, // Moderate (OBC focus)
      sid: -0.75, // Highly particularist (Yadav patronage)
    },
    ideology: ['Socialist', 'OBC Politics', 'Lohiaite'],
    keyPolicies: [
      'OBC reservation advocacy',
      'Yadav community mobilization',
      'Rural development focus',
      'Anti-Mandal violence handling',
    ],
    reasoning: 'Mulayam Singh represents moderate statism, moderate recognition (OBC focus), and high particularism centered on Yadav community patronage networks.',
    region: 'Uttar Pradesh (Historical)',
  },
  {
    id: 'karunanidhi',
    name: 'M. Karunanidhi',
    partyId: 'dmk',
    role: 'DMK Leader (Historical)',
    tenure: '1969-2018 (party chief)',
    color: '#BB0000', // Red
    position: {
      statism: 0.7, // High welfare state
      recognition: 0.65, // High (Dravidian, anti-Brahmin)
      sid: -0.5, // Moderate-high particularism
    },
    ideology: ['Dravidian Ideology', 'Rationalism', 'Social Justice'],
    keyPolicies: [
      'Free education and midday meals',
      'Reservation expansion',
      'Tamil linguistic nationalism',
      'Anti-Hindi imposition',
      'Rationalist and atheist advocacy',
    ],
    reasoning: 'Karunanidhi exemplifies the Dravidian model: high statism (extensive welfare), high recognition (anti-Brahmin social justice), and moderate particularism through patronage balanced by institutionalized delivery.',
    region: 'Tamil Nadu (Historical)',
  },

  // Additional Key Figures
  {
    id: 'nitish-kumar',
    name: 'Nitish Kumar',
    partyId: 'jdu',
    role: 'Chief Minister of Bihar',
    tenure: '2005-2014, 2015-2020, 2022-present',
    color: '#009900', // Green
    position: {
      statism: 0.5, // Moderate-high (development + welfare)
      recognition: 0.4, // Moderate (EBC focus, secular coalitions)
      sid: -0.45, // Moderate particularism (EBC patronage)
    },
    ideology: ['Social Engineering', 'Development', 'EBC Politics'],
    keyPolicies: [
      'Bicycle scheme for girls',
      'Prohibition in Bihar',
      'EBC quota advocacy',
      'Rural infrastructure development',
      'Secular coalition building',
    ],
    reasoning: 'Nitish Kumar shows moderate-high statism (development and welfare), moderate recognition (EBC focus with secular coalitions), and moderate particularism through EBC-focused patronage.',
    region: 'Bihar',
  },
  {
    id: 'yogi-adityanath',
    name: 'Yogi Adityanath',
    partyId: 'bjp',
    role: 'Chief Minister of Uttar Pradesh',
    tenure: '2017-present',
    color: '#FF5500', // Bright saffron
    position: {
      statism: 0.4, // Moderate statism (law & order focus)
      recognition: -0.9, // Extremely low (hardline Hindutva)
      sid: -0.35, // Moderate particularism
    },
    ideology: ['Hardline Hindutva', 'Law and Order', 'Hindu Rashtra'],
    keyPolicies: [
      'Anti-Romeo squads and law enforcement',
      'Bulldozer justice (controversial)',
      'Renaming cities (Prayagraj, etc.)',
      'Hindu religious event promotion',
      'Anti-conversion laws',
    ],
    reasoning: 'Yogi Adityanath represents moderate statism with law & order emphasis, extremely low recognition (hardline Hindu majoritarian), and moderate particularism.',
    region: 'Uttar Pradesh',
  },
  {
    id: 'chandrababu-naidu',
    name: 'N. Chandrababu Naidu',
    partyId: 'tdp',
    role: 'Chief Minister of Andhra Pradesh',
    tenure: '2024-present (also 1995-2004, 2014-2019)',
    color: '#FFDD00', // Yellow
    position: {
      statism: 0.3, // Moderate-low (market-friendly development)
      recognition: 0.25, // Low-moderate (caste balance)
      sid: -0.3, // Moderate particularism (regional focus)
    },
    ideology: ['Market Reforms', 'Development', 'Regional Party'],
    keyPolicies: [
      'IT industry development in Hyderabad',
      'Market-friendly reforms',
      'Infrastructure focus',
      'Caste coalition building',
      'Special status demand for Andhra Pradesh',
    ],
    reasoning: 'Naidu represents moderate-low statism (market-friendly development model), low-moderate recognition (caste balancing), and moderate particularism through regional identity and patronage.',
    region: 'Andhra Pradesh',
  },
  {
    id: 'sharad-pawar',
    name: 'Sharad Pawar',
    partyId: 'ncp',
    role: 'NCP Supremo',
    tenure: '1999-present',
    color: '#00AACC', // Cyan
    position: {
      statism: 0.45, // Moderate statism (agricultural focus)
      recognition: 0.35, // Moderate (Maratha assertion)
      sid: -0.55, // Moderate-high particularism
    },
    ideology: ['Agricultural Focus', 'Maratha Politics', 'Pragmatism'],
    keyPolicies: [
      'Agricultural pricing and support',
      'Cooperative sector development',
      'Maratha reservation advocacy',
      'Coalition politics mastery',
      'Rural infrastructure focus',
    ],
    reasoning: 'Sharad Pawar shows moderate statism (agricultural intervention), moderate recognition (Maratha assertion), and moderate-high particularism through patronage networks and coalition politics.',
    region: 'Maharashtra',
  },
];

// Helper functions
export function getLeaderById(id) {
  return leaders.find(leader => leader.id === id) || null;
}

export function getLeadersByParty(partyId) {
  return leaders.filter(leader => leader.partyId === partyId);
}

export function getLeadersByDistance(userPosition, calculateDistance) {
  return leaders
    .map(leader => ({
      ...leader,
      distance: calculateDistance(userPosition, leader.position),
    }))
    .sort((a, b) => a.distance - b.distance);
}

export function getNationalLeaders() {
  return leaders.filter(leader => leader.region === 'National' || leader.region.includes('National'));
}

export function getRegionalLeaders() {
  return leaders.filter(leader => !leader.region.includes('National') && !leader.region.includes('Historical'));
}

export function getHistoricalLeaders() {
  return leaders.filter(leader => leader.region.includes('Historical'));
}
