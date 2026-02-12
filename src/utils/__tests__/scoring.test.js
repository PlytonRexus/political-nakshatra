import { describe, it, expect } from 'vitest';
import {
  likertToScore,
  calculateAxisScore,
  calculateResults,
  getAxisLabel,
  getAxisDescription,
  calculateCompletion,
  isQuizComplete,
  calculateDistance,
  findClosestParty,
} from '../scoring';
import { questions } from '../../data/questions';

describe('likertToScore', () => {
  it('converts Likert value 1 (Strongly Disagree) to -2', () => {
    expect(likertToScore(1)).toBe(-2);
  });

  it('converts Likert value 2 (Disagree) to -1', () => {
    expect(likertToScore(2)).toBe(-1);
  });

  it('converts Likert value 3 (Neutral) to 0', () => {
    expect(likertToScore(3)).toBe(0);
  });

  it('converts Likert value 4 (Agree) to 1', () => {
    expect(likertToScore(4)).toBe(1);
  });

  it('converts Likert value 5 (Strongly Agree) to 2', () => {
    expect(likertToScore(5)).toBe(2);
  });
});

describe('calculateAxisScore', () => {
  it('returns 0 for empty responses', () => {
    expect(calculateAxisScore({}, 'statism')).toBe(0);
  });

  it('returns 1 when all statism questions are Strongly Agree (5)', () => {
    const responses = {};
    questions
      .filter(q => q.axis === 'statism' && !q.reverse)
      .forEach(q => {
        responses[q.id] = 5;
      });
    questions
      .filter(q => q.axis === 'statism' && q.reverse)
      .forEach(q => {
        responses[q.id] = 1;
      });

    const score = calculateAxisScore(responses, 'statism');
    expect(score).toBeCloseTo(1, 2);
  });

  it('returns -1 when all statism questions are Strongly Disagree (1)', () => {
    const responses = {};
    questions
      .filter(q => q.axis === 'statism' && !q.reverse)
      .forEach(q => {
        responses[q.id] = 1;
      });
    questions
      .filter(q => q.axis === 'statism' && q.reverse)
      .forEach(q => {
        responses[q.id] = 5;
      });

    const score = calculateAxisScore(responses, 'statism');
    expect(score).toBeCloseTo(-1, 2);
  });

  it('returns 0 when all statism questions are Neutral (3)', () => {
    const responses = {};
    questions
      .filter(q => q.axis === 'statism')
      .forEach(q => {
        responses[q.id] = 3;
      });

    const score = calculateAxisScore(responses, 'statism');
    expect(score).toBeCloseTo(0, 2);
  });

  it('correctly handles reverse-scored questions', () => {
    const reverseQuestion = questions.find(q => q.reverse === true);
    if (reverseQuestion) {
      const responses = {
        [reverseQuestion.id]: 5, // Strongly Agree
      };

      // For a reverse-scored question, Strongly Agree (5) should contribute negatively
      const score = calculateAxisScore(responses, reverseQuestion.axis);
      expect(score).toBeLessThan(0);
    }
  });

  it('skips unanswered questions', () => {
    const axisQuestions = questions.filter(q => q.axis === 'statism');
    const responses = {
      [axisQuestions[0].id]: 5,
      // Other questions not answered
    };

    const score = calculateAxisScore(responses, 'statism');
    expect(score).toBeGreaterThanOrEqual(-1);
    expect(score).toBeLessThanOrEqual(1);
  });

  it('respects question weights', () => {
    // If weights are different, scores should reflect that
    const weightedQuestion = questions.find(q => q.weight !== 1.0);
    if (weightedQuestion) {
      const responses = {
        [weightedQuestion.id]: 5,
      };
      const score = calculateAxisScore(responses, weightedQuestion.axis);
      expect(score).toBeGreaterThanOrEqual(-1);
      expect(score).toBeLessThanOrEqual(1);
    }
  });
});

