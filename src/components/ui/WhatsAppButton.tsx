import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = "¡Hola ZonaPremium! 👋 Vengo desde la página web y me gustaría recibir información sobre sus servicios.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
      <MessageCircle size={28} className="relative z-10 fill-white" />
      <span className="absolute right-full mr-4 bg-white dark:bg-premium-gray text-gray-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100 dark:border-gold/20">
        ¿Necesitas ayuda?
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
