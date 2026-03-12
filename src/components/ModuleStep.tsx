'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';

interface ModuleStepProps {
  moduleNumber: number;
  title: string;
  description: string;
  objectives: string[];
  completed: boolean;
  onToggleComplete: () => void;
}

export default function ModuleStep({
  moduleNumber,
  title,
  description,
  objectives,
  completed,
  onToggleComplete,
}: ModuleStepProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${
      completed
        ? 'border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-950/30'
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
    }`}>
      <div className="flex items-center gap-4 p-4">
        {/* Step number / check */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
          completed ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
        }`}>
          {completed ? <FiCheck className="w-5 h-5" /> : moduleNumber}
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{description}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleComplete}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
              completed
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-300'
            }`}
          >
            {completed ? 'Undo' : 'Mark Done'}
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            {expanded ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-5 border-t border-gray-100 dark:border-gray-700 pt-4">
          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Learning Objectives:</h5>
          <ul className="space-y-1.5">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-primary-500 mt-0.5">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
