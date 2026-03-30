import React from 'react';
import logoUrl from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-premium-black border-t border-gray-200 dark:border-gold/10 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold blur-sm opacity-20"></div>
            <div className="relative w-10 h-10 bg-premium-black rounded-lg border border-gold/30 flex items-center justify-center overflow-hidden">
              <img 
                src={logoUrl} 
                alt="ZonaPremium Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <span className="font-black tracking-tighter uppercase text-gray-900 dark:text-white text-xl">ZonaPremium</span>
        </div>
        <p className="text-gray-500 dark:text-silver-dark text-sm max-w-md mx-auto">
          Activación inmediata y soporte garantizado. Tu satisfacción es nuestra prioridad número uno.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gold/5 text-xs text-gray-400 dark:text-silver-dark/50">
          © {new Date().getFullYear()} ZonaPremium. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
