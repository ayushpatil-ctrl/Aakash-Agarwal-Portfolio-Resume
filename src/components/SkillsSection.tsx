import { useState, useMemo } from 'react';
import { Zap, Shield, Cpu, MessageSquare, Briefcase, Search, X, CheckCircle2, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { SkillGroup, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  currentTheme: ThemeMode;
}

export default function SkillsSection({ skillGroups, currentTheme }: SkillsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    context: string;
    category: string;
  } | null>(null);

  const theme = themes[currentTheme];

  const getGroupIcon = (index: number) => {
    switch (index) {
      case 0:
        return Shield;
      case 1:
        return MessageSquare;
      case 2:
        return Cpu;
      default:
        return Briefcase;
    }
  };

  // Filter skills based on search query and category
  const filteredGroups = useMemo(() => {
    return skillGroups
      .filter((group) => {
        if (activeCategory === 'all') return true;
        return group.category === activeCategory;
      })
      .map((group) => {
        if (!searchQuery.trim()) return group;
        const q = searchQuery.toLowerCase();
        const matchedSkills = group.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.context.toLowerCase().includes(q) ||
            s.level.toLowerCase().includes(q)
        );
        return {
          ...group,
          skills: matchedSkills,
        };
      })
      .filter((group) => group.skills.length > 0);
  }, [skillGroups, activeCategory, searchQuery]);

  const totalFilteredSkills = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.skills.length, 0);
  }, [filteredGroups]);

  const handleJumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 2000);
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${theme.badgeBg}`}
            >
              <Zap className="w-3.5 h-3.5" />
              Interactive Skillset Explorer
            </span>
          </div>
          <h2
            id="skills-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Key Skills & Practical Context
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              currentTheme === 'obsidian'
                ? 'text-slate-400'
                : currentTheme === 'emerald'
                ? 'text-[#48574c]'
                : currentTheme === 'burgundy'
                ? 'text-[#5C524A]'
                : 'text-slate-600'
            }`}
          >
            An interactive matrix integrating scientific analysis with executive leadership, diplomatic negotiation, and mass media communication. Click any skill to inspect practical applications.
          </p>
        </div>

        {/* Interactive Controls Bar: Search & Category Filter */}
        <div
          id="skills-interactive-controls"
          className={`p-4 rounded-2xl border mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all ${
            currentTheme === 'obsidian'
              ? 'bg-slate-900/90 border-slate-800'
              : currentTheme === 'emerald'
              ? 'bg-[#faf7f2] border-[#e4ddd0]'
              : currentTheme === 'burgundy'
              ? 'bg-white border-[#E7E0D6] shadow-2xs'
              : 'bg-white border-slate-200 shadow-2xs'
          }`}
        >
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., Leadership, Chemistry, Media, Python, Event)..."
              className={`w-full pl-10 pr-9 py-2 rounded-xl text-sm border bg-transparent focus:outline-none transition-all placeholder:text-slate-400 ${
                currentTheme === 'burgundy'
                  ? 'border-[#E7E0D6] focus:ring-2 focus:ring-[#6B1D2F]'
                  : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
            <button
              id="skill-filter-all"
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeCategory === 'all'
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
              All Skills ({skillGroups.reduce((a, b) => a + b.skills.length, 0)})
            </button>

            {skillGroups.map((group) => {
              const isActive = activeCategory === group.category;
              return (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveCategory(group.category)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
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
                  {group.category.split('&')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Skill Inspector Drawer / Card (Appears upon clicking any skill) */}
        {selectedSkill && (
          <div
            id="skill-inspector-card"
            className={`p-5 sm:p-6 rounded-2xl border mb-8 animate-in fade-in slide-in-from-top-2 duration-200 ${
              currentTheme === 'obsidian'
                ? 'bg-blue-950/40 border-blue-800/80 text-slate-100'
                : currentTheme === 'emerald'
                ? 'bg-[#f1f7f2] border-[#b9dbbe] text-[#14321e]'
                : currentTheme === 'burgundy'
                ? 'bg-[#F7EFEA] border-[#EADCD4] text-[#4A423B]'
                : 'bg-blue-50/80 border-blue-300 text-blue-950'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0 mt-0.5 ${
                  currentTheme === 'burgundy' ? 'bg-[#6B1D2F]' : 'bg-blue-600'
                }`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                      Selected Skill Focus
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold bg-white/70 dark:bg-slate-900/80 border">
                      {selectedSkill.level}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-black/5 dark:bg-white/10">
                      {selectedSkill.category}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mt-2 font-medium">
                    {selectedSkill.context}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="Close Inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions for Selected Skill */}
            <div className={`mt-4 pt-3 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
              currentTheme === 'burgundy' ? 'border-[#EADCD4]' : 'border-blue-200 dark:border-blue-900/60'
            }`}>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified across research fellowships, board honors, and MUN secretariats.</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleJumpToSection('experience')}
                  className={`inline-flex items-center gap-1 font-semibold hover:underline ${
                    currentTheme === 'burgundy'
                      ? 'text-[#6B1D2F]'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  View Related Internships <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="opacity-40">•</span>
                <button
                  type="button"
                  onClick={() => handleJumpToSection('mun')}
                  className={`inline-flex items-center gap-1 font-semibold hover:underline ${
                    currentTheme === 'burgundy'
                      ? 'text-[#6B1D2F]'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  View Model UN Record <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-4 text-xs font-medium text-slate-500 flex items-center justify-between">
            <span>
              Showing {totalFilteredSkills} matching skills for "{searchQuery}"
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Skill Category Grid */}
        {filteredGroups.length === 0 ? (
          <div className="py-16 text-center text-slate-500 rounded-2xl border border-dashed p-8">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <div className="font-semibold text-base">No matching skills found</div>
            <p className="text-xs text-slate-400 mt-1">
              Try searching with broader terms like "Leadership", "Chemistry", or "Event"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGroups.map((group, groupIdx) => {
              const GroupIcon = getGroupIcon(groupIdx);

              return (
                <div
                  key={group.category}
                  id={`skill-group-${groupIdx}`}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all ${
                    currentTheme === 'obsidian'
                      ? 'bg-slate-900/80 border-slate-800'
                      : currentTheme === 'emerald'
                      ? 'bg-white border-[#e6e0d5]'
                      : currentTheme === 'burgundy'
                      ? 'bg-white border-[#E7E0D6] shadow-2xs'
                      : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Group Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                          currentTheme === 'obsidian'
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : currentTheme === 'emerald'
                            ? 'bg-[#eaf3ec] text-[#1b4332] border border-[#cfe0d2]'
                            : currentTheme === 'burgundy'
                            ? 'bg-[#F7EFEA] text-[#6B1D2F] border border-[#EADCD4]'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-display text-xl font-bold">
                        {group.category}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Interactive Skills List */}
                    <div className="space-y-3">
                      {group.skills.map((skill) => {
                        const isSelected = selectedSkill?.name === skill.name;
                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onClick={() =>
                              setSelectedSkill(
                                isSelected
                                  ? null
                                  : {
                                      name: skill.name,
                                      level: skill.level,
                                      context: skill.context,
                                      category: group.category,
                                    }
                              )
                            }
                            className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${
                              isSelected
                                ? currentTheme === 'obsidian'
                                  ? 'bg-blue-900/40 border-blue-500 ring-2 ring-blue-500/30'
                                  : currentTheme === 'emerald'
                                  ? 'bg-[#eef5ef] border-[#1b4332] ring-2 ring-[#1b4332]/20'
                                  : currentTheme === 'burgundy'
                                  ? 'bg-[#F7EFEA] border-[#6B1D2F] ring-2 ring-[#6B1D2F]/20'
                                  : 'bg-blue-50/90 border-blue-600 ring-2 ring-blue-600/20'
                                : currentTheme === 'obsidian'
                                ? 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                                : currentTheme === 'emerald'
                                ? 'bg-[#fbf9f5] border-[#eae3d5] hover:bg-[#f6f2e8] hover:border-[#dfd6c6]'
                                : currentTheme === 'burgundy'
                                ? 'bg-[#FAF7F2] border-[#E8E1D7] hover:bg-[#F2EAE4] hover:border-[#D5C9BE]'
                                : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1 w-full">
                              <span className={`font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2 transition-colors ${
                                currentTheme === 'burgundy' ? 'group-hover:text-[#6B1D2F]' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                              }`}>
                                <span
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    isSelected
                                      ? currentTheme === 'burgundy'
                                        ? 'bg-[#6B1D2F] scale-125'
                                        : 'bg-blue-600 scale-125'
                                      : currentTheme === 'burgundy'
                                      ? 'bg-slate-400 group-hover:bg-[#6B1D2F]'
                                      : 'bg-slate-400 group-hover:bg-blue-600'
                                  }`}
                                />
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                                    skill.level.includes('99') || skill.level.includes('96')
                                      ? currentTheme === 'burgundy'
                                        ? 'bg-[#F7EFEA] border-[#EADCD4] text-[#6B1D2F] font-bold'
                                        : 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                                      : currentTheme === 'obsidian'
                                      ? 'bg-slate-700 border-slate-600 text-slate-300'
                                      : currentTheme === 'burgundy'
                                      ? 'bg-white border-[#EADCD4] text-[#5C524A]'
                                      : 'bg-white border-slate-200 text-slate-700'
                                  }`}
                                >
                                  {skill.level}
                                </span>
                                <span className={`text-[10px] text-slate-400 ${
                                  currentTheme === 'burgundy' ? 'group-hover:text-[#6B1D2F]' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                }`}>
                                  {isSelected ? 'Selected' : 'Inspect'}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pl-4 leading-relaxed">
                              {skill.context}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sub-card footer */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] text-slate-400">
                    <span>Click any skill to inspect context</span>
                    <span>{group.skills.length} competencies</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

