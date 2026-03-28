import React from 'react';
import { Sun, Moon, Shield, Star } from 'lucide-react';
import logoUrl from '../../assets/logo.png';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-premium-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-14 h-14 bg-premium-black rounded-xl border border-gold/50 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={logoUrl}
                alt="ZonaPremium"
                className="h-full w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Shield className="text-gold hidden" size={32} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
              Zona<span className="text-gold-gradient">Premium</span>
            </h1>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <Star key={i} size={10} className="fill-gold text-gold" />)}
            </div>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-2xl bg-gray-100 dark:bg-premium-gray text-gray-600 dark:text-gold border border-transparent dark:border-gold/20 hover:border-gold transition-all shadow-inner"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
