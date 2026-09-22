import { useState, useEffect } from 'react';
import { ArrowUp, Search, Layers } from 'lucide-react';
import { ThemeMode } from '../types';

interface ScrollProgressIndicatorProps {
  currentTheme: ThemeMode;
  onOpenSearch: () => void;
}

export default function ScrollProgressIndicator({ currentTheme, onOpenSearch }: ScrollProgressIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Overview');
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowFloatingBar(totalScroll > 250);

      // Determine active section
      const sections = [
        { id: 'hero-section', name: 'Overview' },
        { id: 'about', name: 'Philosophy' },
        { id: 'education', name: 'Education' },
        { id: 'experience', name: 'Internships' },
        { id: 'mun', name: 'Model UN' },
        { id: 'skills', name: 'Skills' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Fixed Reading Progress Line */}
      <div
        id="scroll-progress-track"
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-transparent"
      >
        <div
          id="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          className={`h-full transition-all duration-150 ${
            currentTheme === 'obsidian'
              ? 'bg-blue-500 shadow-sm shadow-blue-500/50'
              : currentTheme === 'emerald'
              ? 'bg-[#1b4332]'
              : 'bg-slate-900'
          }`}
        />
      </div>

      {/* Floating Interactive Quick Bar (Bottom Right) */}
      {showFloatingBar && (
        <div
          id="floating-navigation-bar"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div
            className={`flex items-center gap-1.5 p-1.5 rounded-full border shadow-lg backdrop-blur-md text-xs ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/90 border-slate-700 text-slate-200'
                : currentTheme === 'emerald'
                ? 'bg-[#faf8f4]/95 border-[#ded7cb] text-[#1c241e]'
                : 'bg-white/95 border-slate-200 text-slate-800'
            }`}
          >
            {/* Active section badge */}
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 font-semibold text-[11px] uppercase tracking-wider opacity-75">
              <Layers className="w-3 h-3" />
              {activeSection}
            </span>

            {/* Quick Search Button */}
            <button
              id="floating-search-btn"
              type="button"
              onClick={onOpenSearch}
              title="Spotlight Search (Ctrl+K)"
              className={`p-2 rounded-full transition-colors flex items-center gap-1 ${
                currentTheme === 'obsidian'
                  ? 'hover:bg-slate-800 text-slate-300'
                  : currentTheme === 'emerald'
                  ? 'hover:bg-[#eee8dc] text-[#1c241e]'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px] font-mono">⌘K</span>
            </button>

            {/* Back To Top Button */}
            <button
              id="floating-scroll-top-btn"
              type="button"
              onClick={scrollToTop}
              title="Back to Top"
              className={`p-2 rounded-full transition-all flex items-center justify-center ${
                currentTheme === 'obsidian'
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : currentTheme === 'emerald'
                  ? 'bg-[#1b4332] text-white hover:bg-[#143427]'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
