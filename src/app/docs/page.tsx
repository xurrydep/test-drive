'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import CodeSnippet from '@/components/CodeSnippet';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What programming language do I need to know?',
    answer: 'All tutorials use TypeScript/JavaScript. Basic familiarity with JavaScript is recommended. We explain TypeScript-specific concepts as they come up.',
  },
  {
    question: 'Do I need real money to follow the trading bot tutorial?',
    answer: 'No. All trading bot tutorials use exchange testnets (sandbox mode) with fake funds. You only need real funds when you decide to deploy to production yourself.',
  },
  {
    question: 'What is the best tutorial for beginners?',
    answer: 'Start with the Chart Analysis Bot tutorial — it requires no API keys or wallets, just TypeScript and math. Then move to Trade Bot, then NFT Bot.',
  },
  {
    question: 'How do I store API keys securely?',
    answer: 'Always use environment variables (.env files) and never commit them to version control. Add .env* to your .gitignore and use a secrets manager for production.',
  },
  {
    question: 'Can I use these bots commercially?',
    answer: 'The tutorial code is for educational purposes. Check the terms of service of the exchanges and platforms you use before running bots commercially.',
  },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>{item.question}</span>
            {openIndex === i ? <FiChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <FiChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Documentation</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Reference guides, API docs, and troubleshooting resources.
        </p>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">progressTracking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Utilities for persisting tutorial progress in localStorage.</p>
              <CodeSnippet
                language="typescript"
                filename="progressTracking.ts"
                code={`// Get completed module IDs for a tutorial
getProgress(tutorialId: string): string[]

// Save progress
saveProgress(tutorialId: string, completedModules: string[]): void

// Toggle a module complete/incomplete and return updated list
toggleModuleComplete(tutorialId: string, moduleId: string): string[]

// Clear all progress for a tutorial
clearProgress(tutorialId: string): void`}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">helpers</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">General utility functions used across the platform.</p>
              <CodeSnippet
                language="typescript"
                filename="helpers.ts"
                code={`// Format minutes to human-readable duration
formatDuration(minutes: number): string
// e.g. formatDuration(90) => "1h 30m"

// Get Tailwind CSS classes for difficulty badge
getDifficultyColor(difficulty: string): string

// Truncate long text with ellipsis
truncateText(text: string, maxLength: number): string`}
              />
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            {[
              {
                title: 'API rate limit errors',
                content: 'Most exchanges limit API calls per minute. Add delay() calls between requests and implement exponential backoff for retry logic.',
              },
              {
                title: 'Transaction failing on-chain',
                content: 'Check that your wallet has sufficient ETH for gas fees. Increase the gasLimit by 20-30% over the estimate. Verify the contract address is correct.',
              },
              {
                title: 'TypeScript module resolution errors',
                content: 'Ensure tsconfig.json has "moduleResolution": "bundler" for Next.js 14+. Check that @/* path aliases match your tsconfig paths configuration.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>
      </div>
    </div>
  );
}
