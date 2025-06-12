import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { journalPages } from '../data/journalData';

interface JournalBookProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const JournalBook: React.FC<JournalBookProps> = ({ isOpen, onClose, onComplete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (isFlipping) return;
    
    if (currentPage < journalPages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    } else {
      // Finished reading all pages
      onComplete();
    }
  };

  const prevPage = () => {
    if (isFlipping || currentPage === 0) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setIsFlipping(false);
    }, 400);
  };

  const currentPageData = journalPages[currentPage];

  if (!isOpen) return null;

  return (
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

      {/* Journal Book */}
      <div className="relative perspective-1000">
        <motion.div
          className="w-[800px] h-[600px] bg-gradient-to-br from-vintage-paper to-vintage-cream rounded-lg shadow-2xl preserve-3d"
          initial={{ rotateY: -90, scale: 0.8 }}
          animate={{ rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Book spine shadow */}
          <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-vintage-brown/40 to-transparent rounded-l-lg" />
          
          <div className="flex h-full">
            {/* Left Page */}
            <div className="w-1/2 h-full p-8 flex flex-col items-center justify-center border-r border-vintage-brown/20">
              <motion.div
                key={`left-${currentPage}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Photo */}
                <div className="w-64 h-48 mb-6 vintage-photo mx-auto">
                  <img
                    src={currentPageData.leftPage.image}
                    alt={currentPageData.leftPage.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Title */}
                <h2 className="handwritten text-3xl text-vintage-sepia mb-2">
                  {currentPageData.leftPage.title}
                </h2>
                
                {/* Decorative line */}
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent mx-auto" />
              </motion.div>
            </div>

            {/* Right Page */}
            <div className="w-1/2 h-full p-8 paper-texture">
              <motion.div
                key={`right-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full flex flex-col"
              >
                {/* Date */}
                {currentPageData.rightPage.date && (
                  <div className="handwritten text-lg text-vintage-gold mb-4 text-right">
                    {currentPageData.rightPage.date}
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1 flex items-center">
                  <p className="font-elegant text-vintage-sepia leading-relaxed text-lg">
                    {currentPageData.rightPage.content}
                  </p>
                </div>
                
                {/* Page number */}
                <div className="text-center text-vintage-brown/50 text-sm mt-4">
                  {currentPage + 1} of {journalPages.length}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-vintage-brown/20 hover:bg-vintage-brown/40 text-vintage-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {journalPages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? 'bg-vintage-gold' : 'bg-vintage-brown/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-vintage-brown/20 hover:bg-vintage-brown/40 text-vintage-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Page flip effect overlay */}
          <AnimatePresence>
            {isFlipping && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JournalBook;