// FAQ accordion for model comparison questions

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqContent } from '../../data/modelComparison';

export function ModelFAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id) => openItems.includes(id);

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>

      <div className="space-y-4">
        {faqContent.map((item) => (
          <div
            key={item.id}
            className="card bg-gray-800/50 overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-gray-700/30 transition-all"
              aria-expanded={isOpen(item.id)}
              aria-controls={`faq-answer-${item.id}`}
            >
              <h4 className="text-lg font-semibold text-white">{item.question}</h4>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gray-400 transition-transform ${
                  isOpen(item.id) ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              id={`faq-answer-${item.id}`}
              className={`overflow-hidden transition-all ${
                isOpen(item.id) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 text-gray-300">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded">
        <p className="text-sm text-gray-300">
          <strong className="text-white">Note:</strong> Neither framework is "better"—they serve different purposes.
          Political Nakshatra provides a more accurate representation of where you stand in the Indian political
          constellation, while the Political Compass is more suitable for Western political contexts.
        </p>
      </div>
    </div>
  );
}
