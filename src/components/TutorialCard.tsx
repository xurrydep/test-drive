'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getDifficultyColor } from '@/utils/helpers';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';

interface TutorialCardProps {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  icon: string;
  href: string;
  modules: number;
  tags: string[];
  progress?: number;
}

export default function TutorialCard({
  title,
  description,
  difficulty,
  duration,
  icon,
  href,
  modules,
  tags,
  progress = 0,
}: TutorialCardProps) {
  const hasStarted = progress > 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        {/* Icon + difficulty */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{icon}</span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-4">
          <span className="flex items-center gap-1"><FiClock className="w-3.5 h-3.5" /> {duration}</span>
          <span className="flex items-center gap-1"><FiBookOpen className="w-3.5 h-3.5" /> {modules} modules</span>
        </div>

        {/* Progress bar */}
        {hasStarted && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          {hasStarted ? 'Continue' : 'Start Tutorial'} <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
