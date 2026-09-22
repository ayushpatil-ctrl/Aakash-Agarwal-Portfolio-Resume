import { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Sparkles, Newspaper, BrainCircuit, Copy, Check, Filter, ArrowRight } from 'lucide-react';
import { ExperienceItem, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  currentTheme: ThemeMode;
}

export default function ExperienceSection({ experiences, currentTheme }: ExperienceSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'research' | 'media'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const theme = themes[currentTheme];

  const handleCopyCitation = (exp: ExperienceItem) => {
    const citation = `${exp.title} — ${exp.organization} (${exp.period}, ${exp.location}). Focus: ${exp.impactArea}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(exp.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === 'research' && !exp.id.includes('summer')) return false;
    if (activeFilter === 'media' && !exp.id.includes('media')) return false;
    if (selectedTag && !exp.tags.includes(selectedTag)) return false;
    return true;
  });

  const allTags = Array.from(new Set(experiences.flatMap((e) => e.tags)));

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${theme.badgeBg}`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              University Fellowships & On-Site Practice
            </span>
          </div>
          <h2
            id="experience-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Academic & Media Internships
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
            Selected for intensive on-site university programs at Bennett University, developing dual expertise in faculty-led scientific research and investigative mass journalism.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div
          id="experience-filter-controls"
          className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b"
        >
          {/* Main Program Switcher */}
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSelectedTag(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeFilter === 'all' && !selectedTag
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
              All Programs ({experiences.length})
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveFilter('research');
                setSelectedTag(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'research'
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
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Scientific Research Intern</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveFilter('media');
                setSelectedTag(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'media'
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
              <Newspaper className="w-3.5 h-3.5" />
              <span>Mass Media & Journalism</span>
            </button>
          </div>

          {/* Quick Filter Tag Pill Selector */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs">
            <span className="text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Tag:
            </span>
            {allTags.map((tag) => {
              const isTagSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(isTagSelected ? null : tag)}
                  className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                    isTagSelected
                      ? currentTheme === 'burgundy'
                        ? 'bg-[#6B1D2F] text-white font-semibold shadow-xs'
                        : 'bg-blue-600 text-white dark:bg-blue-500 font-semibold'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#FAF7F2] border border-[#E7E0D6] text-[#5C524A] hover:bg-[#F2EAE4]'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {filteredExperiences.map((exp) => {
            const isResearch = exp.id.includes('summer');
            const isCopied = copiedId === exp.id;

            return (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  currentTheme === 'obsidian'
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : currentTheme === 'emerald'
                    ? 'bg-white border-[#e6e0d5] hover:border-[#cfc6b8]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] hover:border-[#D5C9BE] shadow-2xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        currentTheme === 'burgundy'
                          ? 'bg-[#6B1D2F] text-white'
                          : isResearch
                          ? currentTheme === 'obsidian'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-900 text-white'
                          : currentTheme === 'emerald'
                          ? 'bg-[#1b4332] text-white'
                          : 'bg-blue-700 text-white'
                      }`}
                    >
                      {isResearch ? (
                        <BrainCircuit className="w-6 h-6" />
                      ) : (
                        <Newspaper className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          currentTheme === 'burgundy'
                            ? 'text-[#6B1D2F]'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {exp.organization}
                        </span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-serif-display text-2xl font-bold">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Header Controls: Citation Copier & Domain Badge */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0">
                    <div
                      className={`px-4 py-2 rounded-xl border text-left lg:text-right ${
                        currentTheme === 'obsidian'
                          ? 'bg-slate-800/80 border-slate-700'
                          : currentTheme === 'emerald'
                          ? 'bg-[#f4f7f4] border-[#d2e2d5]'
                          : currentTheme === 'burgundy'
                          ? 'bg-[#F7EFEA] border-[#EADCD4]'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-[11px] font-medium text-slate-500">
                        Core Domain
                      </div>
                      <div className={`text-xs sm:text-sm font-bold mt-0.5 ${
                        currentTheme === 'burgundy'
                          ? 'text-[#6B1D2F]'
                          : 'text-slate-900 dark:text-white'
                      }`}>
                        {exp.impactArea}
                      </div>
                    </div>

                    {/* Copy Citation Button */}
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(exp)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                        isCopied
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : currentTheme === 'burgundy'
                          ? 'bg-[#FAF7F2] border-[#E7E0D6] hover:bg-[#F2EAE4] text-[#5C524A]'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Citation Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Key Accomplishment Bullet Points */}
                <div className="pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Key Contributions & Applied Methodologies
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.points.map((point, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border flex items-start gap-3 text-sm leading-relaxed transition-colors ${
                          currentTheme === 'obsidian'
                            ? 'bg-slate-850/50 border-slate-800 text-slate-300'
                            : currentTheme === 'emerald'
                            ? 'bg-[#fbf9f5] border-[#eae4d8] text-[#303e33]'
                            : currentTheme === 'burgundy'
                            ? 'bg-[#FAF7F2] border-[#E8E1D7] text-[#4A423B]'
                            : 'bg-slate-50/70 border-slate-100 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill & Competency Tags (Clickable) */}
                <div className="mt-6 pt-4 border-t flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 mr-2">
                    Click Tag to Filter:
                  </span>
                  {exp.tags.map((tag) => {
                    const isTagActive = selectedTag === tag;
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(isTagActive ? null : tag)}
                        className={`text-xs px-2.5 py-1 rounded-md border font-medium cursor-pointer transition-all ${
                          isTagActive
                            ? currentTheme === 'burgundy'
                              ? 'bg-[#6B1D2F] text-white border-[#6B1D2F] font-semibold'
                              : 'bg-blue-600 text-white border-blue-600 font-semibold'
                            : currentTheme === 'obsidian'
                            ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                            : currentTheme === 'emerald'
                            ? 'bg-[#eef3ee] border-[#cfe0d2] text-[#1b4332] hover:bg-[#e2ebe3]'
                            : currentTheme === 'burgundy'
                            ? 'bg-[#FAF7F2] border-[#E7E0D6] text-[#5C524A] hover:bg-[#F2EAE4]'
                            : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
