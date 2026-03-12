import React from 'react';

const ChartAnalysisTutorial = () => {
    return (
        <div>
            <h1>Chart Analysis Bot Tutorial</h1>
            <p>This tutorial covers five important technical indicators used in chart analysis: RSI, MACD, and Bollinger Bands.</p>

            <h2>1. Relative Strength Index (RSI)</h2>
            <p>The RSI is a momentum oscillator that measures the speed and change of price movements.
            It ranges from 0 to 100, typically with an overbought threshold of 70 and an oversold threshold of 30.</p>
            <pre><code>{`// Example of calculating RSI
function calculateRSI(prices, period = 14) {
    let gain = 0;
    let loss = 0;
    for (let i = 1; i < prices.length; i++) {
        const change = prices[i] - prices[i - 1];
        if (change > 0) gain += change;
        else loss -= change;
    }
    const avgGain = gain / period;
    const avgLoss = loss / period;
    const rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
}`} </code></pre>

            <h2>2. Moving Average Convergence Divergence (MACD)</h2>
            <p>MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security's price.</p>
            <pre><code>{`// Example of calculating MACD
function calculateMACD(prices, shortPeriod = 12, longPeriod = 26, signalPeriod = 9) {
    const shortMA = calculateEMA(prices, shortPeriod);
    const longMA = calculateEMA(prices, longPeriod);
    const macd = shortMA.map((value, index) => value - longMA[index]);
    const signal = calculateEMA(macd, signalPeriod);
    return { macd, signal };
}`} </code></pre>

            <h2>3. Bollinger Bands</h2>
            <p>Bollinger Bands are a volatility indicator that consists of a middle band (SMA) and two outer bands (standard deviations).</p>
            <pre><code>{`// Example of calculating Bollinger Bands
function calculateBollingerBands(prices, period = 20, stdDevMultiplier = 2) {
    const sma = calculateSMA(prices, period);
    const stdDev = prices.map((_, index) => calculateStdDev(prices, period, index));
    const upperBand = sma.map((value, index) => value + stdDevMultiplier * stdDev[index]);
    const lowerBand = sma.map((value, index) => value - stdDevMultiplier * stdDev[index]);
    return { upperBand, lowerBand };
}`} </code></pre>

            <h2>4. Average True Range (ATR)</h2>
            <p>ATR is a measure of volatility that shows the degree of price movement over a specified time frame.</p>
            <pre><code>{`// Example of calculating ATR
function calculateATR(prices, period = 14) {
    const tr = prices.map((price, index) => {
        if (index === 0) return 0;
        return Math.max(price.high - price.low, Math.abs(price.high - prices[index - 1].close), Math.abs(price.low - prices[index - 1].close));
    });
    return calculateSMA(tr, period);
}`} </code></pre>

            <h2>5. Stochastic Oscillator</h2>
            <p>The Stochastic Oscillator compares a particular closing price of a security to a range of its prices over a certain period of time.</p>
            <pre><code>{`// Example of calculating Stochastic Oscillator
function calculateStochastic(prices, period = 14) {
    let stoch = [];
    for (let i = period - 1; i < prices.length; i++) {
        const periodPrices = prices.slice(i - period + 1, i + 1);
        const highestHigh = Math.max(...periodPrices.map(p => p.high));
        const lowestLow = Math.min(...periodPrices.map(p => p.low));
        const lastClose = prices[i].close;
        stoch.push(100 * (lastClose - lowestLow) / (highestHigh - lowestLow));
    }
    return stoch;
}`} </code></pre>
        </div>
    );
};

export default ChartAnalysisTutorial;