import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '¿Es seguro pagar por Nequi?',
    a: '¡Absolutamente! Nequi es una plataforma regulada por la Superintendencia Financiera de Colombia. Operamos con total transparencia: nuestro número de Nequi está verificado y publicado en esta página. Cientos de clientes han pagado sin problemas y recibido sus cuentas al instante. Si tienes dudas, escríbenos por WhatsApp antes de pagar.',
    emoji: '🔒',
  },
  {
    q: '¿Qué hago si mi cuenta falla o presenta problemas?',
    a: 'Cubrimos el 100% del tiempo contratado. Si en cualquier momento tu cuenta presenta algún inconveniente, escríbenos por WhatsApp y la reemplazamos o solucionamos de inmediato, sin preguntas. Nuestra garantía total es real y aplica durante todo el período que pagaste.',
    emoji: '🛡️',
  },
  {
    q: '¿Puedo renovar mi misma cuenta al vencer el período?',
    a: '¡Sí! La mayoría de nuestros clientes renuevan el mismo perfil cuando vence. Al renovar, simplemente nos avisas y priorizamos que sigas con el mismo acceso. Es fácil, rápido y sin complicaciones.',
    emoji: '🔄',
  },
  {
    q: '¿En cuánto tiempo activan mi cuenta tras el pago?',
    a: 'El tiempo promedio de activación es menos de 5 minutos después de que nos envíes la captura de pantalla del pago por WhatsApp. En horas pico podría ser un poco más, pero garantizamos que recibirás tu acceso el mismo día del pago.',
    emoji: '⚡',
  },
  {
    q: '¿Las cuentas son legales y de calidad 4K?',
    a: 'Ofrecemos acceso a perfiles privados en cuentas Premium con la máxima calidad disponible. Netflix y otros servicios pueden variar según el plan, pero siempre especificamos la calidad exacta. Las cuentas son estables, sin caídas inesperadas y con perfiles que no se comparten con desconocidos.',
    emoji: '💎',
  },
  {
    q: '¿Puedo adquirir más de un servicio a la vez?',
    a: '¡Claro! Puedes comprar servicios individuales o aprovechar nuestros Combos Explosivos que te dan hasta un 43% de descuento vs. pagar por separado. Si tienes una combinación especial en mente, escríbenos y te armamos un paquete a medida.',
    emoji: '🔥',
  },
  {
    q: '¿Tienen algún tipo de registro o verificación?',
    a: 'Operamos con nuestro número de Nequi verificado y publicado públicamente. Tenemos más de 500 clientes activos que respaldan nuestro servicio. Puedes pedirle referencias a cualquiera o revisar los testimonios en esta misma página. Trabajamos con transparencia desde el primer día.',
    emoji: '✅',
  },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-gold/40 bg-gold/5 dark:bg-gold/5 shadow-lg shadow-gold/5'
          : 'border-gray-100 dark:border-gold/10 bg-white dark:bg-premium-gray/30 hover:border-gold/20'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl flex-shrink-0">{faq.emoji}</span>
          <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-gold text-white' : 'bg-gray-100 dark:bg-premiumgray text-gray-500 dark:text-silver-dark'
          }`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <div className="ml-9 text-sm md:text-base text-gray-600 dark:text-silver-dark font-light leading-relaxed border-t border-gray-100 dark:border-gold/10 pt-4">
                {faq.a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="mt-32 mb-16">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-4">
          Preguntas Frecuentes
        </div>
        <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          RESOLVEMOS TODAS
          <br />
          <span className="text-gold-gradient italic">TUS DUDAS</span>
        </h3>
        <p className="text-gray-500 dark:text-silver-dark max-w-xl mx-auto font-light text-lg">
          Transparencia total. Si no encuentras tu respuesta aquí, escríbenos por WhatsApp.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>

      {/* CTA Below */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="inline-flex items-center gap-3 bg-white dark:bg-premium-gray border border-gray-100 dark:border-gold/20 rounded-2xl px-6 py-4 shadow-lg">
          <HelpCircle size={20} className="text-gold flex-shrink-0" />
          <p className="text-sm text-gray-600 dark:text-silver-dark">
            ¿Otra pregunta?{' '}
            <a
              href={`https://wa.me/573142134128?text=${encodeURIComponent('¡Hola! Tengo una pregunta sobre ZonaPremium.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold hover:underline"
            >
              Escríbenos ahora →
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
