import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuestionCard } from '../QuestionCard';

describe('QuestionCard', () => {
  const mockQuestion = {
    id: 1,
    axis: 'statism',
    category: 'economic',
    text: 'The government should control key industries.',
    reverse: false,
    weight: 1.0,
  };

  it('renders question text', () => {
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    expect(screen.getByText('The government should control key industries.')).toBeInTheDocument();
  });

  it('displays axis label', () => {
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    expect(screen.getByText('Statism')).toBeInTheDocument();
  });

  it('displays category', () => {
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    expect(screen.getByText('economic')).toBeInTheDocument();
  });

  it('applies correct color class for statism axis', () => {
    const { container } = render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    const axisLabel = container.querySelector('.text-blue-400');
    expect(axisLabel).toBeInTheDocument();
    expect(axisLabel).toHaveTextContent('Statism');
  });

  it('applies correct color class for recognition axis', () => {
    const recognitionQuestion = { ...mockQuestion, axis: 'recognition' };
    const { container } = render(<QuestionCard question={recognitionQuestion} value={null} onAnswer={() => {}} />);

    const axisLabel = container.querySelector('.text-green-400');
    expect(axisLabel).toBeInTheDocument();
    expect(axisLabel).toHaveTextContent('Recognition');
  });

  it('applies correct color class for sid axis', () => {
    const sidQuestion = { ...mockQuestion, axis: 'sid' };
    const { container } = render(<QuestionCard question={sidQuestion} value={null} onAnswer={() => {}} />);

    const axisLabel = container.querySelector('.text-purple-400');
    expect(axisLabel).toBeInTheDocument();
    expect(axisLabel).toHaveTextContent('SID (Distribution)');
  });

  it('formats category with underscores correctly', () => {
    const questionWithUnderscore = { ...mockQuestion, category: 'social_reform' };
    render(<QuestionCard question={questionWithUnderscore} value={null} onAnswer={() => {}} />);

    expect(screen.getByText('social reform')).toBeInTheDocument();
  });

  it('passes value to LikertScale', () => {
    render(<QuestionCard question={mockQuestion} value={4} onAnswer={() => {}} />);

    const checkedRadio = screen.getByRole('radio', { checked: true });
    expect(checkedRadio.value).toBe('4');
  });

  it('passes onAnswer callback to LikertScale', () => {
    const handleAnswer = vi.fn();
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={handleAnswer} />);

    const agreeOption = screen.getByLabelText('Agree');
    agreeOption.click();

    expect(handleAnswer).toHaveBeenCalledWith(4);
  });

  it('displays help text at bottom', () => {
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    expect(screen.getByText('Select your level of agreement with this statement.')).toBeInTheDocument();
  });

  it('passes question id to LikertScale', () => {
    render(<QuestionCard question={mockQuestion} value={null} onAnswer={() => {}} />);

    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach(input => {
      expect(input.name).toBe('question-1');
    });
  });
});
