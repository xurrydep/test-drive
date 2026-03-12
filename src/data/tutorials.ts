export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  icon: string;
  href: string;
  modules: number;
  tags: string[];
  overview: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 'trade-bot',
    title: 'Trade Bot Tutorial',
    description: 'Learn to build an automated cryptocurrency trading bot with market analysis, order management, and risk controls.',
    difficulty: 'intermediate',
    duration: '4-6 hours',
    icon: '📈',
    href: '/tutorials/trade-bot',
    modules: 5,
    tags: ['Trading', 'API', 'Automation', 'Finance'],
    overview: 'In this tutorial, you will build a fully functional automated trading bot from scratch. We cover API integration, strategy implementation, risk management, and deployment.',
  },
  {
    id: 'nft-minting-bot',
    title: 'NFT Minting Bot',
    description: 'Create a bot to automatically mint NFTs on Ethereum, manage gas fees, and list on marketplaces.',
    difficulty: 'advanced',
    duration: '6-8 hours',
    icon: '🎨',
    href: '/tutorials/nft-minting-bot',
    modules: 5,
    tags: ['NFT', 'Ethereum', 'Solidity', 'Web3'],
    overview: 'Master NFT minting automation with smart contracts, Web3 integration, gas optimization, and marketplace listing strategies.',
  },
  {
    id: 'chart-analysis',
    title: 'Chart Analysis Bot',
    description: 'Build a technical analysis bot that calculates RSI, MACD, and Bollinger Bands to generate trading signals.',
    difficulty: 'beginner',
    duration: '3-4 hours',
    icon: '📊',
    href: '/tutorials/chart-analysis',
    modules: 5,
    tags: ['Analysis', 'Indicators', 'Signals', 'Trading'],
    overview: 'Learn to implement popular technical indicators and build a bot that generates buy/sell signals based on market data.',
  },
];
