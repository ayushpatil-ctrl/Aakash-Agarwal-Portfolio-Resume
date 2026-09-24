import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Award, ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import { ProfileData, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface HeroProps {
  profile: ProfileData;
  currentTheme: ThemeMode;
  onOpenResume?: () => void;
}

export default function Hero({ profile, currentTheme }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const theme = themes[currentTheme];

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span
            id="badge-academic-status"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${theme.badgeBg}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            B.Tech Freshman
          </span>
          <span
            id="badge-age-location"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              currentTheme === 'obsidian'
                ? 'bg-slate-800 border-slate-700 text-slate-300'
                : currentTheme === 'emerald'
                ? 'bg-[#f0ebe3] border-[#ded7cb] text-[#425046]'
                : currentTheme === 'burgundy'
                ? 'bg-[#F4ECE8] border-[#E8DDD6] text-[#5C524A]'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            Ghaziabad / Delhi NCR · 18 Years
          </span>
          <span
            id="badge-status-available"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300 bg-emerald-50 text-emerald-800"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Looking for Internships & Projects
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Title, Tagline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1
                id="hero-candidate-name"
                className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
              >
                {profile.name}
              </h1>

              <p
                id="hero-tagline"
                className={`text-lg sm:text-xl font-medium leading-relaxed mb-6 ${
                  currentTheme === 'obsidian'
                    ? 'text-blue-300'
                    : currentTheme === 'emerald'
                    ? 'text-[#1b4332]'
                    : currentTheme === 'burgundy'
                    ? 'text-[#6B1D2F]'
                    : 'text-slate-800'
                }`}
              >
                {profile.tagline}
              </p>

              {/* Bio Narrative from Resume Summary */}
              <div
                id="hero-summary-box"
                className={`p-5 rounded-xl border text-sm sm:text-base leading-relaxed mb-8 ${
                  currentTheme === 'obsidian'
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : currentTheme === 'emerald'
                    ? 'bg-[#fcfbf9] border-[#e8e2d8] text-[#334237]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] text-[#4A423B] shadow-2xs'
                    : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                }`}
              >
                <div className="font-semibold text-xs uppercase tracking-wider mb-2 opacity-70">
                  Quick Intro
                </div>
                <p>{profile.summary}</p>
              </div>
            </div>

            {/* Quick Contact & Action Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
              {/* Copy Email Button */}
              <button
                id="hero-email-copy-btn"
                type="button"
                onClick={() => handleCopy(profile.email, 'email')}
                className={`inline-flex items-center justify-between gap-2.5 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  copiedField === 'email'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : currentTheme === 'obsidian'
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                    : currentTheme === 'emerald'
                    ? 'bg-white border-[#dfd8cb] text-[#243228] hover:bg-[#f6f2ea]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] text-[#231E1C] hover:bg-[#F7EFEA]'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{profile.email}</span>
                </div>
                {copiedField === 'email' ? (
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-50" />
                )}
              </button>

              {/* Call Link */}
              <a
                id="hero-phone-link"
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  currentTheme === 'obsidian'
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                    : currentTheme === 'emerald'
                    ? 'bg-white border-[#dfd8cb] text-[#243228] hover:bg-[#f6f2ea]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] text-[#231E1C] hover:bg-[#F7EFEA]'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Resume Photo Moments */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Real Resume Visual Highlights Card */}
            <div
              id="hero-photo-showcase-card"
              className={`p-6 rounded-2xl border ${
                currentTheme === 'obsidian'
                  ? 'bg-slate-900/90 border-slate-800'
                  : currentTheme === 'emerald'
                  ? 'bg-white border-[#e3ded4] shadow-xs'
                  : currentTheme === 'burgundy'
                  ? 'bg-white border-[#E7E0D6] shadow-2xs'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b">
                <div>
                  <h3 className="font-serif-display font-bold text-base">
                    Public Speaking & Awards
                  </h3>
                  <p
                    className={`text-xs ${
                      currentTheme === 'obsidian'
                        ? 'text-slate-400'
                        : currentTheme === 'emerald'
                        ? 'text-[#5f6e62]'
                        : currentTheme === 'burgundy'
                        ? 'text-[#6F665E]'
                        : 'text-slate-500'
                    }`}
                  >
                    Highlights from school events & Model UN
                  </p>
                </div>
                <Award className="w-5 h-5 text-amber-600" />
              </div>

              {/* Two Visual Cards representing the two photos from the resume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Moment 1: Podium Oratory */}
                <div
                  id="card-photo-podium"
                  className={`p-3.5 rounded-xl border flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${
                    currentTheme === 'obsidian'
                      ? 'bg-slate-800/80 border-slate-700'
                      : currentTheme === 'emerald'
                      ? 'bg-[#faf8f4] border-[#e8e3d8]'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#FAF7F2] border-[#E8E1D7]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="h-32 rounded-lg bg-slate-900 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <div className="z-20 text-white flex flex-col items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center mb-1.5">
                        🎙️
                      </span>
                      <span className="text-xs font-semibold tracking-wide">Public Speaking</span>
                      <span className="text-[10px] text-slate-300">Model UN & Debates</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1">
                      Speaking on Stage
                    </h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      Giving speeches, leading debate rooms, and discussing real-world problems.
                    </p>
                  </div>
                </div>

                {/* Moment 2: Felicitation on Stage */}
                <div
                  id="card-photo-award"
                  className={`p-3.5 rounded-xl border flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${
                    currentTheme === 'obsidian'
                      ? 'bg-slate-800/80 border-slate-700'
                      : currentTheme === 'emerald'
                      ? 'bg-[#faf8f4] border-[#e8e3d8]'
                      : currentTheme === 'burgundy'
                      ? 'bg-[#FAF7F2] border-[#E8E1D7]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="h-32 rounded-lg bg-slate-800 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <div className="z-20 text-white flex flex-col items-center">
                      <span className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mb-1.5">
                        📜
                      </span>
                      <span className="text-xs font-semibold tracking-wide">Academic Honors</span>
                      <span className="text-[10px] text-slate-300">School Awards</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1">
                      School Recognition
                    </h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      Recognized on stage for top academic marks and active participation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Credentials Summary */}
              <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Seth Anandram Jaipuria School
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  94.8% & 93.4% Boards
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {profile.quickStats.map((stat, idx) => (
              <div
                key={stat.label}
                id={`metric-stat-${idx}`}
                className={`p-4 sm:p-5 rounded-xl border transition-all ${
                  currentTheme === 'obsidian'
                    ? 'bg-slate-900/60 border-slate-800'
                    : currentTheme === 'emerald'
                    ? 'bg-white border-[#e6e1d7]'
                    : currentTheme === 'burgundy'
                    ? 'bg-white border-[#E7E0D6] shadow-2xs'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 font-serif-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
