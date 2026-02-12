// Political Nakshatra - Quiz State Management Context

import { createContext, useContext, useReducer, useEffect } from 'react';
import { calculateResults, isQuizComplete } from '../utils/scoring';
import { questions } from '../data/questions';

const QuizContext = createContext();

// Initial state
const initialState = {
  currentQuestionIndex: 0,
  responses: {}, // { questionId: likertValue }
  results: null, // { statism, recognition, sid }
  showParties: false,
  showLeaders: false,
  isComplete: false,
  startTime: null,
};

// Action types
const ACTIONS = {
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  SET_CURRENT_INDEX: 'SET_CURRENT_INDEX',
  CALCULATE_RESULTS: 'CALCULATE_RESULTS',
  TOGGLE_PARTIES: 'TOGGLE_PARTIES',
  TOGGLE_LEADERS: 'TOGGLE_LEADERS',
  RESET: 'RESET',
  LOAD_SAVED_STATE: 'LOAD_SAVED_STATE',
  SET_START_TIME: 'SET_START_TIME',
};

// Reducer function
function quizReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.payload.questionId]: action.payload.value,
        },
      };

    case ACTIONS.SET_CURRENT_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };

    case ACTIONS.CALCULATE_RESULTS:
      const results = calculateResults(state.responses);
      return {
        ...state,
        results,
        isComplete: true,
      };

    case ACTIONS.TOGGLE_PARTIES:
      return {
        ...state,
        showParties: !state.showParties,
      };

    case ACTIONS.TOGGLE_LEADERS:
      return {
        ...state,
        showLeaders: !state.showLeaders,
      };

    case ACTIONS.RESET:
      return {
        ...initialState,
        startTime: Date.now(),
      };

    case ACTIONS.LOAD_SAVED_STATE:
      return {
        ...state,
        ...action.payload,
      };

    case ACTIONS.SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };

    default:
      return state;
  }
}

// Storage key for localStorage
const STORAGE_KEY = 'political_nakshatra_quiz_state';

// Provider component
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Load saved state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ type: ACTIONS.LOAD_SAVED_STATE, payload: parsedState });
      } catch (error) {
        console.error('Failed to load saved quiz state:', error);
      }
    } else {
      // Set start time if not loaded from storage
      dispatch({ type: ACTIONS.SET_START_TIME, payload: Date.now() });
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (state.startTime) {
      // Only save if quiz has started
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error('Failed to save quiz state:', error);
      }
    }
  }, [state]);

  // Actions
  const answerQuestion = (questionId, value) => {
    dispatch({
      type: ACTIONS.ANSWER_QUESTION,
      payload: { questionId, value },
    });
  };

  const setCurrentIndex = (index) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_INDEX,
      payload: index,
    });
  };

  const calculateAndSetResults = () => {
    if (isQuizComplete(state.responses)) {
      dispatch({ type: ACTIONS.CALCULATE_RESULTS });
    } else {
      console.warn('Cannot calculate results: Quiz not complete');
    }
  };

  const toggleParties = () => {
    dispatch({ type: ACTIONS.TOGGLE_PARTIES });
  };

  const toggleLeaders = () => {
    dispatch({ type: ACTIONS.TOGGLE_LEADERS });
  };

  const resetQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: ACTIONS.RESET });
  };

  const goToNextQuestion = () => {
    if (state.currentQuestionIndex < questions.length - 1) {
      setCurrentIndex(state.currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setCurrentIndex(state.currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  // Helper getters
  const getCurrentQuestion = () => {
    return questions[state.currentQuestionIndex];
  };

  const getResponse = (questionId) => {
    return state.responses[questionId] || null;
  };

  const getProgress = () => {
    return {
      current: state.currentQuestionIndex + 1,
      total: questions.length,
      percentage: Math.round(((state.currentQuestionIndex + 1) / questions.length) * 100),
      answered: Object.keys(state.responses).length,
    };
  };

  const canProceed = () => {
    const currentQuestion = getCurrentQuestion();
    return getResponse(currentQuestion.id) !== null;
  };

  const isLastQuestion = () => {
    return state.currentQuestionIndex === questions.length - 1;
  };

  const isFirstQuestion = () => {
    return state.currentQuestionIndex === 0;
  };

  const value = {
    // State
    state,
    currentQuestionIndex: state.currentQuestionIndex,
    responses: state.responses,
    results: state.results,
    showParties: state.showParties,
    showLeaders: state.showLeaders,
    isComplete: state.isComplete,
    startTime: state.startTime,

    // Actions
    answerQuestion,
    setCurrentIndex,
    calculateAndSetResults,
    toggleParties,
    toggleLeaders,
    resetQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,

    // Helpers
    getCurrentQuestion,
    getResponse,
    getProgress,
    canProceed,
    isLastQuestion,
    isFirstQuestion,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

// Custom hook to use the quiz context
export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
