'use client';
import { FiCheck, FiCircle } from 'react-icons/fi';

interface SidebarModule {
  id: string;
  title: string;
  completed: boolean;
}

interface SidebarProps {
  modules: SidebarModule[];
  currentModule: number;
  onModuleSelect: (index: number) => void;
  tutorialTitle: string;
}

export default function Sidebar({ modules, currentModule, onModuleSelect, tutorialTitle }: SidebarProps) {
  const completedCount = modules.filter((m) => m.completed).length;

  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sticky top-24">
      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{tutorialTitle}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {completedCount}/{modules.length} completed
      </p>

      {/* Mini progress */}
      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-5 overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all"
          style={{ width: `${modules.length > 0 ? (completedCount / modules.length) * 100 : 0}%` }}
        />
      </div>

      <nav className="space-y-1">
        {modules.map((mod, i) => (
          <button
            key={mod.id}
            onClick={() => onModuleSelect(i)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
              i === currentModule
                ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="shrink-0">
              {mod.completed ? (
                <FiCheck className="w-4 h-4 text-green-500" />
              ) : (
                <FiCircle className={`w-4 h-4 ${i === currentModule ? 'text-primary-500' : 'text-gray-300 dark:text-gray-600'}`} />
              )}
            </span>
            <span className="truncate">{mod.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
