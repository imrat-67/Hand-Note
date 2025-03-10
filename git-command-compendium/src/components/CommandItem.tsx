
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { GitCommand } from '../data/gitCommands';

interface CommandItemProps {
  command: GitCommand;
}

const CommandItem: React.FC<CommandItemProps> = ({ command }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(command.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="group p-4 rounded-lg border border-gray-200 hover:border-primary/30 bg-white hover:bg-blue-50/30 dark:bg-gray-900 dark:hover:bg-blue-950/10 dark:border-gray-800 transition-all duration-300 shadow-sm hover:shadow">
      <div className="flex justify-between items-start gap-2 mb-2">
        <code className="text-sm md:text-base font-mono bg-transparent border-0 p-0">
          {command.command}
        </code>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded p-1 -mt-1 -mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Copy command"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{command.description}</p>
    </div>
  );
};

export default CommandItem;
