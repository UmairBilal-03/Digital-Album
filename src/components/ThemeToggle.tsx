import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 600);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          rotateY: isRotating ? 180 : 0,
        }}
        transition={{ duration: 0.6 }}
        className="w-8 h-8 relative"
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Moon className="w-6 h-6 text-secondary-400" />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Sun className="w-6 h-6 text-primary-500" />
        </div>
      </motion.div>
      
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-lg blur-sm transition-opacity duration-300 ${
          theme === 'dark'
            ? 'bg-secondary-500/30 opacity-70'
            : 'bg-primary-500/30 opacity-70'
        }`}
      ></div>
    </motion.button>
  );
};

export default ThemeToggle;