
import React, { useRef, useEffect } from 'react';
import { CommandCategory as CategoryType } from '../data/gitCommands';
import CommandItem from './CommandItem';

interface CommandCategoryProps {
  category: CategoryType;
  searchTerm: string;
}

const CommandCategory: React.FC<CommandCategoryProps> = ({ category, searchTerm }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasVisibleCommands = category.commands.some(cmd => 
    cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Animation when the category comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  if (!hasVisibleCommands && searchTerm !== '') {
    return null;
  }
  
  return (
    <section 
      id={category.id} 
      ref={sectionRef}
      className="mb-16 opacity-0 translate-y-4 transition-all duration-500"
    >
      <div className="mb-6 sticky top-0 z-10 py-4 bg-background/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold">{category.title}</h2>
        <p className="text-muted-foreground">{category.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.commands.map((cmd, idx) => {
          const matchesSearch = 
            cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || 
            cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
          
          if (searchTerm && !matchesSearch) return null;
          
          return (
            <div 
              key={`${category.id}-${idx}`} 
              className="transition-all duration-300 ease-in-out"
              style={{ 
                animationDelay: `${(idx % 10) * 50}ms`,
                opacity: searchTerm ? 1 : undefined
              }}
            >
              <CommandItem command={cmd} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommandCategory;
