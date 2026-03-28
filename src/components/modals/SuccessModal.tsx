import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface SuccessModalProps {
  show: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-premium-gray p-12 rounded-[40px] text-center shadow-2xl max-w-sm border border-gold/30"
          >
            <div className="w-24 h-24 bg-gold-metallic text-premium-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <CheckCircle2 size={56} />
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">¡EXCELENTE!</h3>
            <p className="text-gray-600 dark:text-silver-dark font-light mb-6">
              Estamos preparando tu acceso.
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-gold animate-spin" />
              <span className="text-gold font-bold tracking-widest text-sm uppercase">Redirigiendo a WhatsApp...</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
