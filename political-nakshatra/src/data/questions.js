// Political Nakshatra - Question Dataset
// Based on the 3D political compass framework for Indian politics

export const questions = [
  // ========================================
  // STATISM AXIS (12 questions)
  // Measures: State intervention vs traditional autonomy
  // ========================================

  // Economic Statism
  {
    id: 1,
    axis: 'statism',
    category: 'economic',
    text: 'The government should directly control key industries like steel, coal, and railways rather than privatizing them.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 2,
    axis: 'statism',
    category: 'economic',
    text: 'Direct Benefit Transfers (DBT) and welfare schemes like PM-KISAN are essential government responsibilities, not optional programs.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 3,
    axis: 'statism',
    category: 'economic',
    text: 'Private companies should have minimal restrictions on hiring, firing, and labor practices.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 4,
    axis: 'statism',
    category: 'economic',
    text: 'The government should heavily regulate prices of essential commodities like food grains and fuel.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 5,
    axis: 'statism',
    category: 'economic',
    text: 'Infrastructure development (roads, electricity, water) is best handled by government agencies rather than private contractors.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 6,
    axis: 'statism',
    category: 'economic',
    text: 'The government should reduce its role in the economy and let market forces determine prices and production.',
    reverse: true, // Reverse scored
    weight: 1.0
  },

  // Social Statism
  {
    id: 7,
    axis: 'statism',
    category: 'social',
    text: 'The government should actively intervene to eliminate social practices like untouchability and caste discrimination, even if it means overriding local traditions.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 8,
    axis: 'statism',
    category: 'social',
    text: 'Religious institutions should manage their own affairs without government interference in matters like temple administration.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 9,
    axis: 'statism',
    category: 'social',
    text: 'The state should regulate marriage practices (minimum age, dowry prohibition, inter-caste marriage promotion) to transform social norms.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 10,
    axis: 'statism',
    category: 'social',
    text: 'Traditional social and cultural practices should be preserved without government intervention.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 11,
    axis: 'statism',
    category: 'social',
    text: 'The government should use education to actively promote progressive social values and challenge traditional hierarchies.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 12,
    axis: 'statism',
    category: 'social',
    text: 'Laws against cow slaughter and similar religious-cultural regulations are appropriate uses of state power.',
    reverse: false,
    weight: 1.0
  },

  // ========================================
  // RECOGNITION AXIS (12 questions)
  // Measures: Group-based rights vs majoritarian/individual
  // ========================================

  // Affirmative Action
  {
    id: 13,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'Reservation in jobs and education for Scheduled Castes and Scheduled Tribes should be maintained.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 14,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'OBC (Other Backward Classes) reservations should be continued as they address historical disadvantages.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 15,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'Merit alone should determine college admissions and government jobs, regardless of caste background.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 16,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'The government should track caste data in census to better target welfare programs.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 17,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'Reservation policies have become outdated and should be replaced with income-based criteria only.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 18,
    axis: 'recognition',
    category: 'affirmative_action',
    text: 'Political reservations for women and marginalized groups in Parliament and state assemblies should be expanded.',
    reverse: false,
    weight: 1.0
  },

  // Minority Rights
  {
    id: 19,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'Minority communities should have the right to run their own educational institutions with autonomy.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 20,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'A Uniform Civil Code (same personal laws for all religions) should be implemented across India.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 21,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'Special provisions for minority religions (like Haj subsidies or Waqf boards) should be maintained.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 22,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'The government should actively protect religious minorities from majoritarian pressures.',
    reverse: false,
    weight: 1.0
  },
  {
    id: 23,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'Special protections and rights for specific communities create divisions and should be minimized.',
    reverse: true, // Reverse scored
    weight: 1.0
  },
  {
    id: 24,
    axis: 'recognition',
    category: 'minority_rights',
    text: 'India should prioritize a unified national identity over accommodating diverse group identities.',
    reverse: true, // Reverse scored
    weight: 1.0
  },

  // ========================================
  // SID AXIS (Structural Incentive Distribution) (12 questions)
  // Measures: Particularism vs Universalism
  // ========================================

  // Distribution Mechanisms
  {
    id: 25,
    axis: 'sid',
    category: 'distribution',
    text: 'Government benefits should prioritize communities that have historically supported a party or leader.',
    reverse: true, // Reverse scored (agreement = particularist)
    weight: 1.0
  },
  {
    id: 26,
    axis: 'sid',
    category: 'distribution',
    text: 'Welfare schemes should have strict eligibility criteria applied equally to everyone, regardless of their community.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
  {
    id: 27,
    axis: 'sid',
    category: 'distribution',
    text: 'Local MLAs and MPs should have discretionary funds to distribute as they see fit for their constituencies.',
    reverse: true, // Reverse scored (agreement = particularist)
    weight: 1.0
  },
  {
    id: 28,
    axis: 'sid',
    category: 'distribution',
    text: 'Ration cards and subsidies should be allocated based on objective income criteria verified by technology, not local recommendations.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
  {
    id: 29,
    axis: 'sid',
    category: 'distribution',
    text: 'It\'s natural for politicians to take care of their own community\'s needs first when distributing government resources.',
    reverse: true, // Reverse scored (agreement = particularist)
    weight: 1.0
  },
  {
    id: 30,
    axis: 'sid',
    category: 'distribution',
    text: 'Government contracts and jobs should be awarded through transparent, competitive processes without regard to personal connections.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },

  // Governance Philosophy
  {
    id: 31,
    axis: 'sid',
    category: 'governance',
    text: 'It\'s acceptable for politicians to favor their caste or community members when distributing government jobs and contracts.',
    reverse: true, // Reverse scored (agreement = particularist)
    weight: 1.0
  },
  {
    id: 32,
    axis: 'sid',
    category: 'governance',
    text: 'Personal connections and recommendations should play no role in accessing government services and benefits.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
  {
    id: 33,
    axis: 'sid',
    category: 'governance',
    text: 'Politicians should be evaluated based on their party\'s overall policy performance, not what they deliver to their specific community.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
  {
    id: 34,
    axis: 'sid',
    category: 'governance',
    text: 'Bureaucrats should follow rules strictly even if it means not being able to help someone from their own background.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
  {
    id: 35,
    axis: 'sid',
    category: 'governance',
    text: 'A candidate from my own caste or community will naturally understand and serve my interests better than others.',
    reverse: true, // Reverse scored (agreement = particularist)
    weight: 1.0
  },
  {
    id: 36,
    axis: 'sid',
    category: 'governance',
    text: 'Government welfare programs should be designed and implemented the same way everywhere, regardless of local community preferences.',
    reverse: false, // Agreement = universalist
    weight: 1.0
  },
];

// Export question count by axis for validation
export const questionStats = {
  total: questions.length,
  byAxis: {
    statism: questions.filter(q => q.axis === 'statism').length,
    recognition: questions.filter(q => q.axis === 'recognition').length,
    sid: questions.filter(q => q.axis === 'sid').length,
  },
  reverseScored: questions.filter(q => q.reverse).length,
};

// Likert scale options
export const likertOptions = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];
