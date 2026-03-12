import Link from 'next/link';
import { FiCpu, FiGithub, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">
              <FiCpu className="w-6 h-6" />
              BotLearn
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The best platform to learn bot development for trading, NFTs, and chart analysis.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {[['/', 'Home'], ['/tutorials', 'Tutorials'], ['/docs', 'Docs'], ['/resources', 'Resources']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutorials */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tutorials</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {[
                ['/tutorials/trade-bot', 'Trade Bot'],
                ['/tutorials/nft-minting-bot', 'NFT Minting Bot'],
                ['/tutorials/chart-analysis', 'Chart Analysis'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} BotLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
