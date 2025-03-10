
import React, { useState, useEffect } from 'react';
import { gitCommandData } from '../data/gitCommands';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CommandCategory from '../components/CommandCategory';
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsSearching(term.length > 0);
    
    // If there's a search term, scroll to the first matching result
    if (term.length > 0) {
      setTimeout(() => {
        const firstVisibleCategory = document.querySelector('.opacity-100');
        if (firstVisibleCategory) {
          firstVisibleCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-10">
        <Header />
        <SearchBar onSearch={handleSearch} />
        
        {isSearching && (
          <div className="mb-8 animate-fade-in">
            <p className="text-center text-lg">
              Showing results for <span className="font-semibold">{searchTerm}</span>
            </p>
          </div>
        )}
        
        <div className="space-y-16">
          {gitCommandData.map((category) => (
            <CommandCategory 
              key={category.id} 
              category={category} 
              searchTerm={searchTerm}
            />
          ))}
        </div>
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
            showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      <footer className="py-8 text-center border-t">
        <p className="text-muted-foreground text-sm">
          Git Command Compendium — A comprehensive reference for Git commands
        </p>
      </footer>
    </div>
  );
};

export default Index;
