import React from 'react';
import { motion } from 'motion/react';

const Confetti: React.FC = () => {
  const pieces = Array.from({ length: 50 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: "-10%", 
            left: `${Math.random() * 100}%`,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            top: "110%",
            left: `${(Math.random() * 100)}%`,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{ 
            duration: Math.random() * 2 + 1,
            repeat: 0,
            ease: "linear"
          }}
          className="absolute w-2 h-4 rounded-sm"
          style={{
            backgroundColor: ['#D4AF37', '#F9E79F', '#B7950B', '#FFFFFF'][Math.floor(Math.random() * 4)]
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
