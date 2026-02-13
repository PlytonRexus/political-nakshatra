// Political Nakshatra - Scoring Algorithm
// Converts Likert scale responses to 3D coordinates

import { questions } from '../data/questions';

/**
 * Convert Likert scale value (1-5) to score value (-2 to +2)
 * @param {number} likertValue - User's response (1-5)
 * @returns {number} Score value (-2 to +2)
 */
export function likertToScore(likertValue) {
  return likertValue - 3;
}

/**
 * Calculate axis score from user responses
 * @param {Object} responses - User responses { questionId: likertValue }
 * @param {string} axis - Axis name ('statism', 'recognition', or 'sid')
 * @returns {number} Normalized coordinate between -1 and +1
 */
export function calculateAxisScore(responses, axis) {
  const axisQuestions = questions.filter(q => q.axis === axis);

  let rawScore = 0;
  let minPossible = 0;
  let maxPossible = 0;

  axisQuestions.forEach(question => {
    const response = responses[question.id];

    // Skip if question wasn't answered
    if (!response) return;

    // Convert Likert (1-5) to score (-2 to +2)
    let value = likertToScore(response);

    // Handle reverse-scored questions
    if (question.reverse) {
      value = -value;
    }

    // Apply weight and accumulate
    rawScore += value * question.weight;
    minPossible += -2 * question.weight;
    maxPossible += 2 * question.weight;
  });

  // Normalize to range [-1, +1]
  const range = maxPossible - minPossible;
  if (range === 0) return 0; // Avoid division by zero

  const normalized = (rawScore - minPossible) / range;
  return (normalized * 2) - 1;
}

/**
 * Calculate all three axis scores from responses
 * @param {Object} responses - User responses { questionId: likertValue }
 * @returns {Object} Coordinates { statism, recognition, sid } each between -1 and +1
 */
export function calculateResults(responses) {
  return {
    statism: calculateAxisScore(responses, 'statism'),
    recognition: calculateAxisScore(responses, 'recognition'),
    sid: calculateAxisScore(responses, 'sid'),
  };
}

/**
 * Get descriptive label for position on an axis
 * @param {number} coordinate - Position between -1 and +1
 * @param {string} axis - Axis name
 * @returns {string} Descriptive label
 */
export function getAxisLabel(coordinate, axis) {
  const absValue = Math.abs(coordinate);
  const intensity = absValue > 0.6 ? 'Very ' : absValue > 0.3 ? 'Moderately ' : 'Slightly ';

  const labels = {
    statism: {
      positive: `${intensity}High Statism`,
      negative: `${intensity}Low Statism`,
      neutral: 'Centrist on Statism',
    },
    recognition: {
      positive: `${intensity}Pro-Recognition`,
      negative: `${intensity}Anti-Recognition`,
      neutral: 'Centrist on Recognition',
    },
    sid: {
      positive: `${intensity}Universalist`,
      negative: `${intensity}Particularist`,
      neutral: 'Centrist on SID',
    },
  };

  if (absValue < 0.15) return labels[axis].neutral;
  return coordinate > 0 ? labels[axis].positive : labels[axis].negative;
}

/**
 * Get detailed description for position on an axis
 * @param {number} coordinate - Position between -1 and +1
 * @param {string} axis - Axis name
 * @returns {string} Detailed description
 */
export function getAxisDescription(coordinate, axis) {
  const descriptions = {
    statism: {
      high: 'You believe the state should play a strong role in both economic management and social transformation. You support government control of key industries, extensive welfare programs, and state intervention to reform traditional social practices.',
      low: 'You prefer minimal state intervention in both economy and society. You support market-based solutions, private enterprise, and preserving traditional autonomy in social and cultural matters.',
      neutral: 'You hold balanced views on state intervention, supporting it in some areas while preferring limited government in others.',
    },
    recognition: {
      high: 'You strongly support group-based rights and protections. You favor affirmative action policies like reservations, minority rights, and state accommodation of diverse identities and communities.',
      low: 'You lean toward majoritarian or individual merit-based approaches. You prefer uniform national identity over group-specific accommodations and may oppose special provisions for minorities.',
      neutral: 'You hold moderate views on group recognition, balancing individual merit with some targeted support for disadvantaged communities.',
    },
    sid: {
      high: 'You favor universalist, rule-based distribution of resources. You believe government benefits should be allocated through objective criteria and transparent processes, without regard to identity or connections.',
      low: 'You accept or prefer particularist distribution based on identity networks and personal relationships. You believe politicians should prioritize their own communities and that personal connections are natural in governance.',
      neutral: 'You hold mixed views on distribution mechanisms, seeing value in both rule-based systems and community-based approaches.',
    },
  };

  if (Math.abs(coordinate) < 0.15) return descriptions[axis].neutral;
  return coordinate > 0 ? descriptions[axis].high : descriptions[axis].low;
}

/**
 * Calculate completion percentage
 * @param {Object} responses - User responses
 * @returns {number} Percentage (0-100)
 */
export function calculateCompletion(responses) {
  const answeredCount = Object.keys(responses).length;
  return Math.round((answeredCount / questions.length) * 100);
}

