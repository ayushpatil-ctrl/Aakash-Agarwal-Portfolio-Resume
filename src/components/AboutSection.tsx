import { useState } from 'react';
import { User, Compass, Brain, Landmark, Newspaper, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { ProfileData, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface AboutSectionProps {
  profile: ProfileData;
  currentTheme: ThemeMode;
  onOpenResume?: () => void;
}

export default function AboutSection({ profile, currentTheme }: AboutSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const theme = themes[currentTheme];

  const pillars = [
    {
      icon: Brain,
      title: "Tech & Problem Solving",
      description:
        "I enjoy programming, math, and understanding how things work under the hood. In my CBSE board exams, I scored 99/100 in Computer Science and 96/100 in Chemistry.",
      badge: "Coding & Logic",
      targetId: "education",
    },
    {
      icon: Landmark,
      title: "Public Speaking & Leadership",
      description:
        "6 years of public speaking, debate, and team leadership. I have helped run large Model UN events — managing budgets, mentoring delegates, and moderating committee debates.",
      badge: "Model UN & Teams",
      targetId: "mun",
    },
    {
      icon: Newspaper,
      title: "Media & Clear Communication",
      description:
        "Completed a hands-on journalism internship at Bennett University, learning how to interview people, tell stories, and explain complex ideas in clear, simple words.",
      badge: "Writing & Storytelling",
      targetId: "experience",
    },
  ];

  const quickQuestions = [
    {
      question: "What is Aakash currently studying?",
      answer: "Aakash is an 18-year-old first-year B.Tech engineering student. In school, he scored 93.4% in Class 12 and 94.8% in Class 10 from Seth Anandram Jaipuria School.",
      jumpSection: "education",
      jumpLabel: "View Marks & Schooling",
    },
    {
      question: "What did he do at Bennett University?",
      answer: "He completed two hands-on programs at Bennett University: a summer research fellowship working with faculty on data, and a winter media program focused on reporting and interviews.",
      jumpSection: "experience",
      jumpLabel: "View Internships",
    },
    {
      question: "What leadership roles has he handled in Model UN?",
      answer: "Across 6 years and 13+ conferences, he has served as Senior Advisor, Conference Treasurer, Head of Delegate Affairs, and Committee Rapporteur.",
      jumpSection: "mun",
      jumpLabel: "View Model UN Roles",
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${theme.badgeBg}`}
            >
              <Compass className="w-3.5 h-3.5" />
              About Me
            </span>
          </div>
          <h2
            id="about-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 text-[#231E1C] leading-[1.2]"
          >
            Engineering Student, Speaker & Team Leader
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
            Hi, I'm Aakash Agarwal — an 18-year-old engineering student who enjoys coding, solving math problems, and working with people. Over the last 6 years, I have helped organize school events, worked on research with college professors, and reported stories as a student journalist.
          </p>
        </div>

        {/* 3 Core Pillars with Interactive Jump Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.title}
                id={`about-pillar-${idx}`}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-1 ${
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
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        currentTheme === 'obsidian'
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : currentTheme === 'emerald'
                          ? 'bg-[#eaf3ec] text-[#1b4332] border border-[#cfe0d2]'
                          : currentTheme === 'burgundy'
                          ? 'bg-[#F7EFEA] text-[#6B1D2F] border border-[#EADCD4]'
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => scrollToSection(pillar.targetId)}
                    className="inline-flex items-center gap-1 font-semibold hover:underline text-[#6B1D2F]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[#8C8278] text-[11px]">Key Strength</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Quick FAQ */}
        <div
          id="about-interactive-faq"
          className="p-6 sm:p-8 rounded-2xl border transition-all bg-[#FAF7F2] border-[#E7E0D6]"
        >
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-[#6B1D2F]" />
            <h3 className="font-serif-display font-bold text-lg">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {quickQuestions.map((q, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={q.question}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    currentTheme === 'obsidian'
                      ? 'bg-slate-800/80 border-slate-700'
                      : currentTheme === 'burgundy'
                      ? 'bg-white border-[#E7E0D6]'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 font-semibold text-sm cursor-pointer"
                  >
                    <span>{q.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                      <p>{q.answer}</p>
                      <button
                        type="button"
                        onClick={() => scrollToSection(q.jumpSection)}
                        className={`mt-3 inline-flex items-center gap-1.5 font-semibold hover:underline ${
                          currentTheme === 'burgundy'
                            ? 'text-[#6B1D2F]'
                            : currentTheme === 'emerald'
                            ? 'text-[#1b4332]'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        <span>{q.jumpLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