describe('calculateResults', () => {
  it('returns (0, 0, 0) for empty responses', () => {
    const results = calculateResults({});
    expect(results).toEqual({
      statism: 0,
      recognition: 0,
      sid: 0,
    });
  });

  it('returns (1, 1, 1) when all questions are Strongly Agree (with reverse handling)', () => {
    const responses = {};
    questions.forEach(q => {
      responses[q.id] = q.reverse ? 1 : 5;
    });

    const results = calculateResults(responses);
    expect(results.statism).toBeCloseTo(1, 1);
    expect(results.recognition).toBeCloseTo(1, 1);
    expect(results.sid).toBeCloseTo(1, 1);
  });

  it('returns (-1, -1, -1) when all questions are Strongly Disagree (with reverse handling)', () => {
    const responses = {};
    questions.forEach(q => {
      responses[q.id] = q.reverse ? 5 : 1;
    });

    const results = calculateResults(responses);
    expect(results.statism).toBeCloseTo(-1, 1);
    expect(results.recognition).toBeCloseTo(-1, 1);
    expect(results.sid).toBeCloseTo(-1, 1);
  });

  it('returns (0, 0, 0) when all questions are Neutral (3)', () => {
    const responses = {};
    questions.forEach(q => {
      responses[q.id] = 3;
    });

    const results = calculateResults(responses);
    expect(results.statism).toBeCloseTo(0, 1);
    expect(results.recognition).toBeCloseTo(0, 1);
    expect(results.sid).toBeCloseTo(0, 1);
  });

  it('handles partial responses correctly', () => {
    const responses = {};
    const statismQuestions = questions.filter(q => q.axis === 'statism');
    statismQuestions.forEach(q => {
      responses[q.id] = q.reverse ? 1 : 5;
    });

    const results = calculateResults(responses);
    expect(results.statism).toBeCloseTo(1, 1);
    expect(results.recognition).toBe(0);
    expect(results.sid).toBe(0);
  });
});

describe('getAxisLabel', () => {
  it('returns neutral label for values close to 0', () => {
    expect(getAxisLabel(0, 'statism')).toBe('Centrist on Statism');
    expect(getAxisLabel(0.1, 'recognition')).toBe('Centrist on Recognition');
    expect(getAxisLabel(-0.14, 'sid')).toBe('Centrist on SID');
  });

  it('returns "Slightly" label for small positive values', () => {
    expect(getAxisLabel(0.2, 'statism')).toBe('Slightly High Statism');
  });

  it('returns "Moderately" label for medium positive values', () => {
    expect(getAxisLabel(0.5, 'recognition')).toBe('Moderately Pro-Recognition');
  });

  it('returns "Very" label for large positive values', () => {
    expect(getAxisLabel(0.8, 'sid')).toBe('Very Universalist');
  });

  it('returns "Slightly" label for small negative values', () => {
    expect(getAxisLabel(-0.25, 'statism')).toBe('Slightly Low Statism');
  });

  it('returns "Moderately" label for medium negative values', () => {
    expect(getAxisLabel(-0.4, 'recognition')).toBe('Moderately Anti-Recognition');
  });

  it('returns "Very" label for large negative values', () => {
    expect(getAxisLabel(-0.9, 'sid')).toBe('Very Particularist');
  });
});

describe('getAxisDescription', () => {
  it('returns neutral description for values close to 0', () => {
    const desc = getAxisDescription(0, 'statism');
    expect(desc).toContain('balanced');
  });

  it('returns high description for positive values', () => {
    const desc = getAxisDescription(0.7, 'statism');
    expect(desc).toContain('strong role');
  });

  it('returns low description for negative values', () => {
    const desc = getAxisDescription(-0.7, 'statism');
    expect(desc).toContain('minimal state intervention');
  });

  it('handles all three axes', () => {
    expect(getAxisDescription(0.5, 'statism')).toBeTruthy();
    expect(getAxisDescription(0.5, 'recognition')).toBeTruthy();
    expect(getAxisDescription(0.5, 'sid')).toBeTruthy();
  });
});

