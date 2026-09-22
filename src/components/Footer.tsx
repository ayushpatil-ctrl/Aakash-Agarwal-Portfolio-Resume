import { Mail, Phone, MapPin, ArrowUp, GraduationCap, Heart } from 'lucide-react';
import { ProfileData, ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
  currentTheme: ThemeMode;
  onOpenResume?: () => void;
}

export default function Footer({ profile, currentTheme }: FooterProps) {
  const theme = themes[currentTheme];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="py-12 border-t transition-colors duration-200 bg-[#F2EAE4] border-[#E5DAD0] text-[#5C524A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EADCD4]">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs tracking-wider bg-[#6B1D2F] text-white"
            >
              AA
            </div>
            <div>
              <div className="font-serif-display font-bold text-base text-[#231E1C]">
                {profile.name}
              </div>
              <div className="text-xs text-[#6F665E]">
                {profile.role} · Ghaziabad / Delhi NCR
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#5C524A]">
            <a href="#about" className="hover:underline hover:text-[#6B1D2F]">About</a>
            <a href="#education" className="hover:underline hover:text-[#6B1D2F]">Education</a>
            <a href="#experience" className="hover:underline hover:text-[#6B1D2F]">Experience</a>
            <a href="#mun" className="hover:underline hover:text-[#6B1D2F]">Model UN</a>
            <a href="#skills" className="hover:underline hover:text-[#6B1D2F]">Skills</a>
          </div>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className={`p-2.5 rounded-lg border transition-colors ${
              currentTheme === 'burgundy'
                ? 'bg-white border-[#EADCD4] text-[#6B1D2F] hover:bg-[#FAF7F2]'
                : 'bg-white dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
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
