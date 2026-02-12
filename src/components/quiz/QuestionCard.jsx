// Question Card Component

import { LikertScale } from './LikertScale';

export function QuestionCard({ question, value, onAnswer }) {
  const axisColors = {
    statism: 'text-blue-400',
    recognition: 'text-green-400',
    sid: 'text-purple-400',
  };

  const axisLabels = {
    statism: 'Statism',
    recognition: 'Recognition',
    sid: 'SID (Distribution)',
  };

  return (
    <div className="card max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-sm font-semibold uppercase tracking-wide ${axisColors[question.axis]}`}>
            {axisLabels[question.axis]}
          </span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-400 capitalize">
            {question.category.replace('_', ' ')}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 leading-relaxed">
          {question.text}
        </h2>
      </div>

      <LikertScale
        value={value}
        onChange={onAnswer}
        questionId={question.id}
      />

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400 italic">
          Select your level of agreement with this statement.
        </p>
      </div>
    </div>
  );
}
