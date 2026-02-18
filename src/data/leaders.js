// Political Nakshatra - Political Leaders Data (New Framework: [-10, +10] coordinates)
// Individual political leaders with their positions on the 3D political compass

export const leaders = [
  // ========================================
  // INDIAN LEADERS (16 total - rescaled from [-1,+1] to [-10,+10])
  // ========================================

  // National Leaders
  {
    id: 'modi',
    name: 'Narendra Modi',
    partyId: 'bjp',
    role: 'Prime Minister of India',
    tenure: '2014-present',
    color: '#FF7700',
    position: {
      statism: 4.5,
      recognition: -7.5,
      sid: -2.5,
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
    region: 'India',
    category: 'national',
  },
  {
    id: 'rahul-gandhi',
    name: 'Rahul Gandhi',
    partyId: 'congress',
    role: 'Leader of Opposition (Lok Sabha)',
    tenure: '2024-present',
    color: '#0088FF',
    position: {
      statism: 6.0,
      recognition: 7.0,
      sid: -3.0,
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
    region: 'India',
    category: 'national',
  },
  {
    id: 'kejriwal',
    name: 'Arvind Kejriwal',
    partyId: 'aap',
    role: 'AAP National Convener',
    tenure: '2012-present',
    color: '#00AAFF',
    position: {
      statism: 7.5,
      recognition: 3.0,
      sid: 4.0,
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
    region: 'India',
    category: 'national',
  },

  // Regional Leaders
  {
    id: 'mamata',
    name: 'Mamata Banerjee',
    partyId: 'tmc',
    role: 'Chief Minister of West Bengal',
    tenure: '2011-present',
    color: '#00CC66',
    position: {
      statism: 5.5,
      recognition: 5.0,
      sid: -6.0,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'stalin',
    name: 'M.K. Stalin',
    partyId: 'dmk',
    role: 'Chief Minister of Tamil Nadu',
    tenure: '2021-present',
    color: '#DD0000',
    position: {
      statism: 6.5,
      recognition: 6.0,
      sid: -4.0,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'akhilesh',
    name: 'Akhilesh Yadav',
    partyId: 'sp',
    role: 'President of Samajwadi Party',
    tenure: '2017-present',
    color: '#CC0000',
    position: {
      statism: 4.0,
      recognition: 5.5,
      sid: -7.0,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'mayawati',
    name: 'Mayawati',
    partyId: 'bsp',
    role: 'BSP Supremo',
    tenure: '2003-present (party chief)',
    color: '#0044AA',
    position: {
      statism: 3.0,
      recognition: 9.0,
      sid: -8.5,
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
    region: 'India',
    category: 'regional',
  },

  // Current Cabinet Ministers
  {
    id: 'amit-shah',
    name: 'Amit Shah',
    partyId: 'bjp',
    role: 'Union Home Minister',
    tenure: '2019-present',
    color: '#FF6600',
    position: {
      statism: 5.0,
      recognition: -8.5,
      sid: -4.0,
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
    region: 'India',
    category: 'national',
  },
  {
    id: 'rajnath-singh',
    name: 'Rajnath Singh',
    partyId: 'bjp',
    role: 'Union Defence Minister',
    tenure: '2019-present',
    color: '#FF8833',
    position: {
      statism: 4.5,
      recognition: -6.0,
      sid: -2.0,
    },
    ideology: ['Moderate Hindutva', 'National Security', 'RSS Background'],
    keyPolicies: [
      'Military modernization',
      'Balakot airstrike decision',
      'Defence procurement reforms',
      'Border infrastructure development',
    ],
    reasoning: 'Rajnath Singh shows moderate statism focused on security, low recognition (moderate Hindutva stance), and slight particularism tempered by institutional role.',
    region: 'India',
    category: 'national',
  },
  {
    id: 'nirmala-sitharaman',
    name: 'Nirmala Sitharaman',
    partyId: 'bjp',
    role: 'Union Finance Minister',
    tenure: '2019-present',
    color: '#FF9944',
    position: {
      statism: 3.5,
      recognition: -5.0,
      sid: 1.0,
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
    region: 'India',
    category: 'national',
  },

  // Historical/Veteran Figures
  {
    id: 'mulayam',
    name: 'Mulayam Singh Yadav',
    partyId: 'sp',
    role: 'SP Founder (Historical)',
    tenure: '1992-2017 (party chief)',
    color: '#AA0000',
    position: {
      statism: 3.5,
      recognition: 5.0,
      sid: -7.5,
    },
    ideology: ['Socialist', 'OBC Politics', 'Lohiaite'],
    keyPolicies: [
      'OBC reservation advocacy',
      'Yadav community mobilization',
      'Rural development focus',
      'Anti-Mandal violence handling',
    ],
    reasoning: 'Mulayam Singh represents moderate statism, moderate recognition (OBC focus), and high particularism centered on Yadav community patronage networks.',
    region: 'India',
    category: 'historical',
  },
  {
    id: 'karunanidhi',
    name: 'M. Karunanidhi',
    partyId: 'dmk',
    role: 'DMK Leader (Historical)',
    tenure: '1969-2018 (party chief)',
    color: '#BB0000',
    position: {
      statism: 7.0,
      recognition: 6.5,
      sid: -5.0,
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
    region: 'India',
    category: 'historical',
  },

  // Additional Key Figures
  {
    id: 'nitish-kumar',
    name: 'Nitish Kumar',
    partyId: 'jdu',
    role: 'Chief Minister of Bihar',
    tenure: '2005-2014, 2015-2020, 2022-present',
    color: '#009900',
    position: {
      statism: 5.0,
      recognition: 4.0,
      sid: -4.5,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'yogi-adityanath',
    name: 'Yogi Adityanath',
    partyId: 'bjp',
    role: 'Chief Minister of Uttar Pradesh',
    tenure: '2017-present',
    color: '#FF5500',
    position: {
      statism: 4.0,
      recognition: -9.0,
      sid: -3.5,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'chandrababu-naidu',
    name: 'N. Chandrababu Naidu',
    partyId: 'tdp',
    role: 'Chief Minister of Andhra Pradesh',
    tenure: '2024-present (also 1995-2004, 2014-2019)',
    color: '#FFDD00',
    position: {
      statism: 3.0,
      recognition: 2.5,
      sid: -3.0,
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
    region: 'India',
    category: 'regional',
  },
  {
    id: 'sharad-pawar',
    name: 'Sharad Pawar',
    partyId: 'ncp',
    role: 'NCP Supremo',
    tenure: '1999-present',
    color: '#00AACC',
    position: {
      statism: 4.5,
      recognition: 3.5,
      sid: -5.5,
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
    region: 'India',
    category: 'regional',
  },

  // ========================================
  // GLOBAL LEADERS (8 total - from specification)
  // ========================================

  {
    id: 'keir-starmer',
    name: 'Keir Starmer',
    partyId: 'uk-labour',
    role: 'UK Prime Minister (Labour)',
    tenure: '2024-present',
    color: '#E4003B',
    position: {
      statism: 3.0,
      recognition: 2.0,
      sid: -6.0,
    },
    ideology: ['Social Democracy', 'Institutionalism', 'Moderate Recognition'],
    keyPolicies: [
      'State-facilitated labor dispute resolution',
      'Public sector investment',
      'Moderate diversity and inclusion',
      'Democratic institutional adherence',
    ],
    reasoning: 'Starmer combines moderate statism with public sector focus, moderate recognition (supports diversity but avoids radical identity politics), and high universalism through institutional commitment.',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'rishi-sunak',
    name: 'Rishi Sunak',
    partyId: 'uk-conservative',
    role: 'Former UK Prime Minister (Conservative)',
    tenure: '2022-2024',
    color: '#0087DC',
    position: {
      statism: -2.0,
      recognition: -4.0,
      sid: -5.0,
    },
    ideology: ['Fiscal Conservatism', 'Anti-Woke', 'Institutionalism'],
    keyPolicies: [
      'Lower taxes and fiscal conservatism',
      'Defense spending increase',
      'Culture war rhetoric',
      'Colorblind meritocratic society',
    ],
    reasoning: 'Sunak represents low statism (fiscal conservatism), low recognition (anti-woke stance), and high universalism through British institutional norms.',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'justin-trudeau',
    name: 'Justin Trudeau',
    partyId: 'canada-liberal',
    role: 'Canadian Prime Minister (Liberal)',
    tenure: '2015-present',
    color: '#D71920',
    position: {
      statism: 4.0,
      recognition: 7.0,
      sid: -4.0,
    },
    ideology: ['Multiculturalism', 'Indigenous Reconciliation', 'Progressive Statism'],
    keyPolicies: [
      'Multiculturalism and diversity mandates',
      'Indigenous reconciliation',
      'Gender equity initiatives',
      'Carbon taxation',
      'Expanded social safety nets',
    ],
    reasoning: 'Trudeau exemplifies moderate statism (social safety nets, carbon tax), high recognition (multiculturalism, indigenous rights, gender equity), and moderate universalism.',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'pierre-poilievre',
    name: 'Pierre Poilievre',
    partyId: 'canada-conservative',
    role: 'Leader of Canadian Opposition (Conservative)',
    tenure: '2022-present',
    color: '#1A4782',
    position: {
      statism: -4.0,
      recognition: -6.0,
      sid: -3.0,
    },
    ideology: ['Anti-Woke Libertarianism', 'Free Market', 'Anti-Identity Politics'],
    keyPolicies: [
      'Free-market deregulation',
      'Criticism of woke identity politics',
      'Lower taxes',
      'Unified national identity over multiculturalism',
    ],
    reasoning: 'Poilievre represents low statism (free market), low recognition (anti-identity politics), and moderate universalism.',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'donald-trump',
    name: 'Donald Trump',
    partyId: 'us-republican',
    role: 'US President (Republican)',
    tenure: '2025-present (also 2017-2021)',
    color: '#E81B23',
    position: {
      statism: -4.0,
      recognition: -7.0,
      sid: 7.0,
    },
    ideology: ['Transactional Populism', 'Network Patronage', 'Anti-DEI'],
    keyPolicies: [
      'Aggressive deregulation and tax cuts',
      'Anti-DEI initiatives',
      'Economic protectionism (tariffs)',
      'Personal loyalty-based governance',
      'Erosion of universalist institutions',
    ],
    reasoning: 'Trump combines low statism (deregulation, tax cuts), very low recognition (anti-DEI, traditionalist), and high particularism (transactional governance, nepotism, loyalty-based).',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'viktor-orban',
    name: 'Viktor Orbán',
    partyId: 'fidesz',
    role: 'Hungarian Prime Minister (Fidesz)',
    tenure: '2010-present (also 1998-2002)',
    color: '#FF6600',
    position: {
      statism: 5.0,
      recognition: -8.0,
      sid: 9.0,
    },
    ideology: ['Christian Nationalism', 'Extreme Cronyism', 'Illiberalism'],
    keyPolicies: [
      'Judicial packing and executive aggrandizement',
      'EU fund channeling to loyalist networks',
      'Anti-immigration and anti-LGBTQ policies',
      'Promotion of rigid Christian-nationalist identity',
      'Systematic corruption and cronyism',
    ],
    reasoning: 'Orbán exemplifies moderate statism (state economic control), extreme low recognition (anti-multiculturalism, Christian nationalism), and extreme particularism (crony networks, loyalty-based distribution).',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'lee-kuan-yew',
    name: 'Lee Kuan Yew',
    partyId: 'pap-singapore',
    role: 'Founding Prime Minister of Singapore (Historical)',
    tenure: '1959-1990',
    color: '#ED2E38',
    position: {
      statism: 8.0,
      recognition: -6.0,
      sid: -9.0,
    },
    ideology: ['Hyper-Developmentalism', 'Extreme Impersonal Meritocracy', 'Anti-Particularism'],
    keyPolicies: [
      'State control of housing, wages, social behavior',
      'Suppression of ethnic identity politics',
      'Ruthless anti-corruption and meritocracy',
      'Dismantling of patronage networks',
      'Colorblind state efficiency',
    ],
    reasoning: 'Lee represents extreme statism (developmental state), low recognition (suppressed ethnic politics for unified identity), and extreme universalism (impersonal meritocracy, anti-particularism as existential threat).',
    region: 'Global',
    category: 'global',
  },
  {
    id: 'xi-jinping',
    name: 'Xi Jinping',
    partyId: 'ccp-china',
    role: 'General Secretary of CCP',
    tenure: '2012-present',
    color: '#DE2910',
    position: {
      statism: 9.0,
      recognition: -9.0,
      sid: 8.0,
    },
    ideology: ['Leninist Totalitarianism', 'Party-State Particularism', 'Han Assimilation'],
    keyPolicies: [
      'Total state control via Xi Jinping Thought',
      'Forced assimilation of ethnic minorities',
      'Anti-corruption purges (selective)',
      'CCP loyalty-based power distribution',
      'Suppression of all group identities into Han uniformity',
    ],
    reasoning: 'Xi represents extreme statism (Leninist state control), extreme low recognition (forced Han assimilation), and high particularism (CCP loyalty networks, opaque power distribution despite anti-corruption rhetoric).',
    region: 'Global',
    category: 'global',
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

export function getIndianLeaders() {
  return leaders.filter(leader => leader.region === 'India');
}

export function getGlobalLeaders() {
  return leaders.filter(leader => leader.region === 'Global');
}

export function getNationalLeaders() {
  return leaders.filter(leader => leader.category === 'national');
}

export function getRegionalLeaders() {
  return leaders.filter(leader => leader.category === 'regional');
}

export function getHistoricalLeaders() {
  return leaders.filter(leader => leader.category === 'historical');
}
