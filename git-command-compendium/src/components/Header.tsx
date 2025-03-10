
import React from 'react';
import { GitBranch } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 md:px-8 mb-8 flex flex-col items-center text-center animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <GitBranch size={36} className="text-primary mr-2" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Git <span className="gradient-text">Command</span> Compendium
        </h1>
      </div>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        A comprehensive collection of Git commands for easy reference, beautifully organized and searchable.
      </p>
    </header>
  );
};

export default Header;
