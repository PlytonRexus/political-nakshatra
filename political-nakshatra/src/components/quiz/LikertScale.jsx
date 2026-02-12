// Likert Scale Component (5-point scale)

import { likertOptions } from '../../data/questions';

export function LikertScale({ value, onChange, questionId }) {
  return (
    <div className="space-y-3">
      {likertOptions.map((option) => (
        <label
          key={option.value}
          className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-700/50
                     ${value === option.value
                       ? 'border-blue-500 bg-blue-500/10'
                       : 'border-gray-600 bg-gray-800/50'}"
        >
          <input
            type="radio"
            name={`question-${questionId}`}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
          />
          <span className="ml-3 text-base font-medium text-gray-100">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
