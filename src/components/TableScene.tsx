import React from 'react';
import { motion } from 'framer-motion';
import wmImage from '../assets/strt.jpg';
import openImg from "../assets/open.png"; 


interface TableSceneProps {
  onJournalClick: () => void;
  journalOpened: boolean;
}

const TableScene: React.FC<TableSceneProps> = ({ onJournalClick, journalOpened }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Table Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
         backgroundImage: `url(${openImg})`,
        }}
      >
        {/* Ambient lighting overlay */}
        <div className="absolute inset-0 ambient-light" />
      </div>

      {/* Floating feather animation */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 opacity-70"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-600 rounded-full opacity-20 blur-sm" />
      </motion.div>

      {/* Journal - Interactive */}
      {!journalOpened && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            rotateX: 5
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onJournalClick}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative perspective-1000">
            <div className="w-80 h-60 journal-shadow rounded-lg bg-gradient-to-br from-amber-800 to-amber-900 transform preserve-3d">
              {/* Journal Cover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 p-8 flex flex-col items-center justify-center">
                {/* Cover Photo */}
                <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden vintage-photo">
                  <img 
                 src={wmImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Title */}
                <h1 className="handwritten text-4xl text-vintage-gold text-center">
                  The Last<br />Journal
                </h1>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-vintage-gold/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Click hint */}
          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-vintage-gold/70 text-sm font-elegant text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to open
          </motion.div>
        </motion.div>
      )}


      {/* Poetry book - decorative */}
      <div className="absolute bottom-32 left-16 w-20 h-28 bg-gradient-to-br from-amber-900 to-amber-950 rounded transform -rotate-12 shadow-lg">
        <div className="p-2 h-full flex items-center justify-center">
          <span className="text-vintage-gold text-xs font-elegant transform -rotate-90">POETRY</span>
        </div>
      </div>

      {/* Ink pot - decorative */}
      <div className="absolute top-40 left-40 w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black border-2 border-gray-600" />
      </div>
    </div>
  );
};

export default TableScene;