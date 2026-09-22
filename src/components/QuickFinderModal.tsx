import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Briefcase, Globe2, Zap, GraduationCap, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { ProfileData, EducationItem, ExperienceItem, MUNItem, SkillGroup, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface QuickFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeMode;
  profile: ProfileData;
  education: EducationItem[];
  experiences: ExperienceItem[];
  munItems: MUNItem[];
  skillGroups: SkillGroup[];
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Experience' | 'Model UN' | 'Skills' | 'Education' | 'Contact';
  anchorId: string;
  tags?: string[];
}

export default function QuickFinderModal({
  isOpen,
  onClose,
  currentTheme,
  profile,
  education,
  experiences,
  munItems,
  skillGroups,
}: QuickFinderModalProps) {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Experience' | 'Model UN' | 'Skills' | 'Education'>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  // Build searchable index
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // Experiences
    experiences.forEach((exp) => {
      items.push({
        id: `exp-${exp.id}`,
        title: `${exp.title} — ${exp.organization}`,
        subtitle: `${exp.type} (${exp.period}) • ${exp.impactArea}`,
        category: 'Experience',
        anchorId: `exp-card-${exp.id}`,
        tags: exp.tags,
      });
    });

    // Model UN
    munItems.forEach((mun) => {
      items.push({
        id: `mun-${mun.id}`,
        title: `${mun.role} · ${mun.conference}`,
        subtitle: `${mun.year} • ${mun.category.replace('-', ' ')}${mun.committee ? ` • ${mun.committee}` : ''}`,
        category: 'Model UN',
        anchorId: `mun-card-${mun.id}`,
        tags: [mun.category, mun.year, mun.role],
      });
    });

    // Skills
    skillGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        items.push({
          id: `skill-${skill.name}`,
          title: skill.name,
          subtitle: `${group.category} (${skill.level}) — ${skill.context}`,
          category: 'Skills',
          anchorId: 'skills',
          tags: [group.category, skill.level],
        });
      });
    });

    // Education
    education.forEach((edu) => {
      items.push({
        id: `edu-${edu.id}`,
        title: `${edu.course} (${edu.percentage}%)`,
        subtitle: `${edu.institute} • Year: ${edu.year}`,
        category: 'Education',
        anchorId: `edu-card-${edu.id}`,
        tags: edu.keySubjects,
      });
    });

    return items;
  }, [experiences, munItems, skillGroups, education]);

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedFilter('All');
    }
  }, [isOpen]);

  // Filtered results
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return searchIndex.filter((item) => {
      if (selectedFilter !== 'All' && item.category !== selectedFilter) {
        return false;
      }
      if (!q) return true;
      const titleMatch = item.title.toLowerCase().includes(q);
      const subMatch = item.subtitle.toLowerCase().includes(q);
      const tagMatch = item.tags?.some((t) => t.toLowerCase().includes(q));
      return titleMatch || subMatch || tagMatch;
    });
  }, [searchIndex, query, selectedFilter]);

  const handleSelectItem = (anchorId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-blue-500', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-blue-500');
        }, 2200);
      }
    }, 100);
  };

  if (!isOpen) return null;

  const theme = themes[currentTheme];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Experience':
        return Briefcase;
      case 'Model UN':
        return Globe2;
      case 'Skills':
        return Zap;
      case 'Education':
        return GraduationCap;
      default:
        return Sparkles;
    }
  };

  return (
    <div
      id="quick-finder-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        id="quick-finder-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Interactive Spotlight Search"
        className={`w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[80vh] ${
          currentTheme === 'obsidian'
            ? 'bg-[#0f172a] border-slate-700 text-slate-100'
            : currentTheme === 'emerald'
            ? 'bg-[#faf8f4] border-[#dcd4c6] text-[#1c241e]'
            : currentTheme === 'burgundy'
            ? 'bg-[#FAF7F2] border-[#E5DAD0] text-[#3D332A]'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className={`p-4 border-b flex items-center gap-3 ${
          currentTheme === 'burgundy' ? 'border-[#EADCD4]' : ''
        }`}>
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            id="quick-finder-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, Bennett internships, Model UN, board marks..."
            className="w-full bg-transparent text-sm sm:text-base focus:outline-none placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className={`hidden sm:inline-flex px-2 py-0.5 rounded border text-[11px] font-mono text-slate-400 ${
              currentTheme === 'burgundy' ? 'border-[#EADCD4]' : 'border-slate-300 dark:border-slate-700'
            }`}
          >
            ESC
          </button>
        </div>

        {/* Filter Categories Pill Bar */}
        <div className={`px-4 py-2.5 border-b flex items-center gap-2 overflow-x-auto text-xs ${
          currentTheme === 'burgundy' ? 'border-[#EADCD4]' : ''
        }`}>
          {(['All', 'Skills', 'Experience', 'Model UN', 'Education'] as const).map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                id={`finder-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? currentTheme === 'obsidian'
                      ? 'bg-blue-600 text-white'
                      : currentTheme === 'emerald'
                      ? 'bg-[#1b4332] text-white'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#6B1D2F] text-white shadow-xs'
                      : 'bg-slate-900 text-white'
                    : currentTheme === 'burgundy'
                    ? 'bg-[#F2EAE4] text-[#5C524A] hover:bg-[#EAE1D9]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
          <span className="ml-auto text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap">
            {filteredResults.length} matching {filteredResults.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-2 sm:p-3 space-y-1.5 divide-y divide-transparent">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <div className="font-semibold text-sm">No matching entries found</div>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "Research", "UNHRC", "Chemistry", "Secretariat", or "Public Speaking"
              </p>
            </div>
          ) : (
            filteredResults.map((item) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectItem(item.anchorId)}
                  className={`w-full text-left p-3 rounded-xl border border-transparent transition-all flex items-start justify-between gap-3 group ${
                    currentTheme === 'obsidian'
                      ? 'hover:bg-slate-800/80 hover:border-slate-700'
                      : currentTheme === 'emerald'
                      ? 'hover:bg-[#f3ede1] hover:border-[#dfd6c6]'
                      : currentTheme === 'burgundy'
                      ? 'hover:bg-[#F2EAE4] hover:border-[#E5DAD0]'
                      : 'hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        currentTheme === 'obsidian'
                          ? 'bg-slate-800 text-blue-400'
                          : currentTheme === 'emerald'
                          ? 'bg-[#e5eee7] text-[#1b4332]'
                          : currentTheme === 'burgundy'
                          ? 'bg-[#F7EFEA] text-[#6B1D2F]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-sm group-hover:underline">
                          {item.title}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            item.category === 'Experience'
                              ? currentTheme === 'burgundy'
                                ? 'bg-[#F7EFEA] text-[#6B1D2F]'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                              : item.category === 'Model UN'
                              ? currentTheme === 'burgundy'
                                ? 'bg-[#F8EFEA] text-[#8F263E]'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : item.category === 'Skills'
                              ? currentTheme === 'burgundy'
                                ? 'bg-[#F2EAE4] text-[#4A423B]'
                                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : currentTheme === 'burgundy'
                              ? 'bg-[#F7EFEA] text-[#6B1D2F]'
                              : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 self-center">
                    <span>Jump</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Modal Footer Key Hints */}
        <div className="p-3 border-t bg-black/5 dark:bg-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">ESC</kbd> to close
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">Click</kbd> to jump & highlight
            </span>
          </div>
          <span className="font-mono text-[10px]">Instant Portfolio Spotlight</span>
        </div>
      </div>
    </div>
  );
}
