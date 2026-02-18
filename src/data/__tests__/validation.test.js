import { describe, it, expect } from 'vitest';
import { questions, likertOptions } from '../questions';
import { parties } from '../parties';

describe('Questions Data Validation', () => {
  it('has exactly 15 questions', () => {
    expect(questions.length).toBe(15);
  });

  it('has 5 questions per axis', () => {
    const statismQuestions = questions.filter(q => q.axis === 'statism');
    const recognitionQuestions = questions.filter(q => q.axis === 'recognition');
    const sidQuestions = questions.filter(q => q.axis === 'sid');

    expect(statismQuestions.length).toBe(5);
    expect(recognitionQuestions.length).toBe(5);
    expect(sidQuestions.length).toBe(5);
  });

  it('has unique question IDs', () => {
    const ids = questions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(questions.length);
  });

  it('all questions have required fields', () => {
    questions.forEach(question => {
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('axis');
      expect(question).toHaveProperty('category');
      expect(question).toHaveProperty('reverse');
      expect(question).toHaveProperty('weight');

      expect(typeof question.id).toBe('string');
      expect(typeof question.axis).toBe('string');
      expect(typeof question.category).toBe('string');
      expect(typeof question.reverse).toBe('boolean');
      expect(typeof question.weight).toBe('number');
    });
  });

  it('all questions have valid axis values', () => {
    const validAxes = ['statism', 'recognition', 'sid'];
    questions.forEach(question => {
      expect(validAxes).toContain(question.axis);
    });
  });

  it('all questions have positive weight values', () => {
    questions.forEach(question => {
      expect(question.weight).toBeGreaterThan(0);
    });
  });

  it('all questions have weight of 1.0 (for equal weighting)', () => {
    questions.forEach(question => {
      expect(question.weight).toBe(1.0);
    });
  });

  it('has exactly 4 reverse-scored questions', () => {
    const reverseQuestions = questions.filter(q => q.reverse === true);
    expect(reverseQuestions.length).toBe(4);

    // Verify the specific inverted questions
    const reverseIds = reverseQuestions.map(q => q.id).sort();
    expect(reverseIds).toEqual(['RC_02', 'RC_04', 'SID_04', 'ST_05']);
  });

  it('each axis has at least one reverse-scored question', () => {
    const axes = ['statism', 'recognition', 'sid'];
    axes.forEach(axis => {
      const reverseForAxis = questions.filter(q => q.axis === axis && q.reverse === true);
      expect(reverseForAxis.length).toBeGreaterThan(0);
    });
  });

  it('all questions have valid categories', () => {
    questions.forEach(question => {
      expect(question.category.length).toBeGreaterThan(0);
      expect(typeof question.category).toBe('string');
    });
  });

  it('question IDs follow semantic format (ST_XX, RC_XX, SID_XX)', () => {
    const validIdPattern = /^(ST|RC|SID)_0[1-5]$/;
    questions.forEach(question => {
      expect(validIdPattern.test(question.id)).toBe(true);
    });
  });

  it('statism questions have IDs ST_01 through ST_05', () => {
    const statismQuestions = questions.filter(q => q.axis === 'statism');
    const statismIds = statismQuestions.map(q => q.id).sort();
    expect(statismIds).toEqual(['ST_01', 'ST_02', 'ST_03', 'ST_04', 'ST_05']);
  });

  it('recognition questions have IDs RC_01 through RC_05', () => {
    const recognitionQuestions = questions.filter(q => q.axis === 'recognition');
    const recognitionIds = recognitionQuestions.map(q => q.id).sort();
    expect(recognitionIds).toEqual(['RC_01', 'RC_02', 'RC_03', 'RC_04', 'RC_05']);
  });

  it('SID questions have IDs SID_01 through SID_05', () => {
    const sidQuestions = questions.filter(q => q.axis === 'sid');
    const sidIds = sidQuestions.map(q => q.id).sort();
    expect(sidIds).toEqual(['SID_01', 'SID_02', 'SID_03', 'SID_04', 'SID_05']);
  });
});

