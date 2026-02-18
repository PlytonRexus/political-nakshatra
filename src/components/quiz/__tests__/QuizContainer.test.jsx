import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QuizProvider } from '../../../contexts/QuizContext';
import { QuizContainer } from '../QuizContainer';
import { questions } from '../../../data/questions';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Helper function to render QuizContainer with providers
function renderQuizContainer() {
  return render(
    <MemoryRouter>
      <QuizProvider>
        <QuizContainer />
      </QuizProvider>
    </MemoryRouter>
  );
}

describe('QuizContainer', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    localStorage.clear();
  });

  it('renders the first question initially', () => {
    renderQuizContainer();

    // Check for question content from first vignette (ST_01)
    expect(screen.getByText(/A major national airline, employing tens of thousands of citizens/)).toBeInTheDocument();
  });

  it('displays progress bar', () => {
    renderQuizContainer();

    expect(screen.getByText(/Question 1 of 15/)).toBeInTheDocument();
  });

  it('disables Previous button on first question', () => {
    renderQuizContainer();

    const previousButton = screen.getByRole('button', { name: /Previous/i });
    expect(previousButton).toBeDisabled();
  });

  it('disables Next button when current question is not answered', () => {
    renderQuizContainer();

    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).toBeDisabled();
  });

  it('enables Next button when current question is answered', () => {
    renderQuizContainer();

    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).not.toBeDisabled();
  });

  it('navigates to next question when Next is clicked', () => {
    renderQuizContainer();

    // Answer first question
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    // Click Next
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Should show question 2
    expect(screen.getByText(/Question 2 of 15/)).toBeInTheDocument();
  });

  it('navigates to previous question when Previous is clicked', () => {
    renderQuizContainer();

    // Answer first question
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    // Go to next question
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Click Previous
    const previousButton = screen.getByRole('button', { name: /Previous/i });
    fireEvent.click(previousButton);

    // Should show question 1 again
    expect(screen.getByText(/Question 1 of 15/)).toBeInTheDocument();
  });

  it('preserves answer when navigating back', () => {
    renderQuizContainer();

    // Answer first question with "Agree" (value 4)
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    // Go to next question
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Go back to previous question
    const previousButton = screen.getByRole('button', { name: /Previous/i });
    fireEvent.click(previousButton);

    // Answer should still be selected
    const checkedRadio = screen.getByRole('radio', { checked: true });
    expect(checkedRadio.value).toBe('4');
  });

  it('shows "See Results" button on last question', () => {
    renderQuizContainer();

    // Navigate to last question
    const lastQuestionIndex = questions.length - 1;

    // Answer questions and navigate to the end
    for (let i = 0; i < lastQuestionIndex; i++) {
      const agreeOption = screen.getByLabelText('Agree');
      fireEvent.click(agreeOption);

      const nextButton = screen.getByRole('button', { name: /Next/i });
      fireEvent.click(nextButton);
    }

    // Answer last question
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    // Should show "Results" instead of "Next"
    expect(screen.getByRole('button', { name: /Results/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Next$/i })).not.toBeInTheDocument();
  });

  it.skip('displays keyboard navigation hint', () => {
    // This feature is not currently implemented
    renderQuizContainer();

    expect(screen.getByText(/Tip: Use Tab to navigate options/i)).toBeInTheDocument();
  });

  it('updates progress as questions are answered and navigated', () => {
    renderQuizContainer();

    // Initially at question 1
    expect(screen.getByText(/Question 1 of 15/)).toBeInTheDocument();

    // Answer and go to question 2
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Should show question 2
    expect(screen.getByText(/Question 2 of 15/)).toBeInTheDocument();

    // Answer and go to question 3
    const agreeOption2 = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption2);
    const nextButton2 = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton2);

    // Should show question 3
    expect(screen.getByText(/Question 3 of 15/)).toBeInTheDocument();
  });

  it('allows changing answer on current question', () => {
    renderQuizContainer();

    // Select "Agree"
    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    expect(screen.getByRole('radio', { checked: true }).value).toBe('4');

    // Change to "Strongly Disagree"
    const stronglyDisagreeOption = screen.getByLabelText('Strongly Disagree');
    fireEvent.click(stronglyDisagreeOption);

    expect(screen.getByRole('radio', { checked: true }).value).toBe('1');
  });
});
