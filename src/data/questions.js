// Political Nakshatra - Question Dataset (Vignette-Based Framework)
// Based on the 3D political compass framework for Indian politics
// New framework: 15 situational vignettes with [-10, +10] coordinate system

export const questions = [
  // ========================================
  // STATISM AXIS (5 vignettes)
  // Measures: State intervention vs market autonomy
  // ========================================

  {
    id: 'ST_01',
    axis: 'statism',
    category: 'economic',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'ST_02',
    axis: 'statism',
    category: 'economic',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'ST_03',
    axis: 'statism',
    category: 'economic',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'ST_04',
    axis: 'statism',
    category: 'economic',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'ST_05',
    axis: 'statism',
    category: 'social',
    reverse: true, // INVERTED QUESTION
    weight: 1.0
  },

  // ========================================
  // RECOGNITION AXIS (5 vignettes)
  // Measures: Group-based rights vs uniform national identity
  // ========================================

  {
    id: 'RC_01',
    axis: 'recognition',
    category: 'affirmative_action',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'RC_02',
    axis: 'recognition',
    category: 'minority_rights',
    reverse: true, // INVERTED QUESTION
    weight: 1.0
  },
  {
    id: 'RC_03',
    axis: 'recognition',
    category: 'minority_rights',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'RC_04',
    axis: 'recognition',
    category: 'affirmative_action',
    reverse: true, // INVERTED QUESTION
    weight: 1.0
  },
  {
    id: 'RC_05',
    axis: 'recognition',
    category: 'minority_rights',
    reverse: false,
    weight: 1.0
  },

  // ========================================
  // SID AXIS (Structural Incentive Distribution) (5 vignettes)
  // Measures: Particularism vs Universalism
  // ========================================

  {
    id: 'SID_01',
    axis: 'sid',
    category: 'governance',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'SID_02',
    axis: 'sid',
    category: 'governance',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'SID_03',
    axis: 'sid',
    category: 'distribution',
    reverse: false,
    weight: 1.0
  },
  {
    id: 'SID_04',
    axis: 'sid',
    category: 'governance',
    reverse: true, // INVERTED QUESTION
    weight: 1.0
  },
  {
    id: 'SID_05',
    axis: 'sid',
    category: 'governance',
    reverse: false,
    weight: 1.0
  },
];

// Export question count by axis for validation
export const questionStats = {
  total: 15,
  byAxis: {
    statism: 5,
    recognition: 5,
    sid: 5,
  },
  reverseScored: 4, // ST_05, RC_02, RC_04, SID_04
};

// Likert scale options (unchanged)
export const likertOptions = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];
