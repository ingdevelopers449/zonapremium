import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Shield } from 'lucide-react';

interface NequiModalProps {
  show: boolean;
  onClose: () => void;
  nequiNumber: string;
}

const NequiModal: React.FC<NequiModalProps> = ({ show, onClose, nequiNumber }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(nequiNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-premium-gray rounded-[32px] md:rounded-[40px] w-full max-w-md overflow-hidden shadow-2xl border border-pink-500/20 relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gold/10 text-gray-400 hover:text-gray-600 dark:hover:text-gold transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10 pt-12 space-y-8 text-center">
              <div className="flex justify-center flex-col items-center gap-4">
                <div className="w-24 h-24 bg-pink-500/10 rounded-full flex items-center justify-center border border-pink-500/20">
                  <img src="https://cdn.worldvectorlogo.com/logos/nequi.svg" alt="Nequi" className="w-12 h-auto" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight uppercase">MÉTODO OFICIAL</h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Cuenta Verificada</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-premium-black/50 p-6 md:p-8 rounded-[32px] border-2 border-pink-500/30 relative group">
                <span className="block text-[10px] text-pink-500 font-bold uppercase tracking-[0.2em] mb-2 text-center">NÚMERO DE CUENTA</span>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 dark:text-white">{nequiNumber}</p>
                  
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                      copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-premium-black dark:bg-pink-500 text-white hover:scale-105'
                    }`}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? '¡COPIADO!' : 'COPIAR NÚMERO'}
                  </button>
                </div>
                <p className="text-xs text-gray-400 dark:text-silver-dark font-light mt-4">
                  Socio Autorizado ZonaPremium
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gold/10">
                <p className="text-sm text-gray-600 dark:text-silver-dark font-light">
                  Por favor, una vez terminado el pago, envía tu <span className="font-bold text-premium-black dark:text-white">captura</span> para activar tu servicio.
                </p>
                <button 
                  onClick={onClose}
                  className="w-full bg-premium-black dark:bg-white text-white dark:text-premium-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  CONTINUAR NAVEGANDO
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NequiModal;
