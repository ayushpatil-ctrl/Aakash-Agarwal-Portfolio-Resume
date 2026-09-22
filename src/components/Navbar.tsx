import { useState } from 'react';
import { Menu, X, FileText, Sun, Moon, Sparkles, Mail, Phone, ChevronRight } from 'lucide-react';
import { ThemeMode } from '../types';
import { themes } from '../data/portfolioData';

interface NavbarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenResume: () => void;
}

export default function Navbar({ currentTheme, onThemeChange, onOpenResume }: NavbarProps) {
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
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-200 ${
        currentTheme === 'obsidian'
          ? 'bg-[#0b0f19]/90 border-slate-800 text-slate-100'
          : currentTheme === 'emerald'
          ? 'bg-[#fbf9f5]/90 border-[#e4dfd5] text-[#1c241e]'
          : currentTheme === 'burgundy'
          ? 'bg-[#FAF7F2]/95 border-[#E7E0D6] text-[#231E1C]'
          : 'bg-white/90 border-slate-200 text-slate-900'
      }`}
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
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm tracking-wider transition-transform group-hover:scale-105 ${
              currentTheme === 'obsidian'
                ? 'bg-blue-600 text-white'
                : currentTheme === 'emerald'
                ? 'bg-[#1b4332] text-white'
                : currentTheme === 'burgundy'
                ? 'bg-[#6B1D2F] text-white shadow-xs'
                : 'bg-slate-900 text-white'
            }`}
          >
            AA
          </div>
          <div>
            <div className="font-serif-display font-bold text-lg tracking-tight leading-tight">
              Aakash Agarwal
            </div>
            <div
              className={`text-xs font-medium tracking-wide ${
                currentTheme === 'obsidian'
                  ? 'text-slate-400'
                  : currentTheme === 'emerald'
                  ? 'text-[#5a6b5e]'
                  : currentTheme === 'burgundy'
                  ? 'text-[#6F665E]'
                  : 'text-slate-500'
              }`}
            >
              B.Tech Freshman
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-8 ${
                currentTheme === 'obsidian'
                  ? 'text-slate-300 hover:text-white'
                  : currentTheme === 'emerald'
                  ? 'text-[#38463c] hover:text-[#1b4332]'
                  : currentTheme === 'burgundy'
                  ? 'text-[#5C524A] hover:text-[#6B1D2F]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Switcher & Resume Button */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Switcher Pill */}
          <div
            id="theme-switcher-control"
            className={`flex items-center p-1 rounded-lg border text-xs ${
              currentTheme === 'obsidian'
                ? 'bg-slate-900 border-slate-700'
                : currentTheme === 'emerald'
                ? 'bg-[#efebe4] border-[#d8d1c5]'
                : currentTheme === 'burgundy'
                ? 'bg-[#F2EAE4] border-[#E5DAD0]'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              id="theme-btn-burgundy"
              type="button"
              onClick={() => onThemeChange('burgundy')}
              title="Orbit Burgundy Theme"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                currentTheme === 'burgundy'
                  ? 'bg-[#6B1D2F] text-white shadow-xs'
                  : 'text-[#5C524A] hover:text-[#231E1C]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5889A] inline-block" />
              <span>Orbit</span>
            </button>
            <button
              id="theme-btn-slate"
              type="button"
              onClick={() => onThemeChange('slate')}
              title="Oxford Slate Theme"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-all flex items-center gap-1 ${
                currentTheme === 'slate'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Slate</span>
            </button>
            <button
              id="theme-btn-emerald"
              type="button"
              onClick={() => onThemeChange('emerald')}
              title="Cambridge Stone Theme"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-all flex items-center gap-1 ${
                currentTheme === 'emerald'
                  ? 'bg-white text-[#1b4332] shadow-xs'
                  : 'text-slate-600 hover:text-[#1b4332]'
              }`}
            >
              <Sun className="w-3 h-3 text-emerald-700" />
              <span>Stone</span>
            </button>
            <button
              id="theme-btn-obsidian"
              type="button"
              onClick={() => onThemeChange('obsidian')}
              title="Midnight Obsidian Theme"
              className={`px-2.5 py-1.5 rounded-md font-medium transition-all flex items-center gap-1 ${
                currentTheme === 'obsidian'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3 h-3 text-blue-300" />
              <span>Dark</span>
            </button>
          </div>

          {/* View / Print Resume Button */}
          <button
            id="open-resume-btn-nav"
            type="button"
            onClick={onOpenResume}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-all ${
              currentTheme === 'obsidian'
                ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                : currentTheme === 'emerald'
                ? 'border-[#cfe0d2] bg-[#eef3ee] text-[#1b4332] hover:bg-[#e2ebe3]'
                : currentTheme === 'burgundy'
                ? 'border-[#E2D4C8] bg-[#F7EFEA] text-[#6B1D2F] hover:bg-[#EFE4DC]'
                : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-resume-btn"
            type="button"
            onClick={onOpenResume}
            className="p-2 rounded-lg border text-xs font-medium"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border focus:outline-none"
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
          className={`md:hidden px-4 pt-3 pb-6 border-b flex flex-col gap-4 animate-in slide-in-from-top-2 duration-150 ${
            currentTheme === 'obsidian'
              ? 'bg-[#0f1422] border-slate-800'
              : currentTheme === 'emerald'
              ? 'bg-[#f5f1ea] border-[#ded8cb]'
              : currentTheme === 'burgundy'
              ? 'bg-[#FAF7F2] border-[#E7E0D6]'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between hover:bg-black/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          {/* Mobile Theme Switcher */}
          <div className="pt-2 border-t flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Theme</span>
            <div className="flex items-center gap-1 text-xs">
              <button
                type="button"
                onClick={() => onThemeChange('burgundy')}
                className={`px-2 py-1 rounded font-medium ${currentTheme === 'burgundy' ? 'bg-[#6B1D2F] text-white' : 'border border-[#E7E0D6]'}`}
              >
                Orbit
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('slate')}
                className={`px-2 py-1 rounded ${currentTheme === 'slate' ? 'bg-slate-900 text-white' : 'border'}`}
              >
                Slate
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('emerald')}
                className={`px-2 py-1 rounded ${currentTheme === 'emerald' ? 'bg-[#1b4332] text-white' : 'border'}`}
              >
                Stone
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('obsidian')}
                className={`px-2 py-1 rounded ${currentTheme === 'obsidian' ? 'bg-blue-600 text-white' : 'border'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
