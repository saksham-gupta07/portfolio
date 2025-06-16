import { motion } from 'framer-motion';
import { ArrowDownCircle, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-800 dark:text-white">Hi, I'm </span>
              <span className="text-primary-500">{resumeData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-2 mb-6">
              <span className="text-accent-500 font-medium">{resumeData.title}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-lg">
              {resumeData.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary-500 shadow-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center">
              <img
                src="images/saksham_image.jpg"
                alt="Saksham Gupta"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="text-6xl">👨‍💻</div>';
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a href="#projects" aria-label="Scroll to projects section">
            <ArrowDownCircle className="w-10 h-10 text-primary-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
