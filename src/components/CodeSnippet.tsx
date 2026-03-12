'use client';
import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeSnippetProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeSnippet({ code, language, filename }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {filename && <span className="text-sm text-gray-300">{filename}</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 px-2 py-0.5 bg-gray-700 rounded">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            {copied ? <FiCheck className="w-4 h-4 text-green-400" /> : <FiCopy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code */}
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
