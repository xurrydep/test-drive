'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ModuleStep from '@/components/ModuleStep';
import CodeSnippet from '@/components/CodeSnippet';
import ProgressTracker from '@/components/ProgressTracker';
import { nftBotModules } from '@/data/modules';
import { nftBotCode } from '@/data/codeSnippets';
import { getProgress, toggleModuleComplete } from '@/utils/progressTracking';

const TUTORIAL_ID = 'nft-minting-bot';

export default function NftMintingBotPage() {
  const [currentModule, setCurrentModule] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getProgress(TUTORIAL_ID));
  }, []);

  const handleToggle = (moduleId: string) => {
    setCompleted(toggleModuleComplete(TUTORIAL_ID, moduleId));
  };

  const sidebarModules = nftBotModules.map((m) => ({
    id: m.id,
    title: m.title,
    completed: completed.includes(m.id),
  }));

  const currentMod = nftBotModules[currentModule];
  const codeExample = nftBotCode.find((c) => c.moduleId === currentMod.id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🎨 NFT Minting Bot Tutorial</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Automate NFT minting with Solidity smart contracts and Web3.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Sidebar
              modules={sidebarModules}
              currentModule={currentModule}
              onModuleSelect={setCurrentModule}
              tutorialTitle="NFT Minting Bot"
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <ProgressTracker
              totalModules={nftBotModules.length}
              completedModules={completed.length}
              tutorialId={TUTORIAL_ID}
            />

            {nftBotModules.map((mod) => (
              <ModuleStep
                key={mod.id}
                moduleNumber={mod.number}
                title={mod.title}
                description={mod.description}
                objectives={mod.objectives}
                completed={completed.includes(mod.id)}
                onToggleComplete={() => handleToggle(mod.id)}
              />
            ))}

            {codeExample && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{codeExample.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{codeExample.description}</p>
                <CodeSnippet
                  code={codeExample.code}
                  language={codeExample.language}
                  filename={`${codeExample.id}.sol`}
                />
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setCurrentModule((m) => Math.max(0, m - 1))}
                disabled={currentModule === 0}
                className="px-5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentModule((m) => Math.min(nftBotModules.length - 1, m + 1))}
                disabled={currentModule === nftBotModules.length - 1}
                className="px-5 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold disabled:opacity-40 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
