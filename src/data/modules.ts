export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  objectives: string[];
  duration: string;
}

export const tradeBotModules: Module[] = [
  {
    id: 'trade-1',
    number: 1,
    title: 'Project Setup & API Integration',
    description: 'Set up your development environment and connect to a crypto exchange API.',
    objectives: [
      'Install Node.js and required packages',
      'Register and configure exchange API keys',
      'Implement secure API authentication',
      'Fetch live market data',
    ],
    duration: '45 min',
  },
  {
    id: 'trade-2',
    number: 2,
    title: 'Market Data & Analysis',
    description: 'Fetch and process OHLCV data to prepare for strategy development.',
    objectives: [
      'Understand OHLCV candlestick data',
      'Calculate simple moving averages',
      'Implement data normalization',
      'Build a data pipeline',
    ],
    duration: '60 min',
  },
  {
    id: 'trade-3',
    number: 3,
    title: 'Trading Strategy Implementation',
    description: 'Build a momentum-based trading strategy with entry and exit signals.',
    objectives: [
      'Implement momentum strategy logic',
      'Define entry and exit conditions',
      'Backtest strategy on historical data',
      'Optimize strategy parameters',
    ],
    duration: '75 min',
  },
  {
    id: 'trade-4',
    number: 4,
    title: 'Risk Management & Order Execution',
    description: 'Add stop-loss, take-profit, and position sizing to protect capital.',
    objectives: [
      'Implement stop-loss orders',
      'Add take-profit targets',
      'Calculate position sizes',
      'Handle order errors gracefully',
    ],
    duration: '60 min',
  },
  {
    id: 'trade-5',
    number: 5,
    title: 'Deployment & Monitoring',
    description: 'Deploy your bot to a server and set up monitoring and alerts.',
    objectives: [
      'Deploy to a cloud server',
      'Set up process management with PM2',
      'Configure logging and alerts',
      'Monitor bot performance',
    ],
    duration: '45 min',
  },
];

export const nftBotModules: Module[] = [
  {
    id: 'nft-1',
    number: 1,
    title: 'Web3 & Wallet Setup',
    description: 'Configure Web3.js, connect a wallet, and interact with the Ethereum network.',
    objectives: [
      'Install Web3.js and ethers.js',
      'Connect MetaMask wallet programmatically',
      'Interact with Ethereum testnet',
      'Understand gas and transaction fees',
    ],
    duration: '60 min',
  },
  {
    id: 'nft-2',
    number: 2,
    title: 'Smart Contract Basics',
    description: 'Write and deploy a basic ERC-721 NFT smart contract using Solidity.',
    objectives: [
      'Understand ERC-721 standard',
      'Write a basic Solidity contract',
      'Compile and deploy with Hardhat',
      'Verify contract on Etherscan',
    ],
    duration: '90 min',
  },
  {
    id: 'nft-3',
    number: 3,
    title: 'Minting Automation',
    description: 'Automate the NFT minting process with gas optimization strategies.',
    objectives: [
      'Automate mint transactions',
      'Implement gas price monitoring',
      'Add retry logic for failed transactions',
      'Batch minting for efficiency',
    ],
    duration: '75 min',
  },
  {
    id: 'nft-4',
    number: 4,
    title: 'Metadata & IPFS',
    description: 'Upload NFT metadata and images to IPFS for decentralized storage.',
    objectives: [
      'Upload assets to IPFS via Pinata',
      'Generate ERC-721 metadata JSON',
      'Link metadata to minted NFTs',
      'Verify metadata on OpenSea',
    ],
    duration: '60 min',
  },
  {
    id: 'nft-5',
    number: 5,
    title: 'Marketplace Listing',
    description: 'Automatically list minted NFTs on OpenSea and other marketplaces.',
    objectives: [
      'Use OpenSea API for listings',
      'Set optimal listing prices',
      'Automate royalty configuration',
      'Track sales and analytics',
    ],
    duration: '60 min',
  },
];

export const chartAnalysisModules: Module[] = [
  {
    id: 'chart-1',
    number: 1,
    title: 'Data Fetching & Preparation',
    description: 'Fetch historical OHLCV data and prepare it for technical analysis.',
    objectives: [
      'Fetch data from a public API',
      'Parse and normalize OHLCV data',
      'Handle missing data points',
      'Store data efficiently',
    ],
    duration: '30 min',
  },
  {
    id: 'chart-2',
    number: 2,
    title: 'RSI Indicator',
    description: 'Implement the Relative Strength Index (RSI) from scratch.',
    objectives: [
      'Understand RSI formula and interpretation',
      'Calculate average gains and losses',
      'Implement RSI in TypeScript',
      'Identify overbought/oversold zones',
    ],
    duration: '45 min',
  },
  {
    id: 'chart-3',
    number: 3,
    title: 'MACD Indicator',
    description: 'Build the Moving Average Convergence Divergence (MACD) indicator.',
    objectives: [
      'Understand EMA calculation',
      'Implement MACD line and signal line',
      'Detect bullish/bearish crossovers',
      'Combine MACD with RSI signals',
    ],
    duration: '45 min',
  },
  {
    id: 'chart-4',
    number: 4,
    title: 'Bollinger Bands',
    description: 'Implement Bollinger Bands for volatility-based trading signals.',
    objectives: [
      'Calculate standard deviation',
      'Build upper and lower bands',
      'Detect band squeeze and breakout',
      'Generate buy/sell signals',
    ],
    duration: '45 min',
  },
  {
    id: 'chart-5',
    number: 5,
    title: 'Signal Aggregation & Alerts',
    description: 'Combine all indicators into a unified signal engine with notifications.',
    objectives: [
      'Aggregate signals from multiple indicators',
      'Implement signal scoring system',
      'Set up email/Telegram alerts',
      'Backtest combined strategy',
    ],
    duration: '60 min',
  },
];
