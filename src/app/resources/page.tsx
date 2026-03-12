import Link from 'next/link';
import { FiExternalLink, FiCode, FiTool, FiUsers } from 'react-icons/fi';

const templates = [
  { title: 'Trade Bot Starter', description: 'Complete trade bot scaffold with ccxt integration', href: '/tutorials/trade-bot', lang: 'TypeScript' },
  { title: 'ERC-721 Contract', description: 'Minimal Solidity NFT contract with minting function', href: '/tutorials/nft-minting-bot', lang: 'Solidity' },
  { title: 'Technical Indicators', description: 'RSI, MACD, and Bollinger Bands utility functions', href: '/tutorials/chart-analysis', lang: 'TypeScript' },
];

const tools = [
  { name: 'ccxt', description: 'Cryptocurrency exchange trading library', url: 'https://github.com/ccxt/ccxt' },
  { name: 'ethers.js', description: 'Ethereum JavaScript library', url: 'https://docs.ethers.org' },
  { name: 'Hardhat', description: 'Ethereum development environment', url: 'https://hardhat.org' },
  { name: 'OpenZeppelin', description: 'Secure smart contract library', url: 'https://openzeppelin.com' },
  { name: 'Pinata', description: 'IPFS pinning service for NFT metadata', url: 'https://pinata.cloud' },
  { name: 'PM2', description: 'Production process manager for Node.js', url: 'https://pm2.keymetrics.io' },
];

const community = [
  { name: 'GitHub Discussions', description: 'Ask questions and share projects', url: 'https://github.com' },
  { name: 'Discord', description: 'Real-time chat with the community', url: '#' },
  { name: 'Reddit r/algotrading', description: 'Algorithmic trading community', url: 'https://reddit.com/r/algotrading' },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Resources</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Templates, tools, and community links to accelerate your bot development journey.
        </p>

        {/* Code Templates */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FiCode className="w-5 h-5 text-primary-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Templates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg hover:border-primary-400 dark:hover:border-primary-500 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white">{t.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-md">{t.lang}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tool Recommendations */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FiTool className="w-5 h-5 text-primary-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recommended Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-primary-400 dark:hover:border-primary-500 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">{tool.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</p>
                </div>
                <FiExternalLink className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </section>

        {/* Community */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <FiUsers className="w-5 h-5 text-primary-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {community.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-primary-400 dark:hover:border-primary-500 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">{c.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{c.description}</p>
                </div>
                <FiExternalLink className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
