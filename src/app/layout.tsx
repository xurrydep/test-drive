import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Bot Learning Platform - Learn to Build Trading & NFT Bots',
  description: 'Learn how to build trading bots, NFT minting bots, and chart analysis bots with our step-by-step tutorials.',
  keywords: 'trading bot, NFT bot, chart analysis, bot development, cryptocurrency',
  openGraph: {
    title: 'Bot Learning Platform',
    description: 'Learn to build powerful trading and NFT bots',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
