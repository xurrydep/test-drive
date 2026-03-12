import Hero from '@/components/Hero';
import TutorialCard from '@/components/TutorialCard';
import { tutorials } from '@/data/tutorials';
import { FiZap, FiShield, FiBook } from 'react-icons/fi';

const features = [
  {
    icon: <FiBook className="w-6 h-6" />,
    title: 'Step-by-Step Guides',
    description: 'Every tutorial breaks complex concepts into digestible, hands-on modules you can follow at your own pace.',
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: 'Real Code Examples',
    description: 'Learn with actual, production-quality code examples you can copy, modify, and deploy immediately.',
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Best Practices',
    description: 'All tutorials cover security, risk management, and production deployment best practices.',
  },
];

const testimonials = [
  {
    quote: 'BotLearn helped me build my first trading bot in a weekend. The step-by-step approach is incredibly clear.',
    author: 'Alex M.',
    role: 'Indie Developer',
  },
  {
    quote: 'The NFT minting tutorial saved me weeks of research. I had a working bot deployed on day two.',
    author: 'Sarah K.',
    role: 'Web3 Engineer',
  },
  {
    quote: 'Best resource for learning technical analysis automation. The RSI and MACD implementations are spot on.',
    author: 'James T.',
    role: 'Quant Trader',
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Why BotLearn */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why BotLearn?</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We make bot development accessible with structured, practical tutorials covering every aspect from beginner to advanced.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials preview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Tutorials</h2>
            <p className="text-gray-500 dark:text-gray-400">Start with any tutorial and progress at your own pace</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((t) => (
              <TutorialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">What Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6">
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-indigo-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Building?</h2>
          <p className="text-primary-100 mb-8">Join thousands of developers building automation bots today.</p>
          <a
            href="/tutorials"
            className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            Browse Tutorials
          </a>
        </div>
      </section>
    </div>
  );
}
