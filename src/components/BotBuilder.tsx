'use client';
import { useState } from 'react';
import CodeSnippet from './CodeSnippet';
import { FiSettings } from 'react-icons/fi';

type BotType = 'trade' | 'nft' | 'chart';

interface BotConfig {
  type: BotType;
  name: string;
  interval: string;
  riskLevel: string;
  maxPositions: string;
}

const defaultConfig: BotConfig = {
  type: 'trade',
  name: 'MyBot',
  interval: '1h',
  riskLevel: 'medium',
  maxPositions: '3',
};

function generateConfig(config: BotConfig): string {
  if (config.type === 'trade') {
    return `// Trade Bot Configuration
const botConfig = {
  name: "${config.name}",
  type: "trade",
  settings: {
    interval: "${config.interval}",
    riskLevel: "${config.riskLevel}",
    maxPositions: ${config.maxPositions},
    strategy: "momentum",
    stopLoss: 0.02,
    takeProfit: 0.05,
  },
};

export default botConfig;`;
  }
  if (config.type === 'nft') {
    return `// NFT Bot Configuration
const botConfig = {
  name: "${config.name}",
  type: "nft",
  settings: {
    network: "ethereum",
    maxMintPrice: "0.1",
    gasLimit: 200000,
    slippage: "${config.riskLevel === 'high' ? '5' : '2'}%",
    autoList: true,
  },
};

export default botConfig;`;
  }
  return `// Chart Analysis Bot Configuration
const botConfig = {
  name: "${config.name}",
  type: "chart",
  settings: {
    interval: "${config.interval}",
    indicators: ["RSI", "MACD", "BollingerBands"],
    rsiPeriod: 14,
    macdFast: 12,
    macdSlow: 26,
    alertThreshold: "${config.riskLevel}",
  },
};

export default botConfig;`;
}

export default function BotBuilder() {
  const [config, setConfig] = useState<BotConfig>(defaultConfig);
  const [generated, setGenerated] = useState('');

  const update = (key: keyof BotConfig, value: string) =>
    setConfig((c) => ({ ...c, [key]: value }));

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <FiSettings className="w-5 h-5 text-primary-500" />
        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Bot Builder</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bot Type</label>
          <select
            value={config.type}
            onChange={(e) => update('type', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="trade">Trade Bot</option>
            <option value="nft">NFT Bot</option>
            <option value="chart">Chart Analysis Bot</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bot Name</label>
          <input
            type="text"
            value={config.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Interval</label>
          <select
            value={config.interval}
            onChange={(e) => update('interval', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {['1m', '5m', '15m', '1h', '4h', '1d'].map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Risk Level</label>
          <select
            value={config.riskLevel}
            onChange={(e) => update('riskLevel', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => setGenerated(generateConfig(config))}
        className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
      >
        Generate Config
      </button>

      {generated && (
        <div className="mt-6">
          <CodeSnippet code={generated} language="javascript" filename="bot.config.js" />
        </div>
      )}
    </div>
  );
}
