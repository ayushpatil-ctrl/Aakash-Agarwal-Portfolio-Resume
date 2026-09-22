import { Mail, Phone, MapPin, ArrowUp, GraduationCap, Heart } from 'lucide-react';
import { ProfileData, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
  currentTheme: ThemeMode;
  onOpenResume: () => void;
}

export default function Footer({ profile, currentTheme, onOpenResume }: FooterProps) {
  const theme = themes[currentTheme];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`py-12 border-t transition-colors duration-200 ${
        currentTheme === 'obsidian'
          ? 'bg-[#080b12] border-slate-800 text-slate-400'
          : currentTheme === 'emerald'
          ? 'bg-[#f7f4ed] border-[#ded7ca] text-[#425046]'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs tracking-wider ${
                currentTheme === 'obsidian'
                  ? 'bg-blue-600 text-white'
                  : currentTheme === 'emerald'
                  ? 'bg-[#1b4332] text-white'
                  : 'bg-slate-900 text-white'
              }`}
            >
              AA
            </div>
            <div>
              <div className="font-serif-display font-bold text-base text-slate-900 dark:text-white">
                {profile.name}
              </div>
              <div className="text-xs">
                {profile.role} · Ghaziabad / Delhi NCR
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#mun" className="hover:underline">Model UN</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <button
              type="button"
              onClick={onOpenResume}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View Full Resume
            </button>
          </div>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Aakash Agarwal. All rights reserved.
          </div>
          <div>
            Portfolio distilled directly from official academic curriculum vitae.
          </div>
        </div>
      </div>
    </footer>
  );
}
