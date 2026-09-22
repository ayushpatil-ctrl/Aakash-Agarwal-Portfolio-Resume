import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface NavbarProps {
  currentTheme?: ThemeMode;
  onThemeChange?: (theme: ThemeMode) => void;
  onOpenResume?: () => void;
}

export default function Navbar({ currentTheme = 'burgundy' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = themes[currentTheme];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Model UN & Leadership', href: '#mun' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-200 bg-[#FAF7F2]/95 border-[#E7E0D6] text-[#231E1C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="nav-brand-link"
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div
            id="brand-avatar-badge"
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm tracking-wider transition-transform group-hover:scale-105 bg-[#6B1D2F] text-white shadow-xs"
          >
            AA
          </div>
          <div>
            <div className="font-serif-display font-bold text-lg tracking-tight leading-tight">
              Aakash Agarwal
            </div>
            <div className="text-xs font-medium tracking-wide text-[#6F665E]">
              B.Tech Freshman
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              href={link.href}
              className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-8 text-[#5C524A] hover:text-[#6B1D2F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-[#E7E0D6] text-[#231E1C] hover:bg-[#F2EAE4] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden px-4 pt-3 pb-6 border-b flex flex-col gap-4 animate-in slide-in-from-top-2 duration-150 bg-[#FAF7F2] border-[#E7E0D6]"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between text-[#3D332A] hover:bg-[#F2EAE4]"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
