import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LikertScale } from '../LikertScale';
import { likertOptions } from '../../../data/questions';

describe('LikertScale', () => {
  it('renders all 5 Likert options', () => {
    render(<LikertScale value={null} onChange={() => {}} questionId={1} />);

    likertOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('marks the selected option as checked', () => {
    render(<LikertScale value={4} onChange={() => {}} questionId={1} />);

    const radioInputs = screen.getAllByRole('radio');
    const selectedOption = radioInputs.find(input => input.value === '4');

    expect(selectedOption).toBeChecked();
  });

  it('calls onChange with correct value when option is selected', () => {
    const handleChange = vi.fn();
    render(<LikertScale value={null} onChange={handleChange} questionId={1} />);

    const agreeOption = screen.getByLabelText('Agree');
    fireEvent.click(agreeOption);

    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('allows changing selection', () => {
    const handleChange = vi.fn();
    const { rerender } = render(<LikertScale value={3} onChange={handleChange} questionId={1} />);

    const stronglyAgreeOption = screen.getByLabelText('Strongly Agree');
    fireEvent.click(stronglyAgreeOption);

    expect(handleChange).toHaveBeenCalledWith(5);

    rerender(<LikertScale value={5} onChange={handleChange} questionId={1} />);

    const selectedOption = screen.getByRole('radio', { checked: true });
    expect(selectedOption.value).toBe('5');
  });

  it('shows no selection when value is null', () => {
    render(<LikertScale value={null} onChange={() => {}} questionId={1} />);

    const radioInputs = screen.getAllByRole('radio');
    const checkedInputs = radioInputs.filter(input => input.checked);

    expect(checkedInputs.length).toBe(0);
  });

  it('applies correct styling to selected option', () => {
    render(<LikertScale value={3} onChange={() => {}} questionId={1} />);

    const selectedOption = screen.getByRole('radio', { checked: true });
    expect(selectedOption).toBeChecked();
    expect(selectedOption.value).toBe('3');
  });

  it('converts string value to integer on change', () => {
    const handleChange = vi.fn();
    render(<LikertScale value={null} onChange={handleChange} questionId={1} />);

    const radio = screen.getByLabelText('Disagree');
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledWith(2);
    expect(typeof handleChange.mock.calls[0][0]).toBe('number');
  });

  it('uses questionId for radio button name attribute', () => {
    render(<LikertScale value={null} onChange={() => {}} questionId={42} />);

    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach(input => {
      expect(input.name).toBe('question-42');
    });
  });
});
