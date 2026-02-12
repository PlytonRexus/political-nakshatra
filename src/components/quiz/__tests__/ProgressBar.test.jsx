import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('renders current and total question count', () => {
    render(<ProgressBar current={5} total={36} percentage={14} />);

    expect(screen.getByText('Question 5 of 36')).toBeInTheDocument();
  });

  it('renders percentage complete', () => {
    render(<ProgressBar current={10} total={36} percentage={28} />);

    expect(screen.getByText('28% Complete')).toBeInTheDocument();
  });

  it('displays progress bar with correct width', () => {
    const { container } = render(<ProgressBar current={18} total={36} percentage={50} />);

    const progressBar = container.querySelector('.bg-blue-600');
    expect(progressBar).toHaveStyle({ width: '50%' });
  });

  it('shows 0% at start', () => {
    const { container } = render(<ProgressBar current={1} total={36} percentage={3} />);

    expect(screen.getByText('3% Complete')).toBeInTheDocument();
    const progressBar = container.querySelector('.bg-blue-600');
    expect(progressBar).toHaveStyle({ width: '3%' });
  });

  it('shows 100% at end', () => {
    const { container } = render(<ProgressBar current={36} total={36} percentage={100} />);

    expect(screen.getByText('100% Complete')).toBeInTheDocument();
    const progressBar = container.querySelector('.bg-blue-600');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });

  it('handles mid-quiz progress', () => {
    render(<ProgressBar current={20} total={36} percentage={56} />);

    expect(screen.getByText('Question 20 of 36')).toBeInTheDocument();
    expect(screen.getByText('56% Complete')).toBeInTheDocument();
  });
});
