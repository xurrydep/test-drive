interface ProgressTrackerProps {
  totalModules: number;
  completedModules: number;
  tutorialId: string;
}

export default function ProgressTracker({ totalModules, completedModules }: ProgressTrackerProps) {
  const percentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  const isComplete = percentage === 100;

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">Your Progress</h3>
        {isComplete && (
          <span className="text-xs font-bold px-2.5 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
            🎉 Completed!
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isComplete ? 'bg-green-500' : 'bg-primary-500'}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-bold text-gray-700 dark:text-gray-200 w-10 text-right">{percentage}%</span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {completedModules} of {totalModules} modules completed
      </p>
    </div>
  );
}
