// Quiz Container - Main quiz flow component

import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../contexts/QuizContext';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export function QuizContainer() {
  const navigate = useNavigate();
  const {
    getCurrentQuestion,
    getResponse,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    calculateAndSetResults,
    getProgress,
    canProceed,
    isLastQuestion,
    isFirstQuestion,
  } = useQuiz();

  const currentQuestion = getCurrentQuestion();
  const currentResponse = getResponse(currentQuestion.id);
  const progress = getProgress();

  const handleAnswer = (value) => {
    answerQuestion(currentQuestion.id, value);
  };

  const handleNext = () => {
    if (isLastQuestion()) {
      // Calculate results and navigate to results page
      calculateAndSetResults();
      navigate('/results');
    } else {
      goToNextQuestion();
    }
  };

  const handlePrevious = () => {
    goToPreviousQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ProgressBar
          current={progress.current}
          total={progress.total}
          percentage={progress.percentage}
        />

        <QuestionCard
          question={currentQuestion}
          value={currentResponse}
          onAnswer={handleAnswer}
        />

        <div className="flex justify-between items-center mt-8 max-w-3xl mx-auto">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
              ${isFirstQuestion()
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
          >
            <ArrowLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
              ${!canProceed()
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            {isLastQuestion() ? (
              <>
                See Results
                <CheckCircle size={20} />
              </>
            ) : (
              <>
                Next
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>

        {/* Keyboard navigation hint */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Tip: Use Tab to navigate options, Space/Enter to select</p>
        </div>
      </div>
    </div>
  );
}
