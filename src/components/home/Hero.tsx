import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  setShowNequiModal: (value: boolean) => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Buenos días';
  if (hour >= 12 && hour < 18) return 'Buenas tardes';
  return 'Buenas noches';
};

const Hero: React.FC<HeroProps> = ({ setShowNequiModal }) => {
  const greeting = getGreeting();

  return (
    <section className="text-center mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-6">
          {greeting}, bienvenido a la élite
        </div>
        <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tight leading-none">
          TU MEJOR OPCIÓN EN <br />
          <span className="text-gold-gradient italic">SERVICIOS PREMIUM</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-silver-dark max-w-2xl mx-auto leading-relaxed font-light mb-8">
          Accede a plataformas de entretenimiento y herramientas de élite de forma fácil, rápida y segura. <span className="text-gold font-medium">Activación personalizada inmediata.</span>
        </p>

        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.2em]">Medio de pago oficial</span>
          <button 
            onClick={() => setShowNequiModal(true)}
            className="flex items-center gap-4 bg-white dark:bg-premium-black/50 border-2 border-pink-500/20 dark:border-pink-500/30 px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors"></div>
            <img src="https://cdn.worldvectorlogo.com/logos/nequi.svg" alt="Nequi" className="h-8 w-auto relative z-10 filter drop-shadow-sm" />
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 relative z-10"></div>
            <div className="text-left relative z-10">
              <span className="block font-black text-gray-800 dark:text-gray-200 tracking-tight leading-none text-base">VER DATOS DE PAGO</span>
              <span className="text-[10px] text-pink-500 font-bold uppercase tracking-widest">Socio Verificado ✅</span>
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
