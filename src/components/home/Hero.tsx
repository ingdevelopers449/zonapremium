import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import hboMaxIcon from '../../assets/hbomax.svg';
import { Tv2, Zap, ShieldCheck, ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  setShowNequiModal: (value: boolean) => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Buenos días';
  if (hour >= 12 && hour < 18) return 'Buenas tardes';
  return 'Buenas noches';
};

// Logos rotativos que se muestran en el hero
const SERVICE_LOGOS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png', name: 'Netflix', bg: '#E50914' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg', name: 'Disney+', bg: '#113CCF' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', name: 'ChatGPT Plus', bg: '#10a37f' },
  { src: hboMaxIcon, name: 'HBO Max', bg: '#5822B4', invertInLight: true },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', name: 'Gemini AI', bg: '#1a73e8' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg', name: 'Prime Video', bg: '#00A8E1' },
];

const FEATURES = [
  { icon: <Tv2 size={18} />, text: 'Streaming Premium', sub: 'Netflix, Disney+, HBO & más' },
  { icon: <Zap size={18} />, text: 'Herramientas IA', sub: 'ChatGPT Plus, Gemini & más' },
  { icon: <ShieldCheck size={18} />, text: 'Garantía Total', sub: 'Activación inmediata · 30 días' },
];

const Hero: React.FC<HeroProps> = ({ setShowNequiModal }) => {
  const greeting = getGreeting();
  const [activeLogoIdx, setActiveLogoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogoIdx(prev => (prev + 1) % SERVICE_LOGOS.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-center mb-16 pt-4">
      {/* Greeting pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-6"
      >
        {greeting}, bienvenido a la élite digital ✨
      </motion.div>

      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-5xl sm:text-7xl font-black mb-5 tracking-tight leading-none">
          STREAMING &amp; IA
          <br />
          <span className="text-gold-gradient italic">AL MEJOR PRECIO</span>
        </h1>
        
        {/* Social Proof Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex -space-x-3 overflow-hidden">
            {['JD', 'AM', 'LR', 'SC'].map((name, i) => (
              <div key={i} className="inline-block h-10 w-10 rounded-full ring-4 ring-white dark:ring-premium-black bg-gray-100 dark:bg-premium-gray flex items-center justify-center text-[10px] font-black text-gold border border-gold/10">
                {name}
              </div>
            ))}
            <div className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-white dark:ring-premium-black bg-gold text-premium-black text-xs font-black shadow-lg shadow-gold/20">
              +1K
            </div>
          </div>
          <div className="text-center sm:text-left leading-tight">
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter">450+ CLIENTES SATISFECHOS</p>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className="fill-gold text-gold" />
              ))}
              <span className="text-[10px] text-gray-500 dark:text-silver-dark font-bold ml-1">4.9/5 Calificación</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Subheadline explicativa */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-600 dark:text-silver-dark max-w-2xl mx-auto leading-relaxed font-light mb-10"
      >
        Vendemos acceso a tus plataformas favoritas —{' '}
        <span className="text-gold font-semibold">Netflix, Disney+, HBO</span>, ChatGPT, Canva y más — con activación personalizada y garantía de 30 días.
      </motion.p>

      {/* Feature pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 rounded-2xl px-4 py-2.5 shadow-sm"
          >
            <span className="text-gold">{f.icon}</span>
            <div className="text-left leading-none">
              <p className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">{f.text}</p>
              <p className="text-[10px] text-gray-500 dark:text-silver-dark mt-0.5">{f.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Logo showcase rotativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col items-center gap-4 mb-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
          Lo que ofrecemos
        </p>
        {/* Logo grid estática */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SERVICE_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              animate={{
                scale: i === activeLogoIdx ? 1.18 : 1,
                opacity: i === activeLogoIdx ? 1 : 0.55,
              }}
              transition={{ duration: 0.35, type: 'spring', stiffness: 300 }}
              className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-premium-gray border-2 shadow-md overflow-hidden"
              style={{
                borderColor: i === activeLogoIdx ? logo.bg : 'transparent',
                boxShadow: i === activeLogoIdx ? `0 0 16px ${logo.bg}55` : undefined,
              }}
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`w-8 h-8 object-contain ${logo.invertInLight ? 'invert dark:invert-0' : ''}`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              {i === activeLogoIdx && (
                <motion.div
                  layoutId="logoHighlight"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: `${logo.bg}18` }}
                />
              )}
            </motion.div>
          ))}
        </div>
        {/* Nombre activo */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeLogoIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm font-bold text-gold"
          >
            {SERVICE_LOGOS[activeLogoIdx].name}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Precio ancla + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {/* Precio ancla */}
        <div className="text-center sm:text-right leading-none">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Desde solo</p>
          <p className="text-3xl font-black text-gold">$8.000 <span className="text-base font-medium text-gray-500 dark:text-silver-dark">/mes</span></p>
        </div>

        <div className="hidden sm:block w-px h-10 bg-gray-200 dark:bg-gray-700" />

        {/* CTA Nequi */}
        <button
          onClick={() => setShowNequiModal(true)}
          className="relative flex items-center gap-3 bg-white dark:bg-premium-black/50 border-2 border-pink-500/30 px-7 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors" />
          <img
            src="https://cdn.worldvectorlogo.com/logos/nequi.svg"
            alt="Nequi"
            className="h-7 w-auto relative z-10 drop-shadow-sm"
          />
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 relative z-10" />
          <div className="text-left relative z-10">
            <span className="block font-black text-gray-800 dark:text-gray-200 tracking-tight text-sm">VER PRECIOS Y PAGAR</span>
            <span className="text-[10px] text-pink-500 font-bold uppercase tracking-widest">Pago seguro por Nequi ✅</span>
          </div>
        </button>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-14 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Ver todos los servicios</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
