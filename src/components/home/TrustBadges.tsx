import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Gem, Headphones, Lock, Star, Award, Clock } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Garantía Total',
    desc: 'Respaldo completo por el tiempo contratado. Sin excusas.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    borderColor: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Activación Flash',
    desc: 'Tu acceso listo en menos de 5 minutos vía WhatsApp.',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  {
    icon: Gem,
    title: 'Cuentas Originales',
    desc: 'Sin caídas. Perfiles privados, estables y de calidad 4K.',
    color: 'from-violet-500/20 to-violet-500/5',
    borderColor: 'border-violet-500/30',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: Headphones,
    title: 'Soporte VIP 24/7',
    desc: 'Atención personalizada. Resolvemos cualquier problema al instante.',
    color: 'from-sky-500/20 to-sky-500/5',
    borderColor: 'border-sky-500/30',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
  },
  {
    icon: Lock,
    title: 'Pago 100% Seguro',
    desc: 'Nequi verificado. Tu dinero está protegido en todo momento.',
    color: 'from-pink-500/20 to-pink-500/5',
    borderColor: 'border-pink-500/30',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
  },
  {
    icon: Star,
    title: '+500 Clientes Felices',
    desc: 'Cientos de usuarios satisfechos avalan nuestro servicio diariamente.',
    color: 'from-amber-500/20 to-amber-500/5',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: Award,
    title: 'Vendedor Verificado',
    desc: 'Operamos con transparencia y profesionalismo en cada venta.',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  {
    icon: Clock,
    title: 'Sin Sorpresas',
    desc: 'Lo que pagas es lo que recibes. Precios claros, renovación fácil.',
    color: 'from-teal-500/20 to-teal-500/5',
    borderColor: 'border-teal-500/30',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
  },
];

const TrustBadges: React.FC = () => {
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
          Por qué elegirnos
        </div>
        <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          LAS <span className="text-gold-gradient italic">GARANTÍAS</span> QUE
          <br />NOS DISTINGUEN
        </h3>
        <p className="text-gray-500 dark:text-silver-dark max-w-xl mx-auto font-light text-lg">
          Cada pilar de confianza es un compromiso real con tu experiencia.
        </p>
      </motion.div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${badge.color} border ${badge.borderColor} rounded-3xl p-5 flex flex-col items-start gap-3 cursor-default group overflow-hidden transition-all duration-300`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 rounded-3xl" />

              <div className={`${badge.iconBg} w-11 h-11 rounded-2xl flex items-center justify-center`}>
                <Icon className={badge.iconColor} size={22} />
              </div>
              <div>
                <p className="font-black text-gray-900 dark:text-white text-sm leading-tight mb-1">
                  {badge.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-silver-dark font-light leading-snug">
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