describe('calculateCompletion', () => {
  it('returns 0 for empty responses', () => {
    expect(calculateCompletion({})).toBe(0);
  });

  it('returns 100 when all questions are answered', () => {
    const responses = {};
    questions.forEach(q => {
      responses[q.id] = 3;
    });
    expect(calculateCompletion(responses)).toBe(100);
  });

  it('calculates correct percentage for partial completion', () => {
    const responses = {};
    const halfQuestions = questions.slice(0, Math.floor(questions.length / 2));
    halfQuestions.forEach(q => {
      responses[q.id] = 3;
    });

    const completion = calculateCompletion(responses);
    expect(completion).toBeGreaterThanOrEqual(45);
    expect(completion).toBeLessThanOrEqual(55);
  });
});

describe('isQuizComplete', () => {
  it('returns false for empty responses', () => {
    expect(isQuizComplete({})).toBe(false);
  });

  it('returns true when all questions are answered', () => {
    const responses = {};
    questions.forEach(q => {
      responses[q.id] = 3;
    });
    expect(isQuizComplete(responses)).toBe(true);
  });

  it('returns false when some questions are unanswered', () => {
    const responses = {};
    const someQuestions = questions.slice(0, questions.length - 1);
    someQuestions.forEach(q => {
      responses[q.id] = 3;
    });
    expect(isQuizComplete(responses)).toBe(false);
  });
});

describe('calculateDistance', () => {
  it('returns 0 for identical positions', () => {
    const pos = { statism: 0.5, recognition: -0.3, sid: 0.8 };
    expect(calculateDistance(pos, pos)).toBe(0);
  });

  it('calculates correct Euclidean distance', () => {
    const pos1 = { statism: 0, recognition: 0, sid: 0 };
    const pos2 = { statism: 1, recognition: 0, sid: 0 };
    expect(calculateDistance(pos1, pos2)).toBeCloseTo(1, 5);
  });

  it('calculates distance in 3D space', () => {
    const pos1 = { statism: 0, recognition: 0, sid: 0 };
    const pos2 = { statism: 1, recognition: 1, sid: 1 };
    expect(calculateDistance(pos1, pos2)).toBeCloseTo(Math.sqrt(3), 5);
  });

  it('handles negative coordinates', () => {
    const pos1 = { statism: -1, recognition: -1, sid: -1 };
    const pos2 = { statism: 1, recognition: 1, sid: 1 };
    expect(calculateDistance(pos1, pos2)).toBeCloseTo(Math.sqrt(12), 5);
  });
});

describe('findClosestParty', () => {
  const mockParties = [
    {
      id: 'party1',
      name: 'Party 1',
      position: { statism: 0.5, recognition: 0.5, sid: 0.5 },
    },
    {
      id: 'party2',
      name: 'Party 2',
      position: { statism: -0.5, recognition: -0.5, sid: -0.5 },
    },
    {
      id: 'party3',
      name: 'Party 3',
      position: { statism: 0, recognition: 0, sid: 0 },
    },
  ];

  it('finds the closest party correctly', () => {
    const userPosition = { statism: 0.1, recognition: 0.1, sid: 0.1 };
    const result = findClosestParty(userPosition, mockParties);

    expect(result.party.id).toBe('party3');
    expect(result.distance).toBeCloseTo(Math.sqrt(0.03), 5);
  });

  it('returns exact match with distance 0', () => {
    const userPosition = { statism: 0.5, recognition: 0.5, sid: 0.5 };
    const result = findClosestParty(userPosition, mockParties);

    expect(result.party.id).toBe('party1');
    expect(result.distance).toBe(0);
  });

  it('handles distant positions', () => {
    const userPosition = { statism: 1, recognition: 1, sid: 1 };
    const result = findClosestParty(userPosition, mockParties);

    expect(result.party).toBeTruthy();
    expect(result.distance).toBeGreaterThan(0);
  });
});
