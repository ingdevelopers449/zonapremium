import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-premium-black border-t border-gray-200 dark:border-gold/10 py-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
            <span className="text-premium-black font-bold text-sm">ZP</span>
          </div>
          <span className="font-black tracking-tighter uppercase text-gray-900 dark:text-white">ZonaPremium</span>
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
