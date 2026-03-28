/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ChevronDown, 
  ChevronUp, 
  ShoppingCart, 
  Info, 
  ShieldCheck, 
  Clock, 
  Smartphone,
  CheckCircle2,
  X,
  MessageCircle,
  Star,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, NEQUI_NUMBER, WHATSAPP_NUMBER } from './constants';
import { Service, ServiceOption } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark for premium feel
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<{service: Service, option: ServiceOption} | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const handlePurchase = (service: Service, option: ServiceOption) => {
    setSelectedService({ service, option });
  };

  const closePurchaseModal = () => {
    setSelectedService(null);
    setFormData({ name: '', phone: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const message = `¡Hola ZonaPremium! 👋\n\nMi nombre es *${formData.name}*.\nQuiero adquirir: *${selectedService.option.label}*\nPrecio: *$${selectedService.option.price.toLocaleString()}*\nTeléfono: ${formData.phone}\n\nQuedo atento a las instrucciones de pago por Nequi.`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    setShowSuccessModal(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      closePurchaseModal();
      setShowSuccessModal(false);
    }, 3000);
  };

  const streamingServices = SERVICES.filter(s => s.category === 'streaming');
  const toolServices = SERVICES.filter(s => s.category === 'tools');

  return (
    <div className="min-h-screen bg-white dark:bg-premium-black text-gray-800 dark:text-gray-100 font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-silver/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-premium-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo Placeholder - User should replace with their logo image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-14 h-14 bg-premium-black rounded-xl border border-gold/50 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/logo.png" 
                  alt="ZonaPremium" 
                  className="h-full w-auto" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Shield className="text-gold hidden" size={32} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                Zona<span className="text-gold-gradient">Premium</span>
              </h1>
              <div className="flex gap-1">
                {[1,2,3].map(i => <Star key={i} size={10} className="fill-gold text-gold" />)}
              </div>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-2xl bg-gray-100 dark:bg-premium-gray text-gray-600 dark:text-gold border border-transparent dark:border-gold/20 hover:border-gold transition-all shadow-inner"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              Servicios Digitales de Élite
            </div>
            <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tight leading-none">
              TU MEJOR OPCIÓN EN <br />
              <span className="text-gold-gradient italic">SERVICIOS PREMIUM</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-silver-dark max-w-2xl mx-auto leading-relaxed font-light">
              Accede a plataformas de entretenimiento y herramientas de élite de forma fácil, rápida y segura. <span className="text-gold font-medium">Activación personalizada inmediata.</span>
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <div className="space-y-24">
          <ServiceSection 
            title="Streaming de Lujo" 
            services={streamingServices} 
            expandedService={expandedService}
            toggleService={toggleService}
            onPurchase={handlePurchase}
          />

          <ServiceSection 
            title="Herramientas de Poder" 
            services={toolServices} 
            expandedService={expandedService}
            toggleService={toggleService}
            onPurchase={handlePurchase}
          />
        </div>

        {/* Nequi Info Card - Styled like a premium membership card */}
        <section className="mt-32 relative group">
          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative bg-white dark:bg-premium-gray rounded-[40px] p-10 border border-gray-200 dark:border-gold/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black mb-4 flex items-center justify-center md:justify-start gap-3">
                  <Smartphone className="text-gold" size={32} /> 
                  MÉTODO DE PAGO <span className="text-gold">NEQUI</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-silver-dark mb-8 font-light">
                  Realiza tu pago de forma segura. Una vez realizado, envíanos la captura de pantalla para activar tu servicio al instante.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-center gap-6">
                  <div className="bg-gray-50 dark:bg-premium-black px-8 py-5 rounded-3xl border-2 border-gold/50 shadow-inner">
                    <span className="block text-xs text-gold font-bold uppercase tracking-widest mb-1">Número de Cuenta</span>
                    <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">{NEQUI_NUMBER}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gold font-bold">
                    <CheckCircle2 size={24} />
                    <span>Verificado</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-72 aspect-square bg-gold-metallic rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-premium-black rounded-[22px] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-gold" size={32} />
                  </div>
                  <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">ZonaPremium</p>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em]">Socio de Confianza</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-premium-black border-t border-gray-200 dark:border-gold/10 py-16 mt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-premium-black font-bold text-sm">ZP</span>
            </div>
            <span className="font-black tracking-tighter uppercase">ZonaPremium</span>
          </div>
          <p className="text-gray-500 dark:text-silver-dark text-sm max-w-md mx-auto">
            Activación inmediata y soporte garantizado. Tu satisfacción es nuestra prioridad número uno.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gold/5 text-xs text-gray-400 dark:text-silver-dark/50">
            © {new Date().getFullYear()} ZonaPremium. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
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
                <button onClick={closePurchaseModal} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gold/10 text-gray-400 hover:text-gray-600 dark:hover:text-gold transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-8">
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
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre completo"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-premium-black border border-gray-200 dark:border-gold/20 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-silver-dark/30"
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
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

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-premium-gray p-12 rounded-[40px] text-center shadow-2xl max-w-sm border border-gold/30"
            >
              <div className="w-24 h-24 bg-gold-metallic text-premium-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <CheckCircle2 size={56} />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">¡EXCELENTE!</h3>
              <p className="text-gray-600 dark:text-silver-dark font-light">
                Estamos preparando tu acceso. <br />
                <span className="text-gold font-bold">Redirigiendo a WhatsApp...</span>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceSection({ title, services, expandedService, toggleService, onPurchase }: { 
  title: string, 
  services: Service[], 
  expandedService: string | null,
  toggleService: (id: string) => void,
  onPurchase: (s: Service, o: ServiceOption) => void
}) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <h3 className="text-3xl font-black tracking-tighter uppercase text-center">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-premium-gray rounded-[32px] border border-gray-200 dark:border-gold/10 overflow-hidden shadow-xl hover:shadow-gold/10 transition-all flex flex-col relative"
          >
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gold/10 backdrop-blur-md border border-gold/20 px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={10} className="fill-gold text-gold" />
                <span className="text-[10px] font-black text-gold uppercase tracking-widest">Premium</span>
              </div>
            </div>

            {/* Header Row */}
            <div className="p-6 flex items-start gap-5">
              {/* Left Column: Logo */}
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 dark:bg-premium-black rounded-2xl flex items-center justify-center p-2 border border-gray-100 dark:border-gold/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {service.icon ? (
                  <img 
                    src={service.icon} 
                    alt={service.name} 
                    className="max-w-full max-h-full object-contain filter dark:brightness-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
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
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-xl truncate tracking-tight mb-1">{service.name}</h4>
                <div className="space-y-1">
                  {service.options.map((opt, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-silver-dark font-medium uppercase tracking-tighter">{opt.days} DÍAS</span>
                      <span className="font-black text-gold text-lg tracking-tighter">${opt.price.toLocaleString()}</span>
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
        ))}
      </div>
    </section>
  );
}
