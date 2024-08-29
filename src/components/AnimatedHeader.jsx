import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  const text = "Nithin Konda";
  
  return (
    <div className="relative">
      <div className="text-6xl font-bold text-white font-mono mb-4">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            {char}
          </motion.span>
        ))}
        <span className="blink">|</span>
      </div>
    </div>
  );
};

export default AnimatedHeader;
