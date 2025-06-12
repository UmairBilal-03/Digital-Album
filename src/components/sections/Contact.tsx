import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary-500" />,
      title: 'Email Us',
      details: 'hello@devnity.dev',
      link: 'mailto:hello@devnity.dev',
    },
    {
      icon: <MapPin className="w-5 h-5 text-secondary-500" />,
      title: 'Location',
      details: 'San Francisco, CA',
      link: '#',
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-500" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block backdrop-blur-sm bg-white/50 dark:bg-dark-700/50 rounded-xl p-6 border border-gray-200 dark:border-dark-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gray-100 dark:bg-dark-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="backdrop-blur-lg bg-white/70 dark:bg-dark-700/70 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-dark-600">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-dark-600/50 text-gray-900 dark:text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-dark-600/50 text-gray-900 dark:text-white"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-dark-600/50 text-gray-900 dark:text-white"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group flex items-center justify-center"
                        >
                          <span className="relative z-10 flex items-center">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Send className={`ml-2 w-4 h-4 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform duration-300'}`} />
                          </span>
                          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-300/10 dark:bg-primary-600/10 rounded-full blur-3xl -z-10 transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-300/10 dark:bg-secondary-600/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
    </section>
  );
};

export default Contact;