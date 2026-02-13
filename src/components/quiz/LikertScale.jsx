// Likert Scale Component (5-point scale)

import { useTranslation } from 'react-i18next';

const likertValues = [
  { value: 1, key: 'stronglyDisagree' },
  { value: 2, key: 'disagree' },
  { value: 3, key: 'neutral' },
  { value: 4, key: 'agree' },
  { value: 5, key: 'stronglyAgree' },
];

export function LikertScale({ value, onChange, questionId }) {
  const { t } = useTranslation('common');

  return (
    <div className="space-y-3">
      {likertValues.map((option) => (
        <label
          key={option.value}
          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-700/50 ${
            value === option.value
              ? 'border-blue-500 bg-blue-500/10'
              : 'border-gray-600 bg-gray-800/50'
          }`}
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
            {t(`quiz.likertScale.${option.key}`)}
          </span>
        </label>
      ))}
    </div>
  );
}
