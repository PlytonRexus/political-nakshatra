// Political Compass Model Comparison Data

export const westernModels = {
  politicalCompass: {
    name: 'Political Compass',
    description: 'A two-dimensional political framework mapping political ideologies along economic (Left-Right) and social (Authoritarian-Libertarian) axes.',
    axes: [
      {
        name: 'Economic Left-Right',
        description: 'Measures support for state control vs free market economics',
        low: 'Left (Collectivist, State Control)',
        high: 'Right (Free Market, Privatization)'
      },
      {
        name: 'Authoritarian-Libertarian',
        description: 'Measures support for state authority vs individual freedoms',
        low: 'Authoritarian (Strong State, Order)',
        high: 'Libertarian (Individual Freedom, Liberty)'
      }
    ],
    origin: 'Western democratic context',
    strengths: [
      'Captures economic and social dimensions separately',
      'Widely recognized and understood',
      'Works well for Western party systems'
    ],
    limitations: [
      'Designed for Western liberal democracies',
      'Misses identity and patronage politics',
      'Cannot capture caste-based reservations',
      'Conflates different types of state intervention'
    ]
  }
};

export const axisMappings = [
  {
    westernAxis: 'Economic Left-Right',
    indianAxis: 'Statism',
    relationship: 'partial',
    relationshipColor: '#81C784', // Green
    explanation: 'Both measure state economic intervention, but Statism also includes cultural/social state intervention (e.g., temple control, social transformation). Indian "right-wing" parties like BJP remain economically statist with welfare programs.',
    examples: [
      {
        party: 'BJP',
        westernView: 'Economic right-wing (pro-business, Hindu nationalism)',
        indianView: 'Moderate-high statism (infrastructure spending, PM-KISAN welfare)'
      },
      {
        party: 'AAP',
        westernView: 'Far-left (free electricity, water)',
        indianView: 'Very high statism with moderate recognition'
      }
    ]
  },
  {
    westernAxis: 'Authoritarian-Libertarian',
    indianAxis: 'Recognition',
    relationship: 'limited',
    relationshipColor: '#FFB74D', // Orange/Yellow
    explanation: 'Authoritarian-Libertarian measures personal freedoms, while Recognition measures support for group-based rights and identity accommodation. These are conceptually different dimensions.',
    examples: [
      {
        party: 'BSP',
        westernView: 'Difficult to classify (identity politics)',
        indianView: 'Very high recognition (SC/ST-focused politics)'
      },
      {
        party: 'BJP',
        westernView: 'Authoritarian (nationalism, strong state)',
        indianView: 'Low recognition (anti-reservation, uniform identity)'
      }
    ]
  },
  {
    westernAxis: 'No Western Equivalent',
    indianAxis: 'SID (Structural Incentive Distribution)',
    relationship: 'unique',
    relationshipColor: '#64B5F6', // Blue
    explanation: 'SID measures whether resources are distributed through universal rules or particularist networks (caste, religion, patronage). This dimension is largely absent from Western political frameworks.',
    examples: [
      {
        party: 'BSP',
        westernView: 'No clear positioning',
        indianView: 'Highly particularist (caste-based distribution networks)'
      },
      {
        party: 'AAP',
        westernView: 'No clear positioning',
        indianView: 'Moderate universalism (DBT, Aadhaar-based welfare)'
      }
    ]
  }
];

export const concreteExamples = [
  {
    party: 'BJP',
    name: 'Bharatiya Janata Party',
    westernClassification: 'Right-wing conservative (economic right, social authoritarian)',
    indianPosition: {
      statism: 0.4,
      recognition: -0.7,
      sid: -0.3
    },
    breakdownExplanation: 'BJP is classified as "right-wing" in Western terms, but remains moderately statist with massive infrastructure spending, welfare schemes (PM-KISAN, Ayushman Bharat), and state-led development. Its low recognition (hostile to minority rights, anti-reservation rhetoric) and moderate particularism (tempered by digital governance) cannot be captured by a 2D Economic-Authoritarian framework.'
  },
  {
    party: 'BSP',
    name: 'Bahujan Samaj Party',
    westernClassification: 'Difficult to classify (identity politics party)',
    indianPosition: {
      statism: 0.3,
      recognition: 0.9,
      sid: -0.8
    },
    breakdownExplanation: 'BSP\'s extreme recognition politics (caste-based mobilization, SC/ST focus) and highly particularist governance (patronage networks) have no equivalent in Western political frameworks, which don\'t account for institutionalized caste systems or ethnicity-based patronage democracy.'
  },
  {
    party: 'AAP',
    name: 'Aam Aadmi Party',
    westernClassification: 'Far-left populist',
    indianPosition: {
      statism: 0.7,
      recognition: 0.3,
      sid: 0.4
    },
    breakdownExplanation: 'While AAP\'s welfare policies (free electricity, water) seem "far-left" in Western terms, its moderate universalism through direct benefit transfers and Aadhaar-based targeting represents a distinctly Indian governance model that blends state intervention with rule-based distribution.'
  }
];

