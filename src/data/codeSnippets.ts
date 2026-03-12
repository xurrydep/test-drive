export interface CodeExample {
  id: string;
  moduleId: string;
  title: string;
  code: string;
  language: string;
  description: string;
}

export const tradeBotCode: CodeExample[] = [
  {
    id: 'trade-code-1',
    moduleId: 'trade-1',
    title: 'Exchange API Client',
    language: 'typescript',
    description: 'Initialize and authenticate with the exchange API',
    code: `import ccxt from 'ccxt';

const exchange = new ccxt.binance({
  apiKey: process.env.API_KEY!,
  secret: process.env.API_SECRET!,
  sandbox: true, // Use testnet
});

export async function fetchTicker(symbol: string) {
  const ticker = await exchange.fetchTicker(symbol);
  return {
    symbol: ticker.symbol,
    price: ticker.last,
    volume: ticker.baseVolume,
    change: ticker.percentage,
  };
}`,
  },
  {
    id: 'trade-code-2',
    moduleId: 'trade-2',
    title: 'Fetch OHLCV Data',
    language: 'typescript',
    description: 'Fetch candlestick data and calculate SMA',
    code: `export async function fetchOHLCV(symbol: string, timeframe: string) {
  const ohlcv = await exchange.fetchOHLCV(symbol, timeframe, undefined, 100);
  return ohlcv.map(([time, open, high, low, close, volume]) => ({
    time, open, high, low, close, volume,
  }));
}

export function calcSMA(closes: number[], period: number): number {
  const slice = closes.slice(-period);
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}`,
  },
  {
    id: 'trade-code-3',
    moduleId: 'trade-3',
    title: 'Momentum Strategy',
    language: 'typescript',
    description: 'Entry and exit signal logic',
    code: `export function generateSignal(closes: number[]): 'buy' | 'sell' | 'hold' {
  const sma20 = calcSMA(closes, 20);
  const sma50 = calcSMA(closes, 50);
  const currentPrice = closes[closes.length - 1];

  if (currentPrice > sma20 && sma20 > sma50) return 'buy';
  if (currentPrice < sma20 && sma20 < sma50) return 'sell';
  return 'hold';
}`,
  },
  {
    id: 'trade-code-4',
    moduleId: 'trade-4',
    title: 'Risk Management',
    language: 'typescript',
    description: 'Calculate position size and stop-loss',
    code: `interface RiskParams {
  accountBalance: number;
  riskPerTrade: number; // e.g. 0.02 for 2%
  entryPrice: number;
  stopLossPrice: number;
}

export function calcPositionSize(params: RiskParams): number {
  const { accountBalance, riskPerTrade, entryPrice, stopLossPrice } = params;
  const riskAmount = accountBalance * riskPerTrade;
  const priceRisk = Math.abs(entryPrice - stopLossPrice);
  return riskAmount / priceRisk;
}`,
  },
  {
    id: 'trade-code-5',
    moduleId: 'trade-5',
    title: 'Bot Runner',
    language: 'typescript',
    description: 'Main bot loop with logging',
    code: `async function runBot() {
  console.log('Bot started...');
  while (true) {
    try {
      const ohlcv = await fetchOHLCV('BTC/USDT', '1h');
      const closes = ohlcv.map(c => c.close);
      const signal = generateSignal(closes);
      console.log(\`Signal: \${signal} at \${closes[closes.length - 1]}\`);
      if (signal !== 'hold') {
        // Execute order logic here
      }
    } catch (err) {
      console.error('Error:', err);
    }
    await new Promise(r => setTimeout(r, 60_000));
  }
}

runBot();`,
  },
];

export const nftBotCode: CodeExample[] = [
  {
    id: 'nft-code-1',
    moduleId: 'nft-1',
    title: 'Web3 Provider Setup',
    language: 'typescript',
    description: 'Connect to Ethereum and configure wallet',
    code: `import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(
  \`https://mainnet.infura.io/v3/\${process.env.INFURA_KEY}\`
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

export async function getBalance(address: string): Promise<string> {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
}`,
  },
  {
    id: 'nft-code-2',
    moduleId: 'nft-2',
    title: 'ERC-721 Smart Contract',
    language: 'solidity',
    description: 'Basic NFT contract in Solidity',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BotLearnNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    string private _baseTokenURI;

    constructor(string memory baseURI) ERC721("BotLearnNFT", "BLN") Ownable(msg.sender) {
        _baseTokenURI = baseURI;
    }

    function mint(address to) public onlyOwner returns (uint256) {
        _tokenIds++;
        _safeMint(to, _tokenIds);
        return _tokenIds;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}`,
  },
  {
    id: 'nft-code-3',
    moduleId: 'nft-3',
    title: 'Automated Minting',
    language: 'typescript',
    description: 'Mint NFT with gas estimation',
    code: `import { ethers } from 'ethers';
import abi from './BotLearnNFT.json';

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;

export async function mintNFT(wallet: ethers.Wallet, toAddress: string) {
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);
  const gasEstimate = await contract.mint.estimateGas(toAddress);
  const feeData = await wallet.provider!.getFeeData();

  const tx = await contract.mint(toAddress, {
    gasLimit: gasEstimate * 120n / 100n, // 20% buffer
    maxFeePerGas: feeData.maxFeePerGas,
  });

  const receipt = await tx.wait();
  console.log('Minted! Tx:', receipt.hash);
  return receipt;
}`,
  },
  {
    id: 'nft-code-4',
    moduleId: 'nft-4',
    title: 'IPFS Metadata Upload',
    language: 'typescript',
    description: 'Upload NFT metadata to IPFS via Pinata',
    code: `import PinataClient from '@pinata/sdk';

const pinata = new PinataClient(
  process.env.PINATA_KEY!,
  process.env.PINATA_SECRET!
);

export async function uploadMetadata(metadata: object): Promise<string> {
  const result = await pinata.pinJSONToIPFS(metadata, {
    pinataMetadata: { name: 'NFT Metadata' },
  });
  return \`ipfs://\${result.IpfsHash}\`;
}

export function buildMetadata(name: string, description: string, imageUri: string) {
  return { name, description, image: imageUri, attributes: [] };
}`,
  },
  {
    id: 'nft-code-5',
    moduleId: 'nft-5',
    title: 'OpenSea Listing',
    language: 'typescript',
    description: 'List NFT on OpenSea via SDK',
    code: `import { OpenSeaSDK, Chain } from 'opensea-js';

const sdk = new OpenSeaSDK(provider, {
  chain: Chain.Mainnet,
  apiKey: process.env.OPENSEA_API_KEY!,
});

export async function listNFT(
  tokenId: string,
  priceEth: string,
  expirationDays = 7
) {
  const expirationTime = Math.round(Date.now() / 1000) + expirationDays * 86400;
  const listing = await sdk.createListing({
    asset: { tokenId, tokenAddress: process.env.CONTRACT_ADDRESS! },
    accountAddress: wallet.address,
    startAmount: parseFloat(priceEth),
    expirationTime,
  });
  return listing;
}`,
  },
];

