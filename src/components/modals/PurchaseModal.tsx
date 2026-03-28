import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import { Service, ServiceOption } from '../../types';

interface PurchaseModalProps {
  selectedService: { service: Service, option: ServiceOption } | null;
  formData: { name: string, phone: string };
  setFormData: (data: { name: string, phone: string }) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({
  selectedService,
  formData,
  setFormData,
  onClose,
  onSubmit
}) => {
  return (
    <AnimatePresence>
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white dark:bg-premium-gray rounded-[40px] w-full max-w-md overflow-hidden shadow-2xl border border-gold/20"
          >
            <div className="p-8 border-b border-gray-100 dark:border-gold/10 flex justify-between items-center bg-gray-50 dark:bg-premium-black/50">
              <div>
                <h3 className="text-2xl font-black tracking-tight">SOLICITAR ACCESO</h3>
                <p className="text-xs text-gold font-bold uppercase tracking-widest">Paso Final</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gold/10 text-gray-400 hover:text-gray-600 dark:hover:text-gold transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="p-8 space-y-8">
              <div className="bg-gold-metallic p-[1px] rounded-3xl">
                <div className="bg-white dark:bg-premium-black p-6 rounded-[23px]">
                  <p className="text-xs text-gray-500 dark:text-silver-dark font-bold uppercase tracking-widest mb-2">Suscripción</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white">{selectedService.option.label}</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-black text-gold">${selectedService.option.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 mb-1">/ {selectedService.option.days} días</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-premium-black border border-gray-200 dark:border-gold/20 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-silver-dark/30"
                  />
                </div>
                <div className="relative">
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Tu número de WhatsApp"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-premium-black border border-gray-200 dark:border-gold/20 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-silver-dark/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-metallic text-premium-black font-black py-5 rounded-2xl shadow-2xl shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                <MessageCircle size={22} className="fill-premium-black" />
                ORDENAR POR WHATSAPP
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseModal;
