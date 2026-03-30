import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronUp, ChevronDown, Info, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Service, ServiceOption } from '../../types';
import { useMotionValue, useTransform, useSpring } from 'motion/react';

interface ServiceCardProps {
  service: Service;
  expandedService: string | null;
  toggleService: (id: string) => void;
  onPurchase: (s: Service, o: ServiceOption) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, expandedService, toggleService, onPurchase }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={expandedService === service.id ? {} : { y: -5 }}
      style={{
        rotateX: expandedService === service.id ? 0 : rotateX,
        rotateY: expandedService === service.id ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: expandedService === service.id ? 1.02 : 1,
        boxShadow: expandedService === service.id ? "0 20px 25px -5px rgb(212 175 55 / 0.1), 0 8px 10px -6px rgb(212 175 55 / 0.1)" : "0 10px 15px -3px rgb(0 0 0 / 0.1)"
      }}
      className={`group bg-white dark:bg-premium-gray rounded-[32px] border transition-all flex flex-col relative ${expandedService === service.id ? 'border-gold/50 z-20 shadow-2xl shadow-gold/20' : 'border-gray-200 dark:border-gold/10 z-10'}`}
    >
      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <div className="bg-gold/10 backdrop-blur-md border border-gold/20 px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={10} className="fill-gold text-gold" />
          <span className="text-[10px] font-black text-gold uppercase tracking-widest">Premium</span>
        </div>
        {service.savings && (
          <div className="bg-green-500/10 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full">
            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Ahorra {service.savings.percentage}%</span>
          </div>
        )}
      </div>

      {/* Header Row */}
      <div className="p-6 flex items-start gap-5">
        {/* Left Column: Logo */}
        <div className={`w-16 sm:w-20 h-fit min-h-[64px] sm:min-h-[80px] flex-shrink-0 bg-gray-50 dark:bg-premium-black rounded-2xl sm:rounded-3xl flex items-center justify-center p-2 sm:p-3 border border-gray-100 dark:border-gold/10 shadow-inner group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton z-10" />
          )}
          {service.icons ? (
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {service.icons.map((ic, i) => (
                <img
                  key={i}
                  src={ic}
                  alt="icon"
                  onLoad={() => i === service.icons!.length - 1 && setImageLoaded(true)}
                  className={`w-5 h-5 sm:w-6 sm:h-6 object-contain filter ${service.invertInDarkMode && i === service.icons!.length - 1 ? 'dark:invert dark:brightness-200 brightness-0' : 'dark:brightness-110'} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          ) : service.icon ? (
            <img
              src={service.icon}
              alt={service.name}
              onLoad={() => setImageLoaded(true)}
              className={`max-w-full max-h-full object-contain filter transition-all ${service.invertInDarkMode ? 'dark:invert dark:brightness-200 brightness-0' : 'dark:brightness-110'} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity`}
              referrerPolicy="no-referrer"
               onError={(e) => {
                setImageLoaded(true);
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('flex-col');
                const fallback = document.createElement('div');
                fallback.className = 'text-gold font-black text-xl';
                fallback.innerText = service.name[0];
                e.currentTarget.parentElement?.appendChild(fallback);
              }}
            />
          ) : (
            <div className="text-gold font-black text-2xl">{service.name[0]}</div>
          )}
        </div>

        {/* Right Column: Info */}
        <div className="flex-1 min-w-0 pr-1 sm:pr-2">
          <h4 className={`font-black tracking-tight mb-2 pr-16 md:pr-24 xl:pr-32 group-hover:text-gold transition-colors leading-tight ${service.name.length > 20 ? 'text-sm md:text-base lg:text-lg' : 'text-base md:text-lg lg:text-xl'}`}>
            {service.name}
          </h4>
          <div className="space-y-3">
            {service.options.map((opt, idx) => (
              <div key={idx} className="flex flex-col">
                {opt.badge && (
                  <div className="mb-1.5">
                    <span className="text-[9px] font-black bg-gold/20 text-gold border border-gold/30 px-2 py-0.5 rounded-md uppercase tracking-widest inline-block">
                      {opt.badge}
                    </span>
                  </div>
                )}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-2">
                  <span className="text-[10px] md:text-xs lg:text-sm text-gray-500 dark:text-silver-dark font-bold uppercase tracking-tight whitespace-nowrap">
                    {service.category === 'streaming' ? '1 PANTALLA • ' : ''}{opt.days} DÍAS
                  </span>
                  <div className="flex flex-col items-end leading-none">
                    {opt.oldPrice && (
                      <span className="text-[10px] md:text-xs text-gray-400 dark:text-silver-dark/50 line-through font-bold mb-1">
                        ${opt.oldPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="font-black text-gold text-xl md:text-2xl xl:text-3xl tracking-tighter">${opt.price.toLocaleString()}</span>
                  </div>
                </div>
                {service.savings && (
                  <div className="text-[10px] text-green-500 font-black uppercase tracking-widest mt-2 bg-green-500/5 px-3 py-1 rounded-lg border border-green-500/10 inline-block w-fit">
                    ¡Ahorras ${service.savings.amount.toLocaleString()}!
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => toggleService(service.id)}
            className="mt-2 text-gold text-[10px] font-black flex items-center gap-1 hover:text-gold-light transition-colors uppercase tracking-[0.2em]"
          >
            {expandedService === service.id ? 'Cerrar' : 'Detalles'}
            {expandedService === service.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {expandedService === service.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-50 dark:bg-premium-black/50 border-t border-gray-100 dark:border-gold/10"
          >
            <div className="p-6 space-y-4">
              <div>
                <h5 className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <Info size={14} /> DESCRIPCIÓN
                </h5>
                <p className="text-sm text-gray-600 dark:text-silver-dark leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <ShieldCheck size={14} /> GARANTÍA ELITE
                </h5>
                <p className="text-sm text-gray-600 dark:text-silver-dark leading-relaxed font-light">
                  {service.warranty}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer: Purchase Buttons */}
      <div className="mt-auto p-6 pt-0 flex flex-col gap-2">
        {service.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onPurchase(service, opt)}
            className="w-full bg-gold-metallic text-premium-black py-3 rounded-xl text-xs font-black shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest border border-gold/20"
          >
            <ShoppingCart size={16} className="fill-premium-black" />
            {service.options.length > 1 ? opt.label : `ADQUIRIR ${service.name}`}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