export const chartAnalysisCode: CodeExample[] = [
  {
    id: 'chart-code-1',
    moduleId: 'chart-1',
    title: 'Fetch OHLCV Data',
    language: 'typescript',
    description: 'Fetch historical data from a public API',
    code: `interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export async function fetchCandles(symbol: string, interval: string): Promise<Candle[]> {
  const res = await fetch(
    \`https://api.binance.com/api/v3/klines?symbol=\${symbol}&interval=\${interval}&limit=200\`
  );
  const data = await res.json();
  return data.map((c: number[]) => ({
    time: c[0], open: +c[1], high: +c[2], low: +c[3], close: +c[4], volume: +c[5],
  }));
}`,
  },
  {
    id: 'chart-code-2',
    moduleId: 'chart-2',
    title: 'RSI Calculator',
    language: 'typescript',
    description: 'Relative Strength Index implementation',
    code: `export function calcRSI(closes: number[], period = 14): number[] {
  const rsi: number[] = [];
  let avgGain = 0;
  let avgLoss = 0;

  for (let i = 1; i <= period; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff > 0) avgGain += diff;
    else avgLoss += Math.abs(diff);
  }
  avgGain /= period;
  avgLoss /= period;

  for (let i = period; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    avgGain = (avgGain * (period - 1) + Math.max(diff, 0)) / period;
    avgLoss = (avgLoss * (period - 1) + Math.max(-diff, 0)) / period;
    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    rsi.push(100 - 100 / (1 + rs));
  }
  return rsi;
}`,
  },
  {
    id: 'chart-code-3',
    moduleId: 'chart-3',
    title: 'MACD Calculator',
    language: 'typescript',
    description: 'MACD line, signal line, and histogram',
    code: `function calcEMA(values: number[], period: number): number[] {
  const k = 2 / (period + 1);
  const ema: number[] = [values[0]];
  for (let i = 1; i < values.length; i++) {
    ema.push(values[i] * k + ema[i - 1] * (1 - k));
  }
  return ema;
}

export function calcMACD(closes: number[], fast = 12, slow = 26, signal = 9) {
  const emaFast = calcEMA(closes, fast);
  const emaSlow = calcEMA(closes, slow);
  const macd = emaFast.map((v, i) => v - emaSlow[i]);
  const signalLine = calcEMA(macd.slice(slow - 1), signal);
  const histogram = signalLine.map((v, i) => macd[slow - 1 + i] - v);
  return { macd, signalLine, histogram };
}`,
  },
  {
    id: 'chart-code-4',
    moduleId: 'chart-4',
    title: 'Bollinger Bands',
    language: 'typescript',
    description: 'Upper, middle, and lower Bollinger Bands',
    code: `export function calcBollingerBands(closes: number[], period = 20, multiplier = 2) {
  const bands = [];
  for (let i = period - 1; i < closes.length; i++) {
    const slice = closes.slice(i - period + 1, i + 1);
    const mean = slice.reduce((a, b) => a + b, 0) / period;
    const variance = slice.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / period;
    const std = Math.sqrt(variance);
    bands.push({
      upper: mean + multiplier * std,
      middle: mean,
      lower: mean - multiplier * std,
    });
  }
  return bands;
}`,
  },
  {
    id: 'chart-code-5',
    moduleId: 'chart-5',
    title: 'Signal Aggregator',
    language: 'typescript',
    description: 'Combine RSI, MACD, and Bollinger Bands into a unified signal',
    code: `export function aggregateSignals(
  price: number,
  rsi: number,
  macdHistogram: number,
  bb: { upper: number; lower: number }
): { signal: 'buy' | 'sell' | 'hold'; score: number } {
  let score = 0;

  // RSI signals
  if (rsi < 30) score += 2;
  else if (rsi > 70) score -= 2;

  // MACD signals
  if (macdHistogram > 0) score += 1;
  else score -= 1;

  // Bollinger Band signals
  if (price < bb.lower) score += 2;
  else if (price > bb.upper) score -= 2;

  const signal = score >= 3 ? 'buy' : score <= -3 ? 'sell' : 'hold';
  return { signal, score };
}`,
  },
];
