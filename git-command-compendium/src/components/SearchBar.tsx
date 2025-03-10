
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  
  return (
    <div 
      className={`max-w-2xl w-full mx-auto mb-12 relative transition-all duration-300 ease-in-out ${
        isFocused ? 'scale-[1.02]' : 'scale-100'
      }`}
    >
      <div className={`
        flex items-center relative rounded-full overflow-hidden
        shadow-sm transition-shadow duration-300
        ${isFocused ? 'shadow-lg ring-2 ring-primary/20' : ''}
        bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
      `}>
        <Search 
          size={20} 
          className="absolute left-4 text-muted-foreground" 
        />
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for any Git command... (⌘K)"
          className="w-full py-4 pl-12 pr-4 bg-transparent focus:outline-none text-foreground"
          aria-label="Search for Git commands"
        />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
        {isFocused && (
          <span className="animate-fade-in">⌘K</span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