/**
 * Check if quiz is complete
 * @param {Object} responses - User responses
 * @returns {boolean} True if all questions answered
 */
export function isQuizComplete(responses) {
  return Object.keys(responses).length === questions.length;
}

/**
 * Calculate distance between two positions in 3D space
 * @param {Object} pos1 - First position { statism, recognition, sid }
 * @param {Object} pos2 - Second position { statism, recognition, sid }
 * @returns {number} Euclidean distance
 */
export function calculateDistance(pos1, pos2) {
  const dx = pos1.statism - pos2.statism;
  const dy = pos1.recognition - pos2.recognition;
  const dz = pos1.sid - pos2.sid;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Find closest party to user position
 * @param {Object} userPosition - User's coordinates
 * @param {Array} parties - Array of party objects with positions
 * @returns {Object} Closest party and distance
 */
export function findClosestParty(userPosition, parties) {
  let closestParty = null;
  let minDistance = Infinity;

  parties.forEach(party => {
    const distance = calculateDistance(userPosition, party.position);
    if (distance < minDistance) {
      minDistance = distance;
      closestParty = party;
    }
  });

  return { party: closestParty, distance: minDistance };
}

/**
 * Calculate match score percentage between two positions
 * @param {Object} userPosition - User's coordinates
 * @param {Object} targetPosition - Target coordinates
 * @returns {number} Match score (0-100%)
 */
export function calculateMatchScore(userPosition, targetPosition) {
  const maxDistance = Math.sqrt(3 * (2**2)); // max possible distance in [-1,+1]³ space
  const distance = calculateDistance(userPosition, targetPosition);
  return Math.round((1 - distance / maxDistance) * 100);
}

/**
 * Get axis alignment description and match percentage
 * @param {number} userVal - User's value on axis
 * @param {number} targetVal - Target's value on axis
 * @returns {Object} Alignment label and match percentage
 */
export function getAxisAlignment(userVal, targetVal) {
  const diff = Math.abs(userVal - targetVal);
  const matchPercent = Math.round((1 - diff / 2) * 100);

  if (diff < 0.1) return { label: 'Very similar', match: matchPercent, symbol: '✓' };
  if (diff < 0.3) return { label: 'Similar', match: matchPercent, symbol: '✓' };
  if (diff < 0.5) return { label: 'Somewhat different', match: matchPercent, symbol: '~' };
  return { label: 'Different', match: matchPercent, symbol: '✗' };
}

/**
 * Find closest leader/party on each axis
 * @param {Object} userPosition - User's coordinates
 * @param {Array} entities - Array of leaders or parties
 * @returns {Array} Closest entity per axis
 */
export function getClosestPerAxis(userPosition, entities) {
  const axes = ['statism', 'recognition', 'sid'];
  return axes.map(axis => {
    const sorted = entities
      .map(entity => ({
        entity,
        difference: Math.abs(userPosition[axis] - entity.position[axis]),
        value: entity.position[axis]
      }))
      .sort((a, b) => a.difference - b.difference);
    return { axis, ...sorted[0] };
  });
}

/**
 * Get political lean description based on position
 * @param {Object} position - User's coordinates
 * @returns {string} Political lean description
 */
export function getPoliticalLean(position) {
  const { statism, recognition, sid } = position;

  // Determine primary characteristics
  const statismLabel = statism > 0.3 ? 'Statist' : statism < -0.3 ? 'Market-oriented' : 'Centrist';
  const recognitionLabel = recognition > 0.3 ? 'Pluralist' : recognition < -0.3 ? 'Majoritarian' : 'Moderate';
  const sidLabel = sid > 0.3 ? 'Universalist' : sid < -0.3 ? 'Particularist' : 'Balanced';

  // Combine for overall lean
  if (Math.abs(statism) > 0.3 && Math.abs(recognition) > 0.3) {
    return `${statismLabel} ${recognitionLabel}`;
  } else if (Math.abs(statism) > 0.3) {
    return statismLabel;
  } else if (Math.abs(recognition) > 0.3) {
    return recognitionLabel;
  } else {
    return 'Centrist Moderate';
  }
}

/**
 * Interpret distance value with plain language
 * @param {number} distance - Distance between positions
 * @param {string} entityType - 'party' or 'leader'
 * @returns {string} Human-readable interpretation
 */
export function interpretDistance(distance, entityType = 'party') {
  if (distance < 0.3) return 'Very similar - you align closely on most issues';
  if (distance < 0.6) return 'Moderate alignment - you share some major positions';
  if (distance < 1.0) return 'Significant differences - you differ on several key issues';
  return 'Very different - you have contrasting positions on most issues';
}

/**
 * Interpret match percentage with context
 * @param {number} matchPercent - Match percentage (0-100)
 * @returns {string} Human-readable interpretation
 */
export function interpretMatchPercentage(matchPercent) {
  if (matchPercent >= 80) return 'Strong alignment';
  if (matchPercent >= 60) return 'Moderate alignment';
  if (matchPercent >= 40) return 'Some alignment';
  return 'Low alignment';
}

/**
 * Get concrete policy examples based on axis position
 * @param {number} coordinate - Position between -1 and +1
 * @param {string} axis - Axis name ('statism', 'recognition', or 'sid')
 * @returns {Array<string>} Array of policy examples
 */
export function getAxisExamples(coordinate, axis) {
  const absValue = Math.abs(coordinate);

  const examples = {
    statism: {
      veryHigh: [
        'Government healthcare expansion and universal coverage',
        'Public sector growth in key industries',
        'State control of natural resources and utilities',
        'Extensive welfare programs and subsidies'
      ],
      high: [
        'Mixed economy with strong state regulation',
        'Government intervention in strategic sectors',
        'Public education and infrastructure investment',
        'Labor protection laws and minimum wage policies'
      ],
      neutral: [
        'Balanced public-private partnerships',
        'Selective government intervention when needed',
        'Mix of market forces and regulation'
      ],
      low: [
        'Market-based solutions for most sectors',
        'Reduced government regulation in business',
        'Privatization of non-strategic enterprises',
        'Individual responsibility over state support'
      ],
      veryLow: [
        'Minimal government intervention in economy',
        'Free market policies across all sectors',
        'Private enterprise as primary driver',
        'Voluntary community support over state welfare'
      ]
    },
    recognition: {
      veryHigh: [
        'Strong SC/ST/OBC reservation policies in education and jobs',
        'Minority rights protections and special provisions',
        'Pluralistic approach to cultural diversity',
        'State recognition of multiple identity groups'
      ],
      high: [
        'Affirmative action for disadvantaged communities',
        'Protection of linguistic and religious minorities',
        'Group-specific welfare schemes',
        'Accommodation of diverse cultural practices'
      ],
      neutral: [
        'Balanced individual merit with targeted support',
        'Case-by-case approach to group rights',
        'Some reservations with economic criteria'
      ],
      low: [
        'Merit-based selection emphasis',
        'Uniform civil code support',
        'Individual-focused policies over group benefits',
        'National unity over identity politics'
      ],
      veryLow: [
        'Strong opposition to caste/religion-based reservations',
        'Assimilation into dominant culture',
        'Majoritarian policies and uniform national identity',
        'No special provisions for minority groups'
      ]
    },
    sid: {
      veryHigh: [
        'Rule-based transparent allocation of government benefits',
        'Objective criteria for welfare schemes (income, need)',
        'Universal schemes like Aadhaar-linked transfers',
        'Merit-based recruitment without patronage'
      ],
      high: [
        'Direct Benefit Transfer for subsidies',
        'Transparent bidding for government contracts',
        'Non-discriminatory access to public services',
        'Rules-based governance over discretionary decisions'
      ],
      neutral: [
        'Mix of universal schemes and targeted programs',
        'Some flexibility in distribution alongside rules',
        'Balance between merit and community needs'
      ],
      low: [
        'Community-based distribution of resources',
        'Political leaders prioritizing their constituencies',
        'Identity-linked benefits and schemes',
        'Personal connections as part of governance'
      ],
      veryLow: [
        'Patronage networks for resource access',
        'Caste/religious community priority in benefits',
        'Leader discretion over rule-based allocation',
        'Traditional identity-based distribution systems'
      ]
    }
  };

  // Determine which range the coordinate falls into
  if (coordinate > 0.6) return examples[axis].veryHigh.slice(0, 3);
  if (coordinate > 0.3) return examples[axis].high.slice(0, 3);
  if (Math.abs(coordinate) <= 0.3) return examples[axis].neutral;
  if (coordinate < -0.6) return examples[axis].veryLow.slice(0, 3);
  return examples[axis].low.slice(0, 3);
}

/**
 * Get comparative description between user and target positions
 * @param {number} userValue - User's value on axis (-1 to +1)
 * @param {number} targetValue - Target's value on axis (-1 to +1)
 * @param {string} axis - Axis name ('statism', 'recognition', or 'sid')
 * @returns {string} Comparative description
 */
export function getComparativeDescription(userValue, targetValue, axis) {
  const userLabel = getAxisLabel(userValue, axis);
  const targetLabel = getAxisLabel(targetValue, axis);

  const descriptions = {
    statism: {
      more: 'more state intervention',
      less: 'less state intervention',
      similar: 'similar views on the role of the state'
    },
    recognition: {
      more: 'more support for group-based rights and protections',
      less: 'more emphasis on individual merit and uniform policies',
      similar: 'similar views on group recognition'
    },
    sid: {
      more: 'more universalist, rule-based distribution',
      less: 'more particularist, community-based distribution',
      similar: 'similar views on resource distribution'
    }
  };

  const diff = userValue - targetValue;
  const absvalue = Math.abs(diff);

  if (absvalue < 0.15) {
    return `You both have ${descriptions[axis].similar}.`;
  }

  if (diff > 0) {
    return `You favor ${descriptions[axis].more}, while they lean toward ${descriptions[axis].less}.`;
  } else {
    return `You favor ${descriptions[axis].less}, while they lean toward ${descriptions[axis].more}.`;
  }
}