export const faqContent = [
  {
    id: 1,
    question: 'How does Political Nakshatra compare to the Political Compass?',
    answer: 'Political Nakshatra uses a three-dimensional framework specifically designed for Indian politics, while the Political Compass uses a two-dimensional framework (Economic Left-Right × Authoritarian-Libertarian) designed for Western democracies. While there is partial overlap on the economic dimension (similar to our Statism axis), the Political Compass cannot capture unique features of Indian politics like caste-based reservations, identity politics, and patronage networks. Our Recognition and SID axes address these India-specific dimensions.'
  },
  {
    id: 2,
    question: 'Can I map my Political Compass results to this model?',
    answer: 'Not directly. While there is some overlap between Economic Left-Right and our Statism axis, the frameworks measure different things. The Political Compass\'s Authoritarian-Libertarian axis (measuring personal freedoms) is conceptually different from our Recognition axis (measuring group-based rights). Additionally, our SID axis (measuring patronage vs rule-based distribution) has no equivalent in the Political Compass. You would need to take our quiz separately to get an accurate position in the Indian political space.'
  },
  {
    id: 3,
    question: 'Why isn\'t there a simple Left-Right axis?',
    answer: 'The traditional Left-Right spectrum conflates multiple dimensions that operate differently in Indian politics. Economic intervention (state vs market), social values (tradition vs progress), and identity politics (caste/religion) don\'t align neatly on a single axis in India. For example, the BJP is economically statist (high welfare spending) but socially conservative (Hindu nationalism), while BSP combines moderate statism with extreme identity politics. A single Left-Right axis cannot capture these complex, multi-dimensional positions.'
  },
  {
    id: 4,
    question: 'What makes Indian politics require a different framework?',
    answer: 'Indian politics operates in a context of deep social diversity (caste, religion, language), a history of affirmative action policies (reservations), and institutionalized patronage networks. These features produce political dynamics that don\'t exist in most Western democracies. For instance, caste-based political parties (BSP, SP) mobilize along identity lines not captured by class-based Left-Right frameworks, and patronage democracy through SID operates differently from Western clientelism. Our three-dimensional model was developed based on academic research on Indian politics to accurately capture these unique dimensions.'
  },
  {
    id: 5,
    question: 'Are Western political models wrong?',
    answer: 'No, they\'re not wrong—they\'re designed for different contexts. The Political Compass and similar models work well for analyzing Western party systems where class-based politics and individual freedoms are the primary dimensions of conflict. However, they fall short when applied to multi-ethnic, post-colonial democracies like India, where identity politics, affirmative action, and patronage networks play central roles. Both frameworks provide valuable perspectives in their respective contexts.'
  },
  {
    id: 6,
    question: 'What about other models like the Nolan Chart?',
    answer: 'The Nolan Chart (economic freedom × personal freedom) faces similar limitations. It was designed for American libertarian discourse and doesn\'t account for group-based rights (Recognition) or patronage vs universalism (SID). While it might capture some aspects of individual vs state power, it misses the collective, identity-based nature of much Indian politics, where caste and religious communities mobilize as groups rather than individuals.'
  }
];

export const comparisonSummary = {
  introduction: 'Political Nakshatra is designed specifically for Indian political realities, while the Political Compass and similar Western models were developed for liberal democracies in Europe and North America. While there is some conceptual overlap, direct mapping between the frameworks is not possible.',
  keyDifferences: [
    {
      aspect: 'Dimensions',
      western: '2D: Economic Left-Right × Authoritarian-Libertarian',
      indian: '3D: Statism × Recognition × SID'
    },
    {
      aspect: 'Identity Politics',
      western: 'Largely absent or peripheral',
      indian: 'Central (caste, religion, language)'
    },
    {
      aspect: 'Affirmative Action',
      western: 'Limited or debated',
      indian: 'Constitutionally mandated (reservations)'
    },
    {
      aspect: 'Resource Distribution',
      western: 'Market vs state intervention',
      indian: 'Patronage networks vs universal rules (SID)'
    },
    {
      aspect: 'State Intervention',
      western: 'Primarily economic',
      indian: 'Economic, social, cultural (Statism)'
    }
  ],
  conclusion: 'Neither framework is "better"—they serve different purposes. Political Nakshatra provides a more accurate representation of where you stand in the Indian political constellation, while the Political Compass is more suitable for Western political contexts.'
};
