import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QuizProvider, useQuiz } from '../QuizContext';
import { questions } from '../../data/questions';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('QuizContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  describe('Initial State', () => {
    it('provides initial state correctly', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.currentQuestionIndex).toBe(0);
      expect(result.current.responses).toEqual({});
      expect(result.current.results).toBeNull();
      expect(result.current.showParties).toBe(false);
      expect(result.current.isComplete).toBe(false);
      expect(result.current.startTime).toBeTruthy();
    });

    it('throws error when useQuiz is used outside provider', () => {
      // Suppress console error for this test
      const originalError = console.error;
      console.error = vi.fn();

      expect(() => {
        renderHook(() => useQuiz());
      }).toThrow('useQuiz must be used within a QuizProvider');

      console.error = originalError;
    });
  });

  describe('Answer Question', () => {
    it('updates responses when answering a question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      const questionId = questions[0].id;

      act(() => {
        result.current.answerQuestion(questionId, 4);
      });

      expect(result.current.responses[questionId]).toBe(4);
      expect(result.current.getResponse(questionId)).toBe(4);
    });

    it('can update an existing answer', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      const questionId = questions[0].id;

      act(() => {
        result.current.answerQuestion(questionId, 3);
      });

      expect(result.current.responses[questionId]).toBe(3);

      act(() => {
        result.current.answerQuestion(questionId, 5);
      });

      expect(result.current.responses[questionId]).toBe(5);
    });

    it('handles multiple answers', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.answerQuestion(questions[0].id, 4);
        result.current.answerQuestion(questions[1].id, 2);
        result.current.answerQuestion(questions[2].id, 5);
      });

      expect(Object.keys(result.current.responses).length).toBe(3);
      expect(result.current.responses[questions[0].id]).toBe(4);
      expect(result.current.responses[questions[1].id]).toBe(2);
      expect(result.current.responses[questions[2].id]).toBe(5);
    });
  });

  describe('Navigation', () => {
    it('navigates to next question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.currentQuestionIndex).toBe(0);

      act(() => {
        result.current.goToNextQuestion();
      });

      expect(result.current.currentQuestionIndex).toBe(1);
    });

    it('navigates to previous question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.setCurrentIndex(5);
      });

      expect(result.current.currentQuestionIndex).toBe(5);

      act(() => {
        result.current.goToPreviousQuestion();
      });

      expect(result.current.currentQuestionIndex).toBe(4);
    });

    it('does not go below index 0', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.currentQuestionIndex).toBe(0);

      act(() => {
        result.current.goToPreviousQuestion();
      });

      expect(result.current.currentQuestionIndex).toBe(0);
    });

    it('does not go beyond last question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.setCurrentIndex(questions.length - 1);
      });

      expect(result.current.currentQuestionIndex).toBe(questions.length - 1);

      act(() => {
        result.current.goToNextQuestion();
      });

      expect(result.current.currentQuestionIndex).toBe(questions.length - 1);
    });

    it('jumps to specific question with goToQuestion', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.goToQuestion(10);
      });

      expect(result.current.currentQuestionIndex).toBe(10);
    });

    it('ignores invalid indices in goToQuestion', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.setCurrentIndex(5);
      });

      act(() => {
        result.current.goToQuestion(-1);
      });

      expect(result.current.currentQuestionIndex).toBe(5);

      act(() => {
        result.current.goToQuestion(999);
      });

      expect(result.current.currentQuestionIndex).toBe(5);
    });
  });

  describe('Helper Functions', () => {
    it('getCurrentQuestion returns current question object', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      const currentQuestion = result.current.getCurrentQuestion();
      expect(currentQuestion).toEqual(questions[0]);
    });

    it('getResponse returns null for unanswered question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.getResponse(questions[0].id)).toBeNull();
    });

    it('getProgress calculates progress correctly', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.answerQuestion(questions[0].id, 3);
        result.current.answerQuestion(questions[1].id, 4);
        result.current.setCurrentIndex(10);
      });

      const progress = result.current.getProgress();
      expect(progress.current).toBe(11);
      expect(progress.total).toBe(questions.length);
      expect(progress.answered).toBe(2);
      expect(progress.percentage).toBe(Math.round((11 / questions.length) * 100));
    });

    it('canProceed returns false when current question is not answered', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.canProceed()).toBe(false);
    });

    it('canProceed returns true when current question is answered', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.answerQuestion(questions[0].id, 3);
      });

      expect(result.current.canProceed()).toBe(true);
    });

    it('isFirstQuestion returns true on first question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.isFirstQuestion()).toBe(true);
    });

    it('isFirstQuestion returns false on other questions', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.goToNextQuestion();
      });

      expect(result.current.isFirstQuestion()).toBe(false);
    });

    it('isLastQuestion returns true on last question', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.setCurrentIndex(questions.length - 1);
      });

      expect(result.current.isLastQuestion()).toBe(true);
    });

    it('isLastQuestion returns false on other questions', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.isLastQuestion()).toBe(false);
    });
  });

  describe('Calculate Results', () => {
    it('calculates results when quiz is complete', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      // Answer all questions
      act(() => {
        questions.forEach(q => {
          result.current.answerQuestion(q.id, 3);
        });
      });

      act(() => {
        result.current.calculateAndSetResults();
      });

      expect(result.current.results).toBeTruthy();
      expect(result.current.results.statism).toBeDefined();
      expect(result.current.results.recognition).toBeDefined();
      expect(result.current.results.sid).toBeDefined();
      expect(result.current.isComplete).toBe(true);
    });

    it('does not calculate results when quiz is incomplete', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      // Answer only some questions
      act(() => {
        result.current.answerQuestion(questions[0].id, 3);
      });

      act(() => {
        result.current.calculateAndSetResults();
      });

      expect(result.current.results).toBeNull();
      expect(result.current.isComplete).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('Cannot calculate results: Quiz not complete');

      consoleSpy.mockRestore();
    });
  });

  describe('Toggle Parties', () => {
    it('toggles showParties from false to true', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      expect(result.current.showParties).toBe(false);

      act(() => {
        result.current.toggleParties();
      });

      expect(result.current.showParties).toBe(true);
    });

    it('toggles showParties from true to false', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.toggleParties();
        result.current.toggleParties();
      });

      expect(result.current.showParties).toBe(false);
    });
  });

  describe('Reset Quiz', () => {
    it('resets quiz to initial state', () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      // Answer some questions and navigate
      act(() => {
        result.current.answerQuestion(questions[0].id, 4);
        result.current.answerQuestion(questions[1].id, 2);
        result.current.setCurrentIndex(5);
        result.current.toggleParties();
      });

      expect(result.current.currentQuestionIndex).toBe(5);
      expect(Object.keys(result.current.responses).length).toBe(2);
      expect(result.current.showParties).toBe(true);

      // Reset
      act(() => {
        result.current.resetQuiz();
      });

      expect(result.current.currentQuestionIndex).toBe(0);
      expect(result.current.responses).toEqual({});
      expect(result.current.results).toBeNull();
      expect(result.current.showParties).toBe(false);
      expect(result.current.isComplete).toBe(false);
    });

    it('clears and resets localStorage on reset', async () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.answerQuestion(questions[0].id, 4);
      });

      // Wait for state to be saved to localStorage
      await waitFor(() => {
        const saved = localStorageMock.getItem('political_nakshatra_quiz_state');
        expect(saved).toBeTruthy();
        const parsed = JSON.parse(saved);
        expect(parsed.responses[questions[0].id]).toBe(4);
      });

      act(() => {
        result.current.resetQuiz();
      });

      // After reset, localStorage will have the reset state (not null, but reset)
      await waitFor(() => {
        const saved = localStorageMock.getItem('political_nakshatra_quiz_state');
        if (saved) {
          const parsed = JSON.parse(saved);
          expect(parsed.responses).toEqual({});
          expect(parsed.currentQuestionIndex).toBe(0);
        }
      });
    });
  });

  describe('LocalStorage Persistence', () => {
    it('saves state to localStorage', async () => {
      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      act(() => {
        result.current.answerQuestion(questions[0].id, 4);
      });

      await waitFor(() => {
        const saved = localStorageMock.getItem('political_nakshatra_quiz_state');
        expect(saved).toBeTruthy();

        const parsed = JSON.parse(saved);
        expect(parsed.responses[questions[0].id]).toBe(4);
      });
    });

    it('loads saved state from localStorage on mount', () => {
      const savedState = {
        currentQuestionIndex: 5,
        responses: { 1: 4, 2: 3 },
        results: null,
        showParties: true,
        isComplete: false,
        startTime: Date.now(),
      };

      localStorageMock.setItem('political_nakshatra_quiz_state', JSON.stringify(savedState));

      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      waitFor(() => {
        expect(result.current.currentQuestionIndex).toBe(5);
        expect(result.current.responses).toEqual({ 1: 4, 2: 3 });
        expect(result.current.showParties).toBe(true);
      });
    });

    it('handles corrupt localStorage data gracefully', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      localStorageMock.setItem('political_nakshatra_quiz_state', 'invalid json');

      const { result } = renderHook(() => useQuiz(), {
        wrapper: QuizProvider,
      });

      // Should fall back to initial state
      expect(result.current.currentQuestionIndex).toBe(0);
      expect(result.current.responses).toEqual({});
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });
});
