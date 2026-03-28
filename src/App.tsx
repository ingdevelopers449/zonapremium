import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import TrustBadges from './components/home/TrustBadges';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import ServiceGrid from './components/services/ServiceGrid';
import Footer from './components/layout/Footer';
import PurchaseModal from './components/modals/PurchaseModal';
import NequiModal from './components/modals/NequiModal';
import SuccessModal from './components/modals/SuccessModal';
import ProgressBar from './components/layout/ProgressBar';
import CustomCursor from './components/ui/CustomCursor';
import SalesMarquee from './components/home/SalesMarquee';
import Confetti from './components/ui/Confetti';
import { SERVICES, COMBOS, NEQUI_NUMBER, WHATSAPP_NUMBER } from './constants';
import { Service, ServiceOption } from './types';
import { Shield, CheckCircle2, BadgeCheck } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<{ service: Service, option: ServiceOption } | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showNequiModal, setShowNequiModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

    const message = `¡Hola ZonaPremium! 👋\n\nMi nombre es *${formData.name}* .\nQuiero adquirir: *${selectedService.option.label}*\nPrecio: *$${selectedService.option.price.toLocaleString()}*\nTeléfono: ${formData.phone}\n\nQuedo atento a las instrucciones de pago por Nequi.`;

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
      <ProgressBar />
      <CustomCursor />
      
      {showSuccessModal && <Confetti />}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-silver/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero setShowNequiModal={setShowNequiModal} />
        
        <SalesMarquee />

        {/* Trust Badges - primera capa de confianza */}
        <TrustBadges />
        
        <HowItWorks />

        <div className="space-y-24">
          <ServiceGrid
            title="Combos Explosivos 🔥"
            services={COMBOS}
            expandedService={expandedService}
            toggleService={toggleService}
            onPurchase={handlePurchase}
            isLoading={isLoading}
          />

          <ServiceGrid
            title="Streaming de Lujo"
            services={streamingServices}
            expandedService={expandedService}
            toggleService={toggleService}
            onPurchase={handlePurchase}
            isLoading={isLoading}
          />

          <ServiceGrid
            title="Herramientas de Poder"
            services={toolServices}
            expandedService={expandedService}
            toggleService={toggleService}
            onPurchase={handlePurchase}
            isLoading={isLoading}
          />
        </div>

        {/* Testimonials - validación social */}
        <Testimonials />

        {/* FAQ - transparencia */}
        <FAQ />

        {/* Nequi Info Card Section */}
        <section className="mt-32 relative group">
          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative bg-white dark:bg-premium-gray rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-gray-200 dark:border-gold/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black mb-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                  <img src="https://cdn.worldvectorlogo.com/logos/nequi.svg" alt="Nequi" className="h-8 w-auto filter drop-shadow-md" />
                  MÉTODO DE PAGO
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

              <div className="w-full md:w-72 aspect-square bg-gold-metallic rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 hidden md:block">
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

      <Footer />

      {/* Floating Verified Badge */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.6, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex"
      >
        <AnimatePresence>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 bg-white dark:bg-premium-gray border border-gold/30 rounded-2xl px-4 py-2.5 shadow-2xl shadow-black/20 cursor-default"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="w-7 h-7 bg-emerald-500/10 rounded-full flex items-center justify-center"
            >
              <BadgeCheck size={16} className="text-emerald-400" />
            </motion.div>
            <div className="leading-none">
              <p className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Vendedor Verificado</p>
              <p className="text-[9px] text-gray-400 dark:text-silver-dark mt-0.5">ZonaPremium · Socio de Confianza</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <PurchaseModal
        selectedService={selectedService}
        formData={formData}
        setFormData={setFormData}
        onClose={closePurchaseModal}
        onSubmit={handleSubmit}
      />

      <NequiModal
        show={showNequiModal}
        onClose={() => setShowNequiModal(false)}
        nequiNumber={NEQUI_NUMBER}
      />

      <SuccessModal show={showSuccessModal} />
    </div>
  );
}
