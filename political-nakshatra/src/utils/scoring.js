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
