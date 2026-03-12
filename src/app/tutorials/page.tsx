'use client';
import { useState } from 'react';
import TutorialCard from '@/components/TutorialCard';
import { tutorials } from '@/data/tutorials';
import { FiSearch } from 'react-icons/fi';

type Difficulty = 'all' | 'beginner' | 'intermediate' | 'advanced';

export default function TutorialsPage() {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  const filtered = tutorials.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesDiff = difficulty === 'all' || t.difficulty === difficulty;
    return matchesSearch && matchesDiff;
  });

  const difficulties: Difficulty[] = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">All Tutorials</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Choose a tutorial and start building bots step by step.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                  difficulty === d
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-400'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TutorialCard key={t.id} {...t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No tutorials match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
