import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Zap, Palette } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: <Code className="w-10 h-10 text-primary-500" />,
      title: 'Custom Software',
      description: 'We create bespoke software solutions tailored to your specific business needs.',
    },
    {
      icon: <Cpu className="w-10 h-10 text-secondary-500" />,
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence to gain insights and automate processes.',
    },
    {
      icon: <Zap className="w-10 h-10 text-primary-500" />,
      title: 'Optimization',
      description: 'Improve performance and reduce costs with our optimization services.',
    },
    {
      icon: <Palette className="w-10 h-10 text-secondary-500" />,
      title: 'UI/UX Design',
      description: 'Create intuitive, engaging user experiences that keep customers coming back.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Glassmorphism container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              About Our Team
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              We're a passionate team of developers and designers creating exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-lg bg-white/70 dark:bg-dark-700/70 rounded-xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-dark-600"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At Devnity.Dev, we believe that technology should empower businesses and people, not complicate their lives. Our team brings together diverse talents and perspectives, united by a shared passion for creating beautiful, functional digital solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We combine technical excellence with creative design thinking to build software that not only works flawlessly but also delivers an exceptional user experience. Whether you're looking to create a new application, redesign an existing one, or integrate advanced technologies into your business processes, we're here to turn your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-sm bg-white/50 dark:bg-dark-700/50 rounded-xl p-6 border border-gray-200 dark:border-dark-600 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gray-100 dark:bg-dark-600 group-hover:bg-gradient-to-r group-hover:from-primary-100 group-hover:to-secondary-100 dark:group-hover:from-dark-500 dark:group-hover:to-dark-700 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300/10 dark:bg-primary-600/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-300/10 dark:bg-secondary-600/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default About;