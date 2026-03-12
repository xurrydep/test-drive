'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiImage, FiBarChart2 } from 'react-icons/fi';

const features = [
  { icon: <FiTrendingUp className="w-8 h-8" />, title: 'Trade Bot', description: 'Automate trading strategies' },
  { icon: <FiImage className="w-8 h-8" />, title: 'NFT Bot', description: 'Mint and manage NFTs' },
  { icon: <FiBarChart2 className="w-8 h-8" />, title: 'Chart Analysis', description: 'Technical analysis bots' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 py-24 px-4">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50 rounded-full border border-primary-200 dark:border-primary-700">
            🚀 Start Building Bots Today
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Master{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Bot Development
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Learn to build powerful trading bots, NFT minting bots, and chart analysis bots with step-by-step tutorials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary-500/30"
            >
              Start Learning <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all hover:scale-105"
            >
              View Resources
            </Link>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
