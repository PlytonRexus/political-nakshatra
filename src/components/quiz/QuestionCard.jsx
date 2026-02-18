// Question Card Component

import { useTranslation } from 'react-i18next';
import { LikertScale } from './LikertScale';

export function QuestionCard({ question, value, onAnswer }) {
  const { t } = useTranslation(['common', 'questions']);

  const axisColors = {
    statism: 'text-blue-400',
    recognition: 'text-green-400',
    sid: 'text-purple-400',
  };

  return (
    <div className="card max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-sm font-semibold uppercase tracking-wide ${axisColors[question.axis]}`}>
            {t(`common:quiz.category.${question.axis}`)}
          </span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-400 capitalize">
            {question.category.replace('_', ' ')}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 leading-relaxed">
          {t(`questions:${question.id}.text`)}
        </h2>
      </div>

      <LikertScale
        value={value}
        onChange={onAnswer}
        questionId={question.id}
      />

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400 italic">
          {t('common:quiz.instructions')}
        </p>
      </div>
    </div>
  );
}