describe('Likert Options Validation', () => {
  it('has exactly 5 options', () => {
    expect(likertOptions.length).toBe(5);
  });

  it('has values from 1 to 5', () => {
    const values = likertOptions.map(opt => opt.value);
    expect(values).toEqual([1, 2, 3, 4, 5]);
  });

  it('all options have label property', () => {
    likertOptions.forEach(option => {
      expect(option).toHaveProperty('label');
      expect(typeof option.label).toBe('string');
      expect(option.label.length).toBeGreaterThan(0);
    });
  });

  it('all options have value property', () => {
    likertOptions.forEach(option => {
      expect(option).toHaveProperty('value');
      expect(typeof option.value).toBe('number');
    });
  });
});

describe('Parties Data Validation', () => {
  it('has at least 5 parties', () => {
    expect(parties.length).toBeGreaterThanOrEqual(5);
  });

  it('has unique party IDs', () => {
    const ids = parties.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(parties.length);
  });

  it('all parties have required fields', () => {
    parties.forEach(party => {
      expect(party).toHaveProperty('id');
      expect(party).toHaveProperty('name');
      expect(party).toHaveProperty('abbreviation');
      expect(party).toHaveProperty('color');
      expect(party).toHaveProperty('position');
      expect(party).toHaveProperty('keyPolicies');
      expect(party).toHaveProperty('reasoning');
      expect(party).toHaveProperty('electoralStrength');

      expect(typeof party.id).toBe('string');
      expect(typeof party.name).toBe('string');
      expect(typeof party.abbreviation).toBe('string');
      expect(typeof party.color).toBe('string');
      expect(typeof party.position).toBe('object');
      expect(Array.isArray(party.keyPolicies)).toBe(true);
      expect(typeof party.reasoning).toBe('string');
      expect(typeof party.electoralStrength).toBe('string');
    });
  });

  it('all party positions have valid coordinates', () => {
    parties.forEach(party => {
      expect(party.position).toHaveProperty('statism');
      expect(party.position).toHaveProperty('recognition');
      expect(party.position).toHaveProperty('sid');

      expect(typeof party.position.statism).toBe('number');
      expect(typeof party.position.recognition).toBe('number');
      expect(typeof party.position.sid).toBe('number');
    });
  });

  it('all party positions are within valid range [-10, 10]', () => {
    parties.forEach(party => {
      expect(party.position.statism).toBeGreaterThanOrEqual(-10);
      expect(party.position.statism).toBeLessThanOrEqual(10);

      expect(party.position.recognition).toBeGreaterThanOrEqual(-10);
      expect(party.position.recognition).toBeLessThanOrEqual(10);

      expect(party.position.sid).toBeGreaterThanOrEqual(-10);
      expect(party.position.sid).toBeLessThanOrEqual(10);
    });
  });

  it('all party colors are valid hex codes', () => {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
    parties.forEach(party => {
      expect(hexColorRegex.test(party.color)).toBe(true);
    });
  });

  it('all parties have non-empty names and abbreviations', () => {
    parties.forEach(party => {
      expect(party.name.length).toBeGreaterThan(0);
      expect(party.abbreviation.length).toBeGreaterThan(0);
    });
  });

  it('all parties have at least one key policy', () => {
    parties.forEach(party => {
      expect(party.keyPolicies.length).toBeGreaterThan(0);
    });
  });

  it('all parties have reasoning text', () => {
    parties.forEach(party => {
      expect(party.reasoning.length).toBeGreaterThan(0);
    });
  });

  it('all parties have electoral strength description', () => {
    parties.forEach(party => {
      expect(party.electoralStrength.length).toBeGreaterThan(0);
    });
  });

  it('party abbreviations are uppercase or mixed case', () => {
    parties.forEach(party => {
      // Abbreviations should contain at least one uppercase letter
      expect(/[A-Z]/.test(party.abbreviation)).toBe(true);
    });
  });

  it('all key policies are non-empty strings', () => {
    parties.forEach(party => {
      party.keyPolicies.forEach(policy => {
        expect(typeof policy).toBe('string');
        expect(policy.length).toBeGreaterThan(0);
      });
    });
  });

  it('includes major national parties (BJP, Congress, AAP)', () => {
    const partyIds = parties.map(p => p.id);
    expect(partyIds).toContain('bjp');
    expect(partyIds).toContain('congress');
    expect(partyIds).toContain('aap');
  });
});
