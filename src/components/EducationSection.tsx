import { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, BarChart2, Calculator, Info, Sparkles } from 'lucide-react';
import { EducationItem, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface EducationSectionProps {
  education: EducationItem[];
  currentTheme: ThemeMode;
}

export default function EducationSection({ education, currentTheme }: EducationSectionProps) {
  const [activeTab, setActiveTab] = useState<'cards' | 'breakdown' | 'equivalency'>('cards');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const theme = themes[currentTheme];

  const subjectScores = [
    { name: 'Computer Science (Class X)', score: 99, max: 100, label: '99/100 Top Marks', note: 'Programming basics, coding logic, and algorithmic thinking.' },
    { name: 'Social Studies (Class X)', score: 99, max: 100, label: '99/100 Top Marks', note: 'Civics, economics, history, and world governance.' },
    { name: 'Chemistry (Class XII)', score: 96, max: 100, label: '96/100 Distinction', note: 'Chemical equations, formulas, and hands-on laboratory experiments.' },
    { name: 'CBSE Class X Overall', score: 94.8, max: 100, label: '94.8% Overall', note: 'Among the highest-scoring students in school.' },
    { name: 'CBSE Class XII Overall', score: 93.4, max: 100, label: '93.4% Science Stream', note: 'PCM stream: Physics, Chemistry, and Mathematics.' },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${theme.badgeBg}`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Schooling & Academic Marks
            </span>
          </div>
          <h2
            id="education-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Education & Board Marks
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
            Strong academic track record in CBSE board examinations, with top scores of 99/100 in Computer Science and 96/100 in Chemistry.
          </p>
        </div>

        {/* Current Academic Pursuit Spotlight */}
        <div
          id="current-degree-banner"
          className={`p-6 rounded-2xl border mb-8 transition-all ${
            currentTheme === 'obsidian'
              ? 'bg-slate-900/90 border-blue-900/50'
              : currentTheme === 'emerald'
              ? 'bg-[#f4f7f4] border-[#cce0d0]'
              : currentTheme === 'burgundy'
              ? 'bg-[#F7EFEA] border-[#EADCD4]'
              : 'bg-blue-50/60 border-blue-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                  currentTheme === 'obsidian'
                    ? 'bg-blue-600 text-white'
                    : currentTheme === 'emerald'
                    ? 'bg-[#1b4332] text-white'
                    : currentTheme === 'burgundy'
                    ? 'bg-[#6B1D2F] text-white shadow-xs'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    currentTheme === 'burgundy'
                      ? 'text-[#6B1D2F]'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    Current Degree
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    currentTheme === 'burgundy'
                      ? 'bg-[#FAF7F2] text-[#6B1D2F] border border-[#EADCD4]'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    1st Year Student
                  </span>
                </div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold mt-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Focus on Technology, Coding & Applied Sciences
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 md:text-right max-w-sm">
              Learning programming, core mathematics, and science principles to build real-world software and engineering projects.
            </div>
          </div>
        </div>

        {/* Interactive View Selector Tabs */}
        <div
          id="education-view-tabs"
          className="flex items-center gap-2 mb-8 border-b pb-3"
        >
          <button
            type="button"
            onClick={() => setActiveTab('cards')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'cards'
                ? currentTheme === 'obsidian'
                ? 'bg-blue-600 text-white shadow-xs'
                : currentTheme === 'emerald'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : currentTheme === 'burgundy'
                ? 'bg-[#6B1D2F] text-white shadow-xs'
                : 'bg-slate-900 text-white shadow-xs'
              : currentTheme === 'burgundy'
              ? 'bg-[#F2EAE4] text-[#5C524A] hover:bg-[#EAE1D9]'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Report Cards & Highlights</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('breakdown')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'breakdown'
                ? currentTheme === 'obsidian'
                ? 'bg-blue-600 text-white shadow-xs'
                : currentTheme === 'emerald'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : currentTheme === 'burgundy'
                ? 'bg-[#6B1D2F] text-white shadow-xs'
                : 'bg-slate-900 text-white shadow-xs'
              : currentTheme === 'burgundy'
              ? 'bg-[#F2EAE4] text-[#5C524A] hover:bg-[#EAE1D9]'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Subject Marks Chart</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('equivalency')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'equivalency'
                ? currentTheme === 'obsidian'
                ? 'bg-blue-600 text-white shadow-xs'
                : currentTheme === 'emerald'
                ? 'bg-[#1b4332] text-white shadow-xs'
                : currentTheme === 'burgundy'
                ? 'bg-[#6B1D2F] text-white shadow-xs'
                : 'bg-slate-900 text-white shadow-xs'
              : currentTheme === 'burgundy'
              ? 'bg-[#F2EAE4] text-[#5C524A] hover:bg-[#EAE1D9]'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>GPA & Global Equivalents</span>
          </button>
        </div>

        {/* Tab 1: Academic Cards */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item) => (
              <div
                key={item.id}
                id={`edu-card-${item.id}`}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all ${
                  currentTheme === 'obsidian'
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : currentTheme === 'emerald'
                    ? 'bg-white border-[#e6e0d5] hover:border-[#cfc6b8]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] hover:border-[#D5C9BE] shadow-2xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Row: Course Name, Passing Year, Grade Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                        Class of {item.year}
                      </span>
                      <h3 className="font-serif-display text-2xl font-bold mt-1">
                        {item.course}
                      </h3>
                    </div>

                    <div
                      className={`px-3.5 py-2 rounded-xl text-center font-bold shrink-0 border ${
                        currentTheme === 'obsidian'
                          ? 'bg-slate-800 border-slate-700 text-blue-400'
                          : currentTheme === 'emerald'
                          ? 'bg-[#eef5ef] border-[#c8e2cc] text-[#1b4332]'
                          : currentTheme === 'burgundy'
                          ? 'bg-[#F7EFEA] border-[#EADCD4] text-[#6B1D2F]'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="text-xl sm:text-2xl leading-none font-serif-display">
                        {item.percentage}%
                      </div>
                      <div className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">
                        Aggregate
                      </div>
                    </div>
                  </div>

                  {/* Institute Info */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-6">
                    <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.institute}</span>
                  </div>

                  {/* Subject Pills (Clickable) */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Subject Areas (Click to inspect)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.keySubjects.map((subject) => (
                        <button
                          key={subject}
                          type="button"
                          onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
                          className={`text-xs px-2.5 py-1 rounded-md border font-medium cursor-pointer transition-all ${
                            selectedSubject === subject
                              ? currentTheme === 'burgundy'
                                ? 'ring-2 ring-[#6B1D2F] bg-[#F7EFEA] text-[#6B1D2F]'
                                : 'ring-2 ring-blue-500 bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200'
                              : subject.includes('99/100') || subject.includes('96/100')
                              ? currentTheme === 'burgundy'
                                ? 'bg-[#F8EFEA] border-[#EADCD4] text-[#6B1D2F] font-semibold hover:bg-[#F2E7E0]'
                                : 'bg-amber-50 border-amber-200 text-amber-900 font-semibold hover:bg-amber-100'
                              : currentTheme === 'obsidian'
                              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                              : currentTheme === 'burgundy'
                              ? 'bg-[#FAF7F2] border-[#E7E0D6] text-[#5C524A] hover:bg-[#F2EAE4]'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Subject Context Tip */}
                  {selectedSubject && item.keySubjects.includes(selectedSubject) && (
                    <div className={`p-3 rounded-lg border text-xs mb-5 flex items-start gap-2 ${
                      currentTheme === 'burgundy'
                        ? 'bg-[#F7EFEA] border-[#EADCD4] text-[#4A423B]'
                        : 'bg-blue-50/70 border-blue-200 text-blue-900 dark:bg-slate-800 dark:border-blue-800 dark:text-blue-300'
                    }`}>
                      <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${
                        currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : 'text-blue-600'
                      }`} />
                      <div>
                        <span className="font-semibold">{selectedSubject}: </span>
                        {selectedSubject.includes('Chemistry')
                          ? 'Peak high school science benchmark scored with distinction in organic synthesis, electrochemistry, and coordination chemistry.'
                          : selectedSubject.includes('Computer Science')
                          ? 'Near-perfect score reflecting computational mastery, algorithmic problem-solving, and theoretical foundations.'
                          : 'Comprehensive foundational subject in science and mathematics.'}
                      </div>
                    </div>
                  )}

                  {/* Highlights List */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Verified Board Highlights
                    </div>
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t flex items-center justify-between text-xs text-slate-500">
                  <span>Central Board of Secondary Education</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {item.id === 'class-x' ? '99/100 CS Benchmark' : '96/100 Chem Benchmark'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Marks Visualizer */}
        {activeTab === 'breakdown' && (
          <div
            id="education-marks-visualizer"
            className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/80 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e6e0d5]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="max-w-2xl mb-6">
              <h3 className="font-serif-display text-2xl font-bold mb-2">
                Quantitative Academic Distribution
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Visual analysis of CBSE examination performance across analytical sciences, computational systems, and cumulative boards.
              </p>
            </div>

            <div className="space-y-6">
              {subjectScores.map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold">{item.name}</span>
                    <span className={`font-mono font-bold ${
                      currentTheme === 'burgundy'
                        ? 'text-[#6B1D2F]'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border dark:border-slate-700">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        currentTheme === 'burgundy'
                          ? item.score >= 95
                            ? 'bg-[#6B1D2F]'
                            : item.score >= 90
                            ? 'bg-[#8F263E]'
                            : 'bg-[#B24D65]'
                          : item.score >= 95
                          ? 'bg-emerald-600'
                          : item.score >= 90
                          ? 'bg-blue-600'
                          : 'bg-slate-600'
                      }`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span>Standard CBSE 100-Point Grading Scale</span>
              <span className={`font-semibold ${
                currentTheme === 'burgundy'
                  ? 'text-[#6B1D2F]'
                  : 'text-emerald-600 dark:text-emerald-400'
              }`}>
                Consistent 93%+ Aggregate Across Both Board Milestones
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: International Academic Equivalency */}
        {activeTab === 'equivalency' && (
          <div
            id="education-equivalency-view"
            className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900/80 border-slate-800'
                : currentTheme === 'emerald'
                ? 'bg-white border-[#e6e0d5]'
                : currentTheme === 'burgundy'
                ? 'bg-white border-[#E7E0D6] shadow-2xs'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="max-w-2xl mb-6">
              <h3 className="font-serif-display text-2xl font-bold mb-2">
                Global Grade Equivalents
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                How Indian CBSE board percentages compare to US GPA and UK university grading scales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className={`p-4 rounded-xl border ${
                currentTheme === 'burgundy'
                  ? 'bg-[#FAF7F2] border-[#E7E0D6]'
                  : 'bg-slate-50 dark:bg-slate-800/60 dark:border-slate-700'
              }`}>
                <div className="text-xs uppercase font-bold text-slate-500 mb-1">
                  US Scale Equivalent
                </div>
                <div className={`text-2xl font-bold font-serif-display ${
                  currentTheme === 'burgundy'
                    ? 'text-[#6B1D2F]'
                    : 'text-blue-600 dark:text-blue-400'
                }`}>
                  3.9 – 4.0 GPA
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Equivalent to straight A's and top scholastic tier.
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${
                currentTheme === 'burgundy'
                  ? 'bg-[#FAF7F2] border-[#E7E0D6]'
                  : 'bg-slate-50 dark:bg-slate-800/60 dark:border-slate-700'
              }`}>
                <div className="text-xs uppercase font-bold text-slate-500 mb-1">
                  UK Honours Classification
                </div>
                <div className={`text-2xl font-bold font-serif-display ${
                  currentTheme === 'burgundy'
                    ? 'text-[#8F263E]'
                    : 'text-emerald-600 dark:text-emerald-400'
                }`}>
                  First Class
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Equivalent to First Class with Distinction (well above 70%).
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${
                currentTheme === 'burgundy'
                  ? 'bg-[#FAF7F2] border-[#E7E0D6]'
                  : 'bg-slate-50 dark:bg-slate-800/60 dark:border-slate-700'
              }`}>
                <div className="text-xs uppercase font-bold text-slate-500 mb-1">
                  National Standing
                </div>
                <div className={`text-2xl font-bold font-serif-display ${
                  currentTheme === 'burgundy'
                    ? 'text-[#9A3412]'
                    : 'text-amber-600 dark:text-amber-400'
                }`}>
                  Top 2%
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Top marks nationwide in Computer Science (99) and Chemistry (96).
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
              currentTheme === 'burgundy'
                ? 'border-[#EADCD4] bg-[#F7EFEA] text-[#4A423B]'
                : 'border-blue-200 bg-blue-50/60 dark:bg-blue-950/40 dark:border-blue-900 text-slate-700 dark:text-slate-300'
            }`}>
              <Info className={`w-5 h-5 shrink-0 mt-0.5 ${
                currentTheme === 'burgundy' ? 'text-[#6B1D2F]' : 'text-blue-600'
              }`} />
              <div>
                <span className="font-semibold">About CBSE Board Exams: </span>
                CBSE is India's premier national school education board. Scoring above 90% represents distinction marks, typically placing a student in the top academic tier for engineering admissions.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
