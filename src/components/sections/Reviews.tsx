import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { reviewsData } from '../../data/reviewsData';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay && inView) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, totalPages, inView]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false); // Pause autoplay when manually changing
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getCurrentReviews = () => {
    const startIndex = activeIndex * reviewsPerPage;
    return reviewsData.slice(startIndex, startIndex + reviewsPerPage);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from the businesses and individuals we've worked with
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {getCurrentReviews().map((review) => (
                <div
                  key={review.id}
                  className="backdrop-blur-sm bg-white/50 dark:bg-dark-800/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-600 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-500 dark:border-secondary-500">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </h3>
                      <div className="flex mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{review.text}"
                  </p>
                  
                  {/* Animated gradient background */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-xl">
                    <div className="w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 animate-gradient-x"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 w-8'
                    : 'bg-gray-300 dark:bg-dark-600'
                }`}
                aria-label={`Go to review page ${index + 1}`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-300/10 dark:bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary-300/10 dark:bg-secondary-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Reviews;