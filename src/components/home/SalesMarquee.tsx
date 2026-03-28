import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const recentSales = [
  "Netflix x30 días en Bogotá hace 5 min",
  "Combo X6 en Medellín hace 12 min",
  "Disney+ x30 días en Cali hace 18 min",
  "ChatGPT Plus en Barranquilla hace 25 min",
  "Prime Video en Bucaramanga hace 32 min",
  "Canva Pro en Pereira hace 45 min"
];

const SalesMarquee: React.FC = () => {
  return (
    <div className="w-full bg-gold/5 border-y border-gold/10 py-3 overflow-hidden whitespace-nowrap hidden sm:block">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12"
      >
        {[...recentSales, ...recentSales].map((sale, index) => (
          <div key={index} className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-widest">
            <ShoppingBag size={12} />
            <span>{sale}</span>
            <span className="mx-4 text-gold/30">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SalesMarquee;
