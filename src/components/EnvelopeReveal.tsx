import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { finalLetter } from '../data/journalData';

interface EnvelopeRevealProps {
  isVisible: boolean;
  onClose: () => void;
}

const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({ isVisible, onClose }) => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const openEnvelope = () => {
    setEnvelopeOpened(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-60 p-2 rounded-full bg-vintage-brown/20 hover:bg-vintage-brown/40 text-vintage-gold transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative">
            {!envelopeOpened ? (
              /* Envelope */
              <motion.div
                className="cursor-pointer"
                onClick={openEnvelope}
                initial={{ y: -100, opacity: 0, rotate: -5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  delay: 0.5
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-80 h-56 relative">
                  {/* Envelope body */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream to-vintage-paper rounded-lg shadow-2xl border border-vintage-brown/20">
                    {/* Envelope flap */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-vintage-brown/10 to-vintage-brown/20 rounded-t-lg">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[80px] border-l-transparent border-r-transparent border-t-vintage-paper" />
                    </div>
                    
                    {/* Wax seal */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-800 to-red-900 rounded-full shadow-lg">
                      <div className="absolute inset-2 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center">
                        <span className="text-vintage-cream text-xs font-bold">♥</span>
                      </div>
                    </div>
                    
                    {/* Address area */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="handwritten text-vintage-sepia text-center text-lg">
                        For You...
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Click hint */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-vintage-gold/70 text-sm font-elegant text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Click to open
                </motion.div>
              </motion.div>
            ) : (
              /* Letter */
              <motion.div
                className="w-[600px] max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-vintage-paper to-vintage-cream p-12 rounded-lg shadow-2xl paper-texture border border-vintage-brown/20">
                  {/* Letter header */}
                  <div className="text-center mb-8">
                    <h1 className="handwritten text-4xl text-vintage-sepia mb-4">
                      {finalLetter.title}
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent mx-auto" />
                  </div>
                  
                  {/* Letter content */}
                  <div className="font-elegant text-vintage-sepia leading-relaxed text-lg space-y-6">
                    {finalLetter.content.split('\n\n').map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="mt-12 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-vintage-gold/20 to-vintage-brown/20 rounded-full flex items-center justify-center">
                      <span className="handwritten text-2xl text-vintage-gold">♥</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeReveal;