import { useState, useMemo } from 'react';
import { Globe2, Shield, Users, Landmark, Calendar, Search, X, LayoutGrid, GitCommit, ChevronDown, ChevronUp, Sparkles, Filter } from 'lucide-react';
import { MUNItem, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface MUNVitaeSectionProps {
  munItems: MUNItem[];
  currentTheme: ThemeMode;
}

export default function MUNVitaeSection({ munItems, currentTheme }: MUNVitaeSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'secretariat' | 'executive-board' | 'teamwork' | 'delegate'>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const theme = themes[currentTheme];

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(munItems.map((item) => item.year)));
    return years.sort((a, b) => parseInt(b) - parseInt(a));
  }, [munItems]);

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = useMemo(() => {
    return munItems.filter((item) => {
      // Category filter
      if (activeFilter !== 'all' && item.category !== activeFilter) return false;
      // Year filter
      if (selectedYear !== 'all' && item.year !== selectedYear) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = item.title.toLowerCase().includes(q);
        const confMatch = item.conference.toLowerCase().includes(q);
        const roleMatch = item.role.toLowerCase().includes(q);
        const descMatch = item.description?.toLowerCase().includes(q);
        const commMatch = item.committee?.toLowerCase().includes(q);
        return titleMatch || confMatch || roleMatch || descMatch || commMatch;
      }
      return true;
    });
  }, [munItems, activeFilter, selectedYear, searchQuery]);

  const filterTabs = [
    { id: 'all', label: 'All Roles', count: munItems.length },
    { id: 'secretariat', label: 'Secretariat Leadership', count: munItems.filter((i) => i.category === 'secretariat').length },
    { id: 'executive-board', label: 'Executive Board', count: munItems.filter((i) => i.category === 'executive-board').length },
    { id: 'teamwork', label: 'Finance & Operations', count: munItems.filter((i) => i.category === 'teamwork').length },
    { id: 'delegate', label: 'Delegate Delegations', count: munItems.filter((i) => i.category === 'delegate').length },
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'secretariat':
        return {
          label: 'Secretariat Executive',
          bg: currentTheme === 'obsidian'
            ? 'bg-amber-950/60 border-amber-800 text-amber-300'
            : currentTheme === 'burgundy'
            ? 'bg-[#F7EFEA] border-[#EADCD4] text-[#6B1D2F]'
            : 'bg-amber-50 border-amber-200 text-amber-900',
          icon: Shield,
        };
      case 'executive-board':
        return {
          label: 'Executive Board (UNHRC)',
          bg: currentTheme === 'obsidian'
            ? 'bg-purple-950/60 border-purple-800 text-purple-300'
            : currentTheme === 'burgundy'
            ? 'bg-[#F8EFEA] border-[#EADCD4] text-[#8F263E]'
            : 'bg-purple-50 border-purple-200 text-purple-900',
          icon: Landmark,
        };
      case 'teamwork':
        return {
          label: 'Operations & Finance',
          bg: currentTheme === 'obsidian'
            ? 'bg-blue-950/60 border-blue-800 text-blue-300'
            : currentTheme === 'burgundy'
            ? 'bg-[#FAF7F2] border-[#E7E0D6] text-[#5C524A]'
            : 'bg-blue-50 border-blue-200 text-blue-900',
          icon: Users,
        };
      default:
        return {
          label: 'Parliamentary Delegate',
          bg: currentTheme === 'obsidian'
            ? 'bg-slate-800 border-slate-700 text-slate-300'
            : currentTheme === 'burgundy'
            ? 'bg-[#FAF7F2] border-[#E7E0D6] text-[#5C524A]'
            : 'bg-slate-100 border-slate-200 text-slate-700',
          icon: Globe2,
        };
    }
  };

  return (
    <section
      id="mun"
      className="py-16 md:py-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${theme.badgeBg}`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              Diplomacy, Governance & Operations
            </span>
          </div>
          <h2
            id="mun-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Model UN & Leadership Vitae
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
            A 6-year leadership progression across 13 conferences. Filter by category, year, or switch into the interactive chronological timeline.
          </p>
        </div>

        {/* Interactive Stats Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/60 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e5dfd4]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className={`text-xl font-bold font-serif-display ${currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : ''}`}>13</div>
            <div className="text-xs text-slate-500 font-medium">Total Summits & MUNs</div>
          </div>
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/60 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e5dfd4]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className={`text-xl font-bold font-serif-display ${currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : ''}`}>3</div>
            <div className="text-xs text-slate-500 font-medium">Secretariat Executive Posts</div>
          </div>
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/60 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e5dfd4]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className={`text-xl font-bold font-serif-display ${currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : ''}`}>6 Years</div>
            <div className="text-xs text-slate-500 font-medium">Diplomatic Trajectory</div>
          </div>
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/60 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e5dfd4]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className={`text-xl font-bold font-serif-display ${currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : ''}`}>UNHRC</div>
            <div className="text-xs text-slate-500 font-medium">Executive Board Adjudication</div>
          </div>
        </div>

        {/* Interactive Filter & View Controls */}
        <div
          id="mun-controls-container"
          className={`p-4 rounded-2xl border mb-6 flex flex-col gap-4 transition-all ${
            currentTheme === 'obsidian'
              ? 'bg-slate-900/90 border-slate-800'
              : currentTheme === 'emerald'
              ? 'bg-[#faf7f2] border-[#e4ddd0]'
              : currentTheme === 'burgundy'
              ? 'bg-white border-[#E7E0D6] shadow-2xs'
              : 'bg-white border-slate-200 shadow-2xs'
          }`}
        >
          {/* Top Row: Search & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="mun-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search summits (e.g., JMUNC, UNHRC, TEDx, Rapporteur, Finance)..."
                className={`w-full pl-10 pr-9 py-2 rounded-xl text-sm border bg-transparent focus:outline-none placeholder:text-slate-400 ${
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

            {/* View Mode Toggle: Grid vs Timeline */}
            <div
              id="mun-view-mode-toggle"
              className={`flex items-center p-1 rounded-xl border text-xs self-start sm:self-auto ${
                currentTheme === 'burgundy'
                  ? 'bg-[#FAF7F2] border-[#E7E0D6]'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? currentTheme === 'obsidian'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : currentTheme === 'emerald'
                      ? 'bg-[#1b4332] text-white shadow-xs'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#6B1D2F] text-white shadow-xs'
                      : 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Card Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'timeline'
                    ? currentTheme === 'obsidian'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : currentTheme === 'emerald'
                      ? 'bg-[#1b4332] text-white shadow-xs'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#6B1D2F] text-white shadow-xs'
                      : 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <GitCommit className="w-3.5 h-3.5" />
                <span>Timeline View</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Tabs & Year Selector */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-800">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`filter-tab-${tab.id}`}
                    type="button"
                    onClick={() => setActiveFilter(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
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
                    <span>{tab.label}</span>
                    <span className="text-[10px] opacity-75 font-mono">({tab.count})</span>
                  </button>
                );
              })}
            </div>

            {/* Year Selector Pills */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-full text-xs self-start lg:self-auto">
              <span className="text-[11px] font-semibold text-slate-400 mr-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Year:
              </span>
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${
                  selectedYear === 'all'
                    ? currentTheme === 'burgundy'
                      ? 'bg-[#6B1D2F] text-white font-semibold'
                      : 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                All
              </button>
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-2 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    selectedYear === yr
                      ? currentTheme === 'burgundy'
                        ? 'bg-[#6B1D2F] text-white font-semibold'
                        : 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter if filtering */}
        {(searchQuery || selectedYear !== 'all' || activeFilter !== 'all') && (
          <div className="mb-4 text-xs font-medium text-slate-500 flex items-center justify-between">
            <span>
              Showing {filteredItems.length} matching conference {filteredItems.length === 1 ? 'entry' : 'entries'}
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
                setActiveFilter('all');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* View Mode: Card Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;
              const isExpanded = expandedCards[item.id];

              return (
                <div
                  key={item.id}
                  id={`mun-card-${item.id}`}
                  className={`p-5 rounded-xl border flex flex-col justify-between transition-all hover:-translate-y-0.5 ${
                    currentTheme === 'obsidian'
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      : currentTheme === 'emerald'
                      ? 'bg-white border-[#e6e0d5] hover:border-[#cfc6b8]'
                      : currentTheme === 'burgundy'
                      ? 'bg-white border-[#E7E0D6] hover:border-[#D5C9BE] shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Top Row: Year & Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold border ${badge.bg}`}
                      >
                        <BadgeIcon className="w-3 h-3 shrink-0" />
                        {badge.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {item.year}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-serif-display text-xl font-bold mb-1">
                      {item.role}
                    </h3>

                    {/* Conference / Event Name */}
                    <div className={`text-sm font-semibold mb-2 ${
                      currentTheme === 'burgundy'
                        ? 'text-[#6B1D2F]'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {item.conference}
                    </div>

                    {/* Committee if present */}
                    {item.committee && (
                      <div className={`text-xs font-medium mb-2 p-2 rounded border ${
                        currentTheme === 'burgundy'
                          ? 'bg-[#FAF7F2] border-[#E7E0D6] text-[#4A423B]'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        Committee: <span className="font-semibold">{item.committee}</span>
                      </div>
                    )}

                    {/* Description with Expand/Collapse toggle */}
                    {item.description && (
                      <div className="mt-2">
                        <p
                          className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                            !isExpanded && item.description.length > 120 ? 'line-clamp-2' : ''
                          }`}
                        >
                          {item.description}
                        </p>
                        {item.description.length > 120 && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className={`mt-1 text-[11px] font-semibold flex items-center gap-1 hover:underline ${
                              currentTheme === 'burgundy'
                                ? 'text-[#6B1D2F]'
                                : 'text-blue-600 dark:text-blue-400'
                            }`}
                          >
                            {isExpanded ? (
                              <>
                                Show Less <ChevronUp className="w-3 h-3" />
                              </>
                            ) : (
                              <>
                                Read Full Scope <ChevronDown className="w-3 h-3" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Tag */}
                  <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px] text-slate-400">
                    <span className="capitalize">{item.category.replace('-', ' ')}</span>
                    <span className="font-mono">{item.year} Summit</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode: Chronological Timeline View */}
        {viewMode === 'timeline' && (
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {filteredItems.map((item) => {
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;

              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Indicator Dot */}
                  <div
                    className={`absolute -left-6 sm:-left-10 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                      currentTheme === 'burgundy'
                        ? 'bg-[#6B1D2F] border-white text-white'
                        : item.category === 'secretariat'
                        ? 'bg-amber-500 border-white text-white'
                        : item.category === 'executive-board'
                        ? 'bg-purple-600 border-white text-white'
                        : item.category === 'teamwork'
                        ? 'bg-blue-600 border-white text-white'
                        : 'bg-slate-700 border-white text-white'
                    }`}
                  >
                    <span className="text-[10px] font-bold">{item.year.slice(2)}</span>
                  </div>

                  {/* Timeline Card Content */}
                  <div
                    id={`mun-timeline-${item.id}`}
                    className={`p-5 rounded-xl border transition-all ${
                      currentTheme === 'obsidian'
                        ? 'bg-slate-900/80 border-slate-800'
                        : currentTheme === 'emerald'
                        ? 'bg-white border-[#e6e0d5]'
                        : currentTheme === 'burgundy'
                        ? 'bg-white border-[#E7E0D6] shadow-2xs'
                        : 'bg-white border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${badge.bg}`}
                        >
                          <BadgeIcon className="w-3 h-3" />
                          {badge.label}
                        </span>
                        <span className={`text-sm font-semibold ${
                          currentTheme === 'burgundy'
                            ? 'text-[#6B1D2F]'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {item.conference}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-lg sm:text-xl font-bold">
                      {item.role}
                    </h3>

                    {item.committee && (
                      <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                        Committee: <span className="font-semibold">{item.committee}</span>
                      </div>
                    )}

                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-slate-500 rounded-2xl border border-dashed p-8">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <div className="font-semibold text-base">No matching Model UN entries found</div>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting the category or year filter above
            </p>
          </div>
        )}

        {/* Leadership Progression Timeline Snapshot */}
        <div
          id="leadership-timeline-banner"
          className={`mt-12 p-6 rounded-2xl border ${
            currentTheme === 'obsidian'
              ? 'bg-slate-900/60 border-slate-800'
              : currentTheme === 'emerald'
              ? 'bg-[#faf8f4] border-[#e2ddd3]'
              : currentTheme === 'burgundy'
              ? 'bg-[#F7EFEA] border-[#EADCD4]'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <h4 className="font-serif-display font-bold text-lg mb-2">
            Leadership Arc & Operational Scope
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mb-4">
            From learning consensus building as an inaugural delegate in JMUNC 2019 to commanding executive delegate affairs (JMUNC '24), managing hundreds of thousands in registration & vendor budgeting as Convenor Treasurer (JMUNC '25), and guiding subsequent secretariats as Senior Advisor.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <button
              type="button"
              onClick={() => {
                setSelectedYear('2019');
                setViewMode('timeline');
              }}
              className={`p-3 rounded-lg border transition-colors cursor-pointer text-left sm:text-center ${
                currentTheme === 'burgundy'
                  ? 'bg-white border-[#EADCD4] hover:border-[#6B1D2F]'
                  : 'bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-500'
              }`}
            >
              <div className="font-serif-display font-bold text-lg text-slate-900 dark:text-white">2019-2022</div>
              <div className="text-[11px] text-slate-500">Delegate Foundation</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedYear('2023');
                setViewMode('timeline');
              }}
              className={`p-3 rounded-lg border transition-colors cursor-pointer text-left sm:text-center ${
                currentTheme === 'burgundy'
                  ? 'bg-white border-[#EADCD4] hover:border-[#6B1D2F]'
                  : 'bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-500'
              }`}
            >
              <div className="font-serif-display font-bold text-lg text-slate-900 dark:text-white">2022-2023</div>
              <div className="text-[11px] text-slate-500">Finance & Marketing Ops</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedYear('2024');
                setViewMode('timeline');
              }}
              className={`p-3 rounded-lg border transition-colors cursor-pointer text-left sm:text-center ${
                currentTheme === 'burgundy'
                  ? 'bg-white border-[#EADCD4] hover:border-[#6B1D2F]'
                  : 'bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-500'
              }`}
            >
              <div className="font-serif-display font-bold text-lg text-slate-900 dark:text-white">2024</div>
              <div className="text-[11px] text-slate-500">Head of Affairs & UNHRC EB</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedYear('2025');
                setViewMode('timeline');
              }}
              className={`p-3 rounded-lg border transition-colors cursor-pointer text-left sm:text-center ${
                currentTheme === 'burgundy'
                  ? 'bg-white border-[#EADCD4] hover:border-[#6B1D2F]'
                  : 'bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-500'
              }`}
            >
              <div className="font-serif-display font-bold text-lg text-slate-900 dark:text-white">2025</div>
              <div className="text-[11px] text-slate-500">Treasurer & Senior Advisor</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
