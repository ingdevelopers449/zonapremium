import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Valentina R.',
    location: 'Bogotá, Colombia',
    avatar: 'VR',
    service: 'Netflix + HBO MAX',
    rating: 5,
    text: '¡Activación instantánea! Pagué por Nequi y en menos de 3 minutos ya tenía mi cuenta de Netflix activa. El soporte por WhatsApp es increíble, responden al tiro. 100% recomendado 🔥',
    color: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Sebastian M.',
    location: 'Medellín, Colombia',
    avatar: 'SM',
    service: 'Mega Combo X6',
    rating: 5,
    text: 'Llevaba meses buscando alguien confiable y ZonaPremium superó todas mis expectativas. El Mega Combo X6 me salió cortísimo vs. pagar individual. Sin caídas en todo el mes.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Laura C.',
    location: 'Cali, Colombia',
    avatar: 'LC',
    service: 'ChatGPT Plus',
    rating: 5,
    text: 'Tenía miedo de pagar y que me fueran a estafar, pero el servicio fue perfecto. La cuenta de ChatGPT llegó al instante y llevan más de 3 meses sin ningún problema. ¡Son lo máximo!',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Andrés P.',
    location: 'Barranquilla, Colombia',
    avatar: 'AP',
    service: 'Disney+ & ESPN',
    rating: 5,
    text: 'Ya voy en mi tercer renovación y cada vez mejor. El precio es imbatible y la cuenta nunca ha fallado. Si quieren ver los partidos con calidad 4K, este es el lugar.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Daniela T.',
    location: 'Bucaramanga, Colombia',
    avatar: 'DT',
    service: 'Canva Pro',
    rating: 5,
    text: 'Empecé con Canva Pro y fui añadiendo más servicios cada mes. La atención es súper profesional y siempre están disponibles. ¡Mi negocio de diseño creció gracias a esto! ✨',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Camilo B.',
    location: 'Pereira, Colombia',
    avatar: 'CB',
    service: 'Netflix x33 Días',
    rating: 5,
    text: 'Renovando hace 4 meses sin un solo problema. El perfil es completamente privado y la calidad 4K Ultra HD es brutal. No hay mejor opción precio-calidad en Colombia.',
    color: 'from-rose-500 to-red-600',
  },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} className="text-gold fill-gold" />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4500);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(index);
    startAutoPlay();
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => goTo((currentIndex + 1) % testimonials.length, 1);

  const slide = testimonials[currentIndex];

  return (
    <section className="mt-32 mb-16">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-4">
          Lo que dicen nuestros clientes
        </div>
        <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          MÁS DE <span className="text-gold-gradient italic">500 CLIENTES</span>
          <br />NOS RESPALDAN
        </h3>
        <p className="text-gray-500 dark:text-silver-dark max-w-xl mx-auto font-light text-lg">
          Resultados reales de personas reales. Sin filtros, sin edición.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto">
        {/* Main Card */}
        <div className="overflow-hidden rounded-[40px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="relative bg-white dark:bg-premium-gray border border-gray-100 dark:border-gold/20 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Background accent */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${slide.color} opacity-5 rounded-full blur-3xl`} />

              {/* Quote icon */}
              <Quote className="text-gold/30 mb-6" size={48} />

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-light leading-relaxed mb-8 italic">
                "{slide.text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${slide.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                    {slide.avatar}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 dark:text-white">{slide.name}</p>
                    <p className="text-xs text-gray-400 dark:text-silver-dark">{slide.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating count={slide.rating} />
                  <span className="text-xs text-gold font-bold uppercase tracking-widest mt-1 block">
                    {slide.service}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          aria-label="Testimonio anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 rounded-full flex items-center justify-center shadow-xl hover:border-gold/50 hover:scale-110 transition-all z-10"
        >
          <ChevronLeft size={18} className="text-gray-600 dark:text-silver" />
        </button>
        <button
          onClick={next}
          aria-label="Próximo testimonio"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 rounded-full flex items-center justify-center shadow-xl hover:border-gold/50 hover:scale-110 transition-all z-10"
        >
          <ChevronRight size={18} className="text-gray-600 dark:text-silver" />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 h-2 bg-gold'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gold/50'
              }`}
            />
          ))}
        </div>

        {/* Mini cards below (desktop) */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-10">
          {[
            { stat: '< 5 min', label: 'Activación promedio' },
            { stat: '500+', label: 'Clientes activos' },
            { stat: '99.9%', label: 'Cuentas estables' },
          ].map(item => (
            <div key={item.label} className="bg-white dark:bg-premium-gray/50 border border-gray-100 dark:border-gold/10 rounded-2xl py-4 px-5 text-center hover:border-gold/30 transition-all">
              <p className="text-2xl font-black text-gold">{item.stat}</p>
              <p className="text-xs text-gray-500 dark:text-silver-dark font-light mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
