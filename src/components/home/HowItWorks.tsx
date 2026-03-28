import React from 'react';
import { Search, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="text-gold" size={32} />,
      title: "1. ELIGE TU PLAN",
      description: "Explora nuestra selección de servicios y combos exclusivos."
    },
    {
      icon: <CreditCard className="text-gold" size={32} />,
      title: "2. REALIZA EL PAGO",
      description: "Paga de forma segura a través de Nequi."
    },
    {
      icon: <CheckCircle className="text-gold" size={32} />,
      title: "3. ¡Y LISTO!",
      description: "Envía el comprobante por WhatsApp y activamos tu servicio al instante."
    }
  ];

  return (
    <section className="mt-16 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white dark:bg-premium-gray/30 p-8 rounded-[32px] border border-gray-100 dark:border-gold/10 text-center hover:border-gold/30 transition-all">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {step.icon}
            </div>
            <h4 className="text-xl font-black mb-3 text-gray-900 dark:text-white">{step.title}</h4>
            <p className="text-gray-500 dark:text-silver-dark font-light text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
