import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamData } from '../../data/teamData';
import { ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            The talented people behind our innovative solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="perspective-1000"
            >
              <div
                className={`relative w-full h-96 cursor-pointer transition-transform duration-700 transform-style-3d ${
                  flippedCards.includes(member.id) ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleFlip(member.id)}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-xl backdrop-blur-sm bg-white/90 dark:bg-dark-700/90 shadow-lg border border-gray-200 dark:border-dark-600 overflow-hidden">
                  <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-primary-500/40 to-secondary-500/40 opacity-70"></div>
                  
                  <div className="relative p-6 flex flex-col items-center h-full z-10">
                    <div className="w-32 h-32 relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-md opacity-30"></div>
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-600 shadow-lg relative z-10">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {member.role}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-dark-600 text-primary-800 dark:text-primary-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mt-auto">
                      Click to see more
                    </p>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl backdrop-blur-sm bg-white/90 dark:bg-dark-700/90 shadow-lg border border-gray-200 dark:border-dark-600 overflow-hidden">
                  <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-secondary-500/40 to-primary-500/40 opacity-70"></div>
                  
                  <div className="relative p-6 flex flex-col items-center h-full z-10">
                    <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-8 text-center">
                      "{member.quote}"
                    </blockquote>
                    
                    <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">
                      Recent Projects
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {member.projects.map((project, index) => (
                        <div key={index} className="relative group">
                          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-dark-600 h-24">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                              <span className="text-xs text-white font-medium">{project.title}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mt-auto">
                      Click to go back
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;