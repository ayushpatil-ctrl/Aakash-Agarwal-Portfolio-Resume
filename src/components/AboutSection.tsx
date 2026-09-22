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
      title: "Scientific Inquiry & Computational Rigor",
      description:
        "Grounded in analytical reasoning and computational logic. Scored 99/100 in Computer Science and 96/100 in Chemistry in CBSE Board Examinations, channeling quantitative precision into engineering problem-solving.",
      badge: "Analytical Core",
      targetId: "education",
    },
    {
      icon: Landmark,
      title: "Model UN & Diplomatic Leadership",
      description:
        "Extensive 6-year trajectory through parliamentary debate. Advanced to UNHRC Rapporteur (PRUMUN '24), Head of Delegate Affairs (JMUNC '24), and Convenor Treasurer & Senior Advisor (JMUNC '25), overseeing multi-institutional delegations.",
      badge: "Governance & Debate",
      targetId: "mun",
    },
    {
      icon: Newspaper,
      title: "Journalistic Writing & Community Outreach",
      description:
        "Trained through Bennett University's on-site winter mass media program in interviewing, investigative storytelling, and community feedback gathering, bridging technical discourse with clear public messaging.",
      badge: "Strategic Communication",
      targetId: "experience",
    },
  ];

  const quickQuestions = [
    {
      question: "What is Aakash's current academic standing?",
      answer: "Aakash is an 18-year-old Bachelor of Technology (B.Tech) freshman focusing on engineering sciences and quantitative problem-solving. He completed Class XII with a 93.4% aggregate and Class X with 94.8% from Seth Anandram Jaipuria School.",
      jumpSection: "education",
      jumpLabel: "View Academic Honors",
    },
    {
      question: "What was his role at the Bennett University Summer Fellowship?",
      answer: "Aakash was selected for a competitive on-site summer fellowship at Bennett University, assisting university faculty with quantitative research, structured documentation, and laboratory data organization.",
      jumpSection: "experience",
      jumpLabel: "View Research Experience",
    },
    {
      question: "What leadership positions has he held in Model UN?",
      answer: "Aakash has commanded key secretariat and executive board posts, serving as Senior Advisor & Convenor Treasurer for JMUNC '25, Head of Delegate Affairs for JMUNC '24, and UNHRC Rapporteur for PRUMUN '24, with 13 total conferences attended since 2019.",
      jumpSection: "mun",
      jumpLabel: "Explore Leadership Vitae",
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
              Philosophy & Trajectory
            </span>
          </div>
          <h2
            id="about-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Engineering Rigor Meets Diplomatic Poise
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
            Aakash Agarwal is a B.Tech freshman whose academic foundation combines the analytical depth of engineering with executive responsibility in Model UN leadership and on-site media journalism.
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
                    className={`inline-flex items-center gap-1 font-semibold hover:underline ${
                      currentTheme === 'burgundy'
                        ? 'text-[#6B1D2F]'
                        : currentTheme === 'emerald'
                        ? 'text-[#1b4332]'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    <span>Inspect Domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-slate-400 text-[11px]">Core Anchor</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Quick FAQ & Briefing Accordion */}
        <div
          id="about-interactive-faq"
          className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            currentTheme === 'obsidian'
              ? 'bg-slate-900/60 border-slate-800'
              : currentTheme === 'emerald'
              ? 'bg-[#faf8f4] border-[#e4ddd0]'
              : currentTheme === 'burgundy'
              ? 'bg-[#FAF7F2] border-[#E7E0D6]'
              : 'bg-slate-50/80 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className={`w-4 h-4 ${
              currentTheme === 'burgundy'
                ? 'text-[#6B1D2F]'
                : currentTheme === 'emerald'
                ? 'text-[#1b4332]'
                : 'text-blue-600 dark:text-blue-400'
            }`} />
            <h3 className="font-serif-display font-bold text-lg">
              Quick Candidate Briefing (Interactive FAQ)
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
